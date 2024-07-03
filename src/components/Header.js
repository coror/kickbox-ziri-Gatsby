import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => {
  return (
    <div className='relative bg-black'>
      <h1 className='hidden md:flex font-oswald tracking-wider absolute top-0 left-0 right-0 p-4 items-center justify-center text-white text-5xl font-bold animate-fade-left animate-duration-[4000ms] animate-delay-[2000ms] z-10 mt-5'>
        KICKBOX ŽIRI
      </h1>
      <StaticImage
        src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/sharper_utdk6l'
        alt='KICKBOX ŽIRI'
        className='object-cover w-full h-auto animate-fade animate-duration-[4000ms] animate-delay-500 '
      />
    </div>
  );
};

export default Header;
