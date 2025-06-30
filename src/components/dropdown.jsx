import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Drop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: 'electronics',
          title: "Elektronik",
          icon: "fas fa-laptop",
          color: "blue",
          items: [
            { name: "Kulaklık", path: "/products?category=Electronics", popular: true },
            { name: "Akıllı Saat", path: "/products?category=Electronics" },
            { name: "Laptop", path: "/products?category=Electronics", popular: true },
            { name: "Telefon", path: "/products?category=Electronics" },
            { name: "Tablet", path: "/products?category=Electronics" },
            { name: "Kamera", path: "/products?category=Electronics" },
            { name: "Oyun Konsolu", path: "/products?category=Electronics" }
          ]
        },
        {
          id: 'fashion',
          title: "Moda & Giyim", 
          icon: "fas fa-tshirt",
          color: "indigo",
          items: [
            { name: "Erkek Giyim", path: "/products?category=Fashion", popular: true },
            { name: "Kadın Giyim", path: "/products?category=Fashion" },
            { name: "Ayakkabı", path: "/products?category=Fashion" },
            { name: "Spor Giyim", path: "/products?category=Fashion", popular: true },
            { name: "İç Giyim", path: "/products?category=Fashion" },
            { name: "Dış Giyim", path: "/products?category=Fashion" },
            { name: "Çanta", path: "/products?category=Fashion" }
          ]
        },
        {
          id: 'home-kitchen',
          title: "Ev & Yaşam",
          icon: "fas fa-home", 
          color: "pink",
          items: [
            { name: "Mutfak Eşyaları", path: "/products?category=Home & Kitchen", popular: true },
            { name: "Ev Dekorasyonu", path: "/products?category=Home & Kitchen" },
            { name: "Mobilya", path: "/products?category=Home & Kitchen" },
            { name: "Bahçe", path: "/products?category=Home & Kitchen", popular: true },
            { name: "Temizlik", path: "/products?category=Home & Kitchen" },
            { name: "Aydınlatma", path: "/products?category=Home & Kitchen" }
          ]
        },
        {
          id: 'accessories',
          title: "Aksesuar",
          icon: "fas fa-gem",
          color: "green",
          items: [
            { name: "Saat", path: "/products?category=Accessories", popular: true },
            { name: "Takı", path: "/products?category=Accessories" },
            { name: "Gözlük", path: "/products?category=Accessories" },
            { name: "Cüzdan", path: "/products?category=Accessories", popular: true },
            { name: "Kemer", path: "/products?category=Accessories" },
            { name: "Şapka", path: "/products?category=Accessories" }
          ]
        }
      ],
      hoveredCategory: null,
      selectedCategory: 'electronics',
      isMobile: window.innerWidth <= 768,
      featuredProducts: {
        'electronics': {
          title: "Elektronik Koleksiyonu",
          description: "En yeni teknoloji ürünleri",
          image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          discount: "40% İndirim",
          link: "/products?category=Electronics"
        },
        'fashion': {
          title: "Moda Koleksiyonu", 
          description: "Trendy giyim ve aksesuar",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          discount: "35% İndirim",
          link: "/products?category=Fashion"
        },
        'home-kitchen': {
          title: "Ev & Yaşam",
          description: "Evinizi güzelleştirin", 
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          discount: "50% İndirim",
          link: "/products?category=Home & Kitchen"
        },
        'accessories': {
          title: "Aksesuar Koleksiyonu",
          description: "Stilinizi tamamlayın",
          image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
          discount: "45% İndirim",
          link: "/products?category=Accessories"
        }
      }
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= 768 });
  }

  handleCategoryHover = (categoryId) => {
    this.setState({ hoveredCategory: categoryId });
  }

  handleCategorySelect = (categoryId) => {
    this.setState({ selectedCategory: categoryId });
  }

  renderMobileDropdown() {
    const { categories, selectedCategory, featuredProducts } = this.state;
    const activeCategory = categories.find(cat => cat.id === selectedCategory);
    const featured = featuredProducts[selectedCategory];

    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden w-full max-w-xs mx-auto">
        
        {/* Mobile Header */}
        <div className="bg-blue-600 px-4 py-3">
          <div className="flex items-center space-x-2 text-white">
            <i className="fas fa-th-large text-sm"></i>
            <h2 className="text-sm font-medium">Kategoriler</h2>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto bg-gray-50 border-b">
          <div className="flex space-x-1 p-3 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => this.handleCategorySelect(category.id)}
                className={`flex-shrink-0 px-4 py-2 text-xs font-medium rounded-md border transition-colors whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'text-gray-600 border-gray-300 hover:text-blue-600 hover:border-blue-300 bg-white'
                }`}
              >
                <i className={`${category.icon} mr-1.5`}></i>
                <span className="truncate">{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Content */}
        <div className="max-h-80 overflow-y-auto">
          <div className="p-4">
            
            {/* Category Items */}
            <div className="space-y-2 mb-6">
              <h4 className="font-medium text-sm text-gray-900 mb-3 flex items-center">
                <i className={`${activeCategory?.icon} mr-2 text-blue-600`}></i>
                {activeCategory?.title}
              </h4>
              {activeCategory?.items.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="flex items-center justify-between py-2.5 px-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors border border-transparent hover:border-blue-200"
                >
                  <span className="font-medium">{item.name}</span>
                  {item.popular && (
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                      Popüler
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* Featured Product */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-sm text-gray-900 mb-1">{featured.title}</h5>
                  <p className="text-xs text-gray-600 mb-2">{featured.description}</p>
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {featured.discount}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/products?category=sale"
                className="flex items-center justify-center py-2 text-xs text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition-colors"
              >
                <i className="fas fa-tag mr-1"></i>
                İndirimler
              </Link>
              <Link
                to="/products?category=new"
                className="flex items-center justify-center py-2 text-xs text-green-600 border border-green-200 rounded-md hover:bg-green-50 transition-colors"
              >
                <i className="fas fa-star mr-1"></i>
                Yeniler
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="p-4 border-t bg-gray-50">
          <Link
            to="/products"
            className="block w-full py-2.5 bg-blue-600 text-white text-center text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Tüm Ürünleri Görüntüle
          </Link>
        </div>
      </div>
    );
  }

  renderDesktopDropdown() {
    const { categories, hoveredCategory, selectedCategory, featuredProducts } = this.state;
    const currentCategory = hoveredCategory || selectedCategory;
    const featured = featuredProducts[currentCategory];

    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden w-[800px]">
        
        {/* Desktop Header */}
        <div className="bg-blue-600 px-6 py-4">
          <div className="flex items-center space-x-3 text-white">
            <i className="fas fa-th-large text-lg"></i>
            <h2 className="text-lg font-medium">Ürün Kategorileri</h2>
          </div>
        </div>

        <div className="flex">
          {/* Categories Section */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-2 gap-6">
              {categories.map((category, index) => {
                const isActive = currentCategory === category.id;
                
                return (
                  <div 
                    key={index} 
                    className="space-y-3"
                    onMouseEnter={() => this.handleCategoryHover(category.id)}
                    onMouseLeave={() => this.handleCategoryHover(null)}
                  >
                    
                    {/* Category Header */}
                    <div className={`flex items-center space-x-3 p-3 rounded-lg border transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-blue-50 border-blue-200 shadow-sm' 
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isActive ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        <i className={`${category.icon} ${isActive ? 'text-blue-600' : 'text-gray-600'} text-lg`}></i>
                      </div>
                      <h3 className={`font-semibold text-base ${isActive ? 'text-blue-700' : 'text-gray-900'}`}>
                        {category.title}
                      </h3>
                    </div>

                    {/* Category Items */}
                    <div className="space-y-1 ml-3">
                      {category.items.slice(0, 4).map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.path}
                          className={`flex items-center justify-between py-2 px-3 text-sm rounded-md transition-all duration-200 ${
                            isActive 
                              ? 'text-blue-700 hover:bg-blue-50 hover:text-blue-800' 
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                        >
                          <span className="font-medium">{item.name}</span>
                          {item.popular && (
                            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                              Popüler
                            </span>
                          )}
                        </Link>
                      ))}
                      
                      {category.items.length > 4 && (
                        <Link
                          to={`/products?category=${category.title}`}
                          className={`inline-flex items-center text-xs font-medium mt-2 px-3 py-1 ${
                            isActive ? 'text-blue-600 hover:text-blue-700' : 'text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          +{category.items.length - 4} daha fazla
                          <i className="fas fa-arrow-right ml-1 text-xs"></i>
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Popular Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-fire text-red-500 mr-2"></i>
                Popüler Aramalar
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Yeni Ürünler", "İndirimli", "En Çok Satanlar", 
                  "Günün Fırsatları", "Ücretsiz Kargo", "Hızlı Teslimat"
                ].map((tag, index) => (
                  <Link
                    key={index}
                    to={`/products?search=${tag.toLowerCase()}`}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 hover:text-gray-800 transition-colors font-medium"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Product Sidebar */}
          <div className="w-72 bg-gray-50 p-6 border-l border-gray-200">
            <div className="sticky top-0">
              
              {/* Featured Product */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="relative mb-4">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {featured.discount}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {featured.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {featured.description}
                  </p>
                  
                  <Link
                    to={featured.link}
                    className="inline-flex items-center justify-center w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span>Koleksiyonu İncele</span>
                    <i className="fas fa-arrow-right ml-2 text-sm"></i>
                  </Link>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 space-y-3">
                <Link
                  to="/products?sale=true"
                  className="flex items-center justify-center py-3 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors font-medium"
                >
                  <i className="fas fa-percentage mr-2"></i>
                  Tüm İndirimler
                </Link>
                <Link
                  to="/products?new=true"
                  className="flex items-center justify-center py-3 text-green-600 border border-green-200 rounded-lg hover:bg-green-50 transition-colors font-medium"
                >
                  <i className="fas fa-star mr-2"></i>
                  Yeni Ürünler
                </Link>
              </div>

              {/* Features */}
              <div className="mt-6 space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-shipping-fast text-green-600"></i>
                  <span>Ücretsiz Kargo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-undo text-blue-600"></i>
                  <span>30 Gün İade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-shield-alt text-purple-600"></i>
                  <span>Güvenli Ödeme</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span className="font-medium">💫 Premium alışveriş deneyimi</span>
            </div>
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
            >
              Tüm Ürünleri Görüntüle
              <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { isMobile } = this.state;
    
    return isMobile ? this.renderMobileDropdown() : this.renderDesktopDropdown();
  }
}