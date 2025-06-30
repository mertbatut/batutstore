// hooks/useWishlist.js - AuthService ile entegre, basitleştirilmiş
import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Backend API URL - authService ile aynı
const API_BASE_URL = 'https://localhost:7241/api';

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // Axios instance oluştur (authService pattern'ini takip et)
  const createApiClient = () => {
    const client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });

    // Request interceptor - token ekle
    client.interceptors.request.use((config) => {
      const token = localStorage.getItem('token'); // authService ile aynı key
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Response interceptor - 401 durumunda yönlendir
    client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          history.push('/login');
        }
        return Promise.reject(error);
      }
    );

    return client;
  };

  // Kullanıcının wishlist product ID'lerini getir
  const fetchUserWishlist = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('No token found');
        return;
      }

      setLoading(true);
      const apiClient = createApiClient();
      const response = await apiClient.get('/wishlist/product-ids');

      if (response.data && response.data.productIds) {
        setWishlistItems(new Set(response.data.productIds));
      }
    } catch (error) {
      console.error('Wishlist fetch error:', error);
      if (error.response?.status === 401) {
        // Interceptor zaten handle ediyor, ek bir şey yapmaya gerek yok
      }
    } finally {
      setLoading(false);
    }
  }, [history]);

  // Sayfa yüklendiğinde wishlist'i getir
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserWishlist();
    }
  }, [fetchUserWishlist]);

  // Wishlist toggle işlemi
  const toggleWishlist = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        history.push('/login');
        return false;
      }

      const apiClient = createApiClient();
      const response = await apiClient.post(`/wishlist/toggle/${productId}`);

      if (response.data) {
        const { isWishlisted } = response.data;
        
        // Local state'i güncelle
        setWishlistItems(prev => {
          const newSet = new Set(prev);
          if (isWishlisted) {
            newSet.add(productId);
          } else {
            newSet.delete(productId);
          }
          return newSet;
        });

        return isWishlisted;
      }
    } catch (error) {
      console.error('Wishlist toggle error:', error);
      // Interceptor 401'i handle ediyor
    }
    
    return false;
  };

  // Ürünün wishlist'te olup olmadığını kontrol et
  const isInWishlist = (productId) => {
    return wishlistItems.has(productId);
  };

  return {
    wishlistItems,
    loading,
    toggleWishlist,
    isInWishlist,
    refreshWishlist: fetchUserWishlist
  };
};