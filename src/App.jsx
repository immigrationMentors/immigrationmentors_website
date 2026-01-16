import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Countries from './pages/Countries';
import Country from './pages/Country';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ReferralProgram from './pages/ReferralProgram';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import './index.css';

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/country/:slug" element={<Country />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/referral-program" element={<ReferralProgram />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
