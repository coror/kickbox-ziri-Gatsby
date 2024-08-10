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
    <div className='bg-layout2 font-oswald py-10'>
      <div className='flex flex-col items-center justify-center mb-10'>
        <h1 className='text-3xl font-bold text-center text-text1'>TRENERJI</h1>
        <div className='border-b-4 border-identifier w-12 text-center mt-5'></div>
      </div>
      <div
        className='flex flex-col md:flex-row justify-center items-center'
        ref={ref}
      >
        {/*Trener 1 */}
        <div className='flex flex-col text-center justify-center items-center m-10'>
          <Link className='max-w-80' to='/trenerji/#erin'>
            <StaticImage
              src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723162451/karate-kickbox-ostalo/cmzhy6t8c0213jvu2iyw.jpg'
              alt='erin'
              className={`rounded-full w-full h-full max-h-80 hover:brightness-75 transition-all duration-300 ease-in-out cursor-pointer ${
                animate
                  ? 'animate-fade-down animate-once animate-duration-1000 animate-delay-200'
                  : ''
              }`}
            />
          </Link>

          <div className='mt-1'>
            <Link
              className='text-text1 text-2xl mt-10 hover:text-identifier cursor-pointer'
              to='/trenerji/'
            >
              Erin Ćoralić
            </Link>
            <p className='text-identifier text-lg'>Trener odraslih in mladostnikov</p>
          </div>
        </div>

        {/*Trener 2 */}
        <div className='flex flex-col text-center justify-center items-center m-10'>
          <Link className='max-w-80' to='/trenerji/#matej'>
            <StaticImage
              src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723120147/karate-kickbox-ostalo/w5oiligkc0uiits58yss.jpg'
              alt='matej'
              className={`rounded-full w-full h-full max-h-80 hover:brightness-75 transition-all duration-300 ease-in-out cursor-pointer ${
                animate
                  ? 'animate-fade-down animate-once animate-duration-1000 animate-delay-200'
                  : ''
              }`}
            />
          </Link>

          <div className='mt-1'>
            <Link
              className='text-text1 text-2xl mt-10 hover:text-identifier cursor-pointer'
              to='/trenerji/'
            >
              Matej Jenko
            </Link>
            <p className='text-identifier text-lg'>Trener odraslih</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trenerji;
