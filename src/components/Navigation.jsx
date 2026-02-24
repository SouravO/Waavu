import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Support', path: '/support' },
    { name: 'Contact', path: '/contact' },
    // inll
    { name: 'INLL', path: '/INll' },
  ];

  const servicesSubItems = [
    { name: 'Talent Identification', path: '/services/talent-identification' },
    { name: 'Comprehensive Support', path: '/services/comprehensive-support' },
    { name: 'Professional Training', path: '/services/professional-training' },
    { name: 'Mentorship & Guidance', path: '/services/mentorship-guidance' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 border-b border-black/5 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md h-16' : 'bg-white/50 backdrop-blur-sm h-20'}`}>
      <div className="grid grid-cols-4 md:grid-cols-12 w-full text-[10px] font-bold uppercase tracking-widest h-full items-center px-6">
        {/* LOGO */}
        <Link to="/" className="col-span-2 md:col-span-3 border-r border-black/5 h-full flex items-center group overflow-hidden">
          <span className="group-hover:text-[#125487] transition-colors flex items-center w-full h-full">
            <img src="/assets/logo/Logo.png" alt="WAWU Logo" className="w-auto h-8 md:h-10 object-contain ml-0" />
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex md:col-span-6 border-r border-black/5 h-full items-center justify-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`cursor-pointer hover:text-[#125487] transition-colors ${location.pathname === link.path ? 'text-[#125487]' : 'text-black/60'}`}
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 cursor-pointer hover:text-[#125487] transition-colors ${location.pathname?.startsWith('/services/') ? 'text-[#125487]' : 'text-black/60'}`}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white border border-black/10 rounded-md shadow-lg overflow-hidden"
                >
                  {servicesSubItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setServicesDropdownOpen(false)}
                      className={`block px-4 py-3 text-sm hover:bg-[#125487]/5 transition-colors ${location.pathname === item.path ? 'text-[#125487] bg-[#125487]/5' : 'text-black/80'}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-2 md:col-span-3 h-full flex items-center justify-end gap-4">
          {/* <span className="hidden md:block opacity-30 text-[9px]">LOC: LOS / LDN</span> */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          {/* <div className="w-8 h-8 rounded-full bg-[#125487] flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
            <Command size={14} />
          </div> */}
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-black/5 p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-serif italic ${location.pathname === link.path ? 'text-[#125487]' : 'text-black'}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-2 text-2xl font-serif italic text-black w-full"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-4 mt-4 ml-4">
                      {servicesSubItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setServicesDropdownOpen(false);
                          }}
                          className={`text-lg font-sans ${location.pathname === item.path ? 'text-[#125487]' : 'text-black/70'}`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
