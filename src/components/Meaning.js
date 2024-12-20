import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Meaning = () => {
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
    <div className='font-oswald flex flex-col md:flex-row bg-layout1 items-center justify-center p-8'>
      <div
        className={`transition-opacity duration-2000 transform md:space-x-4 flex flex-col md:flex-row items-center justify-center ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        ref={ref}
      >
        <div
          className={`relative max-w-lg md:max-w-none mx-4' ${
            animate
              ? 'animate-fade-right animate-duration-1000 animate-delay-200'
              : ''
          }`}
        >
          <StaticImage
            src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723160123/karate-kickbox-ostalo/z3hht3kg3jqzzxkek5fu.png'
            alt='erin'
            className='max-w-[40rem] h-auto rounded-sm shadow-lg filter brightness-90 contrast-125'
          />
        </div>
        <div
          className={`text-text1 py-10 flex flex-col justify-center items-center px-4 ${
            animate
              ? 'animate-fade-right animate-duration-1000 animate-delay-1000'
              : ''
          }`}
        >
          <div className='flex flex-col items-left justify-center mb-10 md:w-96'>
            <h1 className='text-4xl font-extrabold text-center tracking-wide '>
              POMEN BORILNIH ZNANJ
            </h1>
            <div className='border-b-4 border-identifier w-16 mt-5'></div>
          </div>
          <div className='flex items-center md:w-96 justify-center text-left mb-5 text-text1'>
            <p className='leading-relaxed text-lg'>
              Na osnovi bogatih izkušenj iz borilnih veščin, znanstvenega
              raziskovanja ter desetletij pedagoškega dela oblikujemo moderne
              vadbene programe.
            </p>
          </div>
          <div className='flex items-center md:w-96 justify-center text-left text-text2 mb-5'>
            <p className='leading-relaxed text-lg'>
              Čeprav so borilne veščine ena izmed najbolj številčnih gibalih
              aktivnosti v svetu, v družbi še vedno obstaja kar precej
              predsodkov do njih. Eden takih razširjenih predsodkov je, da naj
              bi borilne veščine spodbujale agresijo in nasilje, ter da v
              borilnih veščinah prihaja do nekontroliranega fizičnega kontakta.
              Taki predsodki izvirajo iz...
              <span className='inline-block'>
                <Link
                  className=' flex text-sm text-identifier m-2 hover:text-text1 cursor-pointer transition ease-in-out'
                  to='/o-nas/#pomen'
                >
                  PREBERI VEČ
                  <FaArrowDown className='m-1 text-sm' />
                </Link>
              </span>
            </p>
          </div>
          <div>
            <p className='text-xl font-bold'>Dr. Jernej Sever</p>
            <p className='text-xs text-gray-500'>VODJA KARATE INSTITUTA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meaning;
