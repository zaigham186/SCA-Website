import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // Header should be transparent only on home hero when not scrolled
  const isHome = location.pathname === '/';
  const headerTransparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${headerTransparent ? 'bg-transparent py-6' : 'bg-white shadow-md py-4'
        }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`w-12 h-12 rounded-xl overflow-hidden shadow-lg transform group-hover:scale-110 transition-transform ${headerTransparent ? 'bg-white/10' : 'bg-primary-50'}`}>
              <img src={logo} alt="Standard Academy Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tighter font-heading ${headerTransparent ? 'text-white' : 'text-primary-500'}`}>
                STANDARD<span className="text-accent-500">.</span>
              </span>
              <span className={`text-[9px] uppercase tracking-[0.4em] font-black font-heading ${headerTransparent ? 'text-white/60' : 'text-slate-500'}`}>
                coaching academy
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[14px] font-bold uppercase tracking-widest transition-all hover:text-accent-500 font-heading ${isActive(link.path)
                    ? 'text-accent-500'
                    : headerTransparent ? 'text-white' : 'text-primary-500/80'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* START LEARNING CTA */}
            <Link
              to="/courses"
              className="px-8 py-3 bg-accent-500 text-white font-bold rounded-full shadow-lg shadow-accent-500/20 hover:bg-accent-600 hover:-translate-y-0.5 transition-all duration-300 transform font-sans tracking-wider text-sm antialiased"
            >
              Start Learning
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${headerTransparent ? 'text-white' : 'text-slate-800'}`}
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-400 overflow-hidden ${isOpen ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
          }`}
      >
        <div className="container-custom py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-bold ${isActive(link.path) ? 'text-accent-500' : 'text-slate-800'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/courses"
            className="px-8 py-4 bg-accent-500 text-white font-bold rounded-full shadow-lg shadow-accent-500/20 text-center font-sans tracking-wider text-sm antialiased"
          >
            Start Learning
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
