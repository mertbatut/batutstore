import { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Drop from './dropdown';
import SearchEvent from '../contexts/SearchEvent';
import { authService } from '../api/authService';
import { toast } from 'react-toastify';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(2);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  
  const dropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  const history = useHistory();

  // Authentication durumunu kontrol et
  useEffect(() => {
    const checkAuthStatus = () => {
      const authenticated = authService.isAuthenticated();
      const user = authService.getCurrentUser();
      
      setIsAuthenticated(authenticated);
      setCurrentUser(user);
    };

    // İlk yüklemede kontrol et
    checkAuthStatus();

    // Storage değişikliklerini dinle (başka sekmede login/logout olunca)
    const handleStorageChange = () => {
      checkAuthStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShopDropdownOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Logout işlemi
  const handleLogout = async () => {
    try {
      await authService.logout();
      setIsAuthenticated(false);
      setCurrentUser(null);
      setIsUserDropdownOpen(false);
      
      toast.success('Başarıyla çıkış yaptınız!', {
        position: "top-right",
        autoClose: 2000,
      });
      
      history.push('/');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Çıkış işlemi sırasında bir hata oluştu.');
    }
  };

  // Kullanıcı adının kısaltılmış hali
  const getDisplayName = () => {
    if (!currentUser) return '';
    return `${currentUser.firstName} ${currentUser.lastName}`;
  };

  const getInitials = () => {
    if (!currentUser) return '';
    return `${currentUser.firstName[0]}${currentUser.lastName[0]}`.toUpperCase();
  };

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

            {/* Auth Section - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              {isAuthenticated ? (
                // Giriş yapılmış kullanıcı
                <div className="relative" ref={userDropdownRef}>
                  <button
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="flex items-center space-x-2 px-3 py-2 text-slate-700 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50 transition-all duration-200"
                  >
                    <div className="w-7 h-7 bg-slate-800 text-white rounded-full flex items-center justify-center text-xs font-medium">
                      {getInitials()}
                    </div>
                    <span className="font-medium text-sm max-w-24 truncate">
                      {currentUser?.firstName}
                    </span>
                    <i className={`fa-solid fa-chevron-down text-xs transition-transform ${isUserDropdownOpen ? 'rotate-180' : ''}`}></i>
                  </button>

                  {/* User Dropdown Menu */}
                  {isUserDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{getDisplayName()}</p>
                        <p className="text-xs text-gray-500">{currentUser?.email}</p>
                      </div>
                      
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsUserDropdownOpen(false)}
                      >
                        <i className="fa-regular fa-user mr-3 text-gray-400"></i>
                        Profilim
                      </Link>
                      
                      <Link
                        to="/orders"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsUserDropdownOpen(false)}
                      >
                        <i className="fa-solid fa-shopping-bag mr-3 text-gray-400"></i>
                        Siparişlerim
                      </Link>
                      
                      <Link
                        to="/settings"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsUserDropdownOpen(false)}
                      >
                        <i className="fa-solid fa-cog mr-3 text-gray-400"></i>
                        Ayarlar
                      </Link>
                      
                      <div className="border-t border-gray-100 my-1"></div>
                      
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <i className="fa-solid fa-sign-out-alt mr-3 text-red-400"></i>
                        Çıkış Yap
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                // Giriş yapılmamış kullanıcı
                <>
                  <Link to="/login" className="flex items-center space-x-2 px-3 py-2 text-slate-700 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50 transition-all duration-200">
                    <i className="fa-regular fa-user text-sm"></i>
                    <span className="font-medium text-sm">Giriş</span>
                  </Link>
                  <Link to="/register" className="flex items-center space-x-2 px-3 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200">
                    <i className="fa-solid fa-user-plus text-sm"></i>
                    <span className="font-medium text-sm">Kayıt</span>
                  </Link>
                </>
              )}
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

              {/* Mobile User Info */}
              {isAuthenticated && (
                <div className="px-2">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {getInitials()}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{getDisplayName()}</p>
                        <p className="text-sm text-gray-500">{currentUser?.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

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

              {/* Mobile Auth Section */}
              <div className="flex flex-col space-y-3 px-2 pt-4 border-t border-gray-200">
                {isAuthenticated ? (
                  // Giriş yapılmış kullanıcı - Mobile
                  <>
                    <Link to="/profile" className="flex items-center space-x-3 py-3 px-3 text-slate-700 border border-slate-300 rounded-lg hover:bg-white transition-all">
                      <i className="fa-regular fa-user text-sm"></i>
                      <span className="font-medium text-sm">Profilim</span>
                    </Link>
                    <Link to="/orders" className="flex items-center space-x-3 py-3 px-3 text-slate-700 border border-slate-300 rounded-lg hover:bg-white transition-all">
                      <i className="fa-solid fa-shopping-bag text-sm"></i>
                      <span className="font-medium text-sm">Siparişlerim</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-3 py-3 px-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <i className="fa-solid fa-sign-out-alt text-sm"></i>
                      <span className="font-medium text-sm">Çıkış Yap</span>
                    </button>
                  </>
                ) : (
                  // Giriş yapılmamış kullanıcı - Mobile
                  <>
                    <Link to="/login" className="flex items-center justify-center space-x-2 py-3 text-slate-700 border border-slate-300 rounded-lg hover:bg-white transition-all">
                      <i className="fa-regular fa-user text-sm"></i>
                      <span className="font-medium text-sm">Giriş Yap</span>
                    </Link>
                    <Link to="/register" className="flex items-center justify-center space-x-2 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
                      <i className="fa-solid fa-user-plus text-sm"></i>
                      <span className="font-medium text-sm">Kayıt Ol</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}