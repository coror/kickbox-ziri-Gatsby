import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Trenerji = () => {
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // When the component comes into view, set animate to true
  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <div className='bg-gradient-to-br from-[#0d0f1a] to-[#111525] font-oswald py-10'>
      <div className='flex flex-col items-center justify-center mb-10'>
        <h1 className='text-3xl font-bold text-center text-white'>TRENERJI</h1>
        <div className='border-b-4 border-[rgb(228,61,78)] w-12 text-center mt-5'></div>
      </div>
      <div
        className='flex flex-col md:flex-row justify-center items-center'
        ref={ref}
      >
        {/*Trener 1 */}
        <div className='flex flex-col text-center justify-center items-center m-10'>
          <Link className='max-w-80' to='/trenerji/'>
            <StaticImage
              src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/erin_pwgu7l'
              alt='erin'
              className={`w-full h-full max-h-80 hover:opacity-70 transition-opacity duration-300 ease-in-out cursor-pointer ${
                animate
                  ? 'animate-fade-down animate-once animate-duration-1000 animate-delay-200'
                  : ''
              }`}
            />
          </Link>

          <div>
            <Link
              className='text-white text-2xl mt-10 hover:text-[rgb(228,61,78)] cursor-pointer'
              to='/trenerji/'
            >
              Erin Ćoralić
            </Link>
            <p className='text-[rgb(228,61,78)]'>
              Trener odraslih in mladostnikov
            </p>
          </div>
        </div>

        {/*Trener 2 */}
        <div className='flex flex-col text-center justify-center items-center m-10'>
          <Link className='max-w-80' to='/trenerji/'>
            <StaticImage
              src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/20240327_180257_qp8yqt'
              alt='erin'
              className={`w-full h-full max-h-80 hover:opacity-70 transition-opacity duration-300 ease-in-out cursor-pointer ${
                animate
                  ? 'animate-fade-down animate-once animate-duration-1000 animate-delay-200'
                  : ''
              }`}
            />
          </Link>

          <div>
            <Link
              className='text-white text-2xl mt-10 hover:text-[rgb(228,61,78)] cursor-pointer'
              to='/trenerji/'
            >
              Matej Jenko
            </Link>
            <p className='text-[rgb(228,61,78)]'>Trener odraslih</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trenerji;
