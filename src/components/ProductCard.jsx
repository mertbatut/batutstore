// ProductCard.js - Ayrı component dosyası
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// Color mapping for hex colors
const colorMapping = {
  'Blue': '#23A6F0',
  'Green': '#23856D', 
  'Orange': '#E77C40',
  'Black': '#252B42'
};

// Tek bir product kartı
const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || 'Blue');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const history = useHistory();

  // Get the image for the selected color
  const currentImage = product.images?.[selectedColor] || product.images?.Blue || '';

  const handleQuickView = () => {
    history.push(`/product/${product.id}`);
  };

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden cursor-pointer" onClick={handleQuickView}>
        <img
          src={currentImage}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
              NEW
            </span>
          )}
          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
            -{Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)}%
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        >
          <i className={`fa-heart text-lg ${isWishlisted ? 'fas text-red-500' : 'far text-gray-400'}`}></i>
        </button>

        {/* Quick View Button */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button 
            onClick={handleQuickView}
            className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-50"
          >
            Quick View
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        <h3 
          className="font-semibold text-gray-800 mb-2 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={handleQuickView}
        >
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-green-600">${product.salePrice}</span>
          <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
        </div>

        {/* Color Options */}
        <div className="flex gap-2 mb-4">
          {product.colors?.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`w-4 h-4 rounded-full border-2 ${
                selectedColor === color ? 'border-gray-800 scale-110' : 'border-gray-300'
              } transition-all duration-200`}
              style={{ backgroundColor: colorMapping[color] || color }}
            />
          ))}
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// PropTypes for ProductCard
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    salePrice: PropTypes.number.isRequired,
    originalPrice: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.object,
    isNew: PropTypes.bool
  }).isRequired
};

export default ProductCard;