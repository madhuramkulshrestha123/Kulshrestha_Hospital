"use client";

import type { JSX } from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullProfile, setShowFullProfile] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    patientName: '',
    mobileNumber: '',
    date: '',
    timeSlot: '',
    message: ''
  });

  const carouselItems = [
    {
      title: "Best Child Care in Agra",
      subtitle: "Over 30 years of experience in pediatric healthcare",
      image: "/Screenshot 2025-09-15 032302.png"
    },
    {
      title: "Expert Pediatricians",
      subtitle: "Compassionate care for your child's health and development",
      image: "/unnamed.webp"
    },
    {
      title: "Modern Facilities",
      subtitle: "State-of-the-art equipment for comprehensive child healthcare",
      image: "/neonatal-and-pediatric-icu-with-ventilator.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000); // Increased time to 5 seconds for better viewing experience

    return () => clearInterval(interval);
  }, [carouselItems.length]);
  
  // Add animation keyframes to global styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeSlideUp {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation could be added here
    console.log('Form submitted:', formData);
    
    // Save to localStorage for admin access
    const storedAppointments = localStorage.getItem("appointments");
    const appointments = storedAppointments ? JSON.parse(storedAppointments) : [];
    const newAppointment = {
      id: Date.now().toString(),
      patientName: formData.patientName,
      mobileNumber: formData.mobileNumber,
      date: formData.date,
      timeSlot: formData.timeSlot,
      message: formData.message,
      submittedAt: new Date().toISOString()
    };
    appointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    
    setShowSuccessMessage(true);
    
    // Reset form
    setFormData({
      patientName: '',
      mobileNumber: '',
      date: '',
      timeSlot: '',
      message: ''
    });
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  // Cards data
  const cards = [
    {
      title: "Emergency Services",
      description: "Rapid, expert emergency care available 24/7 to handle all your urgent medical needs with speed and precision."
    },
    {
      title: "Modular Operation Theatres & ICUs",
      description: "Equipped with modular operation theaters and Intensive Care Units, ensuring highest standards of patient care."
    },
    {
      title: "Legacy of 30+ Years",
      description: "Proudly serving the community for over 30 years, delivering excellence in Child Care with compassion and expertise."
    },
    {
      title: "Advanced Medical Equipment",
      description: "We offer all modern medical equipment, including advanced neonatal care machines specifically designed for the treatment and care of premature babies."
    }
  ];

  // Doctor profile data
  const doctorProfile = {
    name: "Dr. Unnat Kulshrestra",
    specialization: "Pediatrician",
    description: "Dr. Unnat Kulshrestra is a Pediatrician in Tajganj, Agra and has an experience of 35 years in this field. Dr. Unnat Kulshrestra practices at Dr. Unnat Kulshrestha in Tajganj, Agra and Upadhyay Hospital in New Agra, Agra. He completed MBBS from Baba Raghavdas Medical College, Gorakhpur in 1986 and MD - Pediatrics from Baba Raghavdas Medical College, Gorakhpur in 1990.",
    memberships: "He is a member of Indian Medical Association (IMA) and Indian Academy of Paediatrics (IAP).",
    services: "Some of the services provided by the doctor are: Measles Treatment, Bronchial Asthma Treatment, Genetic Diseases, Newborn Jaundice and Limping child etc."
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
            <a 
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
            </a>
            
            {/* Email Link */}
            <a 
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
            </a>
            
            {/* Location Link */}
            <a 
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
            </a>
            
            {/* Book Appointment Button */}
            <a 
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
            </a>
          </div>
        </div>
      </nav>

      {/* Sub Navigation Bar */}
      <nav className="bg-white shadow-sm py-2 sm:py-3 rounded-3xl my-2 sm:my-3 mx-4 sm:mx-8 md:mx-16">
        {/* Desktop Navigation */}
        <div className="hidden md:block container mx-auto">
          <ul className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4">
            <li>
              <a href="/" className="block px-3 py-2 text-sm sm:text-base font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Home</a>
            </li>
            <li>
              <a href="/about" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">About Us</a>
            </li>
            <li>
              <a href="/speciality" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Our Specialties</a>
            </li>
            <li>
              <a href="/services" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Our Services</a>
            </li>
            <li>
              <a href="/doctor" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Meet Our Doctor</a>
            </li>
            <li>
              <a href="/contact" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-colors duration-200">Contact Us</a>
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
                  <a href="/" className="block px-4 py-3 text-base font-medium text-blue-600 bg-blue-50 rounded-2xl">Home</a>
                </li>
                <li>
                  <a href="/about" className="block px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 rounded-2xl">About Us</a>
                </li>
                <li>
                  <a href="/speciality" className="block px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 rounded-2xl">Our Specialties</a>
                </li>
                <li>
                  <a href="/services" className="block px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 rounded-2xl">Our Services</a>
                </li>
                <li>
                  <a href="/doctor" className="block px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 rounded-2xl">Meet Our Doctor</a>
                </li>
                <li>
                  <a href="/contact" className="block px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 rounded-2xl">Contact Us</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Carousel */}
      <div className="container mx-auto px-4 py-6">
        <div className="relative w-full h-72 sm:h-96 md:h-[500px] overflow-hidden rounded-3xl mb-10 shadow-2xl">
          {/* Carousel Slides */}
          <div 
            className="absolute inset-0 flex transition-transform duration-700 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselItems.map((item, index) => (
              <div key={index} className="min-w-full h-full relative">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={90}
                />
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 sm:p-10">
                  <div className="bg-blue-600/30 backdrop-blur-sm px-6 py-3 rounded-full mb-4 transform -translate-y-4 opacity-0 animate-[fadeSlideUp_0.8s_0.2s_forwards]">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">{item.title}</h2>
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mt-2 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-xl transform translate-y-4 opacity-0 animate-[fadeSlideUp_0.8s_0.4s_forwards]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none z-10"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none z-10"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Carousel Indicators */}
          <div className="absolute -bottom-5 left-0 right-0 flex justify-center">
            <div className="bg-white/30 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 mx-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-white/70 hover:bg-white'}`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Things Makes Us The Best Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">Things Makes Us The</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">Best Pediatricians in Agra</h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-800">{card.title}</h4>
              </div>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-4 py-12 bg-white rounded-2xl shadow-lg my-12 animate-fade-in-up">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden">
                <Image 
                  src="/unnamed.webp" 
                  alt="Kulshrestha Hospital" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-6 py-2 rounded-full font-bold">
                Since 1990
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Kulshrestha Hospital has been a trusted name in pediatric healthcare in Agra for over 30 years. 
              Our commitment to excellence and compassionate care has made us the preferred choice for families 
              seeking the best medical treatment for their children. With state-of-the-art facilities and a team 
              of experienced pediatricians, we provide comprehensive healthcare services tailored specifically 
              for infants, children, and adolescents.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Comprehensive Pediatric Care</h3>
                  <p className="text-gray-600">End-to-end medical services for all childhood conditions</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Experienced Medical Team</h3>
                  <p className="text-gray-600">Highly qualified pediatricians with decades of experience</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Modern Facilities</h3>
                  <p className="text-gray-600">Advanced medical equipment and comfortable patient rooms</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Community Trust</h3>
                  <p className="text-gray-600">Three decades of serving families with dedication and care</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Know Your Doctor Section */}
      <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl shadow-xl my-12 animate-fade-in-up">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Know Your Doctor</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/3 w-full flex justify-center">
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
          
          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">{doctorProfile.name}</h3>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">(MBBS, MD)</span>
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">{doctorProfile.specialization}</span>
              </div>
              
              <div className="text-gray-700 mb-6 leading-relaxed">
                <p className="mb-4">{doctorProfile.description}</p>
                
                {showFullProfile && (
                  <>
                    <p className="mb-4">{doctorProfile.memberships}</p>
                    <p>{doctorProfile.services}</p>
                  </>
                )}
              </div>
              
              <button 
                onClick={() => setShowFullProfile(!showFullProfile)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105"
              >
                {showFullProfile ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Book an Appointment Section */}
      <div id="book-appointment" className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Book an Appointment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Schedule your visit with our expert pediatricians. We provide exceptional care for your child's health and well-being.</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        {showSuccessMessage && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="font-bold text-lg">Appointment booked successfully!</p>
                  <p>Thank you for choosing us. We look forward to meeting you soon!</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Form Section */}
            <div className="lg:w-1/2 p-8 md:p-12">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="patientName" className="block text-gray-800 font-medium mb-2">Patient's Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input 
                        type="text" 
                        id="patientName" 
                        value={formData.patientName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-800"
                        placeholder="Full name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="mobileNumber" className="block text-gray-800 font-medium mb-2">Mobile Number *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <input 
                        type="tel" 
                        id="mobileNumber" 
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-800"
                        placeholder="Phone number"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-gray-800 font-medium mb-2">Preferred Date *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input 
                        type="date" 
                        id="date" 
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-800"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="timeSlot" className="block text-gray-800 font-medium mb-2">Preferred Time *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <select 
                        id="timeSlot" 
                        value={formData.timeSlot}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition appearance-none bg-white text-gray-800"
                        required
                      >
                        <option value="" className="text-gray-500">Select time slot</option>
                        <option value="12am-1am">12:00 AM - 1:00 AM</option>
                        <option value="1am-2am">1:00 AM - 2:00 AM</option>
                        <option value="2am-3am">2:00 AM - 3:00 AM</option>
                        <option value="3am-4am">3:00 AM - 4:00 AM</option>
                        <option value="4am-5am">4:00 AM - 5:00 AM</option>
                        <option value="5am-6am">5:00 AM - 6:00 AM</option>
                        <option value="6am-7am">6:00 AM - 7:00 AM</option>
                        <option value="7am-8am">7:00 AM - 8:00 AM</option>
                        <option value="8am-9am">8:00 AM - 9:00 AM</option>
                        <option value="9am-10am">9:00 AM - 10:00 AM</option>
                        <option value="10am-11am">10:00 AM - 11:00 AM</option>
                        <option value="11am-12pm">11:00 AM - 12:00 PM</option>
                        <option value="12pm-1pm">12:00 PM - 1:00 PM</option>
                        <option value="1pm-2pm">1:00 PM - 2:00 PM</option>
                        <option value="2pm-3pm">2:00 PM - 3:00 PM</option>
                        <option value="3pm-4pm">3:00 PM - 4:00 PM</option>
                        <option value="4pm-5pm">4:00 PM - 5:00 PM</option>
                        <option value="5pm-6pm">5:00 PM - 6:00 PM</option>
                        <option value="6pm-7pm">6:00 PM - 7:00 PM</option>
                        <option value="7pm-8pm">7:00 PM - 8:00 PM</option>
                        <option value="8pm-9pm">8:00 PM - 9:00 PM</option>
                        <option value="9pm-10pm">9:00 PM - 10:00 PM</option>
                        <option value="10pm-11pm">10:00 PM - 11:00 PM</option>
                        <option value="11pm-12am">11:00 PM - 12:00 AM</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Message (Optional)</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <textarea 
                      id="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-800"
                      placeholder="Any special requests or information..."
                    ></textarea>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    Confirm Appointment
                  </button>
                </div>
              </form>
            </div>
            
            {/* Image Section */}
            <div className="lg:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-100 p-12 flex flex-col justify-center items-center relative">
              <div className="absolute top-8 right-8 bg-white rounded-full p-3 shadow-lg">
                <svg className="h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Why Choose Us?</h3>
                <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-6 w-full max-w-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                    <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Quick Scheduling</h4>
                    <p className="text-gray-600">Get appointments within 24 hours for most requests</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                    <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Expert Care</h4>
                    <p className="text-gray-600">Experienced pediatricians with over 30 years of expertise</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                    <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Family Focused</h4>
                    <p className="text-gray-600">Compassionate care for your child and family</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-600 font-medium">📞 Emergency? Call us at <span className="text-blue-600 font-bold">0562 356 8817</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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