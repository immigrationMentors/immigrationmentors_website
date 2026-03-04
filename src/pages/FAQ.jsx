import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What services does Immigration Mentors provide?",
      answer: "We offer guidance for student visas, work permits, permanent residency, family visas, and visitor/business visas for countries like Canada, USA, UK, and Australia."
    },
    {
      question: "How do I get started with my visa application?",
      answer: "Simply fill out our Free Consultation form or contact us via email/phone. Our consultants will evaluate your profile and guide you step by step."
    },
    {
      question: "How long does the visa process take?",
      answer: "Processing time varies by country, visa type, and individual circumstances. We provide estimated timelines after evaluating your profile."
    },
    {
      question: "What documents are required for my visa?",
      answer: "Document requirements differ depending on the visa type and destination. We provide a personalized checklist for each client."
    },
    {
      question: "Can Immigration Mentors guarantee visa approval?",
      answer: "While we cannot guarantee approval, we ensure your application is complete, accurate, and submitted according to the latest immigration rules, which significantly improves your chances."
    },
    {
      question: "Do you provide pre-departure guidance?",
      answer: "Yes! We guide clients on travel, accommodation, banking, and other essentials before they leave for their destination country."
    },
    {
      question: "How much do your services cost?",
      answer: "Service fees vary based on visa type and the level of support required. Contact us for a personalized quote."
    },
    {
      question: "Can you help with multiple countries?",
      answer: "Absolutely. We guide clients interested in Canada, USA, UK, Australia, and other destinations depending on eligibility and goals."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">Frequently Asked Questions</h1>
          <p className="text-base sm:text-md md:text-lg text-gray-600 max-w-3xl mx-auto font-semibold">
            Find answers to common questions about our immigration and visa services
          </p>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-4 sm:py-6 md:py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  {openItems[index] ? (
                    <HiChevronUp className="text-blue-600 text-lg sm:text-xl flex-shrink-0" />
                  ) : (
                    <HiChevronDown className="text-blue-600 text-lg sm:text-xl flex-shrink-0" />
                  )}
                </button>
                {openItems[index] && (
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                    <div className="border-t border-gray-200 pt-3 sm:pt-4">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Still Have Questions?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8">
            Our expert consultants are here to help you with personalized guidance
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-800 text-white px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-700 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;