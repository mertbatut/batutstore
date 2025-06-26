import { useRef, useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Search = ({ searchTerm, setSearchTerm, onSearch }) => {
    const dropdownRef = useRef(null);
    const history = useHistory();
    const [products, setProducts] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    // Products.json'dan verileri yükle
    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await fetch('/data/products.json');
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Ürünler yüklenirken hata oluştu:', error);
            }
        };
        loadProducts();
    }, []);

    // Arama terimi değiştiğinde filtreleme yap
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredResults([]);
            return;
        }

        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        
        setFilteredResults(filtered.slice(0, 5)); // İlk 5 sonucu göster
    }, [searchTerm, products]);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        if (onSearch) {
            onSearch(value);
        }
    };

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    const handleProductClick = (product) => {
        // Ürün detay sayfasına yönlendir
        history.push(`/product/${product.id}`);
        setSearchTerm('');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchClick();
        }
    };

    const handleClickOutside = useCallback((event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setSearchTerm('');
        }
    }, [setSearchTerm]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div className="relative w-full max-w-md" ref={dropdownRef}>
            {/* Search Input Container */}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-search text-gray-400 text-sm"></i>
                </div>
                
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Ürün, marka veya kategori ara..."
                    className="w-full pl-10 pr-12 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 transition-all duration-200"
                />
                
                {searchTerm && (
                    <button
                        onClick={() => setSearchTerm('')}
                        className="absolute inset-y-0 right-10 flex items-center pr-2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <i className="fas fa-times text-sm"></i>
                    </button>
                )}
                
                <button
                    onClick={handleSearchClick}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                    <i className="fas fa-search text-sm"></i>
                </button>
            </div>

            {/* Search Results Dropdown */}
            {searchTerm && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                    {filteredResults && filteredResults.length > 0 ? (
                        <>
                            <div className="px-4 py-2 text-xs font-medium text-gray-500 bg-gray-50 border-b">
                                {filteredResults.length} sonuç bulundu
                            </div>
                            {filteredResults.map((product) => (
                                <div
                                    key={product.id}
                                    onClick={() => handleProductClick(product)}
                                    className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                                            {product.images && product.images[Object.keys(product.images)[0]] ? (
                                                <img 
                                                    src={product.images[Object.keys(product.images)[0]]} 
                                                    alt={product.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <i className="fas fa-box text-gray-400 text-sm"></i>
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{product.name}</p>
                                            <p className="text-xs text-gray-500">Kategori: {product.category || 'Genel'}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-gray-900">${product.salePrice || product.originalPrice}</p>
                                        {product.salePrice && product.originalPrice > product.salePrice && (
                                            <span className="text-xs text-red-500">
                                                %{Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)} indirim
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div className="px-4 py-3 bg-gray-50 border-t">
                                <button
                                    onClick={handleSearchClick}
                                    className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    Tüm sonuçları görüntüle ({filteredResults.length})
                                </button>
                            </div>
                        </>
                    ) : searchTerm.length > 0 ? (
                        <div className="px-4 py-8 text-center">
                            <i className="fas fa-search text-gray-300 text-2xl mb-3"></i>
                            <p className="text-sm text-gray-500 mb-2">Sonuç bulunamadı</p>
                            <p className="text-xs text-gray-400">
                                &quot;{searchTerm}&quot; için arama yapıldı
                            </p>
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
};

Search.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
    onSearch: PropTypes.func,
};

export default Search;