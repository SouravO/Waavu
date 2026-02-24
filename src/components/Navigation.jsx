import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap, Globe, Shield, Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const TechnicalNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const PRIMARY_BLUE = "#224e72";

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
    { name: 'Services', path: '/services' },
    { name: 'Support', path: '/support' },
    { name: 'Contact', path: '/contact' },
  ];

  const programItems = [
    { name: 'INL', path: '/services/web-design' },
    { name: 'Quest', path: '/services/app-development' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        {/* LOGO AREA */}
        <Link to="/" className="relative z-50 flex items-center gap-4 group">
          <div className="relative">
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
              <Activity size={18} className="text-white -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
            </div>
            <div className="absolute inset-0 bg-white/5 blur-sm scale-0 group-hover:scale-150 transition-transform duration-500" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black italic tracking-tighter text-white">WAWU</span>
            <span className="text-[8px] font-bold tracking-[0.4em] text-white/40 uppercase">Foundation</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-4 py-2 group overflow-hidden`}
            >
              <span className={`relative z-10 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${location.pathname === link.path ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                {link.name}
              </span>
              {location.pathname === link.path && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-4 right-4 h-[2px] bg-white" />
              )}
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
            </Link>
          ))}

          {/* PROGRAMS DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('programs')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
              Programs <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === 'programs' ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {activeDropdown === 'programs' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-black border border-white/10 p-2 shadow-2xl"
                >
                  <div className="grid gap-1">
                    {programItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="group flex items-center justify-between p-3 hover:bg-white/5 transition-all"
                      >
                        <span className="text-[10px] font-bold text-white/40 group-hover:text-white uppercase tracking-widest">{item.name}</span>
                        <Zap size={10} className="text-white/0 group-hover:text-white transition-all" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/10 px-3">
                    <div className="flex items-center justify-between text-[8px] font-bold text-white/20 uppercase tracking-widest">
                      <span>Status: Active</span>
                      <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ACTION BUTTON */}
          <Link 
            to="/contact" 
            className="ml-6 px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#224e72] hover:text-white transition-all duration-300 flex items-center gap-3 group"
          >
            <span>Get Involved</span>
            <Shield size={14} className="group-hover:rotate-12 transition-transform" />
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="lg:hidden relative z-50 p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-40 flex flex-col p-8 pt-32"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-black italic text-white/40 hover:text-white uppercase tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto pb-12">
              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 border-b border-white/10 pb-4">Special Programs</p>
                <div className="grid grid-cols-2 gap-4">
                  {programItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[10px] font-bold text-white/60 hover:text-white uppercase tracking-widest"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default TechnicalNav;