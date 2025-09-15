"use client";

import type { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function OurServices(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Services data
  const services = [
    {
      title: "ICU",
      description: "Advanced Intensive Care Unit facilities with state-of-the-art medical equipment and round-the-clock specialized care for critically ill children.",
      icon: (
        <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "24/7 OPD",
      description: "Round-the-clock Outpatient Department services ensuring immediate medical attention whenever your child needs care.",
      icon: (
        <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Budget Friendly",
      description: "Affordable healthcare services without compromising on quality, making pediatric care accessible to all families.",
      icon: (
        <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Pathology",
      description: "Comprehensive diagnostic laboratory services with accurate testing and prompt results for precise medical decisions.",
      icon: (
        <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "X-Rays",
      description: "Modern radiology services with digital X-ray technology for quick and accurate diagnosis of various medical conditions.",
      icon: (
        <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Wide Network of Doctors",
      description: "Access to a vast network of specialized pediatricians and medical experts for comprehensive healthcare solutions.",
      icon: (
        <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

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
              <Link href="/about" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">About Us</Link>
            </li>
            <li>
              <Link href="/speciality" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Our Specialties</Link>
            </li>
            <li>
              <Link href="/services" className="block px-3 py-2 text-sm sm:text-base font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Our Services</Link>
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
            <div className="absolute top-0 left-0 w-full h-full bg-white z-50 pt-20 px-4 shadow-lg">
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
                  <Link href="/about" className="block px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 rounded-2xl">About Us</Link>
                </li>
                <li>
                  <Link href="/speciality" className="block px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 rounded-2xl">Our Specialties</Link>
                </li>
                <li>
                  <Link href="/services" className="block px-4 py-3 text-base font-medium text-blue-600 bg-blue-50 rounded-2xl">Our Services</Link>
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
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare services designed to meet all your child&#39;s medical needs with compassion and expertise
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto mt-8 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="w-full px-4 py-8 max-w-7xl mx-auto">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 group"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-50 rounded-full p-4 group-hover:bg-blue-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Services Images Section */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 w-full mb-16 transition-all duration-300 hover:shadow-2xl border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
            <div className="flex flex-col md:flex-row gap-10 items-center mb-12 relative z-10">
              <div className="md:w-1/2">
                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
                  <Image 
                    src="/neonatal-and-pediatric-icu-with-ventilator.jpg" 
                    alt="ICU Services" 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                      Advanced ICU Care
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block">
                  Comprehensive Medical Services
                  <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></div>
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Our hospital provides a wide range of medical services designed to cater to all your child&apos;s healthcare needs. With modern facilities and a team of experienced professionals, we ensure the highest standard of care for every patient.
                </p>
                
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                  <div className="flex items-start p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <div className="bg-blue-600 rounded-full p-3 mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">24/7 Availability</h3>
                      <p className="text-gray-600 text-sm mt-1">Round-the-clock medical care</p>
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
                      <p className="text-gray-600 text-sm mt-1">Highly qualified specialists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-10 relative z-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center relative inline-block mx-auto">
                Why Choose Our Services?
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-blue-500 rounded-full"></div>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-600 rounded-full p-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Budget Friendly</h3>
                  <p className="text-gray-600 text-center">
                    Affordable healthcare solutions without compromising on quality, making medical care accessible to all families.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-600 rounded-full p-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Advanced Technology</h3>
                  <p className="text-gray-600 text-center">
                    State-of-the-art medical equipment and facilities for accurate diagnosis and effective treatment.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-600 rounded-full p-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Safe & Secure</h3>
                  <p className="text-gray-600 text-center">
                    Maintaining the highest safety standards with sterile environments and well-trained medical staff.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl border border-blue-100 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-50 to-transparent rounded-full -translate-y-16 -translate-x-16"></div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2">
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
                    <Image 
                      src="/Screenshot 2025-09-15 032302.png" 
                      alt="Pathology Services" 
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Comprehensive Pathology</h3>
                  <p className="text-gray-600 mb-4">
                    Our advanced diagnostic laboratory provides accurate testing with prompt results for precise medical decisions.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-1 mr-2">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span>Blood tests and analysis</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-1 mr-2">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span>Urine and stool examinations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-1 mr-2">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span>Specialized diagnostic tests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-blue-50 to-transparent rounded-full translate-x-14"></div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2 order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Advanced X-Ray Services</h3>
                  <p className="text-gray-600 mb-4">
                    Our modern radiology department uses digital X-ray technology for quick and accurate diagnosis of various medical conditions.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-1 mr-2">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span>Digital X-ray imaging</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-1 mr-2">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span>Quick and accurate results</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-1 mr-2">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span>Specialized pediatric imaging</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
                    <Image 
                      src="/Best Pediatric Doctor in Jaipur - Expert Pediatric Care at Saket Hospital.jpeg" 
                      alt="X-Ray Services" 
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
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
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 p-4 rounded-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
                  <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
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