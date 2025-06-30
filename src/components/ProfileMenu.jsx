import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { authService } from '../api/authService';
import { toast } from 'react-toastify';

const ProfileMenu = ({ currentUser, onLogout, className = "" }) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const userDropdownRef = useRef(null);

  // Dropdown dışına tıklanınca kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Kullanıcı bilgileri helper fonksiyonları
  const getDisplayName = () => {
    if (!currentUser) return '';
    return `${currentUser.firstName} ${currentUser.lastName}`;
  };

  // Kullanıcının ad ve soyad baş harflerini al
  const getInitials = () => {
    if (!currentUser) return '??';
    
    const firstName = currentUser.firstName || '';
    const lastName = currentUser.lastName || '';
    
    const firstInitial = firstName.charAt(0) || '';
    const lastInitial = lastName.charAt(0) || '';
    
    return `${firstInitial}${lastInitial}`.toUpperCase() || '??';
  };

  // Logout modal açma
  const handleLogoutClick = () => {
    setShowLogoutModal(true);
    setIsUserDropdownOpen(false);
  };

  // Logout modal kapatma
  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  // Logout onayı
  const handleLogoutConfirm = async () => {
    setShowLogoutModal(false);
    
    try {
      await authService.logout();
      
      toast.success('Başarıyla çıkış yaptınız!', {
        position: "top-right",
        autoClose: 2000,
      });
      
      // Parent component'e logout durumunu bildir
      if (onLogout) {
        onLogout();
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Çıkış işlemi sırasında bir hata oluştu.');
    }
  };

  // Dropdown menü item'larına tıklanınca dropdown'u kapat
  const handleMenuItemClick = () => {
    setIsUserDropdownOpen(false);
  };

  if (!currentUser) {
    return null;
  }

  return (
    <>
      <div className={`relative ${className}`} ref={userDropdownRef}>
        {/* Profile Button */}
        <button
          onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
          className="flex items-center space-x-2 px-3 py-2 text-slate-700 hover:text-slate-800 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm transition-all duration-200"
        >
          {/* Kullanıcı Baş Harfleri Avatar */}
          <div className="w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm border-2 border-white">
            {getInitials()}
          </div>
          <div className="hidden xl:flex flex-col items-start min-w-0">
            <span className="text-xs text-gray-500 leading-tight">Merhaba</span>
            <span className="font-medium text-sm text-slate-800 truncate max-w-20">
              {currentUser?.firstName}
            </span>
          </div>
          <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 ${isUserDropdownOpen ? 'rotate-180' : ''}`}></i>
        </button>

        {/* Dropdown Menu */}
        {isUserDropdownOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-[100] backdrop-blur-sm"
               style={{ zIndex: 100 }}>
            
            {/* User Info Header */}
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                {/* Büyük Avatar - Ad Soyad Baş Harfleri */}
                <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg border-3 border-white">
                  {getInitials()}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-900 truncate">{getDisplayName()}</p>
                  <p className="text-xs text-gray-500 truncate">{currentUser?.email}</p>
                </div>
              </div>
            </div>
            
            {/* Menu Items */}
            <div className="py-1">
              <Link
                to="/profile"
                className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                onClick={handleMenuItemClick}
              >
                <i className="fa-regular fa-user mr-3 text-blue-600 w-4"></i>
                Hesap Bilgilerim
              </Link>

              <Link
                to="/orders"
                className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 transition-all duration-200"
                onClick={handleMenuItemClick}
              >
                <i className="fa-solid fa-shopping-bag mr-3 text-orange-600 w-4"></i>
                Siparişlerim
              </Link>

              <Link
                to="/wishlist"
                className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
                onClick={handleMenuItemClick}
              >
                <i className="fa-regular fa-heart mr-3 text-red-600 w-4"></i>
                Favorilerim
              </Link>

              <Link
                to="/reviews"
                className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-all duration-200"
                onClick={handleMenuItemClick}
              >
                <i className="fa-solid fa-star mr-3 text-yellow-600 w-4"></i>
                Değerlendirmelerim
              </Link>

              <Link
                to="/coupons"
                className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200"
                onClick={handleMenuItemClick}
              >
                <i className="fa-solid fa-ticket mr-3 text-purple-600 w-4"></i>
                Kuponlarım
              </Link>

              <Link
                to="/points"
                className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all duration-200"
                onClick={handleMenuItemClick}
              >
                <i className="fa-solid fa-coins mr-3 text-green-600 w-4"></i>
                Puan Durumum
              </Link>

              <div className="border-t border-gray-100 my-1"></div>

              <Link
                to="/support"
                className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-800 transition-all duration-200"
                onClick={handleMenuItemClick}
              >
                <i className="fa-solid fa-headset mr-3 text-gray-600 w-4"></i>
                Müşteri Hizmetleri
              </Link>

              <Link
                to="/settings"
                className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-800 transition-all duration-200"
                onClick={handleMenuItemClick}
              >
                <i className="fa-solid fa-cog mr-3 text-gray-600 w-4"></i>
                Ayarlar
              </Link>

              <div className="border-t border-gray-100 my-1"></div>

              <button
                onClick={handleLogoutClick}
                className="flex items-center w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
              >
                <i className="fa-solid fa-sign-out-alt mr-3 text-red-600 w-4"></i>
                Çıkış Yap
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[200] animate-in fade-in duration-200"
             style={{ zIndex: 200 }}>
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-md w-full mx-4 animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-center pt-6 pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-50 rounded-full flex items-center justify-center mb-2">
                <i className="fa-solid fa-sign-out-alt text-2xl text-red-500"></i>
              </div>
            </div>

            {/* Modal Content */}
            <div className="px-6 pb-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Çıkış Yapmak İstediğinizden Emin misiniz?
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Hesabınızdan çıkış yapacaksınız. Tekrar giriş yapmak için kullanıcı adı ve şifrenizi girmeniz gerekecek.
              </p>

              {/* User Info Card */}
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-4 mb-6 border border-gray-100">
                <div className="flex items-center space-x-3">
                  {/* Modal'daki Avatar - Ad Soyad Baş Harfleri */}
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg border-2 border-white">
                    {getInitials()}
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm truncate">{getDisplayName()}</p>
                    <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={handleLogoutCancel}
                  className="flex-1 px-4 py-3 text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium text-sm transition-all duration-200 border border-gray-200"
                >
                  <i className="fa-solid fa-times mr-2 text-xs"></i>
                  İptal Et
                </button>
                <button
                  onClick={handleLogoutConfirm}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-medium text-sm transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <i className="fa-solid fa-sign-out-alt mr-2 text-xs"></i>
                  Evet, Çıkış Yap
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// PropTypes tanımlaması
ProfileMenu.propTypes = {
  currentUser: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string
  }),
  onLogout: PropTypes.func,
  className: PropTypes.string
};

// Default props
ProfileMenu.defaultProps = {
  currentUser: null,
  onLogout: () => {},
  className: ""
};

export default ProfileMenu;