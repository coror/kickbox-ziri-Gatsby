import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { StaticImage } from 'gatsby-plugin-image';

const navLinks = [
  { to: '/', label: 'DOMOV' },
  { to: '/programi', label: 'PROGRAMI' },
  { to: '/galerija', label: 'GALERIJA' },
  { to: '/o-nas', label: 'O NAS' },
  { to: '/trenerji', label: 'TRENERJI' },
  { to: '/vpis', label: 'VPIS', cta: true },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      return () => {
        const restoredY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        window.scrollTo({
          top: parseInt(restoredY || '0', 10) * -1,
          behavior: 'instant',
        });
      };
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const isActive = (to) => pathname === to || pathname === to + '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isMobileMenuOpen
            ? 'bg-transparent backdrop-blur-0'
            : 'bg-layout1/40 backdrop-blur-xl'
        }`}
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='relative flex h-20 items-center justify-between'>
            <Link
              to='/'
              className='flex items-center hover:opacity-80 transition-opacity duration-200 z-50'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <StaticImage
                className='h-10 w-10 rounded-md overflow-hidden'
                alt='logo'
                src='../../images/logo.jpg'
              />
              <span className='text-text1 ml-2 font-oswald text-lg md:text-2xl'>
                KICKBOX ŽIRI
              </span>
            </Link>

            <div className='hidden lg:flex items-center space-x-6 xl:space-x-10'>
              {navLinks
                .filter((l) => !l.cta)
                .map((link) => {
                  const active = isActive(link.to);
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`group relative py-2 transition-colors duration-200 font-oswald tracking-wider text-lg ${
                        active ? 'text-identifier' : 'text-text1 hover:text-identifier'
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute left-0 -bottom-0.5 h-0.5 bg-identifier transition-all duration-300 ease-out ${
                          active ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  );
                })}
              <Link
                to='/vpis'
                className={`${
                  isActive('/vpis')
                    ? 'bg-identifier text-text1'
                    : 'text-text1'
                } border-2 border-identifier px-6 py-2 hover:bg-identifier hover:text-text1 transition-all duration-200 font-oswald tracking-wider text-lg`}
              >
                VPIS
              </Link>
            </div>

            <button
              type='button'
              className='lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-text1 focus:outline-none'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle menu'
              aria-expanded={isMobileMenuOpen}
              aria-controls='mobile-menu'
            >
              <span className='sr-only'>Open main menu</span>
              <div className='w-6 h-6 relative'>
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? 'top-1/2 -translate-y-1/2 rotate-45'
                      : 'top-1.5'
                  }`}
                />
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-current top-1/2 -translate-y-1/2 transition-opacity duration-200 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? 'top-1/2 -translate-y-1/2 -rotate-45'
                      : 'bottom-1.5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        id='mobile-menu'
        className={`fixed inset-0 z-40 lg:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 transition-all duration-300 ease-out ${
            isMobileMenuOpen
              ? 'bg-layout1/40 backdrop-blur-xl'
              : 'bg-layout1/0 backdrop-blur-none'
          }`}
        />
        <div className='relative h-full flex flex-col items-center justify-center space-y-7 px-6'>
          {navLinks.map((link, idx) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                isActive(link.to) ? 'text-identifier' : 'text-text1'
              } hover:text-identifier text-3xl font-oswald tracking-wider transition-all duration-500 ${
                isMobileMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${100 + idx * 60}ms`
                  : '0ms',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
