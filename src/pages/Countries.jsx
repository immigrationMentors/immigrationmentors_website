import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const countries = [
  {
    name: "Canada",
    flag: "https://flagsapi.com/CA/flat/64.png",
    slug: "canada",
    description: "Study Permit, Work Permit, PR, Visitor Visa & More",
    color: "from-gray-800 to-gray-900"
  },
  {
    name: "USA",
    flag: "https://flagsapi.com/US/flat/64.png",
    slug: "usa",
    description: "Student Visa, Visitor Visa, Slot Booking",
    color: "from-gray-700 to-gray-800"
  },
  {
    name: "Australia",
    flag: "https://flagsapi.com/AU/flat/64.png",
    slug: "australia",
    description: "Work & Holiday, Tourist, Student Visa",
    color: "from-gray-600 to-gray-700"
  },
  {
    name: "United Kingdom",
    flag: "https://flagsapi.com/GB/flat/64.png",
    slug: "uk",
    description: "Visitor Visa, Study Visa",
    color: "from-slate-700 to-slate-800"
  },
  {
    name: "Schengen Countries",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/200px-Flag_of_Europe.svg.png",
    slug: "schengen",
    description: "Tourist Visa for 29 European Countries",
    color: "from-zinc-700 to-zinc-800"
  },
  {
    name: "New Zealand",
    flag: "https://flagsapi.com/NZ/flat/64.png",
    slug: "new-zealand",
    description: "Visitor Visa",
    color: "from-stone-700 to-stone-800"
  },
  {
    name: "Germany",
    flag: "https://flagsapi.com/DE/flat/64.png",
    slug: "germany",
    description: "Study Visa",
    color: "from-neutral-700 to-neutral-800"
  },
  {
    name: "Ireland",
    flag: "https://flagsapi.com/IE/flat/64.png",
    slug: "ireland",
    description: "Study Visa",
    color: "from-gray-600 to-slate-700"
  },
  {
    name: "Georgia",
    flag: "https://flagsapi.com/GE/flat/64.png",
    slug: "georgia",
    description: "Visit Visa (eVisa)",
    color: "from-slate-600 to-gray-700"
  }
];

const Countries = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Page Header */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Countries We Serve</h1>
            <p className="text-base sm:text-md md:text-lg text-gray-600 max-w-3xl mx-auto font-semibold">
              Comprehensive visa and immigration services for multiple destinations worldwide
            </p>
          </div>
      </section>

      <section className="py-4 sm:py-6 md:py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {countries.map((country) => (
              <Link
                key={country.slug}
                to={`/country/${country.slug}`}
                className="group block"
              >
                <div className="card group-hover:scale-105 transition-transform duration-300 h-full flex flex-col overflow-hidden p-4 sm:p-6">
                  <div className="bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg mb-3 sm:mb-4 flex justify-center items-center">
                    <img
                      src={country.flag}
                      alt={`${country.name} Flag`}
                      className="w-16 sm:w-20 h-10 sm:h-12 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{country.name}</h3>
                  <p className="text-sm sm:text-base md:text-md text-gray-600 mb-4 flex-grow">{country.description}</p>
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 -mx-4 sm:-mx-6 -mb-4 sm:-mb-6 mt-auto flex items-center justify-between">
                    <span className="text-xs sm:text-sm">View Services</span>
                    <span className="group-hover:translate-x-1 transition-transform text-xs sm:text-sm">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Countries;
