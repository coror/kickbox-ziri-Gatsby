import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div className='w-auto max-h-screen h-96 md:h-screen overflow-hidden relative'>
      <div className='absolute top-[50%] 2xl:top-[50%]  right-1/2  -translate-x-1/2 -translate-y-1/2 px-8 text-center text-text1 animate-fade-left animate-delay-1000 z-10 lg:mx-[170px] '>
        <div className='font-oswald'>
          <h1 className='text-sm md:text-5xl tracking-wider text-left md:leading-snug'>
            DOBRODOŠLI NA NAŠI STRANI
          </h1>
          <div className='hidden md:block border-b-4 border-identifier w-16 mt-1 md:mt-5 animate-fade-left animate-delay-1500'></div>
          <p className='hidden lg:block text-left mb-5 text-sm md:text-2xl mt-5  animate-fade-left animate-delay-2000'>
            Vsako veliko potovanje se prične s prvim korakom
          </p>
          <div className='text-left mt-2 md:mt-14'>
            <Link to='/vpis' className=' bg-identifier border-4 border-identifier rounded-sm md:py-3 md:px-6 text-sm  lg:text-xl cursor-pointer hover:text-identifier hover:bg-transparent transition-colors duration-200 ease-in-out'>
              Pridruži se nam!
            </Link>
          </div>
        </div>
      </div>

      <StaticImage
        src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/IMG_20240625_131334_1_z20fjx'
        alt='KICKBOX ŽIRI'
        className='w-full h-full object-cover'
      />
    </div>
  );
};

export default Header;
