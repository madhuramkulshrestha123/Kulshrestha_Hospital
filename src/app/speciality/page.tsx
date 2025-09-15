"use client";

import type { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function OurSpeciality(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cards data for speciality features
  const specialityCards = [
    {
      title: "24/7 Emergency Services",
      description: "Round-the-clock emergency care for immediate medical attention whenever you need it.",
      icon: (
        <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Hospitalization Facilities",
      description: "Comfortable inpatient care with modern amenities for children requiring extended medical attention.",
      icon: (
        <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Phototherapy & Warmer",
      description: "Advanced neonatal care equipment for treating jaundice and maintaining optimal body temperature.",
      icon: (
        <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Nebulization Services",
      description: "Effective respiratory treatment for children with breathing difficulties and respiratory conditions.",
      icon: (
        <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Child Vaccination",
      description: "Comprehensive immunization programs to protect children from preventable diseases.",
      icon: (
        <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-blue-50">
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
              <Link href="/speciality" className="block px-3 py-2 text-sm sm:text-base font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Our Specialties</Link>
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
                  <Link href="/speciality" className="block px-4 py-3 text-base font-medium text-blue-600 bg-blue-50 rounded-2xl">Our Specialties</Link>
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
        <div className="w-full px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16 mt-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Specialities</h1>
            <div className="w-32 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Leading pediatrician practicing for over 32 years with comprehensive healthcare facilities for children
            </p>
          </div>

          {/* Speciality Cards Section */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialityCards.map((card, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 group"
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-blue-50 rounded-full p-4 group-hover:bg-blue-100 transition-colors duration-300">
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 text-center mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl shadow-lg p-8 md:p-12 mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden">
                    <Image 
                      src="/Best Pediatric Doctor in Jaipur - Expert Pediatric Care at Saket Hospital.jpeg" 
                      alt="Kulshrestha Hospital" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                    32+ Years
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Leading Pediatrician with 32+ Years of Experience</h2>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  With over three decades of dedicated service in pediatric healthcare, our leading pediatrician has been 
                  at the forefront of child care in Agra. Our extensive experience ensures that your child receives the 
                  highest quality medical attention with a deep understanding of pediatric health needs.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our commitment to excellence has made us a trusted name in the community, providing comprehensive 
                  healthcare services that encompass preventive care, diagnosis, treatment, and follow-up support for 
                  children of all ages.
                </p>
              </div>
            </div>
          </div>

          {/* Facilities Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Comprehensive Facilities</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">24 Hours Emergency Services</h3>
                <p className="text-gray-600 mb-4">
                  Our emergency services are available around the clock to provide immediate medical attention 
                  whenever your child needs it. Our experienced team is always ready to handle urgent medical situations.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Immediate response team available 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Advanced life support equipment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Pediatric emergency specialists on call</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Specialized Medical Equipment</h3>
                <p className="text-gray-600 mb-4">
                  We offer state-of-the-art medical facilities including hospitalization, phototherapy warmer, 
                  and nebulization services specifically designed for children's healthcare needs.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Hospitalization facilities with comfortable pediatric wards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Advanced phototherapy equipment for newborn jaundice treatment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Nebulization services for respiratory conditions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vaccination Section */}
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-xl p-8 md:p-12 text-white">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Child Vaccination Program</h2>
                <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                  Our hospital provides a complete vaccination program to protect children from preventable diseases. 
                  With our systematic approach to immunization, we ensure that your child receives all necessary vaccines 
                  at the appropriate times according to national guidelines.
                </p>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Our vaccination services are administered by experienced pediatricians who understand the importance 
                  of timely immunization for building strong immunity in children.
                </p>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our Vaccination Services?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-white rounded-full p-2 mr-4 mt-1">
                        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Expert Administration</h4>
                        <p className="text-blue-100">Vaccines administered by qualified pediatricians</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white rounded-full p-2 mr-4 mt-1">
                        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Safe Environment</h4>
                        <p className="text-blue-100">Sterile conditions and quality vaccines</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white rounded-full p-2 mr-4 mt-1">
                        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Personalized Schedule</h4>
                        <p className="text-blue-100">Custom vaccination plans for each child</p>
                      </div>
                    </li>
                  </ul>
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
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 p-4 rounded-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
                  <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.059-1.281-.073-1.689-.073-4.948 0-3.259.014-3.668.072-4.948 1.281-.058 1.689-.072 4.948-.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.358-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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