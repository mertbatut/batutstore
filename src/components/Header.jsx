import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Drop from './dropdown';
import SearchEvent from '../contexts/SearchEvent';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(2);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShopDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16 lg:h-18">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 lg:w-11 lg:h-11 bg-slate-800 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:bg-slate-700 transition-colors">
                B
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-xl lg:text-2xl text-slate-800">
                  BatutStore
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">            
            {/* Shop Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                className="text-gray-700 hover:text-slate-800 font-medium text-sm flex items-center gap-1 transition-colors relative group py-2"
              >
                Mağaza
                <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${isShopDropdownOpen ? 'rotate-180' : ''}`}></i>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all group-hover:w-full"></span>
              </button>
              
              {isShopDropdownOpen && (
                <div className={`absolute top-full z-50 ${isMobile ? 'left-1/2 transform -translate-x-1/2' : 'left-0'} mt-2`}>
                  <Drop />
                </div>
              )}
            </div>

            <Link to="/products" className="text-gray-700 hover:text-slate-800 font-medium text-sm transition-colors relative group py-2">
              Ürünler
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-slate-800 font-medium text-sm transition-colors relative group py-2">
              Hakkımızda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-slate-800 font-medium text-sm transition-colors relative group py-2">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-slate-800 font-medium text-sm transition-colors relative group py-2">
              İletişim
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            
            {/* Search */}
            <div className="hidden md:block">
              <SearchEvent />
            </div>

            {/* Auth Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link to="/login" className="flex items-center space-x-2 px-3 py-2 text-slate-700 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50 transition-all duration-200">
                <i className="fa-regular fa-user text-sm"></i>
                <span className="font-medium text-sm">Giriş</span>
              </Link>
              <Link to="/register" className="flex items-center space-x-2 px-3 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200">
                <i className="fa-solid fa-user-plus text-sm"></i>
                <span className="font-medium text-sm">Kayıt</span>
              </Link>
            </div>

            {/* Cart & Wishlist */}
            <div className="flex items-center space-x-2">
              <Link to="/wishlist" className="relative p-2 text-gray-700 hover:text-red-600 transition-colors group">
                <i className="fa-regular fa-heart text-lg"></i>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              
              <Link to="/cart" className="relative p-2 text-gray-700 hover:text-slate-800 transition-colors group">
                <i className="fa-solid fa-shopping-bag text-lg"></i>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-slate-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-slate-800 transition-colors"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 bg-gray-50">
            <div className="flex flex-col space-y-4">
              
              {/* Mobile Search */}
              <div className="md:hidden px-2">
                <SearchEvent />
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-1 px-2">
                
                <div>
                  <button
                    onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                    className="w-full py-3 px-3 text-gray-700 hover:text-slate-800 font-medium text-sm flex items-center justify-between transition-colors border-b border-gray-200 rounded-lg hover:bg-white"
                  >
                    <span>Mağaza</span>
                    <i className={`fa-solid fa-chevron-down text-xs transition-transform ${isShopDropdownOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  
                  {isShopDropdownOpen && (
                    <div className="mt-2 bg-white rounded-lg shadow-lg overflow-hidden">
                      <Drop />
                    </div>
                  )}
                </div>

                <Link to="/products" className="py-3 px-3 text-gray-700 hover:text-slate-800 font-medium text-sm transition-colors border-b border-gray-200 rounded-lg hover:bg-white">
                  Ürünler
                </Link>
                <Link to="/about" className="py-3 px-3 text-gray-700 hover:text-slate-800 font-medium text-sm transition-colors border-b border-gray-200 rounded-lg hover:bg-white">
                  Hakkımızda
                </Link>
                <Link to="/blog" className="py-3 px-3 text-gray-700 hover:text-slate-800 font-medium text-sm transition-colors border-b border-gray-200 rounded-lg hover:bg-white">
                  Blog
                </Link>
                <Link to="/contact" className="py-3 px-3 text-gray-700 hover:text-slate-800 font-medium text-sm transition-colors rounded-lg hover:bg-white">
                  İletişim
                </Link>
              </nav>

              {/* Mobile Auth Links */}
              <div className="flex flex-col space-y-3 px-2 pt-4 border-t border-gray-200">
                <Link to="/login" className="flex items-center justify-center space-x-2 py-3 text-slate-700 border border-slate-300 rounded-lg hover:bg-white transition-all">
                  <i className="fa-regular fa-user text-sm"></i>
                  <span className="font-medium text-sm">Giriş Yap</span>
                </Link>
                <Link to="/register" className="flex items-center justify-center space-x-2 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
                  <i className="fa-solid fa-user-plus text-sm"></i>
                  <span className="font-medium text-sm">Kayıt Ol</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}