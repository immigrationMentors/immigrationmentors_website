import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HiMail, HiPhone, HiOfficeBuilding } from 'react-icons/hi';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">Privacy Policy</h1>
          <p className="text-base sm:text-md md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-semibold">
            Your privacy and data security are our top priority at Immigration Mentors
          </p>
        </div>
      </section>
      
      <div className="py-8 sm:py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <p className="text-gray-600 mb-6 sm:mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose max-w-none text-gray-700">
            <p className="text-sm sm:text-base md:text-md mb-4 sm:mb-6">
              Immigration Mentors ("we," "our," or "us") is committed to protecting the privacy and confidentiality of the personal information of our clients, website visitors, and partners. This Privacy Policy explains how we collect, use, store, and safeguard your data when you visit our website, engage with our services, or interact with us.
            </p>
            
            <p className="text-sm sm:text-base md:text-md mb-6 sm:mb-8">
              By accessing our website or using our services, you consent to the practices described in this Privacy Policy.
            </p>

            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">1. Information We Collect</h2>
            <p className="text-sm sm:text-base md:text-md mb-3 sm:mb-4">We may collect the following categories of information:</p>
            
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">a) Personal Information (provided voluntarily)</h3>
            <ul className="list-disc pl-4 sm:pl-6 mb-3 sm:mb-4 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-md">
              <li>Name, email address, phone number</li>
              <li>Identification details (passport, government ID)</li>
              <li>Academic records, test scores (IELTS, TOEFL, etc.)</li>
              <li>Financial documentation for visa/education purposes</li>
            </ul>

            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">b) Website & Technical Data (collected automatically)</h3>
            <ul className="list-disc pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-md">
              <li>IP address, browser type, and operating system</li>
              <li>Website usage statistics (cookies, analytics, session tracking)</li>
              <li>Referral sources and interactions with our website</li>
            </ul>

            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">2. Purpose of Data Collection</h2>
            <p className="text-sm sm:text-base md:text-md mb-3 sm:mb-4">We collect and process personal data to:</p>
            <ul className="list-disc pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-md">
              <li>Provide visa, immigration, and overseas education consultancy services</li>
              <li>Process university/college applications and admission requests</li>
              <li>Assist with visa applications and related documentation</li>
              <li>Communicate with you about your application status and services</li>
              <li>Comply with legal, regulatory, and government requirements</li>
              <li>Improve our website functionality and customer experience</li>
            </ul>

            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">3. Legal Basis for Processing</h2>
            <p className="text-sm sm:text-base md:text-md mb-3 sm:mb-4">We process data under the following legal bases:</p>
            <ul className="list-disc pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-md">
              <li><span className="font-medium">Consent:</span> When you voluntarily provide personal data (forms, emails, applications)</li>
              <li><span className="font-medium">Contractual Necessity:</span> To deliver consultancy services requested by you</li>
              <li><span className="font-medium">Legal Obligation:</span> To comply with Indian and international laws, immigration authority requirements, and data protection regulations</li>
              <li><span className="font-medium">Legitimate Interest:</span> For business improvements, fraud prevention, and ensuring service quality</li>
            </ul>

            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">4. Data Sharing & Disclosure</h2>
            <p className="text-sm sm:text-base md:text-md mb-3 sm:mb-4">We may share your data with:</p>
            <ul className="list-disc pl-4 sm:pl-6 mb-3 sm:mb-4 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-md">
              <li>Universities, colleges, and education institutions abroad</li>
              <li>Immigration authorities, embassies, and consulates</li>
              <li>Authorized education platforms (e.g., ApplyBoard)</li>
              <li>Third-party service providers strictly for operational purposes (IT, payment, CRM systems)</li>
            </ul>
            <p className="text-sm sm:text-base md:text-md mb-4 sm:mb-6">We do not sell, rent, or trade your personal data to unauthorized third parties.</p>

            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">5. Data Storage & Security</h2>
            <p className="text-sm sm:text-base md:text-md mb-3 sm:mb-4">We adopt reasonable technical and organizational measures to protect personal information, including:</p>
            <ul className="list-disc pl-4 sm:pl-6 mb-3 sm:mb-4 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-md">
              <li>Secure servers, firewalls, and encryption protocols</li>
              <li>Password-protected databases with restricted staff access</li>
              <li>Regular audits and monitoring to prevent unauthorized access</li>
            </ul>
            <p className="text-sm sm:text-base md:text-md mb-4 sm:mb-6">We retain your personal data only as long as necessary for service delivery or as required by law.</p>

            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">6. Cookies & Tracking Technologies</h2>
            <p className="text-sm sm:text-base md:text-md mb-3 sm:mb-4">Our website may use cookies and tracking tools to:</p>
            <ul className="list-disc pl-4 sm:pl-6 mb-3 sm:mb-4 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-md">
              <li>Improve website performance and user experience</li>
              <li>Analyze traffic and usage patterns</li>
              <li>Personalize content and services</li>
            </ul>
            <p className="text-sm sm:text-base md:text-md mb-4 sm:mb-6">You can disable cookies through your browser settings. However, this may limit website functionality.</p>

            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">7. International Data Transfers</h2>
            <p className="text-sm sm:text-base md:text-md mb-4 sm:mb-6">
              As part of visa and education processes, your personal data may be transferred to institutions, authorities, and service providers located outside India. We ensure such transfers are made under adequate data protection safeguards.
            </p>

            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">8. Your Rights</h2>
            <p className="text-sm sm:text-base md:text-md mb-3 sm:mb-4">Depending on applicable laws (e.g., Indian DPDP Act 2023, GDPR), you may have the following rights:</p>
            <ul className="list-disc pl-4 sm:pl-6 mb-3 sm:mb-4 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-md">
              <li>Right to access personal data we hold about you</li>
              <li>Right to correct or update inaccurate information</li>
              <li>Right to withdraw consent at any time</li>
              <li>Right to request deletion of your personal data (subject to legal obligations)</li>
              <li>Right to restrict or object to certain types of processing</li>
            </ul>
            <p className="text-sm sm:text-base md:text-md mb-4 sm:mb-6">To exercise your rights, please email us at info@immigrationmentors.in.</p>

            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">9. Third-Party Links</h2>
            <p className="text-sm sm:text-base md:text-md mb-4 sm:mb-6">
              Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or security of those websites.
            </p>

            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">10. Updates to Privacy Policy</h2>
            <p className="text-sm sm:text-base md:text-md mb-4 sm:mb-6">
              We may update this Privacy Policy periodically to reflect changes in laws, regulations, or business practices. The latest version will always be available on our website.
            </p>

            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">11. Contact Us</h2>
            <p className="text-sm sm:text-base md:text-md mb-3 sm:mb-4">If you have any questions, concerns, or requests related to this Privacy Policy, please contact us at:</p>
            <div className="bg-gray-100 p-3 sm:p-4 rounded-lg text-sm sm:text-base md:text-md">
              <div className="mb-3 sm:mb-4">
                <div className="flex items-center mb-1 sm:mb-2">
                  <HiPhone className="text-gray-600 text-base sm:text-lg mr-2" />
                  <span className="font-semibold">Phone</span>
                </div>
                <p className="ml-6">+91-9392666609</p>
              </div>
              <div className="mb-3 sm:mb-4">
                <div className="flex items-center mb-1 sm:mb-2">
                  <HiMail className="text-gray-600 text-base sm:text-lg mr-2" />
                  <span className="font-semibold">Email</span>
                </div>
                <p className="ml-6">info@immigrationmentors.in</p>
              </div>
              <div>
                <div className="flex items-center mb-1 sm:mb-2">
                  <HiOfficeBuilding className="text-gray-600 text-base sm:text-lg mr-2" />
                  <span className="font-semibold">Office Address</span>
                </div>
                <p className="ml-6">19-5-16/B/15, Bahadurpura<br />Hyderabad, 500064<br />Telangana, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    <Footer />
    </div>
  );
};

export default PrivacyPolicy;
