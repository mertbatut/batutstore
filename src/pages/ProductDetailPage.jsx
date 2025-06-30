import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadCrumbs from '../components/BreadCrumbs';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');

  // products.json dosyasından tüm ürünleri getir (WishlistPage'deki gibi)
  const fetchAllProducts = async () => {
    try {
      const response = await fetch('/data/products.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Products.json raw data:', data);
      console.log('Data type:', typeof data);
      console.log('Is array:', Array.isArray(data));
      
      // Eğer data bir object ise ve içinde products array'i varsa
      if (data && typeof data === 'object' && !Array.isArray(data)) {
        if (data.products && Array.isArray(data.products)) {
          console.log('Found products array inside object');
          return data.products;
        } else if (data.data && Array.isArray(data.data)) {
          console.log('Found data array inside object');
          return data.data;
        } else {
          console.log('Object keys:', Object.keys(data));
          // İlk array olan property'yi bul
          for (const key in data) {
            if (Array.isArray(data[key])) {
              console.log(`Found array in key: ${key}`);
              return data[key];
            }
          }
        }
      }
      
      // Eğer data zaten array ise
      if (Array.isArray(data)) {
        console.log('Data is already an array');
        return data;
      }
      
      console.error('Could not find products array in data structure');
      return [];
      
    } catch (error) {
      console.error('Error fetching products.json:', error);
      return [];
    }
  };

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const allProducts = await fetchAllProducts();
        console.log('All products:', allProducts);
        console.log('Looking for product ID:', parseInt(id));
        
        if (!Array.isArray(allProducts)) {
          console.error('allProducts is not an array:', allProducts);
          setLoading(false);
          return;
        }

        const foundProduct = allProducts.find(p => p.id === parseInt(id));
        console.log('Found product:', foundProduct);
        
        if (foundProduct) {
          setProduct(foundProduct);
          
          // Color handling - colors veya colorOptions kontrol et
          if (foundProduct.colors && foundProduct.colors.length > 0) {
            setSelectedColor(foundProduct.colors[0]);
            setSelectedImage(foundProduct.images[foundProduct.colors[0]]);
          } else if (foundProduct.colorOptions && foundProduct.colorOptions.length > 0) {
            setSelectedColor(foundProduct.colorOptions[0].name);
            setSelectedImage(foundProduct.images[foundProduct.colorOptions[0].name]);
          } else {
            // Renk seçeneği yoksa ilk image'i al
            const firstImageKey = Object.keys(foundProduct.images || {})[0];
            if (firstImageKey) {
              setSelectedColor(firstImageKey);
              setSelectedImage(foundProduct.images[firstImageKey]);
            }
          }
        }
        setLoading(false);
      } catch (error) {
        console.error('Ürün yüklenirken hata:', error);
        setLoading(false);
      }
    };

    if (id) {
      loadProduct();
    }
  }, [id]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    if (product.images && product.images[color]) {
      setSelectedImage(product.images[color]);
    }
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    // Sepete ekleme işlemi
    console.log('Sepete eklendi:', {
      product: product.id,
      color: selectedColor,
      quantity: quantity
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <i className="fas fa-spinner fa-spin text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-600">Ürün yükleniyor...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <i className="fas fa-exclamation-triangle text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-600">Ürün bulunamadı</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Renk seçeneklerini dinamik al
  const colorOptions = product.colors || (product.colorOptions ? product.colorOptions.map(c => c.name) : []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <BreadCrumbs 
            items={[
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Ürünler', href: '/products' },
              { label: product.category, href: `/products?category=${product.category}` },
              { label: product.name, href: '#', active: true }
            ]}
          />
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Color Selection Images */}
            {colorOptions.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {colorOptions.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorChange(color)}
                    className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-all ${
                      selectedColor === color ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={product.images[color]}
                      alt={`${product.name} - ${color}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Product Title & Rating */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Yeni
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star text-sm ${
                        i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviewCount} değerlendirme)
                  </span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">
                ${product.salePrice || product.originalPrice}
              </span>
              {product.salePrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                    %{Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)} İndirim
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Brand */}
            {product.brand && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Marka:</span>
                <span className="text-sm font-medium text-gray-900">{product.brand}</span>
              </div>
            )}

            {/* Color Selection */}
            {colorOptions.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Renk: {selectedColor}</h3>
                <div className="flex gap-3">
                  {colorOptions.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorChange(color)}
                      className={`w-12 h-12 rounded-lg border-2 transition-all ${
                        selectedColor === color ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{
                        backgroundColor: color.toLowerCase(),
                        backgroundImage: `url(${product.images[color]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <span className="sr-only">{color}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Adet</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <i className="fas fa-minus text-sm"></i>
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <i className="fas fa-plus text-sm"></i>
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-slate-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <i className="fas fa-shopping-cart"></i>
                  Sepete Ekle
                </button>
                <button className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <i className="far fa-heart text-gray-600"></i>
                </button>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <i className={`fas fa-circle text-xs ${product.inStock ? 'text-green-500' : 'text-red-500'}`}></i>
              <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'Stokta var' : 'Stokta yok'}
              </span>
            </div>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Etiketler</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'description'
                    ? 'border-slate-800 text-slate-800'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Açıklama
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'specifications'
                    ? 'border-slate-800 text-slate-800'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Özellikler
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'reviews'
                    ? 'border-slate-800 text-slate-800'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Değerlendirmeler ({product.reviewCount})
              </button>
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Ürün Özellikleri</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Yüksek kaliteli malzeme</li>
                      <li>• Dayanıklı yapı</li>
                      <li>• Modern tasarım</li>
                      <li>• Kullanım kolaylığı</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Bakım Bilgileri</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Temiz ve kuru yerde saklayın</li>
                      <li>• Doğrudan güneş ışığından uzak tutun</li>
                      <li>• Düzenli bakım yapın</li>
                      <li>• Orijinal ambalajında saklayın</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Genel Bilgiler</h4>
                  <dl className="space-y-3">
                    {product.brand && (
                      <div className="flex justify-between">
                        <dt className="text-sm text-gray-600">Marka:</dt>
                        <dd className="text-sm font-medium text-gray-900">{product.brand}</dd>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-600">Kategori:</dt>
                      <dd className="text-sm font-medium text-gray-900">{product.category}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-600">Stok Durumu:</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        {product.inStock ? 'Stokta var' : 'Stokta yok'}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-600">Renk Seçenekleri:</dt>
                      <dd className="text-sm font-medium text-gray-900">{colorOptions.length}</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Değerlendirme</h4>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-600">Ortalama Puan:</dt>
                      <dd className="text-sm font-medium text-gray-900">{product.rating}/5</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-600">Toplam Değerlendirme:</dt>
                      <dd className="text-sm font-medium text-gray-900">{product.reviewCount}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="text-center py-12">
                  <i className="fas fa-star text-4xl text-gray-300 mb-4"></i>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Henüz değerlendirme yok
                  </h3>
                  <p className="text-gray-600">
                    Bu ürün için ilk değerlendirmeyi siz yapın!
                  </p>
                  <button className="mt-4 bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors">
                    Değerlendirme Yap
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}