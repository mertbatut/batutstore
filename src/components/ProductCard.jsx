// ProductCard.js - Wishlist entegrasyonu ile güncellenmiş versiyonu
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// Tek bir product kartı
const ProductCard = ({ product, onWishlistChange }) => {
  const [selectedColor, setSelectedColor] = useState(product.colorOptions?.[0]?.name || null);
  const [selectedSize, setSelectedSize] = useState(product.sizeOptions?.[0]?.name || null);
  const [isWishlisted, setIsWishlisted] = useState(product.isWishlisted || false);
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlistLoading, setIsWishlistLoading] = useState(false);
  const history = useHistory();

  // Product prop'u değiştiğinde wishlist durumunu güncelle
  useEffect(() => {
    setIsWishlisted(product.isWishlisted || false);
  }, [product.isWishlisted]);

  // Get the image for the selected color
  const currentImage = selectedColor 
    ? product.images?.[selectedColor] || Object.values(product.images || {})[0]
    : Object.values(product.images || {})[0] || '';

  // Get current color stock
  const getCurrentColorStock = () => {
    if (!selectedColor || !product.colorOptions) return product.totalStock || 0;
    const colorOption = product.colorOptions.find(c => c.name === selectedColor);
    return colorOption?.stock || 0;
  };

  // Get current size stock
  const getCurrentSizeStock = () => {
    if (!selectedSize || !product.sizeOptions) return null;
    const sizeOption = product.sizeOptions.find(s => s.name === selectedSize);
    return sizeOption?.stock || 0;
  };

  // Get total available stock for current selection
  const getAvailableStock = () => {
    const colorStock = getCurrentColorStock();
    const sizeStock = getCurrentSizeStock();
    
    if (sizeStock !== null) {
      return Math.min(colorStock, sizeStock);
    }
    return colorStock;
  };

  // Check if product is low in stock
  const isLowStock = () => {
    const stock = getAvailableStock();
    return stock > 0 && stock <= 5;
  };

  // Check if out of stock
  const isOutOfStock = () => {
    return getAvailableStock() === 0;
  };

  // Wishlist API çağrıları
  const toggleWishlist = async (e) => {
    e.stopPropagation();
    
    if (isWishlistLoading) return;
    
    setIsWishlistLoading(true);
    
    try {
      // JWT token'ı localStorage'dan al
      const token = localStorage.getItem('token');
      
      if (!token) {
        // Kullanıcı giriş yapmamış, login sayfasına yönlendir
        history.push('/login');
        return;
      }

      const response = await fetch(`https://localhost:7241/api/wishlist/toggle`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(product) // Tüm product verisini gönder
      });

      if (response.status === 401) {
        // Token geçersiz, login sayfasına yönlendir
        localStorage.removeItem('authToken');
        history.push('/login');
        return;
      }

      if (response.ok) {
        const data = await response.json();
        setIsWishlisted(data.isWishlisted);
        
        // Parent component'e wishlist değişikliğini bildir
        if (onWishlistChange) {
          onWishlistChange(product.id, data.isWishlisted);
        }
        
        // Toast notification göster
        showNotification(data.message, data.isWishlisted ? 'success' : 'info');
      } else {
        const errorData = await response.json();
        showNotification(errorData.message || 'Bir hata oluştu', 'error');
      }
    } catch (error) {
      console.error('Wishlist error:', error);
      showNotification('Bağlantı hatası oluştu', 'error');
    } finally {
      setIsWishlistLoading(false);
    }
  };

  // Basit notification fonksiyonu (toast library kullanabilirsiniz)
  const showNotification = (message, type) => {
    // Bu kısmı kendi notification sisteminizle değiştirin
    console.log(`${type.toUpperCase()}: ${message}`);
    
    // Örnek: toast kütüphanesi kullanıyorsanız
    // if (window.toast) {
    //   window.toast(message, { type });
    // }
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    history.push(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (isOutOfStock()) return;
    
    const cartItem = {
      productId: product.id,
      color: selectedColor,
      size: selectedSize,
      quantity: 1
    };
    console.log('Added to cart:', cartItem);
  };

  const discountPercentage = Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100);

  return (
    <div 
      className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 cursor-pointer transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleQuickView}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-50">
        <div className="aspect-[4/5] relative">
          <img
            src={currentImage}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Image Overlay */}
          <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHovered ? 'opacity-10' : 'opacity-0'}`} />
          
          {/* Out of Stock Overlay */}
          {isOutOfStock() && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm">
                Stokta Yok
              </div>
            </div>
          )}
        </div>
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.isNew && (
            <div className="bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-lg">
              YENİ
            </div>
          )}
          {discountPercentage > 0 && (
            <div className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-lg">
              -{discountPercentage}%
            </div>
          )}
        </div>

        {/* Wishlist Button - Güncellenmiş */}
        <button
          onClick={toggleWishlist}
          disabled={isWishlistLoading}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full shadow-lg transition-all duration-300 z-10 ${
            isWishlisted 
              ? 'bg-red-500 text-white transform scale-110' 
              : 'bg-white text-gray-400 hover:text-red-500 hover:bg-red-50'
          } ${isWishlistLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isWishlistLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <i className={`fa-heart text-sm ${isWishlisted ? 'fas' : 'far'} transition-all duration-200`}></i>
          )}
        </button>

        {/* Quick Action Buttons */}
        <div className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button 
            onClick={handleQuickView}
            className="flex-1 bg-white text-gray-800 py-2.5 px-4 rounded-xl font-medium text-sm hover:bg-gray-50 transition-all duration-200 shadow-lg backdrop-blur-sm border border-gray-200"
          >
            <i className="fa-solid fa-eye mr-2 text-xs"></i>
            Hızlı Görüntüle
          </button>
          <button 
            onClick={handleAddToCart}
            disabled={isOutOfStock()}
            className={`flex-1 py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg ${
              isOutOfStock() 
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            <i className="fa-solid fa-shopping-bag mr-2 text-xs"></i>
            {isOutOfStock() ? 'Stokta Yok' : 'Sepete Ekle'}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            {[1,2,3,4,5].map((star) => (
              <i 
                key={star} 
                className={`fa-star text-xs ${
                  star <= Math.floor(product.rating) 
                    ? 'fas text-yellow-400' 
                    : star <= product.rating 
                      ? 'fas text-yellow-200' 
                      : 'far text-gray-300'
                }`}
              ></i>
            ))}
            <span className="text-xs text-gray-400 ml-1">({product.reviewCount})</span>
          </div>
        </div>
        
        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 leading-snug text-base hover:text-blue-600 transition-colors duration-200">
          {product.name}
        </h3>
        
        {/* Price Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.salePrice}
            </span>
            {product.originalPrice > product.salePrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          {product.hasShipping && (
            <div className="flex items-center space-x-1 text-green-600">
              <i className="fa-solid fa-truck text-xs"></i>
              <span className="text-xs font-medium">Ücretsiz Kargo</span>
            </div>
          )}
        </div>

        {/* Color Options */}
        {product.colorOptions && product.colorOptions.length > 0 && (
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600 font-medium">Renk:</span>
            <div className="flex gap-1.5">
              {product.colorOptions.map((colorOption, index) => {
                const isSelected = selectedColor === colorOption.name;
                const isColorOutOfStock = colorOption.stock === 0;
                
                return (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isColorOutOfStock) {
                        setSelectedColor(colorOption.name);
                      }
                    }}
                    disabled={isColorOutOfStock}
                    className={`w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-110 relative ${
                      isSelected 
                        ? 'border-gray-800 ring-2 ring-gray-200 ring-offset-1' 
                        : isColorOutOfStock
                          ? 'border-gray-200 cursor-not-allowed opacity-50'
                          : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: colorOption.hex }}
                    title={`${colorOption.name} (${colorOption.stock} adet)`}
                  >
                    {isColorOutOfStock && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <i className="fa-solid fa-times text-xs text-white drop-shadow-lg"></i>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Size Options */}
        {product.sizeOptions && product.sizeOptions.length > 0 && (
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600 font-medium">Beden:</span>
            <div className="flex gap-1 flex-wrap justify-end">
              {product.sizeOptions.map((sizeOption, index) => {
                const isSelected = selectedSize === sizeOption.name;
                const isSizeOutOfStock = sizeOption.stock === 0;
                
                return (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isSizeOutOfStock) {
                        setSelectedSize(sizeOption.name);
                      }
                    }}
                    disabled={isSizeOutOfStock}
                    className={`min-w-[32px] h-8 px-2 rounded-lg border text-xs font-medium transition-all duration-200 ${
                      isSelected
                        ? 'bg-gray-900 text-white border-gray-900'
                        : isSizeOutOfStock
                          ? 'border-gray-200 text-gray-300 cursor-not-allowed line-through'
                          : 'border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900'
                    }`}
                    title={`${sizeOption.name} (${sizeOption.stock} adet)`}
                  >
                    {sizeOption.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Stock Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              isOutOfStock() 
                ? 'bg-red-500' 
                : isLowStock() 
                  ? 'bg-yellow-500' 
                  : 'bg-green-500'
            }`}></div>
            <span className="text-sm text-gray-600">
              {isOutOfStock() 
                ? 'Stokta yok' 
                : isLowStock() 
                  ? `Son ${getAvailableStock()} adet` 
                  : 'Stokta var'
              }
            </span>
          </div>
          {!isOutOfStock() && (
            <span className="text-xs text-gray-400">
              {getAvailableStock()} adet mevcut
            </span>
          )}
        </div>

        {/* Brand */}
        {product.brand && (
          <div className="mb-4">
            <span className="text-xs text-gray-500">
              <i className="fa-solid fa-tag mr-1"></i>
              {product.brand}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={handleAddToCart}
            disabled={isOutOfStock()}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl ${
              isOutOfStock()
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            <i className="fa-solid fa-shopping-bag mr-2 text-xs"></i>
            {isOutOfStock() ? 'Stokta Yok' : 'Sepete Ekle'}
          </button>
          <button 
            onClick={handleQuickView}
            className="px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-gray-900 hover:text-gray-900 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <i className="fa-solid fa-eye text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// Güncellenmiş PropTypes
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    salePrice: PropTypes.number.isRequired,
    originalPrice: PropTypes.number.isRequired,
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
    colorOptions: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      hex: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired
    })),
    sizeOptions: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired
    })),
    images: PropTypes.object,
    isNew: PropTypes.bool,
    totalStock: PropTypes.number,
    brand: PropTypes.string,
    hasShipping: PropTypes.bool,
    isWishlisted: PropTypes.bool // Yeni eklenen prop
  }).isRequired,
  onWishlistChange: PropTypes.func // Wishlist değişikliklerini parent component'e bildirmek için
};

export default ProductCard;