import { Link } from 'gatsby';
import React, { useState } from 'react';
import { useLocation } from '@reach/router';
import { StaticImage } from 'gatsby-plugin-image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  // Function to toggle mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className='bg-[#0A0D1B] md:flex md:items-center md:min-h-32 absolute opacity-80 z-50 w-full '>
      <div className='mx-auto px-2 sm:px-6 lg:px-8 '>
        <div className='relative flex h-20 items-center '>
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            <button
              type='button'
              id='mobile-dropdown-button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
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
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <Link
              className='flex flex-shrink-0 items-center hover:opacity-80 transition-opacity duration-200 ease-in-out mr-20'
              to='/'
            >
              <StaticImage
                className='h-10 w-10 rounded-md'
                alt='logo'
                src='../../images/logo.jpg'
              />
              <span className=' text-white text-2xl md:text-3xl ml-2 font-oswald'>
                KICKBOX ŽIRI
              </span>
            </Link>
            <div className='hidden md:ml-6 md:block text-xl '>
              <div className='flex space-x-2'>
                <Link
                  to='/'
                  className={`${
                    pathname === '/' ? 'text-[rgb(228,61,78)]' : 'text-white'
                  }   hover:text-[rgb(228,61,78)] px-4 py-2 transition-all duration-300 ease-in-out font-oswald tracking-wider `}
                >
                  DOMOV
                </Link>
                <Link
                  to='/programi'
                  className={`${
                    pathname === '/programi/'
                      ? 'text-[rgb(228,61,78)]'
                      : 'text-white'
                  }   hover:text-[rgb(228,61,78)] px-4 py-2 transition-all duration-300 ease-in-out  font-oswald tracking-wider`}
                >
                  PROGRAMI
                </Link>
                <Link
                  to='/galerija'
                  className={`${
                    pathname === '/galerija/'
                      ? 'text-[rgb(228,61,78)]'
                      : 'text-white'
                  }   hover:text-[rgb(228,61,78)] px-4 py-2 transition-all duration-300 ease-in-out  font-oswald tracking-wider`}
                >
                  GALERIJA
                </Link>
                <Link
                  to='/about'
                  className={`${
                    pathname === '/about/'
                      ? 'text-[rgb(228,61,78)]'
                      : 'text-white'
                  }   hover:text-[rgb(228,61,78)] px-4 py-2 transition-all duration-300 ease-in-out  font-oswald tracking-wider`}
                >
                  O NAS
                </Link>
                <Link
                  to='/trenerji'
                  className={`${
                    pathname === '/trenerji/'
                      ? 'text-[rgb(228,61,78)]'
                      : 'text-white'
                  }   hover:text-[rgb(228,61,78)] px-4 py-2 transition-all duration-300 ease-in-out  font-oswald tracking-wider`}
                >
                  TRENERJI
                </Link>
                <Link
                  to='/vpis'
                  className={`${
                    pathname === '/vpis/'
                      ? 'text-[rgb(228,61,78)]'
                      : 'text-white'
                  }   hover:text-[rgb(228,61,78)] px-8  py-2 transition-all duration-300 ease-in-out  font-oswald tracking-wider border-2 border-[rgb(228,61,78)]`}
                >
                  VPIS
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden' id='mobile-menu'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <Link
                to='/'
                className={`${
                  pathname === '/' ? 'text-[rgb(228,61,78)]' : 'text-white'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                DOMOV
              </Link>
              <Link
                to='/programi'
                className={`${
                  pathname === '/programi/'
                    ? 'text-[rgb(228,61,78)]'
                    : 'text-white'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                PROGRAMI
              </Link>
              <Link
                to='/galerija'
                className={`${
                  pathname === '/galerija/'
                    ? 'text-[rgb(228,61,78)]'
                    : 'text-white'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                GALERIJA
              </Link>
              <Link
                to='/about'
                className={`${
                  pathname === '/about/'
                    ? 'text-[rgb(228,61,78)]'
                    : 'text-white'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                O NAS
              </Link>
              <Link
                to='/trenerji'
                className={`${
                  pathname === '/trenerji/'
                    ? 'text-[rgb(228,61,78)]'
                    : 'text-white'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                TRENERJI
              </Link>
              <Link
                to='/vpis'
                className={`${
                  pathname === '/vpis/'
                    ? 'text-[rgb(228,61,78)]'
                    : 'text-white'
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