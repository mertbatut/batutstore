import React from 'react'
import Footer from '../components/Footer'
import Team from '../components/Team'
import Brands from '../components/Brands'
import Header from '../components/Header'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductPage from './ProductDetailPage'

export default function About() {
    let { path, url } = useRouteMatch();
    
    return (
        <div className="min-h-screen bg-white">
            <nav></nav>
            <Switch>
                <Route path={`${path}/ProductPage`} component={ProductPage} />
            </Switch>
            
            <Header />
            
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between py-16 lg:py-24 gap-12 lg:gap-20">
                        
                        {/* Text Content */}
                        <div className="flex-1 max-w-xl lg:max-w-none">
                            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
                                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200">
                                    <span className="text-sm font-semibold text-blue-700 tracking-wide uppercase">
                                        About Company
                                    </span>
                                </div>
                                
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    About
                                    <span className="block text-blue-600">Our Story</span>
                                </h1>
                                
                                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                                    We know how large objects will act, but things on a small scale just do not act that way.
                                </p>
                                
                                <div className="pt-4">
                                    <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                                        <span>Get Quote Now</span>
                                        <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Image Content */}
                        <div className="flex-1 max-w-lg lg:max-w-none">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 opacity-10"></div>
                                <img 
                                    className="relative w-full h-auto rounded-3xl shadow-2xl object-cover" 
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Team collaboration" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Statement Section */}
            <section className="py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-50 border border-red-200">
                                <span className="text-sm font-semibold text-red-600 tracking-wide uppercase">
                                    Problems Trying
                                </span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                            </h2>
                        </div>
                        
                        <div className="space-y-4">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Problems trying to resolve the conflict between the two major realms of Classical physics: 
                                Newtonian mechanics and quantum mechanics. The two theories are fundamentally different 
                                and cannot be easily reconciled.
                            </p>
                            <p className="text-base text-gray-500">
                                We're working on innovative solutions to bridge these gaps and create meaningful experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        
                        <div className="text-center group">
                            <div className="mb-4">
                                <h3 className="text-4xl lg:text-6xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                    15K
                                </h3>
                            </div>
                            <p className="text-sm lg:text-base text-gray-600 font-medium uppercase tracking-wide">
                                Happy Customers
                            </p>
                        </div>
                        
                        <div className="text-center group">
                            <div className="mb-4">
                                <h3 className="text-4xl lg:text-6xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                    150K
                                </h3>
                            </div>
                            <p className="text-sm lg:text-base text-gray-600 font-medium uppercase tracking-wide">
                                Monthly Visitors
                            </p>
                        </div>
                        
                        <div className="text-center group">
                            <div className="mb-4">
                                <h3 className="text-4xl lg:text-6xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                    15
                                </h3>
                            </div>
                            <p className="text-sm lg:text-base text-gray-600 font-medium uppercase tracking-wide">
                                Countries Worldwide
                            </p>
                        </div>
                        
                        <div className="text-center group">
                            <div className="mb-4">
                                <h3 className="text-4xl lg:text-6xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                    100+
                                </h3>
                            </div>
                            <p className="text-sm lg:text-base text-gray-600 font-medium uppercase tracking-wide">
                                Top Partners
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative max-w-5xl mx-auto">
                        
                        {/* Video Container */}
                        <div className="relative group cursor-pointer">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img 
                                    className="w-full h-[300px] sm:h-[400px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105" 
                                    src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Company video thumbnail" 
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-20"></div>
                                
                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-20 h-20 lg:w-24 lg:h-24 bg-blue-600 hover:bg-blue-700 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 group-hover:shadow-blue-500/25">
                                        <i className="fa-solid fa-play text-white text-xl lg:text-2xl ml-1"></i>
                                    </button>
                                </div>
                            </div>
                            
                            {/* Video Info */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <h3 className="font-semibold text-gray-900 mb-1">Watch Our Story</h3>
                                    <p className="text-sm text-gray-600">Discover how we're building the future</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <Team />

            {/* Brands Section */}
            <section className="py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Big Companies Are Here
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>
                    <Brands />
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-16 lg:py-20 bg-blue-600 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-blue-700 opacity-90"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full">
                        <img 
                            className="w-full h-full object-cover opacity-30" 
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Work with us background" 
                        />
                    </div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white bg-opacity-20 border border-white border-opacity-30">
                                    <span className="text-sm font-semibold text-white tracking-wide uppercase">
                                        Work With Us
                                    </span>
                                </div>
                                
                                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                                    Now Let's Grow Yours
                                </h2>
                                
                                <p className="text-lg text-blue-100 leading-relaxed">
                                    The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century.
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200">
                                    <span>Get Started</span>
                                    <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                                </button>
                                
                                <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg">
                                    <i className="fa-solid fa-phone mr-2 text-sm"></i>
                                    <span>Contact Us</span>
                                </button>
                            </div>
                        </div>
                        
                        <div className="lg:flex lg:justify-end">
                            <div className="relative max-w-md">
                                <div className="absolute inset-0 bg-white rounded-3xl transform rotate-3 opacity-10"></div>
                                <img 
                                    className="relative w-full h-auto rounded-3xl shadow-2xl" 
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Professional woman" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}