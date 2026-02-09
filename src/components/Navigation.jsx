import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Donate', path: '/donate' },
    { name: 'Services', path: '/services' },
    { name: 'Support', path: '/support' },
    {name: 'Contact', path: '/contact' },
  
  ];

  const programItems = [
    { name: 'Web Design', path: '/services/web-design' },
    { name: 'App Development', path: '/services/app-development' },
    { name: 'Consulting', path: '/services/consulting' },
    { name: 'Training', path: '/services/training' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white border-b-2 border-black px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-black tracking-tighter uppercase">
          LOGO<span className="text-fuchsia-600">.</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 font-bold uppercase text-sm tracking-widest">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="hover:text-fuchsia-600 transition-colors">
              {link.name}
            </Link>
          ))}

          {/* Program Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 font-bold uppercase hover:text-fuchsia-600"
            >
              Program <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-4 bg-white border-2 border-black p-4 min-w-[200px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  {programItems.map((item) => (
                    <li key={item.name} className="mb-2 last:mb-0">
                      <Link 
                        to={item.path} 
                        className="block hover:translate-x-1 transition-transform"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Mission CTA Button */}
          <Link 
            to="/mission" 
            className="bg-[#2c6492] border-2 border-black px-5 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
          >
            OUR MISSION
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[74px] bg-white lg:hidden flex flex-col p-8 gap-6 overflow-y-auto"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-3xl font-black uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="border-t-2 border-black pt-6">
              <p className="text-gray-400 font-bold mb-4 uppercase tracking-widest text-xs">Programs</p>
              <div className="grid grid-cols-1 gap-4">
                {programItems.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.path} 
                    className="text-xl font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/mission" 
              className="mt-auto bg-fuchsia-500 text-white text-center border-2 border-black py-4 font-black text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              OUR MISSION
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;