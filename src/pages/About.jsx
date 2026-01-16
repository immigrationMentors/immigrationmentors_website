import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HiAcademicCap, HiUserGroup, HiGlobeAlt, HiCheckCircle, HiBadgeCheck, HiLightBulb, HiHeart, HiStar, HiFlag, HiEye, HiLocationMarker } from 'react-icons/hi';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">About Immigration Mentors</h1>
          <p className="text-base sm:text-md md:text-lg text-gray-600 max-w-3xl mx-auto font-semibold">
            Your trusted partner in making global dreams a reality through expert immigration
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">Your Journey Begins with the Right Guidance</h2>
              <p className="text-sm sm:text-base md:text-md text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                At Immigration Mentors, we believe every journey abroad begins with expert guidance and unwavering support. Founded with a vision to make global opportunities accessible, we are a Hyderabad-based professional consultancy dedicated to helping individuals and families achieve their dreams of studying, working, or settling overseas.
              </p>
              <p className="text-sm sm:text-base md:text-md text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                With years of expertise in international education and immigration, our team has successfully guided students, skilled professionals, and families through complex visa processes — ensuring a smooth, transparent, and successful experience at every step.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center">
                  <HiStar className="text-yellow-500 mr-2" />
                  <span>Serving since 2020</span>
                </div>
                <div className="flex items-center">
                  <HiBadgeCheck className="text-green-600 mr-2" />
                  <span>Registered Professionals</span>
                </div>
                <div className="flex items-center">
                  <HiLocationMarker className="text-blue-600 mr-2" />
                  <span>Proudly Hyderabadi</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Our Core Values</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <HiHeart className="text-white text-xl sm:text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Trust</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Building lasting relationships through honesty and reliability</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <HiBadgeCheck className="text-white text-xl sm:text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Integrity</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Ethical practices and transparent communication at every step</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <HiLightBulb className="text-white text-xl sm:text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Excellence</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Delivering quality service with attention to detail</p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-600 p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <HiUserGroup className="text-white text-xl sm:text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Support</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Committed guidance throughout your immigration journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h2>
                <div className="w-12 h-1 bg-blue-600 rounded"></div>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                To provide ethical, reliable, and personalized immigration consulting services that empower individuals to achieve their global aspirations with confidence, transparency, and the highest standards of professional excellence.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h2>
                <div className="w-12 h-1 bg-purple-600 rounded"></div>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                To become a trusted global consultancy recognized for professionalism, integrity, and exceptional success rates in immigration and study abroad services, helping thousands achieve their international dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Us?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, personal attention, and proven results to make your international journey successful
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6">
              <div className="bg-blue-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <HiAcademicCap className="text-blue-600 text-xl sm:text-2xl" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Experienced Professionals</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">A dedicated team with in-depth knowledge of global visa and immigration systems.</p>
            </div>
            
            <div className="text-center p-4 sm:p-6">
              <div className="bg-green-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <HiUserGroup className="text-green-600 text-xl sm:text-2xl" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Personalized Guidance</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">Tailored solutions to match your unique goals, background, and career plans.</p>
            </div>
            
            <div className="text-center p-4 sm:p-6">
              <div className="bg-purple-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <HiBadgeCheck className="text-purple-600 text-xl sm:text-2xl" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Proven Track Record</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">High success rate in securing student visas, work permits, and permanent residency approvals.</p>
            </div>
            
            <div className="text-center p-4 sm:p-6">
              <div className="bg-indigo-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <HiCheckCircle className="text-indigo-600 text-xl sm:text-2xl" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">End-to-End Support</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">From course selection to visa stamping, and pre-departure guidance — we're with you all the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What We Do</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive immigration and education services for all your international needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <HiAcademicCap className="text-blue-600 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Student Visas</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Expert guidance for top destinations including Canada, USA, UK, Australia, and more. We help you choose the right course, university, and navigate the entire application process.
              </p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <HiBadgeCheck className="text-green-600 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Work Permits & PR</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Helping skilled professionals secure global career opportunities and permanent residency in countries that value their expertise and experience.
              </p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <HiUserGroup className="text-purple-600 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Family & Dependent Visas</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Bringing loved ones closer, wherever life takes you. We handle the complex process of family reunification and dependent visa applications.
              </p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <HiGlobeAlt className="text-indigo-600 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Visitor & Business Visas</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Hassle-free assistance for short-term travel, business meetings, conferences, and tourism to destinations worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

