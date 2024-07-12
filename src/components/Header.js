import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => {
  return (
    <div className='w-auto max-h-screen overflow-hidden relative'>
      <div className='absolute md:top-[20%] top-6 right-1/2  -translate-x-1/2 -translate-y-1/2 px-8 text-center text-white animate-fade-left animate-delay-1000 z-10 lg:mx-[170px] '>
        <div>
          <h1 className='text-2xl md:text-5xl font-oswald tracking-wider text-left md:leading-snug'>
            DOBRODOŠLI NA NAŠI STRANI
          </h1>
          <div className=' border-b-4 border-[rgb(228,61,78)] w-16 mt-5  animate-fade-left animate-delay-1500'></div>
          <p className=' text-left text-sm md:text-2xl mt-5  animate-fade-left animate-delay-2000'>
            Vsako veliko potovanje se prične s prvim korakom
          </p>
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
