import React from 'react';
import { Link } from 'react-router-dom';
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
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Immigration Mentors</h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-md leading-relaxed">
                Your trusted partner for visa and immigration services.
              </p>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <div className="flex items-start">
                <HiPhone className="text-green-400 text-xl mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base md:text-md">Phone</p>
                  <a href="tel:+919392666609" className="text-gray-300 hover:text-green-400 transition-colors text-sm sm:text-base md:text-md">
                    +91-9392666609
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <HiMail className="text-blue-400 text-xl mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base md:text-md">Email</p>
                  <a href="mailto:info@immigrationmentors.in" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base md:text-md break-all">
                    info@immigrationmentors.in
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <HiLocationMarker className="text-red-400 text-xl mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base md:text-md">Office Address</p>
                  <address className="text-gray-300 not-italic leading-relaxed text-sm sm:text-base md:text-md">
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
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Popular Destinations</h4>
            <ul className="space-y-1 md:space-y-2">
              <li><Link to="/countries/canada" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-md">Canada</Link></li>
              <li><Link to="/countries/usa" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-md">United States</Link></li>
              <li><Link to="/countries/uk" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-md">United Kingdom</Link></li>
              <li><Link to="/countries/australia" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-md">Australia</Link></li>
            </ul>
            <div className="mt-4 md:mt-6">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Quick Links</h4>
              <ul className="space-y-1 md:space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-md">Home</Link></li>
                <li><Link to="/countries" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-md">Countries</Link></li>
                <li><Link to="/referral-program" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-md">Referral Program</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-md">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Media & CTA */}
          <div className="mt-4 lg:mt-0">
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Connect With Us</h4>
            <p className="text-gray-300 mb-3 md:mb-6 leading-relaxed text-sm sm:text-base md:text-md">
              Stay updated with the latest immigration news, tips, and success stories.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
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

            <div className="bg-gray-700 p-2 sm:p-4 rounded-lg">
              <h5 className="text-white font-semibold mb-4 text-base sm:text-lg md:text-xl">Disclaimer</h5>
             
              <p className="text-xs text-gray-300 leading-relaxed">
                Immigration Mentors does not guarantee visa approval or any specific outcome. We strictly adhere to legal and ethical practices and do not support, provide, or endorse fake, false or fraudulent documents. All services are provided in compliance with applicable immigration laws and regulations.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-10 md:mt-12 pt-4 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-0">
              © {new Date().getFullYear()} Immigration Mentors. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
