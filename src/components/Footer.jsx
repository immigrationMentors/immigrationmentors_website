import React from 'react';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-12">
          
          {/* Company Info & Contact - Highest Priority */}
          <div className="lg:col-span-1">
            <div className="mb-3 sm:mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Immigration Mentors</h3>
              <p className="text-gray-300 text-sm md:text-md leading-relaxed">
                Your trusted partner for visa and immigration services.
              </p>
            </div>
            
            <div className="space-y-2 sm:space-y-4">
              <div className="flex items-start">
                <HiPhone className="text-green-400 text-xl mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <a href="tel:+919392666609" className="text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base">
                    +91-9392666609
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <HiMail className="text-blue-400 text-xl mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a href="mailto:info.immigrationmentors@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base break-all">
                    info.immigrationmentors@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <HiLocationMarker className="text-red-400 text-xl mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Office Address</p>
                  <address className="text-gray-300 not-italic leading-relaxed text-sm md:text-base">
                    19-5-16/B/15, Bahadurpura<br />
                    Hyderabad, 500064<br />
                    Telangana, India
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services & Links */}
          <div className="mt-4 sm:mt-0">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-6">Popular Destinations</h4>
            <ul className="space-y-1 md:space-y-3">
              <li><a href="/countries/canada" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Canada</a></li>
              <li><a href="/countries/usa" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">United States</a></li>
              <li><a href="/countries/uk" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">United Kingdom</a></li>
              <li><a href="/countries/australia" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Australia</a></li>
            </ul>
            
            <div className="mt-4 md:mt-8">
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-6">Quick Links</h4>
              <ul className="space-y-1 md:space-y-3">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Home</a></li>
                <li><a href="/countries" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Countries</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          {/* Social Media & CTA */}
          <div className="mt-4 lg:mt-0">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-6">Connect With Us</h4>
            <p className="text-gray-300 mb-3 md:mb-6 leading-relaxed text-sm md:text-base">
              Stay updated with the latest immigration news, tips, and success stories.
            </p>
            
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              <a
                href="https://www.facebook.com/share/19542DKPYj/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] p-2 sm:p-3 rounded-full text-white hover:bg-[#166FE5] transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-base sm:text-lg" />
              </a>
              <a
                href="https://www.instagram.com/immigration_mentors?igsh=MW1nODFpMXB5MXB2YQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-2 sm:p-3 rounded-full text-white hover:from-[#F77737] hover:via-[#E73488] hover:to-[#8E3CAF] transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Instagram"
              >
                <FaInstagram className="text-base sm:text-lg" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VaBFXMF5K3za18LOcY28"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] p-2 sm:p-3 rounded-full text-white hover:bg-[#20B358] transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-base sm:text-lg" />
              </a>
              <a
                href="https://x.com/imm_mentors?s=21&t=3Um3UNPojyol5dkynUPmOQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#000000] p-2 sm:p-3 rounded-full text-white hover:bg-[#1a1a1a] transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="X"
              >
                <FaTwitter className="text-base sm:text-lg" />
              </a>
              <a
                href="https://linkedin.com/company/immigration-mentors"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A66C2] p-2 sm:p-3 rounded-full text-white hover:bg-[#0958A5] transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-base sm:text-lg" />
              </a>
            </div>
            
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
              <h5 className="text-white font-semibold mb-2 text-sm md:text-base">Ready to Start Your Journey?</h5>
              <a 
                href="/contact" 
                className="inline-block bg-white text-gray-900 px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-gray-700 mt-6 sm:mt-10 md:mt-12 pt-4 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-0">
              © {new Date().getFullYear()} Immigration Mentors. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
