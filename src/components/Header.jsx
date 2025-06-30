import { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Drop from './dropdown';
import SearchEvent from '../contexts/SearchEvent';
import ProfileMenu from './ProfileMenu'; // Yeni component'i import et
import { authService } from '../api/authService';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  
  const dropdownRef = useRef(null);
  const history = useHistory();

  // Authentication durumunu kontrol et
  useEffect(() => {
    const checkAuthStatus = () => {
      const authenticated = authService.isAuthenticated();
      const user = authService.getCurrentUser();
      
      setIsAuthenticated(authenticated);
      setCurrentUser(user);
    };

    checkAuthStatus();

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
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Mobil'e geçerken menüleri kapat
      if (!mobile) {
        setIsMenuOpen(false);
      }
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

  // ProfileMenu'den logout callback'i
  const handleLogoutFromProfile = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    history.push('/');
  };

  // Kullanıcı bilgileri (mobil için)
  const getDisplayName = () => {
    if (!currentUser) return '';
    return `${currentUser.firstName} ${currentUser.lastName}`;
  };

  const getInitials = () => {
    if (!currentUser) return '';
    return `${currentUser.firstName[0]}${currentUser.lastName[0]}`.toUpperCase();
  };

  // Menü link'ine tıklanınca mobil menüyü kapat
  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
    setIsShopDropdownOpen(false);
  };

  // Mobil logout işlemi
  const handleMobileLogout = async () => {
    setIsMenuOpen(false);
    
    try {
      await authService.logout();
      setIsAuthenticated(false);
      setCurrentUser(null);
      history.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        
        {/* Main Header */}
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              onClick={handleMobileMenuClose}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl flex items-center justify-center shadow-lg">
                <i className="fa-solid fa-store text-white text-sm sm:text-base"></i>
              </div>
              <div className="hidden xs:block min-w-0">
                <span className="font-bold text-lg sm:text-xl lg:text-2xl text-slate-800 group-hover:text-slate-600 transition-colors duration-200 truncate">
                  BatutStore
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">            
            {/* Shop Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                className="text-gray-700 hover:text-slate-800 font-medium text-sm xl:text-base flex items-center gap-1.5 transition-all duration-200 relative group py-2 px-1"
              >
                <i className="fa-solid fa-store text-xs opacity-70"></i>
                Mağaza
                <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${isShopDropdownOpen ? 'rotate-180' : ''}`}></i>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {isShopDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 z-50">
                  <Drop />
                </div>
              )}
            </div>

            <Link 
              to="/products" 
              className="text-gray-700 hover:text-slate-800 font-medium text-sm xl:text-base transition-all duration-200 relative group py-2 px-1 flex items-center gap-1.5"
            >
              <i className="fa-solid fa-box text-xs opacity-70"></i>
              Ürünler
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-slate-800 font-medium text-sm xl:text-base transition-all duration-200 relative group py-2 px-1 flex items-center gap-1.5"
            >
              <i className="fa-solid fa-info-circle text-xs opacity-70"></i>
              Hakkımızda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link 
              to="/blog" 
              className="text-gray-700 hover:text-slate-800 font-medium text-sm xl:text-base transition-all duration-200 relative group py-2 px-1 flex items-center gap-1.5"
            >
              <i className="fa-solid fa-newspaper text-xs opacity-70"></i>
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-slate-800 font-medium text-sm xl:text-base transition-all duration-200 relative group py-2 px-1 flex items-center gap-1.5"
            >
              <i className="fa-solid fa-envelope text-xs opacity-70"></i>
              İletişim
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
            
            {/* Search - Hidden on mobile */}
            <div className="hidden md:block">
              <SearchEvent />
            </div>

            {/* Auth Section - Desktop */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
              {isAuthenticated ? (
                <ProfileMenu 
                  currentUser={currentUser} 
                  onLogout={handleLogoutFromProfile}
                  className="flex-shrink-0"
                />
              ) : (
                // Giriş yapılmamış kullanıcı
                <div className="flex items-center space-x-2">
                  <Link 
                    to="/login" 
                    className="flex items-center space-x-2 px-3 py-2 text-slate-700 hover:text-slate-800 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm transition-all duration-200"
                  >
                    <i className="fa-regular fa-user text-sm"></i>
                    <span className="font-medium text-sm">Giriş</span>
                  </Link>
                  <Link 
                    to="/register" 
                    className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl hover:from-slate-700 hover:to-slate-600 hover:shadow-lg transition-all duration-200"
                  >
                    <i className="fa-solid fa-user-plus text-sm"></i>
                    <span className="font-medium text-sm">Kayıt</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Cart & Wishlist */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Link 
                to="/wishlist" 
                className="relative p-2 sm:p-2.5 text-gray-600 hover:text-red-500 transition-all duration-200 rounded-xl hover:bg-red-50"
                onClick={handleMobileMenuClose}
              >
                <i className="fa-regular fa-heart text-lg sm:text-xl"></i>
              </Link>
              
              <Link 
                to="/cart" 
                className="relative p-2 sm:p-2.5 text-gray-600 hover:text-slate-800 transition-all duration-200 rounded-xl hover:bg-slate-50"
                onClick={handleMobileMenuClose}
              >
                <i className="fa-solid fa-shopping-bag text-lg sm:text-xl"></i>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-slate-800 transition-all duration-200 rounded-xl hover:bg-slate-50"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg transition-all duration-200`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              
              {/* Mobile Search */}
              <div className="md:hidden px-1">
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <SearchEvent />
                </div>
              </div>

              {/* Mobile User Info */}
              {isAuthenticated && (
                <div className="px-1">
                  <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 text-white rounded-full flex items-center justify-center text-sm font-medium shadow-sm">
                        {getInitials()}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 truncate">{getDisplayName()}</p>
                        <p className="text-sm text-gray-500 truncate">{currentUser?.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-1 px-1">
                
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                    className="w-full py-4 px-4 text-gray-700 hover:text-slate-800 hover:bg-gray-50 font-medium text-sm flex items-center justify-between transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <i className="fa-solid fa-store text-sm text-gray-400"></i>
                      <span>Mağaza</span>
                    </div>
                    <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${isShopDropdownOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  
                  {isShopDropdownOpen && (
                    <div className="border-t border-gray-100 bg-gray-50">
                      <Drop />
                    </div>
                  )}
                </div>

                <Link 
                  to="/products" 
                  className="flex items-center space-x-3 py-4 px-4 text-gray-700 hover:text-slate-800 hover:bg-gray-50 font-medium text-sm transition-all duration-200 bg-white rounded-xl border border-gray-100"
                  onClick={handleMobileMenuClose}
                >
                  <i className="fa-solid fa-box text-sm text-gray-400"></i>
                  <span>Ürünler</span>
                </Link>
                
                <Link 
                  to="/about" 
                  className="flex items-center space-x-3 py-4 px-4 text-gray-700 hover:text-slate-800 hover:bg-gray-50 font-medium text-sm transition-all duration-200 bg-white rounded-xl border border-gray-100"
                  onClick={handleMobileMenuClose}
                >
                  <i className="fa-solid fa-info-circle text-sm text-gray-400"></i>
                  <span>Hakkımızda</span>
                </Link>
                
                <Link 
                  to="/blog" 
                  className="flex items-center space-x-3 py-4 px-4 text-gray-700 hover:text-slate-800 hover:bg-gray-50 font-medium text-sm transition-all duration-200 bg-white rounded-xl border border-gray-100"
                  onClick={handleMobileMenuClose}
                >
                  <i className="fa-solid fa-newspaper text-sm text-gray-400"></i>
                  <span>Blog</span>
                </Link>
                
                <Link 
                  to="/contact" 
                  className="flex items-center space-x-3 py-4 px-4 text-gray-700 hover:text-slate-800 hover:bg-gray-50 font-medium text-sm transition-all duration-200 bg-white rounded-xl border border-gray-100"
                  onClick={handleMobileMenuClose}
                >
                  <i className="fa-solid fa-envelope text-sm text-gray-400"></i>
                  <span>İletişim</span>
                </Link>
              </nav>

              {/* Mobile Auth Section */}
              <div className="flex flex-col space-y-2 px-1 pt-2 border-t border-gray-100">
                {isAuthenticated ? (
                  // Giriş yapılmış kullanıcı - Mobile
                  <>
                    <Link 
                      to="/profile" 
                      className="flex items-center space-x-3 py-4 px-4 text-slate-700 hover:text-slate-800 hover:bg-gray-50 font-medium text-sm transition-all duration-200 bg-white rounded-xl border border-gray-100"
                      onClick={handleMobileMenuClose}
                    >
                      <i className="fa-regular fa-user text-sm text-gray-400"></i>
                      <span>Profilim</span>
                    </Link>
                    
                    <Link 
                      to="/orders" 
                      className="flex items-center space-x-3 py-4 px-4 text-slate-700 hover:text-slate-800 hover:bg-gray-50 font-medium text-sm transition-all duration-200 bg-white rounded-xl border border-gray-100"
                      onClick={handleMobileMenuClose}
                    >
                      <i className="fa-solid fa-shopping-bag text-sm text-gray-400"></i>
                      <span>Siparişlerim</span>
                    </Link>
                    
                    <button
                      onClick={handleMobileLogout}
                      className="flex items-center space-x-3 py-4 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 font-medium text-sm shadow-sm"
                    >
                      <i className="fa-solid fa-sign-out-alt text-sm"></i>
                      <span>Çıkış Yap</span>
                    </button>
                  </>
                ) : (
                  // Giriş yapılmamış kullanıcı - Mobile
                  <div className="grid grid-cols-2 gap-2">
                    <Link 
                      to="/login" 
                      className="flex items-center justify-center space-x-2 py-4 text-slate-700 hover:text-slate-800 hover:bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 font-medium text-sm bg-white"
                      onClick={handleMobileMenuClose}
                    >
                      <i className="fa-regular fa-user text-sm"></i>
                      <span>Giriş</span>
                    </Link>
                    
                    <Link 
                      to="/register" 
                      className="flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl hover:from-slate-700 hover:to-slate-600 transition-all duration-200 font-medium text-sm shadow-sm"
                      onClick={handleMobileMenuClose}
                    >
                      <i className="fa-solid fa-user-plus text-sm"></i>
                      <span>Kayıt</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}