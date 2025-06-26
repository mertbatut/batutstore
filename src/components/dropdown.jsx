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

  getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:bg-blue-100'
      },
      indigo: {
        bg: 'bg-indigo-50', 
        text: 'text-indigo-600',
        border: 'border-indigo-200',
        hover: 'hover:bg-indigo-100'
      },
      pink: {
        bg: 'bg-pink-50',
        text: 'text-pink-600', 
        border: 'border-pink-200',
        hover: 'hover:bg-pink-100'
      },
      green: {
        bg: 'bg-green-50',
        text: 'text-green-600',
        border: 'border-green-200', 
        hover: 'hover:bg-green-100'
      }
    };
    return colors[color] || colors.blue;
  }

  renderMobileDropdown() {
    const { categories, selectedCategory, featuredProducts } = this.state;
    const activeCategory = categories.find(cat => cat.id === selectedCategory);
    const featured = featuredProducts[selectedCategory];

    return (
      <div className="bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden w-full max-w-sm mx-auto max-h-[80vh] flex flex-col">
        
        {/* Mobile Header */}
        <div className="bg-slate-800 px-4 py-3 flex-shrink-0">
          <div className="flex items-center space-x-2 text-white">
            <i className="fas fa-store text-sm"></i>
            <h2 className="text-sm font-semibold">Kategoriler</h2>
          </div>
        </div>

        {/* Category Tabs - Scrollable */}
        <div className="flex overflow-x-auto bg-gray-50 border-b flex-shrink-0 scrollbar-hide">
          <div className="flex space-x-1 p-2 min-w-max">
            {categories.map((category) => {
              const colorClasses = this.getColorClasses(category.color);
              return (
                <button
                  key={category.id}
                  onClick={() => this.handleCategorySelect(category.id)}
                  className={`flex-shrink-0 px-3 py-2 text-xs font-medium rounded-lg border transition-all ${
                    selectedCategory === category.id
                      ? `${colorClasses.text} ${colorClasses.bg} ${colorClasses.border}`
                      : 'text-gray-600 border-gray-200 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <i className={`${category.icon} mr-1`}></i>
                  {category.title.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            {/* Featured Product - Mobile */}
            <div className="mb-4 relative">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {featured.discount}
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="font-semibold text-sm text-gray-900">{featured.title}</h3>
                <p className="text-xs text-gray-600">{featured.description}</p>
              </div>
            </div>

            {/* Category Items - Mobile */}
            <div className="space-y-1 mb-4">
              <h4 className="font-medium text-sm text-gray-900 mb-2">{activeCategory?.title}</h4>
              {activeCategory?.items.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="flex items-center justify-between py-2 px-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>{item.name}</span>
                  {item.popular && (
                    <span className="bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full">
                      Popüler
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* Popular Categories Mobile */}
            <div className="border-t pt-4">
              <h4 className="font-medium text-sm text-gray-900 mb-3 flex items-center">
                <i className="fas fa-fire text-orange-500 mr-2"></i>
                Popüler
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Yeni Sezon", "İndirimler", "En Çok Satan"].map((tag, index) => (
                  <Link
                    key={index}
                    to={`/products/category/${tag.toLowerCase().replace(' ', '-')}`}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="p-4 border-t bg-gray-50 flex-shrink-0">
          <Link
            to="/products"
            className="block w-full py-2 bg-slate-800 text-white text-center text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors"
          >
            Tüm Ürünler
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
      <div className="bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden w-[900px]">
        
        {/* Desktop Header */}
        <div className="bg-slate-800 px-6 py-4">
          <div className="flex items-center space-x-2 text-white">
            <i className="fas fa-store text-lg"></i>
            <h2 className="text-lg font-bold">Mağaza Kategorileri</h2>
          </div>
        </div>

        <div className="flex">
          {/* Categories Grid */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-4 gap-6">
              {categories.map((category, index) => {
                const colorClasses = this.getColorClasses(category.color);
                const isActive = currentCategory === category.id;
                
                return (
                  <div 
                    key={index} 
                    className="space-y-4"
                    onMouseEnter={() => this.handleCategoryHover(category.id)}
                    onMouseLeave={() => this.handleCategoryHover(null)}
                  >
                    
                    {/* Category Header */}
                    <div className={`flex items-center space-x-3 p-3 rounded-lg border transition-all ${
                      isActive 
                        ? `${colorClasses.bg} ${colorClasses.border}` 
                        : 'border-gray-100 hover:border-gray-200'
                    }`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isActive ? colorClasses.bg : 'bg-gray-100'
                      }`}>
                        <i className={`${category.icon} ${isActive ? colorClasses.text : 'text-gray-600'} text-sm`}></i>
                      </div>
                      <h3 className={`font-bold text-sm ${isActive ? colorClasses.text : 'text-gray-900'}`}>
                        {category.title}
                      </h3>
                    </div>

                    {/* Category Items */}
                    <div className="space-y-1">
                      {category.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.path}
                          className={`flex items-center justify-between py-2 px-3 text-sm rounded-lg transition-all duration-200 ${
                            isActive 
                              ? `${colorClasses.hover} ${colorClasses.text}` 
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                        >
                          <span>{item.name}</span>
                          {item.popular && (
                            <span className="bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full">
                              Popüler
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>

                    {/* View All Link */}
                    <Link
                      to={`/products/${category.id}`}
                      className={`inline-flex items-center text-xs font-medium mt-2 ${
                        isActive ? colorClasses.text : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Tümünü Gör
                      <i className="fas fa-arrow-right ml-1 text-xs"></i>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Popular Categories */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-fire text-orange-500 mr-2"></i>
                Popüler Kategoriler
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Yeni Sezon", "İndirimli Ürünler", "En Çok Satanlar", 
                  "Günün Fırsatları", "Premium Koleksiyon", "Spor Giyim"
                ].map((tag, index) => (
                  <Link
                    key={index}
                    to={`/products/category/${tag.toLowerCase().replace(' ', '-')}`}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-slate-100 hover:text-slate-700 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Product - Desktop */}
          <div className="w-80 bg-gray-50 p-6 border-l border-gray-200">
            <div className="sticky top-6">
              
              {/* Discount Badge */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {featured.discount}
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {featured.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {featured.description}
                  </p>
                  
                  <Link
                    to={featured.link}
                    className="inline-flex items-center justify-center w-full py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    <span>Koleksiyonu İncele</span>
                    <i className="fas fa-arrow-right ml-2 text-sm"></i>
                  </Link>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Link
                    to="/products/sale"
                    className="flex items-center justify-center py-2 text-xs text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <i className="fas fa-percentage mr-1"></i>
                    İndirimler
                  </Link>
                  <Link
                    to="/products/new"
                    className="flex items-center justify-center py-2 text-xs text-green-600 border border-green-200 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <i className="fas fa-star mr-1"></i>
                    Yeni Ürünler
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center space-x-1">
                <i className="fas fa-truck text-green-600"></i>
                <span>Ücretsiz Kargo</span>
              </div>
              <div className="flex items-center space-x-1">
                <i className="fas fa-undo text-blue-600"></i>
                <span>Kolay İade</span>
              </div>
              <div className="flex items-center space-x-1">
                <i className="fas fa-shield-alt text-purple-600"></i>
                <span>Güvenli Alışveriş</span>
              </div>
            </div>
            <Link
              to="/products"
              className="text-slate-700 hover:text-slate-900 font-medium"
            >
              Tüm Ürünler →
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