import { Link } from 'gatsby';
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from '@reach/router';
import { StaticImage } from 'gatsby-plugin-image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const mobileMenuRef = useRef(null);
  const buttonRef = useRef(null); // Button ref for menu toggle

  // Function to toggle mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    // Ensure clicks outside the menu close the menu
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`${
        isMobileMenuOpen ? 'fixed ' : 'absolute'
      } bg-[#0A0D1B] md:flex md:items-center md:min-h-32 md:absolute md:opacity-80 z-50 w-full`}
    >
      <div className='mx-auto px-2 sm:px-6 lg:px-8 '>
        <div className='relative flex h-20 items-center '>
          <div className='absolute inset-y-0 left-0 flex items-center lg:hidden'>
            <button
              type='button'
              id='mobile-dropdown-button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-text1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-text1'
              aria-controls='mobile-menu'
              aria-expanded='false'
              ref={buttonRef}
              onClick={toggleMobileMenu}
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>
          <div className='flex items-center justify-center'>
            <div className=' 2xl:mr-64'>
              <Link
                className='flex flex-shrink-0 items-center hover:opacity-80 transition-opacity duration-200 ease-in-out mx-20'
                to='/'
              >
                <StaticImage
                  className='h-10 w-10 rounded-md'
                  alt='logo'
                  src='../../images/logo.jpg'
                />
                <span className=' text-text1 md:text-3xl ml-2 font-oswald'>
                  KICKBOX ŽIRI
                </span>
              </Link>
            </div>

            <div className='hidden md:ml-6 lg:block text-xl '>
              <div className='flex space-x-5  xl:space-x-14 2xl-space-x-32'>
                <Link
                  to='/'
                  className={`${
                    pathname === '/' ? 'text-identifier' : 'text-text1'
                  }   hover:text-identifier py-2 transition-all duration-300 ease-in-out font-oswald tracking-wider `}
                >
                  DOMOV
                </Link>
                <Link
                  to='/programi'
                  className={`${
                    pathname === '/programi/' ? 'text-identifier' : 'text-text1'
                  }   hover:text-identifier py-2 transition-all duration-300 ease-in-out  font-oswald tracking-wider `}
                >
                  PROGRAMI
                </Link>
                <Link
                  to='/galerija'
                  className={`${
                    pathname === '/galerija/' ? 'text-identifier' : 'text-text1'
                  }   hover:text-identifier  py-2 transition-all duration-300 ease-in-out  font-oswald tracking-wider `}
                >
                  GALERIJA
                </Link>
                <Link
                  to='/about'
                  className={`${
                    pathname === '/about/' ? 'text-identifier' : 'text-text1'
                  }   hover:text-identifier  py-2 transition-all duration-300 ease-in-out  font-oswald tracking-wider `}
                >
                  O NAS
                </Link>
                <Link
                  to='/trenerji'
                  className={`${
                    pathname === '/trenerji/' ? 'text-identifier' : 'text-text1'
                  }   hover:text-identifier  py-2 transition-all duration-300 ease-in-out  font-oswald tracking-wider `}
                >
                  TRENERJI
                </Link>
                <Link
                  to='/vpis'
                  className={`${
                    pathname === '/vpis/' ? 'text-identifier' : 'text-text1'
                  }   hover:text-identifier px-8  py-2 transition-all duration-300 ease-in-out  font-oswald tracking-wider border-2 border-identifier `}
                >
                  VPIS
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div
            className={`fixed inset-x-0 top-20 bg-layout1 transition-transform duration-300 ease-out z-10 ${
              isMobileMenuOpen ? 'mobile-menu-enter' : 'mobile-menu-exit'
            }`}
            id='mobile-menu'
            ref={mobileMenuRef}
          >
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <Link
                to='/'
                className={`${
                  pathname === '/' ? 'text-identifier' : 'text-text1'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                DOMOV
              </Link>
              <Link
                to='/programi'
                className={`${
                  pathname === '/programi/' ? 'text-identifier' : 'text-text1'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                PROGRAMI
              </Link>
              <Link
                to='/galerija'
                className={`${
                  pathname === '/galerija/' ? 'text-identifier' : 'text-text1'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                GALERIJA
              </Link>
              <Link
                to='/about'
                className={`${
                  pathname === '/about/' ? 'text-identifier' : 'text-text1'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                O NAS
              </Link>
              <Link
                to='/trenerji'
                className={`${
                  pathname === '/trenerji/' ? 'text-identifier' : 'text-text1'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                TRENERJI
              </Link>
              <Link
                to='/vpis'
                className={`${
                  pathname === '/vpis/' ? 'text-identifier' : 'text-text1'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                VPIS
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
