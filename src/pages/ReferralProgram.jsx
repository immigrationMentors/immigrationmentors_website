import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HiShare, HiUserAdd, HiCurrencyRupee, HiOfficeBuilding, HiChartBar, HiHeart, HiCheckCircle, HiSparkles } from 'react-icons/hi';

const ReferralProgram = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Page Header */}
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Referral Program</h1>
          <p className="text-base sm:text-md md:text-lg text-gray-600 max-w-3xl mx-auto font-semibold">
            Earn rewards by referring clients to Immigration Mentors. Both individuals and institutes can benefit!
          </p>
        </div>
      </section>

      {/* Who Can Participate */}
      <section className="bg-gray-100 py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Who Can Participate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-green-600">Individuals</h3>
              </div>
              <img src="/individuals.jpg" alt="Individuals" className="w-full h-32 sm:h-48 md:h-64 object-cover rounded-lg mb-4" />
              <p className="text-gray-600 mb-4">Students, alumni, professionals, or anyone who refers a potential client.</p>
              <div className="bg-blue-50 p-4 rounded-lg mb-4 py-6">
                <p className="text-sm text-gray-700 mb-2">Earn referral rewards for every successful client you refer.</p>
                <div className="text-center">
                  <span className="text-4xl sm:text-5xl font-bold text-green-600">₹1,000</span>
                  <span className="text-lg text-gray-600 ml-2">per client & up</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">Institutes / Organizations</h3>
              </div>
              <img src="/organizations.jpg" alt="Institutes / Organizations" className="w-full h-32 sm:h-48 md:h-64 object-cover rounded-lg mb-4" />
              <p className="text-gray-600 mb-4">Colleges, coaching centers, training institutes, or agencies referring clients.</p>
              <div className="bg-green-50 p-4 rounded-lg mb-4 py-6">
                <p className="text-sm text-gray-700 mb-2">Commission based on services availed by referred clients.</p>
                <div className="text-center">
                  <span className="text-4xl sm:text-5xl font-bold text-blue-600">5-10%</span>
                  <span className="text-lg text-gray-600 ml-2">commission</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works and Benefits */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* How It Works */}
            <div className="bg-gradient-to-br from-blue-50 to-gray-100 p-6 sm:p-8 rounded-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">How It Works</h2>
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <HiShare className="text-white text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Share Our Services</h4>
                  <p className="text-gray-600">Share our services with friends, students, or potential clients.</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <HiUserAdd className="text-white text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Referral Contacts Us</h4>
                  <p className="text-gray-600">Your referral contacts Immigration Mentors for consultation.</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <HiCurrencyRupee className="text-white text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">You Receive Reward</h4>
                  <p className="text-gray-600">You receive your reward once the client successfully avails our services.</p>
                </div>
              </div>
            </div>
            {/* Benefits of Joining */}
            <div className="bg-gradient-to-br from-gray-100 to-blue-50 p-6 sm:p-8 rounded-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Benefits of Joining</h2>
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="bg-green-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <HiCurrencyRupee className="text-white text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Earn Extra Income</h4>
                  <p className="text-gray-600">Turn your referrals into real rewards with attractive payouts.</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <HiHeart className="text-white text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Help Others Succeed</h4>
                  <p className="text-gray-600">Be part of someone's journey to global opportunities.</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <HiCheckCircle className="text-white text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Zero Investment</h4>
                  <p className="text-gray-600">No upfront costs – just refer and earn!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-100 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Start Earning?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            Join our Referral Program today and turn your network into income!
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-800 text-white px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-700 transition-colors"
          >
            Contact Us Today
          </a>
          <p className="text-xs sm:text-sm mt-4 opacity-75">
            * Rewards paid after successful service completion. Terms apply.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReferralProgram;