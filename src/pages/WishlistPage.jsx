// pages/WishlistPage.jsx - Minimal ve lüks tasarım
import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const API_BASE_URL = 'https://localhost:7241/api';

const WishlistPage = () => {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  // Axios client oluştur
  const createApiClient = () => {
    const client = axios.create({
      baseURL: API_BASE_URL,
      headers: { 'Content-Type': 'application/json' },
      timeout: 10000,
    });

    client.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

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

  // products.json dosyasından tüm ürünleri getir
  const fetchAllProducts = async () => {
    try {
      const response = await fetch('/data/products.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data && typeof data === 'object' && !Array.isArray(data)) {
        if (data.products && Array.isArray(data.products)) {
          return data.products;
        } else if (data.data && Array.isArray(data.data)) {
          return data.data;
        } else {
          for (const key in data) {
            if (Array.isArray(data[key])) {
              return data[key];
            }
          }
        }
      }
      
      if (Array.isArray(data)) {
        return data;
      }
      
      return [];
      
    } catch (error) {
      console.error('Error fetching products.json:', error);
      return [];
    }
  };

  // Wishlist verilerini getir
  const fetchWishlist = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const token = localStorage.getItem('token');
      if (!token) {
        history.push('/login');
        return;
      }

      const apiClient = createApiClient();
      const wishlistResponse = await apiClient.get('/wishlist/product-ids');
      const wishlistProductIds = wishlistResponse.data.productIds || [];

      if (wishlistProductIds.length === 0) {
        setWishlistProducts([]);
        return;
      }

      const allProducts = await fetchAllProducts();

      if (!Array.isArray(allProducts)) {
        setError('Ürün verileri yüklenemedi');
        return;
      }

      const wishlistProductsData = allProducts.filter(product => 
        wishlistProductIds.includes(product.id)
      );

      const productsWithWishlistStatus = wishlistProductsData.map(product => ({
        ...product,
        isWishlisted: true
      }));

      setWishlistProducts(productsWithWishlistStatus);

    } catch (error) {
      console.error('Wishlist fetch error:', error);
      if (error.response?.status !== 401) {
        setError('Favori ürünler yüklenirken hata oluştu');
      }
    } finally {
      setLoading(false);
    }
  }, [history]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchWishlist();
    } else {
      history.push('/login');
    }
  }, [fetchWishlist, history]);

  // Wishlist değişikliği
  const handleWishlistChange = (productId, isWishlisted) => {
    if (!isWishlisted) {
      setWishlistProducts(prev => prev.filter(product => product.id !== productId));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-sm text-gray-500">Yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
          <div className="text-center max-w-md px-6">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-exclamation-triangle text-red-400"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Bir sorun oluştu</h3>
            <p className="text-sm text-gray-500 mb-6">{error}</p>
            <button 
              onClick={fetchWishlist}
              className="px-5 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Tekrar Dene
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Minimal Page Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-light text-gray-900 mb-1">Favorilerim</h1>
              <p className="text-sm text-gray-500">
                {wishlistProducts.length === 0 
                  ? 'Henüz favori ürününüz bulunmuyor' 
                  : `${wishlistProducts.length} ürün`
                }
              </p>
            </div>
            
            {wishlistProducts.length > 0 && (
              <button
                onClick={() => {
                  if (window.confirm('Tüm favori ürünleri silmek istediğinizden emin misiniz?')) {
                    const apiClient = createApiClient();
                    apiClient.delete('/wishlist/clear').then(() => {
                      setWishlistProducts([]);
                    }).catch(console.error);
                  }
                }}
                className="text-sm text-gray-500 hover:text-red-600 transition-colors"
              >
                Tümünü Temizle
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {wishlistProducts.length === 0 ? (
          // Boş durum - Minimal
          <div className="text-center py-20">
            <div className="max-w-sm mx-auto">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-regular fa-heart text-gray-300 text-xl"></i>
              </div>
              
              <h2 className="text-xl font-light text-gray-900 mb-3">
                Favori ürününüz bulunmuyor
              </h2>
              
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                Beğendiğiniz ürünleri favorilerinize ekleyerek 
                daha sonra kolayca ulaşabilirsiniz.
              </p>
              
              <button
                onClick={() => history.push('/products')}
                className="inline-flex items-center px-6 py-3 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Ürünleri Keşfet
              </button>
            </div>
          </div>
        ) : (
          // Ürün listesi - Sadece grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onWishlistChange={handleWishlistChange}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;