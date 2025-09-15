"use client";

import type { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutUs(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation Bar */}
      <nav className="bg-blue-50 shadow-md p-3 sm:p-4 rounded-2xl animate-fade-in">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-3 sm:gap-4">
          <div className="flex items-center">
            <Image 
              src="/Hospital.png" 
              alt="Kulshrestha Hospital Logo" 
              width={140} 
              height={140} 
              className="rounded-2xl"
            />
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-evenly gap-3 sm:gap-4 w-full">
            {/* Phone Link */}
            <Link 
              href="tel:05623568817" 
              className="flex items-center bg-white rounded-2xl shadow-md p-2 sm:p-3 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-300 w-full sm:w-auto"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-2 sm:mr-3">
                <span className="text-xs text-gray-500">📞</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-800 text-sm sm:text-base">0562 356 8817</div>
                <div className="text-xs text-gray-600">For Emergency</div>
              </div>
            </Link>
            
            {/* Email Link */}
            <Link 
              href="mailto:unnatkulshrestha81@gmail.com" 
              className="flex items-center bg-white rounded-2xl shadow-md p-2 sm:p-3 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-300 w-full sm:w-auto"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-2 sm:mr-3">
                <span className="text-xs text-gray-500">✉️</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-800 text-sm sm:text-base">Mail us</div>
                <div className="text-xs text-gray-600">Email us for queries</div>
              </div>
            </Link>
            
            {/* Location Link */}
            <Link 
              href="https://maps.app.goo.gl/2fJXKTNuiBWDbqfm6" 
              className="flex items-center bg-white rounded-2xl shadow-md p-2 sm:p-3 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-300 w-full sm:w-auto"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-2 sm:mr-3">
                <span className="text-xs text-gray-500">📍</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-800 text-sm sm:text-base">Saheed Nagar</div>
                <div className="text-xs text-gray-600">Agra</div>
              </div>
            </Link>
            
            {/* Book Appointment Button */}
            <Link 
              href="/#book-appointment" 
              className="flex items-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-2 sm:p-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-300 w-full sm:w-auto group"
            >
              <div className="bg-white rounded-xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-2 sm:mr-3 transition-all duration-300 group-hover:rotate-12">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-sm sm:text-base">Book Appointment</div>
                <div className="text-xs text-blue-100">Schedule a visit</div>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Sub Navigation Bar */}
      <nav className="bg-white shadow-sm py-2 sm:py-3 rounded-3xl my-2 sm:my-3 mx-4 sm:mx-8 md:mx-16">
        {/* Desktop Navigation */}
        <div className="hidden md:block container mx-auto">
          <ul className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4">
            <li>
              <Link href="/" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link href="/about" className="block px-3 py-2 text-sm sm:text-base font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">About Us</Link>
            </li>
            <li>
              <Link href="/speciality" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Our Specialties</Link>
            </li>
            <li>
              <Link href="/services" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Our Services</Link>
            </li>
            <li>
              <Link href="/doctor" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Meet Our Doctor</Link>
            </li>
            <li>
              <Link href="/contact" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Contact Us</Link>
            </li>
          </ul>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden container mx-auto px-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-full py-2 bg-blue-50 rounded-2xl text-blue-600 font-medium"
          >
            <span>Menu</span>
            <svg className={`ml-2 w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 pt-20 px-4 shadow-lg overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full bg-gray-100"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="block px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 rounded-2xl">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="block px-4 py-3 text-base font-medium text-blue-600 bg-blue-50 rounded-2xl">About Us</Link>
                </li>
                <li>
                  <Link href="/speciality" className="block px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 rounded-2xl">Our Specialties</Link>
                </li>
                <li>
                  <Link href="/services" className="block px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 rounded-2xl">Our Services</Link>
                </li>
                <li>
                  <Link href="/doctor" className="block px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 rounded-2xl">Meet Our Doctor</Link>
                </li>
                <li>
                  <Link href="/contact" className="block px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 rounded-2xl">Contact Us</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-20 px-4 mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300/20 rounded-full blur-lg"></div>
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover the story behind Kulshrestha Hospital - three decades of excellence in pediatric care
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
        
        {/* Content Container */}
        <div className="w-full px-4 py-8 max-w-7xl mx-auto">
          
          {/* About Us Content */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 w-full mb-16 transition-all duration-300 hover:shadow-2xl border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
            <div className="flex flex-col md:flex-row gap-10 items-center mb-12 relative z-10">
              <div className="md:w-1/2 w-full">
                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
                  <Image 
                    src="/unnamed.webp" 
                    alt="Kulshrestha Hospital" 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                    className="object-cover w-full h-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                      Since 1990
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block">
                  Our Legacy
                  <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></div>
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Kulshrestha Hospital has been a trusted name in pediatric healthcare in Agra for over 30 years. 
                  Our commitment to excellence and compassionate care has made us the preferred choice for families 
                  seeking the best medical treatment for their children.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  With state-of-the-art facilities and a team of experienced pediatricians, we provide comprehensive 
                  healthcare services tailored specifically for infants, children, and adolescents.
                </p>
                
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                  <div className="flex items-start p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <div className="bg-blue-600 rounded-full p-3 mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">Comprehensive Care</h3>
                      <p className="text-gray-600 text-sm mt-1">End-to-end medical services</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <div className="bg-blue-600 rounded-full p-3 mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">Expert Team</h3>
                      <p className="text-gray-600 text-sm mt-1">Highly qualified pediatricians</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <div className="bg-blue-600 rounded-full p-3 mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 14.828a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">Modern Facilities</h3>
                      <p className="text-gray-600 text-sm mt-1">Advanced medical equipment</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <div className="bg-blue-600 rounded-full p-3 mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">Community Trust</h3>
                      <p className="text-gray-600 text-sm mt-1">Three decades of service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-10 relative z-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center relative inline-block mx-auto">
                Our Mission
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-blue-500 rounded-full"></div>
              </h2>
              <p className="text-gray-600 text-center text-lg max-w-4xl mx-auto leading-relaxed">
                To provide exceptional pediatric care with compassion and expertise, ensuring the health and well-being 
                of every child who walks through our doors. We are committed to staying at the forefront of medical 
                advancements while maintaining the personal touch that has defined our practice for over three decades.
              </p>
            </div>
          </div>

          {/* Facilities Section */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 w-full mb-16 transition-all duration-300 hover:shadow-2xl border border-blue-100 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-50 to-transparent rounded-full -translate-y-16 -translate-x-16"></div>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block">
                  Our Facilities
                  <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></div>
                </h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <div className="bg-blue-600 rounded-full p-2 mr-3 flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                      </div>
                      Accessibility
                    </h3>
                    <ul className="list-disc pl-14 space-y-2 text-gray-600">
                      <li className="pl-2">Wheel Chair Accessible In Car Parking</li>
                      <li className="pl-2">Wheel Chair Accessible Entrance And Exit</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <div className="bg-blue-600 rounded-full p-2 mr-3 flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      Location
                    </h3>
                    <p className="text-gray-600 pl-14">
                      Kulshrestha Hospital is located in Rajpur, Agra, making it easily accessible to patients from neighbouring cities and towns.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 w-full">
                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
                  <Image 
                    src="/Screenshot 2025-09-15 032302.png" 
                    alt="Hospital Facilities" 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* History and Commitment Section */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 w-full mb-16 transition-all duration-300 hover:shadow-2xl border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-50 to-transparent rounded-full -translate-y-12 -translate-x-12"></div>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2 w-full">
                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
                  <Image 
                    src="/neonatal-and-pediatric-icu-with-ventilator.jpg" 
                    alt="Hospital History" 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block">
                  History and Commitment
                  <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></div>
                </h2>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <p className="text-gray-600 leading-relaxed">
                    At Kulshrestha Hospital, we are committed to providing exceptional healthcare services to patients of all ages. The hospital&#39;s team of professionals is highly skilled and well-versed in the latest medical technologies and treatments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 w-full mb-16 transition-all duration-300 hover:shadow-2xl border border-blue-100 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-28 h-28 bg-gradient-to-bl from-blue-50 to-transparent rounded-full translate-x-14"></div>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block">
                  Services Offered
                  <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></div>
                </h2>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    At Kulshrestha Hospital, patients can expect to receive top-notch treatments and surgeries. The hospital offers 
                    a range of services designed to meet the diverse healthcare needs of our community.
                  </p>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Our Approach:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-blue-600 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-600">High-quality healthcare services for patients of all ages</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-600 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-600">Top-notch treatments and surgeries</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-600 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-600">Comprehensive services to support patient health and well-being</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 w-full">
                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
                  <Image 
                    src="/download.jpeg" 
                    alt="Hospital Services" 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 w-full mb-16 transition-all duration-300 hover:shadow-2xl border border-blue-100 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-tl from-indigo-50 to-transparent rounded-full translate-y-18 translate-x-18"></div>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2 w-full">
                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
                  <Image 
                    src="/Best Pediatric Doctor in Jaipur - Expert Pediatric Care at Saket Hospital.jpeg" 
                    alt="Hospital Team" 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block">
                  Our Team
                  <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></div>
                </h2>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <p className="text-gray-600 leading-relaxed">
                    Our hospital&#39;s commitment to excellence is reflected in our state-of-the-art facilities, advanced medical equipment, and a patient-centric approach that ensures the highest level of care and comfort for every individual who walks through our doors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 w-full transition-all duration-300 hover:shadow-2xl border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 w-20 h-20 bg-gradient-to-b from-purple-50 to-transparent rounded-full -translate-y-10 -translate-x-10"></div>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2 w-full">
                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105 bg-gradient-to-br from-blue-50 to-indigo-100">
                  <Image 
                    src="/Gemini_Generated_Image_87mjdn87mjdn87mj.png" 
                    alt="Hospital Summary" 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                    className="object-contain p-4 w-full h-full"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block">
                  Summary
                  <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></div>
                </h2>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Kulshrestha Hospital is a dedicated hospital in Saheed Nagar, Agra, that offers high-quality healthcare 
                    services to patients of all ages. The hospital&#39;s team of professionals is highly skilled and well-versed 
                    in their respective domains. Patients can expect to receive top-notch treatments, surgeries, and procedures 
                    at the hospital. Additionally, Kulshrestha Hospital provides comprehensive services to support patient 
                    health and well-being. The hospital offers a variety of packages tailored to patients&#39; needs and budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Logo and Hospital Info - Left Side */}
            <div className="lg:w-1/2 animate-fade-in-up">
              <div className="flex items-center mb-8">
                <div className="mr-8 transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/Hospital.png" 
                    alt="Kulshrestha Hospital Logo" 
                    width={160} 
                    height={160} 
                    className="rounded-3xl shadow-2xl"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Kulshrestha Hospital
                  </h3>
                  <p className="text-gray-300 max-w-md text-lg">
                    Best Child Care in Agra with Experience of over 30 years
                  </p>
                </div>
              </div>
              
              <p className="text-gray-400 max-w-lg mb-8 text-lg leading-relaxed">
                Providing exceptional pediatric care with compassion and expertise for over three decades. 
                Our dedicated team of pediatricians ensures the health and well-being of your children.
              </p>
              
              <div className="flex space-x-6">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
                  <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 p-4 rounded-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
                  <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 p-4 rounded-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
                  <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.029 6.185.484 8.549 4.385 8.816 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Contact Details - Right Side */}
            <div className="lg:w-1/2">
              <h4 className="text-2xl font-bold mb-8 relative inline-block animate-fade-in-up">
                Contact Us
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="tel:05623568817" className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group block">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-3 rounded-xl mr-4 group-hover:rotate-12 transition-transform duration-300">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <h5 className="font-bold text-lg">Phone</h5>
                  </div>
                  <p className="text-gray-300 mb-2 text-lg font-medium">0562 356 8817</p>
                  <p className="text-gray-400 text-sm">24/7 Emergency Support</p>
                </a>
                
                <a href="mailto:unnatkulshrestha81@gmail.com" className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group block">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-3 rounded-xl mr-4 group-hover:rotate-12 transition-transform duration-300">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 001.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <h5 className="font-bold text-lg">Email</h5>
                  </div>
                  <p className="text-gray-300 mb-2 text-lg font-medium">unnatkulshrestha81@gmail.com</p>
                  <p className="text-gray-400 text-sm">General Inquiries</p>
                </a>
                
                <a href="https://maps.app.goo.gl/2fJXKTNuiBWDbqfm6" target="_blank" rel="noopener noreferrer" className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group block">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-3 rounded-xl mr-4 group-hover:rotate-12 transition-transform duration-300">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <h5 className="font-bold text-lg">Location</h5>
                  </div>
                  <p className="text-gray-300 mb-2 text-lg font-medium">Saheed Nagar</p>
                  <p className="text-gray-400 text-sm">Agra, Uttar Pradesh</p>
                </a>
                
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-3 rounded-xl mr-4 group-hover:rotate-12 transition-transform duration-300">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h5 className="font-bold text-lg">Working Hours</h5>
                  </div>
                  <p className="text-gray-300 mb-2 text-lg font-medium">Open 24 Hours</p>
                  <p className="text-gray-400 text-sm">7 Days a Week</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0 animate-fade-in">
              © {new Date().getFullYear()} Kulshrestha Hospital. All rights reserved.
            </p>
            <div className="flex space-x-8 animate-fade-in-up">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors relative group">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-white transition-colors relative group">
                Sitemap
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}