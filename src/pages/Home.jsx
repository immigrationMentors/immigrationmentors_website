import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HiStar } from 'react-icons/hi';
import worldmapImage from '/worldmap.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
       <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-44 sm:pt-48 md:pt-52 lg:pt-56 pb-32 sm:pb-36 md:pb-38 lg:pb-40 px-6 sm:px-8 md:px-10 lg:px-12 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center blur-xs"
          style={{ backgroundImage: `url(${worldmapImage})` }}
        ></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 animate-fade-in text-white pb-2">
            Immigration Mentors
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 text-gray-200 font-light max-w-4xl mx-auto">
            Your <span className="font-semibold text-white">trusted partner</span> for visa & immigration services
          </p>
          
          <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 text-gray-300 flex items-center justify-center">
            Based in Hyderabad, India
          </p>
          
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-1 sm:px-2 md:px-4 lg:px-6 py-1.5 sm:py-2.5 mb-6 sm:mb-8 text-xs sm:text-sm md:text-base max-w-[95%] sm:max-w-[90%] whitespace-nowrap overflow-hidden">
            <span className="text-yellow-400 mr-1 sm:mr-1.5 md:mr-2 flex-shrink-0">
              <HiStar className="w-3 h-3 sm:w-4 sm:h-4" />
            </span>
            <span className="truncate">Registered Professionals | Trusted Guidance</span>
            <span className="text-yellow-400 ml-1 sm:ml-1.5 md:ml-2 flex-shrink-0">
              <HiStar className="w-3 h-3 sm:w-4 sm:h-4" />
            </span>
          </div>
          
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-5 md:gap-6 mt-6 sm:mt-8 mb-10 sm:mb-12">
            <Link to="/countries" className="w-auto bg-black text-white hover:bg-white hover:text-black border-2 border-gray-400 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-md font-medium inline-flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200">
              Explore Countries
            </Link>
            <Link to="/contact" className="w-auto bg-white text-black hover:bg-black hover:text-white border-2 border-gray-400 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-md font-medium inline-flex items-center justify-center transition-all duration-200">
              Get Free Consultation
            </Link>
          </div>
          
          {/* Additional Trust Element */}
          <div className="mt-4 text-center">
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-5 md:gap-10 opacity-80">
              <span className="text-sm sm:text-base md:text-lg">• Student Visas</span>
              <span className="text-sm sm:text-base md:text-lg">• Work Permits</span>
              <span className="text-sm sm:text-base md:text-lg">• Permanent Residency</span>
              <span className="text-sm sm:text-base md:text-lg">• Family Reunification</span>
              <span className="text-sm sm:text-base md:text-lg">• Visitor & Business Visas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Link to="/country/australia" className="bg-white p-4 sm:p-6 rounded-lg shadow-md block hover:shadow-lg transition-shadow duration-200">
              <div className="overflow-hidden h-32 sm:h-40 md:h-44 rounded-lg mb-3">
                <img src="/australia.png" alt="Australia" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-semibold text-sm sm:text-base">Australia</h4>
              <p className="text-xs sm:text-sm text-gray-600">Work & Student Visas</p>
            </Link>

            <Link to="/country/canada" className="bg-white p-4 sm:p-6 rounded-lg shadow-md block hover:shadow-lg transition-shadow duration-200">
              <div className="overflow-hidden h-32 sm:h-40 md:h-44 rounded-lg mb-3">
                <img src="/canada.jpg" alt="Canada" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-semibold text-sm sm:text-base">Canada</h4>
              <p className="text-xs sm:text-sm text-gray-600">Study, Work, PR & More</p>
            </Link>

            <Link to="/country/uk" className="bg-white p-4 sm:p-6 rounded-lg shadow-md block hover:shadow-lg transition-shadow duration-200">
              <div className="overflow-hidden h-32 sm:h-40 md:h-44 rounded-lg mb-3">
                <img src="/united_kingdom.png" alt="United Kingdom" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-semibold text-sm sm:text-base">United Kingdom</h4>
              <p className="text-xs sm:text-sm text-gray-600">Visitor Visa, Study Visa</p>
            </Link>

            <Link to="/country/usa" className="bg-white p-4 sm:p-6 rounded-lg shadow-md block hover:shadow-lg transition-shadow duration-200">
              <div className="overflow-hidden h-32 sm:h-40 md:h-44 rounded-lg mb-3">
                <img src="/united_states.png" alt="USA" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-semibold text-sm sm:text-base">USA</h4>
              <p className="text-xs sm:text-sm text-gray-600">Student & Visitor Visas</p>
            </Link>
          </div>
          <Link to="/countries" className="btn-primary hover:bg-black hover:text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
            View All Countries & Services
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Immigration Mentors?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We provide expert guidance and personalized support for your immigration journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="card text-center animate-slide-up">
              <div className="mb-3 sm:mb-4">
                <img 
                  src="/expertguidance.jpg" 
                  alt="Expert Guidance" 
                  className="w-full h-40 sm:h-40 md:h-48 object-cover rounded-lg shadow-sm"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Expert Guidance</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Years of experience helping students and professionals achieve their dreams abroad
              </p>
            </div>
            
            <div className="card text-center animate-slide-up">
              <div className="mb-3 sm:mb-4">
                <img 
                  src="/personalizedsupport.jpg" 
                  alt="Personalized Support" 
                  className="w-full h-40 sm:h-40 md:h-48 object-cover rounded-lg shadow-sm"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Personalized Support</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Tailored advice and step-by-step support for every client
              </p>
            </div>
            
            <div className="card text-center animate-slide-up sm:col-span-2 md:col-span-1 sm:max-w-md md:max-w-none mx-auto sm:mx-auto md:mx-0 w-full">
              <div className="mb-3 sm:mb-4">
                <img 
                  src="/globalreach.jpg" 
                  alt="Global Reach" 
                  className="w-full h-40 sm:h-40 md:h-48 object-cover rounded-lg shadow-sm"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Global Reach</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Comprehensive services for multiple countries worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What Our Clients Say</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Real success stories from our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg mr-3 sm:mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Sai Teja</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">🇨🇦 Spousal PR</p>
                </div>
              </div>
              <div className="flex mb-2 sm:mb-3">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="text-yellow-400 text-sm sm:text-base" />
                ))}
              </div>
              <p className="text-gray-700 italic text-sm sm:text-base">
                "Immigration Mentors helped my wife and I with our Spousal PR application. Their team was professional and responsive throughout the process. We were amazed when our application was approved in just 8 weeks! Highly recommended."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg mr-3 sm:mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Syed Amaan</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">🇨🇦 Study Permit | 🇨🇦 Work Permit | 🇺🇸 Visit Visa</p>
                </div>
              </div>
              <div className="flex mb-2 sm:mb-3">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="text-yellow-400 text-sm sm:text-base" />
                ))}
              </div>
              <p className="text-gray-700 italic text-sm sm:text-base">
                "From my Canada Study Permit to Work Permit and even my US Visit Visa, Immigration Mentors guided me every step of the way. Their detailed approach and transparency made the entire journey stress-free. Highly recommended!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1 sm:max-w-md lg:max-w-none mx-auto sm:mx-auto lg:mx-0">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg mr-3 sm:mr-4">
                  R
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Raheel Kazi</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">🇺🇸 USA Visit Visa</p>
                </div>
              </div>
              <div className="flex mb-2 sm:mb-3">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="text-yellow-400 text-sm sm:text-base" />
                ))}
              </div>
              <p className="text-gray-700 italic text-sm sm:text-base">
                "I approached Immigration Mentors for my US Visit Visa. They explained everything clearly and prepared my application perfectly. Thanks to them, I received my visa without any hassle!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Ready to Start Your Journey?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Get expert consultation and personalized guidance for your visa application
          </p>
          <Link to="/contact" className="btn-primary text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3">
            Get Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
