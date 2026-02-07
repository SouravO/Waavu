import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 1. Refined toggle with stopPropagation
  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevents the click from immediately triggering the 'click-outside' logic
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    // 2. Close logic for clicking outside OR pressing Escape
    const handleCloseEvents = (event) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        return;
      }
      
      // If the click is outside the entire list item (button + menu), close it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('click', handleCloseEvents);
      document.addEventListener('keydown', handleCloseEvents);
    }

    return () => {
      document.removeEventListener('click', handleCloseEvents);
      document.removeEventListener('keydown', handleCloseEvents);
    };
  }, [dropdownOpen]);

  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        
        {/* The ref stays on the wrapper li */}
        <li className="nav-item-dropdown" ref={dropdownRef} style={{ position: 'relative', listStyle: 'none' }}>
          <button
            onClick={toggleDropdown}
            className="program-button"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            Program
            <span className={`arrow ${dropdownOpen ? 'rotate' : ''}`} style={{ marginLeft: '5px' }}>
              {dropdownOpen ? '▲' : '▼'}
            </span>
          </button>

          {dropdownOpen && (
            <ul className="dropdown-menu" style={{ 
              position: 'absolute', 
              top: '100%', 
              left: 0, 
              backgroundColor: '#fff', 
              border: '1px solid #ccc',
              padding: '10px',
              zIndex: 1000,
              minWidth: '160px'
            }}>
              <li><Link to="/services/web-design" onClick={() => setDropdownOpen(false)}>Web Design</Link></li>
              <li><Link to="/services/app-development" onClick={() => setDropdownOpen(false)}>App Development</Link></li>
              <li><Link to="/services/consulting" onClick={() => setDropdownOpen(false)}>Consulting</Link></li>
              <li><Link to="/services/training" onClick={() => setDropdownOpen(false)}>Training</Link></li>
            </ul>
          )}
        </li>
        
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;