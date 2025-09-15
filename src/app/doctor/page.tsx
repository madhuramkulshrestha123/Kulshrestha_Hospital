"use client";

import type { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MeetOurDoctor(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Doctor profile data
  const doctorProfile = {
    name: "Dr. Unnat Kulshrestra",
    specialization: "Pediatrician",
    education: [
      "MBBS - Baba Raghavdas Medical College, Gorakhpur, 1986(Unverified)",
      "MD - Pediatrics - Baba Raghavdas Medical College, Gorakhpur, 1990(Unverified)"
    ],
    memberships: [
      "Indian Medical Association (IMA)",
      "Indian Academy of Paediatrics (IAP)"
    ],
    experience: "1990 - Present Doctor at Kulshreshtha Clinic",
    registrations: "31180 Uttar Pradesh Medical Council, 1987",
    services: [
      "Measles Treatment",
      "Bronchial Asthma Treatment",
      "Genetic Diseases",
      "Newborn Jaundice",
      "Limping child",
      "Infant & Child nutrition",
      "Congenital Disorders Evaluation / Treatment",
      "New Born Care",
      "Growth & Development Evaluation / Management"
    ],
    specializations: [
      "Pediatrician"
    ]
  };

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
              <Link href="/speciality" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Our Specialties</Link>
            </li>
            <li>
              <Link href="/services" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Our Services</Link>
            </li>
            <li>
              <Link href="/doctor" className="block px-3 py-2 text-sm sm:text-base font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Meet Our Doctor</Link>
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
                  <Link href="/services" className="block px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 rounded-2xl">Our Services</Link>
                </li>
                <li>
                  <Link href="/doctor" className="block px-4 py-3 text-base font-medium text-blue-600 bg-blue-50 rounded-2xl">Meet Our Doctor</Link>
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Meet Our Doctor</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">Get to know our experienced and dedicated pediatrician who has been serving the community for over 30 years.</p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Doctor Image Section */}
              <div className="lg:w-1/3 w-full flex justify-center p-8 md:p-12 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="relative">
                  <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden">
                    <Image 
                      src="/Screenshot 2025-09-15 040959 (1).png" 
                      alt="Dr. Unnat Kulshrestra" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white text-blue-600 px-6 py-2 rounded-full font-bold shadow-lg">
                    35+ Years
                  </div>
                </div>
              </div>
              
              {/* Doctor Information Section */}
              <div className="lg:w-2/3 w-full p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{doctorProfile.name}</h2>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">(MBBS, MD)</span>
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">{doctorProfile.specialization}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Dr. {doctorProfile.name} is a highly experienced {doctorProfile.specialization.toLowerCase()} in Agra with over 35 years of experience in pediatric healthcare. 
                    Dr. {doctorProfile.name.split(' ')[1]} practices at Kulshrestha Hospital in Agra. 
                    With decades of dedicated service, Dr. {doctorProfile.name.split(' ')[1]} has become a trusted name in child healthcare in the region.
                  </p>
                </div>
                
                {/* Education Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    Education
                  </h3>
                  <ul className="space-y-2">
                    {doctorProfile.education.map((edu, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-gray-700">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Memberships Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    Professional Memberships
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {doctorProfile.memberships.map((membership, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {membership}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Experience Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    Experience
                  </h3>
                  <p className="text-gray-700">{doctorProfile.experience}</p>
                </div>
                
                {/* Registrations Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Registrations
                  </h3>
                  <p className="text-gray-700">{doctorProfile.registrations}</p>
                </div>
                
                {/* Specializations Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                    Specializations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {doctorProfile.specializations.map((spec, index) => (
                      <span key={index} className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Services Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    Services
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {doctorProfile.services.map((service, index) => (
                      <div key={index} className="flex items-center bg-blue-50 rounded-lg p-3">
                        <div className="bg-blue-100 rounded-full p-1 mr-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
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
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-3.897-.266-4.356-2.62-4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
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