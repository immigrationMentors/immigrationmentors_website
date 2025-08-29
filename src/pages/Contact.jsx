import React, { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';
import { FiCheck } from 'react-icons/fi';

const countries = [
  { value: 'canada', name: 'Canada', flag: 'https://flagsapi.com/CA/flat/32.png' },
  { value: 'usa', name: 'USA', flag: 'https://flagsapi.com/US/flat/32.png' },
  { value: 'australia', name: 'Australia', flag: 'https://flagsapi.com/AU/flat/32.png' },
  { value: 'uk', name: 'United Kingdom', flag: 'https://flagsapi.com/GB/flat/32.png' },
  { value: 'schengen', name: 'Schengen Countries', flag: 'https://flagsapi.com/EU/flat/32.png' },
  { value: 'new-zealand', name: 'New Zealand', flag: 'https://flagsapi.com/NZ/flat/32.png' },
  { value: 'germany', name: 'Germany', flag: 'https://flagsapi.com/DE/flat/32.png' },
  { value: 'ireland', name: 'Ireland', flag: 'https://flagsapi.com/IE/flat/32.png' },
  { value: 'georgia', name: 'Georgia', flag: 'https://flagsapi.com/GE/flat/32.png' }
];

const Contact = () => {
  const [state, handleSubmit] = useForm("myzdyrgd");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    visaType: '',
    message: ''
  });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCountrySelect = (countryValue) => {
    setFormData({
      ...formData,
      country: countryValue
    });
    setIsCountryDropdownOpen(false);
  };

  const getSelectedCountry = () => {
    return countries.find(country => country.value === formData.country);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Us</h1>
          <p className="text-base sm:text-md md:text-lg text-gray-600 max-w-3xl mx-auto font-semibold">
            Ready to start your immigration journey? Get in touch with our expert consultants
          </p>
        </div>
      </section>

      <section className="py-4 sm:py-6 md:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="card p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send Us a Message</h2>

              {state.succeeded ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="text-4xl sm:text-6xl mb-4 text-green-500 flex justify-center">
                    <HiCheckCircle />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-600 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Enter your full name"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Enter your email"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                        Country of Interest
                      </label>
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white text-left flex items-center justify-between hover:border-gray-400 transition-colors text-sm sm:text-base"
                        >
                          <div className="flex items-center">
                            {getSelectedCountry() ? (
                              <>
                                <img
                                  src={getSelectedCountry().flag}
                                  alt={`${getSelectedCountry().name} flag`}
                                  className="w-5 sm:w-6 h-3 sm:h-4 object-cover rounded mr-2 sm:mr-3"
                                />
                                <span>{getSelectedCountry().name}</span>
                              </>
                            ) : (
                              <span className="text-gray-500">Select a country</span>
                            )}
                          </div>
                          <svg className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {isCountryDropdownOpen && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 sm:max-h-60 overflow-y-auto">
                            {countries.map((country) => (
                              <button
                                key={country.value}
                                type="button"
                                onClick={() => handleCountrySelect(country.value)}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-gray-50 flex items-center transition-colors text-sm sm:text-base"
                              >
                                <img
                                  src={country.flag}
                                  alt={`${country.name} flag`}
                                  className="w-5 sm:w-6 h-3 sm:h-4 object-cover rounded mr-2 sm:mr-3"
                                />
                                <span>{country.name}</span>
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Hidden input to maintain form functionality */}
                        <input
                          type="hidden"
                          name="country"
                          value={formData.country}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="visaType" className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                      Visa Type
                    </label>
                    <select
                      id="visaType"
                      name="visaType"
                      value={formData.visaType}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    >
                      <option value="">Select visa type</option>
                      <option value="study">Study Visa</option>
                      <option value="work">Work Visa</option>
                      <option value="visitor">Visitor/Tourist Visa</option>
                      <option value="pr">Permanent Residence</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Tell us about your requirements, timeline, and any specific questions you have..."
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full btn-primary text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div className="card p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Get in Touch</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <div className="text-xl sm:text-2xl mr-3 sm:mr-4 text-green-600">
                      <HiPhone />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Phone</p>
                      <p className="text-gray-600 text-sm sm:text-base">+91-9392666609</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-xl sm:text-2xl mr-3 sm:mr-4 text-blue-600">
                      <HiMail />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Email</p>
                      <p className="text-gray-600 text-sm sm:text-base break-all">info.immigrationmentors@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-xl sm:text-2xl mr-3 sm:mr-4 text-red-600">
                      <HiLocationMarker />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Office Address</p>
                      <p className="text-gray-600 text-sm sm:text-base">19-5-16/B/15, Bahadurpura<br />Hyderabad, 500064<br />Telangana, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start">
                    <div className="text-blue-600 mr-2 mt-1">
                      <FiCheck />
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base">Expert consultation with experienced professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-600 mr-2 mt-1">
                      <FiCheck />
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base">Personalized guidance for each client</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-600 mr-2 mt-1">
                      <FiCheck />
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base">High success rate in visa approvals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-600 mr-2 mt-1">
                      <FiCheck />
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base">Support throughout the entire process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
