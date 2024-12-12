import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div className='w-full max-h-screen h-[25rem] md:h-screen overflow-hidden relative '>
      <div className='absolute top-[30%] md:top-[35%] right-1/2  -translate-x-1/2 -translate-y-1/2 pl-8 text-center text-text1 animate-fade-left animate-delay-1000 z-10 lg:mx-[170px] '>
        <div className='font-oswald'>
          <h1 className='text-[17px] md:text-6xl tracking-wider text-left md:leading-snug'>
            DOBRODOŠLI NA NAŠI STRANI
          </h1>
          <div className='hidden md:block border-b-4 border-identifier w-16 mt-1 md:mt-5 animate-fade-left animate-delay-1500'></div>
          <p className='hidden lg:block text-left mb-5 text-sm md:text-3xl mt-5  animate-fade-left animate-delay-2000'>
          Bori se z močjo, zmagaj z umom
          </p>
          <div className='text-left mt-7 md:mt-14'>
            <Link to='/vpis' className=' bg-identifier border-4 border-identifier p-1 rounded-md text-xs sm:text-sm md:py-3 md:px-6  lg:text-xl cursor-pointer hover:text-identifier hover:bg-transparent transition-colors duration-200 ease-in-out'>
              Pridruži se nam!
            </Link>
          </div>
        </div>
      </div>

      <StaticImage
        src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723154187/karate-kickbox-ostalo/rflvwh0n4chfo3p7jdlu.jpg'
        alt='KICKBOX ŽIRI'
        // placeholder='none' // Disable Gatsby's default placeholder
        quality={100} // Ensure high quality
        // formats={['auto', 'webp', 'avif']} // Modern formats for better compression
        className='w-full overflow-hidden h-full object-cover bg-black ' // Apply black background
      />
    </div>
  );
};

export default Header;
