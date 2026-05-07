import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div className='relative w-full min-h-[55vh] md:min-h-screen overflow-hidden'>
      <StaticImage
        src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723154187/karate-kickbox-ostalo/rflvwh0n4chfo3p7jdlu.jpg'
        alt='KICKBOX ŽIRI'
        className='!absolute inset-0 w-full h-full'
        loading='eager'
        placeholder='blurred'
        objectFit='cover'
        layout='fullWidth'
        quality={100}
        formats={['auto', 'webp', 'avif']}
        breakpoints={[750, 1080, 1366, 1920, 2560, 3200]}
      />

      <div className='absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/10 z-10'></div>

      <div className='relative z-20 flex items-end md:items-center min-h-[55vh] md:min-h-screen pb-10 md:pb-0'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 lg:max-w-none lg:px-12 xl:px-20 w-full'>
          <div className='font-oswald text-text1 max-w-2xl animate-fade-left animate-delay-1000'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider leading-tight'>
              KICKBOX ŽIRI
            </h1>
            <div className='border-b-4 border-identifier w-16 mt-4 md:mt-6 animate-fade-left animate-delay-1500'></div>
            <p className='hidden md:block mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl animate-fade-left animate-delay-2000'>
              Bori se z močjo, zmagaj z umom
            </p>
            <div className='mt-8 md:mt-12 flex flex-wrap gap-4 animate-fade-left animate-delay-2000'>
              <Link
                to='/vpis'
                className='bg-identifier border-2 border-identifier py-2 px-6 md:py-3 md:px-8 text-base sm:text-lg lg:text-xl text-text1 cursor-pointer hover:text-identifier hover:bg-transparent transition-colors duration-200 ease-in-out'
              >
                Pridruži se nam!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
