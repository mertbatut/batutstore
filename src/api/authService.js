// api/authService.js
import axios from 'axios';

// Backend API URL - doğru port
const API_BASE_URL = 'https://localhost:7241/api';

// Axios instance oluştur
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 saniye timeout
});

// Request interceptor - her istekte token ekle
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor - 401 durumunda token'ı temizle
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// Auth Service
export const authService = {
    // Kayıt ol
    register: async (userData) => {
        try {
            const response = await apiClient.post('/auth/register', userData);
            
            if (response.data.success) {
                // Token'ı ve kullanıcı bilgilerini localStorage'a kaydet
                localStorage.setItem('token', response.data.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.data.user));
            }
            
            return response.data;
        } catch (error) {
            console.error('API Error:', error);
            
            // Backend'den gelen hata mesajını logla
            if (error.response?.data) {
                console.error('Backend Error:', error.response.data);
                return error.response.data; // Throw yerine return
            }
            
            // Network veya diğer hatalar için
            return { 
                success: false, 
                message: error.message || 'Kayıt işlemi başarısız oldu.',
                errors: [error.message || 'Bağlantı hatası']
            };
        }
    },

    // Giriş yap
    login: async (credentials) => {
        try {
            const response = await apiClient.post('/auth/login', credentials);
            
            if (response.data.success) {
                // Token'ı ve kullanıcı bilgilerini localStorage'a kaydet
                localStorage.setItem('token', response.data.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.data.user));
            }
            
            return response.data;
        } catch (error) {
            throw error.response?.data || { success: false, message: 'Giriş işlemi başarısız oldu.' };
        }
    },

    // Çıkış yap
    logout: async () => {
        try {
            await apiClient.post('/auth/logout');
        } catch (error) {
            console.log('Logout error:', error);
        } finally {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    },

    // Profil bilgilerini al
    getProfile: async () => {
        try {
            const response = await apiClient.get('/auth/profile');
            return response.data;
        } catch (error) {
            throw error.response?.data || { success: false, message: 'Profil bilgileri alınamadı.' };
        }
    },

    // Token doğrula
    validateToken: async () => {
        try {
            const response = await apiClient.get('/auth/validate-token');
            return response.data;
        } catch (error) {
            throw error.response?.data || { success: false, message: 'Token geçersiz.' };
        }
    },

    // Kullanıcının giriş yapıp yapmadığını kontrol et
    isAuthenticated: () => {
        const token = localStorage.getItem('token');
        return !!token;
    },

    // Kullanıcı bilgilerini al
    getCurrentUser: () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    // Token'ı al
    getToken: () => {
        return localStorage.getItem('token');
    }
};

// Şehirler listesi (frontend için)
export const cities = [
    'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
    'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa',
    'Çanakkale', 'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan',
    'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkâri', 'Hatay', 'Isparta',
    'Mersin', 'İstanbul', 'İzmir', 'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir',
    'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla',
    'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop',
    'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak', 'Van',
    'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman', 'Şırnak',
    'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'
];

export default authService;