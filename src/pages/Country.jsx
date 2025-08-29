import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  HiAcademicCap, 
  HiBriefcase, 
  HiBadgeCheck, 
  HiPaperAirplane, 
  HiChartBar, 
  HiHome, 
  HiClipboardList, 
  HiUserGroup, 
  HiCalendar, 
  HiDocumentText, 
  HiDeviceMobile, 
  HiGlobeAlt 
} from 'react-icons/hi';

const getIcon = (iconType) => {
  const iconMap = {
    study: <HiAcademicCap className="text-blue-600" />,
    work: <HiBriefcase className="text-green-600" />,
    target: <HiBadgeCheck className="text-purple-600" />,
    travel: <HiPaperAirplane className="text-indigo-600" />,
    chart: <HiChartBar className="text-orange-600" />,
    home: <HiHome className="text-red-600" />,
    clipboard: <HiClipboardList className="text-gray-600" />,
    group: <HiUserGroup className="text-pink-600" />,
    calendar: <HiCalendar className="text-yellow-600" />,
    document: <HiDocumentText className="text-teal-600" />,
    mobile: <HiDeviceMobile className="text-cyan-600" />,
    europe: <HiGlobeAlt className="text-blue-800" />
  };
  return iconMap[iconType] || <HiDocumentText className="text-gray-600" />;
};

const visaServices = {
  canada: [
    { name: "Study Permit", description: "For international students", icon: "study" },
    { name: "Work Permit", description: "For skilled workers", icon: "work" },
    { name: "PGWP", description: "Post-Graduate Work Permit", icon: "target" },
    { name: "Visitor Visa (TRV)", description: "Temporary Resident Visa", icon: "travel" },
    { name: "Express Entry Profile", description: "Skilled immigration system", icon: "chart" },
    { name: "PR (Express Entry)", description: "Permanent Residence", icon: "home" },
    { name: "PNP", description: "Provincial Nominee Program", icon: "clipboard" },
    { name: "Spousal Sponsorship", description: "Family reunification", icon: "group" }
  ],
  usa: [
    { name: "Visitor Visa (B1/B2)", description: "Business & Tourism", icon: "travel" },
    { name: "Slot Booking", description: "Embassy appointment booking", icon: "calendar" },
    { name: "Student Visa (F-1)", description: "For academic studies", icon: "study" }
  ],
  australia: [
    { name: "Work & Holiday (Pre-App)", description: "Pre-application process", icon: "document" },
    { name: "Work & Holiday (Full App)", description: "Complete application", icon: "work" },
    { name: "Tourist/Student Visa", description: "Visitor & education visas", icon: "study" }
  ],
  uk: [
    { name: "Visitor Visa", description: "Standard visitor visa", icon: "travel" },
    { name: "Study Visa", description: "Student visa", icon: "study" }
  ],
  schengen: [
    { name: "Schengen Visa", description: "Access to 29 European countries", icon: "europe" }
  ],
  "new-zealand": [
    { name: "Visitor Visa", description: "Tourist visa", icon: "travel" }
  ],
  germany: [
    { name: "Study Visa", description: "Student visa for Germany", icon: "study" }
  ],
  ireland: [
    { name: "Study Visa", description: "Student visa for Ireland", icon: "study" }
  ],
  georgia: [
    { name: "Visit Visa (eVisa)", description: "Electronic visa", icon: "mobile" }
  ]
};

const countryNames = {
  canada: "Canada",
  usa: "United States", 
  australia: "Australia",
  uk: "United Kingdom",
  schengen: "Schengen Countries",
  "new-zealand": "New Zealand",
  germany: "Germany",
  ireland: "Ireland",
  georgia: "Georgia"
};

const Country = () => {
  const { slug } = useParams();
  const services = visaServices[slug] || [];
  const countryName = countryNames[slug] || slug;

  if (!services.length) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Country Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The country you're looking for doesn't exist in our services.
          </p>
          <Link to="/countries" className="btn-primary">
            Back to Countries
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="py-6 sm:py-8 md:py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <Link 
              to="/countries" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-2 sm:mb-4"
            >
              ← Back to Countries
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              {countryName} Visa Services
            </h1>
            <p className="text-base sm:text-md md:text-lg text-gray-600 max-w-3xl mx-auto font-semibold">
              Professional visa and immigration services for {countryName}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 flex justify-center">{getIcon(service.icon)}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {service.name}
                </h3>
                <p className="text-sm sm:text-base md:text-md text-gray-600 mb-3 sm:mb-4">{service.description}</p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:text-blue-800 transition-colors text-xs sm:text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Ready to Apply?
            </h2>
            <p className="text-base sm:text-lg md:text-md text-gray-600 mb-4 sm:mb-6 md:mb-8 font-semibold">
              Get expert guidance for your {countryName} visa application
            </p>
            <Link to="/contact" className="btn-primary text-sm sm:text-base">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Country;
