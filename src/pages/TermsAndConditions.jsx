import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HiMail, HiPhone, HiOfficeBuilding } from 'react-icons/hi';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">Terms & Conditions</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our service terms and client agreements for transparent immigration consultancy
          </p>
        </div>
      </section>
      
      <div className="py-8 sm:py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <p className="text-gray-600 mb-6 sm:mb-8">Effective Date: {new Date().toLocaleDateString()}</p>
          
          <div className="prose max-w-none text-gray-700">
            <p className="text-base sm:text-lg mb-6 sm:mb-8">
              Welcome to Immigration Mentors. By accessing or using our website, services, or consulting with us, you agree to the following Terms & Conditions. Please read them carefully.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">1. General Information</h2>
            <ul className="list-disc pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-1 sm:space-y-2">
              <li>Immigration Mentors is a consultancy that provides guidance and support for overseas education, visa applications, immigration processes, and related services.</li>
              <li>We are not a government agency and do not have authority to grant visas, admissions, or immigration approvals. Final decisions always rest with the relevant immigration authorities, consulates, or educational institutions.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">2. Use of Website & Services</h2>
            <ul className="list-disc pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-1 sm:space-y-2">
              <li>You agree to use this website and our services only for lawful purposes.</li>
              <li>You shall not misuse our website by introducing viruses, attempting unauthorized access, or using it for fraudulent purposes.</li>
              <li>Information provided on this website is for general guidance only and should not be considered legal advice.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">3. Client Responsibilities</h2>
            <p className="mb-3 sm:mb-4">By engaging our services, you agree to:</p>
            <ul className="list-disc pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-1 sm:space-y-2">
              <li>Provide true, accurate, and complete information and documents.</li>
              <li>Ensure that all personal details (passport, academic, financial, etc.) submitted are valid and not fraudulent.</li>
              <li>Cooperate with our team by providing documents within agreed timelines.</li>
              <li>Understand that delays in providing information may result in application delays or rejections, for which we are not liable.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">4. Consultancy Scope & Limitations</h2>
            <ul className="list-disc pl-4 sm:pl-6 mb-3 sm:mb-4 space-y-1 sm:space-y-2">
              <li>Immigration Mentors provides consulting, document assistance, and guidance only.</li>
              <li className="font-semibold">We do not guarantee:</li>
              <ul className="list-circle pl-4 sm:pl-6 mt-1 sm:mt-2 space-y-1">
                <li>Visa approvals</li>
                <li>Admission offers from universities/colleges</li>
                <li>Immigration outcomes</li>
              </ul>
              <li>Outcomes depend on government policies, embassy decisions, and institutional criteria, which are beyond our control.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">5. Fees & Payments</h2>
            <ul className="list-disc pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-1 sm:space-y-2">
              <li>All consultancy fees will be communicated in writing prior to service initiation.</li>
              <li>Fees paid to Immigration Mentors are consulting charges only and are separate from government, university, or embassy fees.</li>
              <li>Fees once paid are non-refundable, except in cases where explicitly stated in a written agreement.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">6. Data Privacy & Consent</h2>
            <ul className="list-disc pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-1 sm:space-y-2">
              <li>By using our services, you consent to the collection and use of your data in accordance with our Privacy Policy.</li>
              <li>You may withdraw consent at any time by submitting a written request, but doing so may affect our ability to continue assisting with your application.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">7. Intellectual Property</h2>
            <ul className="list-disc pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-1 sm:space-y-2">
              <li>All content on this website (text, graphics, logo, materials) is the property of Immigration Mentors and may not be copied, reproduced, or redistributed without prior written consent.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">8. Third-Party Links</h2>
            <ul className="list-disc pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-1 sm:space-y-2">
              <li>Our website may contain links to external websites (universities, immigration authorities, education platforms).</li>
              <li>Immigration Mentors is not responsible for the content, security, or practices of these third-party sites.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">9. Limitation of Liability</h2>
            <p className="mb-3 sm:mb-4">Immigration Mentors will not be held liable for:</p>
            <ul className="list-disc pl-4 sm:pl-6 mb-3 sm:mb-4 space-y-1 sm:space-y-2">
              <li>Visa refusals, delays, or cancellations by authorities</li>
              <li>Rejections due to incomplete or inaccurate client documents</li>
              <li>Losses incurred due to decisions by embassies, consulates, or educational institutions</li>
            </ul>
            <p className="mb-4 sm:mb-6">Our liability is limited to the extent of the consultancy fees paid to us.</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">10. Termination of Services</h2>
            <p className="mb-3 sm:mb-4">Immigration Mentors reserves the right to terminate services if:</p>
            <ul className="list-disc pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-1 sm:space-y-2">
              <li>A client provides false or fraudulent documents</li>
              <li>A client engages in abusive or unethical behavior</li>
              <li>Fees remain unpaid beyond agreed timelines</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">11. Governing Law</h2>
            <ul className="list-disc pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-1 sm:space-y-2">
              <li>These Terms & Conditions are governed by the laws of India.</li>
              <li>Any disputes shall fall under the jurisdiction of courts in Hyderabad, Telangana, India.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">12. Contact Us</h2>
            <p className="mb-3 sm:mb-4">If you have any questions about these Terms & Conditions, please contact us:</p>
            <div className="bg-gray-100 p-3 sm:p-4 rounded-lg">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Immigration Mentors</h3>
              <div className="mb-3 sm:mb-4">
                <div className="flex items-center mb-1 sm:mb-2">
                  <HiPhone className="text-green-600 text-base sm:text-lg mr-2" />
                  <span className="font-semibold">Phone</span>
                </div>
                <p className="ml-6">+91-9392666609</p>
              </div>
              <div className="mb-3 sm:mb-4">
                <div className="flex items-center mb-1 sm:mb-2">
                  <HiMail className="text-blue-600 text-base sm:text-lg mr-2" />
                  <span className="font-semibold">Email</span>
                </div>
                <p className="ml-6">info.immigrationmentors@gmail.com</p>
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

export default TermsAndConditions;
