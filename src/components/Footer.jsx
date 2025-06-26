import { Button } from "@material-tailwind/react";

export default function Footer() {
    return (
        <footer className="bg-[#252B42] text-white">
            {/* Top Section - CTA */}
            <div className="border-b border-gray-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                                BatutStore ile Alışverişin Keyfini Çıkarın
                            </h3>
                            <p className="text-gray-300 text-base">
                                Kaliteli ürünler, hızlı teslimat ve mükemmel müşteri hizmeti
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <a href="/contact">
                                <Button 
                                    size="lg" 
                                    color="blue"
                                    className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-200"
                                >
                                    İletişime Geç
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <h5 className="font-bold text-lg mb-4">Şirket Bilgileri</h5>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <a href="/about" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    Hakkımızda
                                </a>
                            </li>
                            <li>
                                <a href="/careers" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    Kariyer
                                </a>
                            </li>
                            <li>
                                <a href="/team" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    Ekibimiz
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="lg:col-span-1">
                        <h5 className="font-bold text-lg mb-4">Müşteri Hizmetleri</h5>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <a href="/help" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    Yardım Merkezi
                                </a>
                            </li>
                            <li>
                                <a href="/returns" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    İade & Değişim
                                </a>
                            </li>
                            <li>
                                <a href="/shipping" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    Kargo Bilgileri
                                </a>
                            </li>
                            <li>
                                <a href="/faq" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    Sıkça Sorulan Sorular
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="lg:col-span-1">
                        <h5 className="font-bold text-lg mb-4">Kategoriler</h5>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <a href="/electronics" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    Elektronik
                                </a>
                            </li>
                            <li>
                                <a href="/fashion" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    Moda & Giyim
                                </a>
                            </li>
                            <li>
                                <a href="/home" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    Ev & Yaşam
                                </a>
                            </li>
                            <li>
                                <a href="/sports" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    Spor & Outdoor
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="lg:col-span-1">
                        <h5 className="font-bold text-lg mb-4">Yasal</h5>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <a href="/privacy" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    Gizlilik Politikası
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    Kullanım Koşulları
                                </a>
                            </li>
                            <li>
                                <a href="/cookies" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    Çerez Politikası
                                </a>
                            </li>
                            <li>
                                <a href="/gdpr" className="hover:text-white transition-colors duration-200 flex items-center">
                                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-400"></i>
                                    KVKK
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <h5 className="font-bold text-lg mb-4">İletişim</h5>
                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-start">
                                <i className="fa-solid fa-phone text-blue-400 mr-3 mt-1 flex-shrink-0"></i>
                                <div>
                                    <p className="hover:text-white transition-colors duration-200 cursor-pointer">
                                        +90 (212) 555-0103
                                    </p>
                                    <p className="text-sm text-gray-400">Pazartesi - Cuma: 09:00-18:00</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <i className="fa-solid fa-envelope text-blue-400 mr-3 mt-1 flex-shrink-0"></i>
                                <div>
                                    <p className="hover:text-white transition-colors duration-200 cursor-pointer">
                                        info@batutstore.com
                                    </p>
                                    <p className="text-sm text-gray-400">7/24 Destek</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <i className="fa-solid fa-location-dot text-blue-400 mr-3 mt-1 flex-shrink-0"></i>
                                <div>
                                    <p className="hover:text-white transition-colors duration-200">
                                        İstanbul, Türkiye<br />
                                        Merkez Mahallesi No: 123
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="mt-6">
                            <h6 className="font-semibold mb-3">Bülten Aboneliği</h6>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="E-posta adresiniz"
                                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 whitespace-nowrap">
                                    Abone Ol
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        
                        {/* Copyright */}
                        <div className="text-gray-400 text-center md:text-left">
                            <p>&copy; 2025 BatutStore. Tüm hakları saklıdır.</p>
                        </div>

                        {/* Social Media */}
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-400 text-sm mr-2">Bizi takip edin:</span>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                <i className="fab fa-facebook-f text-lg"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                <i className="fab fa-instagram text-lg"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                <i className="fab fa-twitter text-lg"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                <i className="fab fa-linkedin-in text-lg"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                <i className="fab fa-youtube text-lg"></i>
                            </a>
                        </div>

                        {/* Payment Methods */}
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-400 text-sm">Ödeme:</span>
                            <div className="flex items-center space-x-2">
                                <i className="fab fa-cc-visa text-2xl text-blue-600"></i>
                                <i className="fab fa-cc-mastercard text-2xl text-red-500"></i>
                                <i className="fab fa-cc-paypal text-2xl text-blue-500"></i>
                                <i className="fab fa-apple-pay text-2xl text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-50"
                aria-label="Sayfa başına dön"
            >
                <i className="fa-solid fa-chevron-up text-lg"></i>
            </button>
        </footer>
    );
}