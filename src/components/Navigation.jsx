import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { Menu, ChevronDown, Trophy, Zap, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const VoltageFootballNav = () => {
  const [ballX, setBallX] = useState(-100);
  const [ballRotate, setBallRotate] = useState(0);
  const [isBouncing, setIsBouncing] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const PRIMARY_BLUE = "#224e72";
  
  // Spring physics for the ball trail
  const trailX = useSpring(ballX, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    { name: 'Web Design', path: '/services/web-design' },
    { name: 'App Development', path: '/services/app-development' },
    { name: 'Consulting', path: '/services/consulting' },
    { name: 'Training', path: '/services/training' },
  ];

  const handleInteraction = (e) => {
    if (!navRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();
    
    // Exact center calculation
    const centerPoint = rect.left - navRect.left + rect.width / 2 - 14;
    setBallX(centerPoint);
    setBallRotate(prev => prev + 360); 
    
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 400);
  };

  return (
    <nav className={`fixed top-0 w-full z-[300] transition-all duration-700 px-6 ${scrolled ? 'py-2' : 'py-8'}`}>
      <div 
        ref={navRef}
        className={`max-w-[1400px] mx-auto relative flex justify-between items-center p-4 rounded-2xl border-b-[6px] transition-all duration-500 overflow-visible ${
          scrolled 
          ? 'bg-[#0a0f1e]/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
          : 'bg-[#12182d] shadow-[0_15px_30px_rgba(0,0,0,0.4)]'
        }`}
        style={{ borderColor: PRIMARY_BLUE }}
      >
        {/* --- PHYSICS FOOTBALL & LIGHTING --- */}
        <motion.div
          animate={{ 
            x: ballX, 
            rotate: ballRotate,
            y: isBouncing ? -35 : 0,
            scale: isBouncing ? 1.4 : 1
          }}
          transition={{ 
            x: { type: "spring", stiffness: 80, damping: 12 },
            y: { type: "spring", stiffness: 500, damping: 15 },
            scale: { duration: 0.2 }
          }}
          className="absolute top-[-22px] z-50 pointer-events-none hidden lg:block"
        >
          <div className="relative w-8 h-8 bg-white rounded-full border-2 border-black flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            <Activity className="absolute text-black/10 w-full h-full p-1" />
            <div className="w-3 h-3 bg-black rounded-full" />
          </div>
          
          {/* Energy Pulse on "Kick" */}
          <AnimatePresence>
            {isBouncing && (
              <motion.div 
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 3, opacity: 0 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: PRIMARY_BLUE }}
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Floating Trail behind the ball */}
        <motion.div 
          style={{ x: trailX }}
          className="absolute top-0 h-1 w-12 blur-sm rounded-full pointer-events-none opacity-50"
          style={{ backgroundColor: PRIMARY_BLUE, x: trailX }}
        />

        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center gap-3 group z-20">
          <motion.div 
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            className="p-2.5 rounded-xl shadow-lg transition-all"
            style={{ backgroundColor: PRIMARY_BLUE }}
          >
            <Trophy className="text-white" size={22} />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-2xl font-[1000] italic text-white uppercase tracking-tighter leading-none">
              WAWU<span style={{ color: PRIMARY_BLUE }}>.</span>
            </span>
            <span className="text-[8px] font-black text-white/40 tracking-[0.3em] uppercase">Foundation</span>
          </div>
        </Link>

        {/* MAIN NAVIGATION LINKS */}
        <div className="hidden lg:flex items-center gap-1 z-20">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onMouseEnter={handleInteraction}
              className="relative px-5 py-2 group"
            >
              <motion.span 
                className="relative z-10 text-[11px] font-[900] text-white/50 group-hover:text-white uppercase tracking-widest transition-colors"
              >
                {link.name}
              </motion.span>
              {/* Magnetic Hover Background */}
              <motion.div 
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 -z-10 transition-opacity"
                style={{ backgroundColor: PRIMARY_BLUE }}
              />
            </Link>
          ))}

          {/* DYNAMIC DROPWDOWN */}
          <div 
            className="relative" 
            onMouseEnter={(e) => { handleInteraction(e); setDropdownOpen(true); }}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 px-5 py-2 text-[11px] font-[900] text-white/50 uppercase tracking-widest hover:text-white transition-all">
              Programs <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 20, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-0 mt-5 bg-[#0a0f1e] border-b-4 p-3 w-60 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.8)] border-x-2 border-white/5"
                  style={{ borderBottomColor: PRIMARY_BLUE }}
                >
                  <div className="grid grid-cols-1 gap-1">
                    {programItems.map((item) => (
                      <Link 
                        key={item.name} 
                        to={item.path} 
                        className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all"
                      >
                        <span className="text-[10px] font-bold text-white/40 group-hover:text-white uppercase tracking-widest">{item.name}</span>
                        <Zap size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: PRIMARY_BLUE }} />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ACTION BUTTON */}
          <motion.div 
            className="ml-6"
            onMouseEnter={handleInteraction}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/donate" 
              className="relative px-10 py-3.5 rounded-full font-[1000] text-[12px] uppercase tracking-widest italic overflow-hidden flex items-center gap-2 group"
              style={{ 
                backgroundColor: scrolled ? PRIMARY_BLUE : 'white',
                color: scrolled ? 'white' : '#12182d'
              }}
            >
              <Zap size={14} fill="currentColor" className="group-hover:animate-pulse" />
              <span className="relative z-10">Donate</span>
              
              {/* Shine Effect */}
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute top-0 left-0 w-1/2 h-full bg-white/20 skew-x-12 pointer-events-none"
              />
            </Link>
          </motion.div>
        </div>

        {/* MOBILE MENU ICON */}
        <motion.button 
          whileTap={{ scale: 0.8 }}
          className="lg:hidden p-2 rounded-lg bg-white/5 text-white"
        >
          <Menu size={28} />
        </motion.button>
      </div>
    </nav>
  );
};

export default VoltageFootballNav;