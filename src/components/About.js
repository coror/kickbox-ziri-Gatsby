import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
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
    <div
      className='font-oswald flex flex-col md:flex-row bg-gradient-to-br from-[#0d0f1a] to-[#111525] items-center justify-center p-8'
      ref={ref}
    >
      <div className='relative max-w-lg md:max-w-none mx-4'>
        <StaticImage
          src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri-stran/kb2_ojst6i'
          alt='erin'
          className='max-w-[40rem] h-auto rounded-sm shadow-lg filter brightness-90 contrast-125'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50 rounded-lg'></div>
      </div>
      <div
        className={`text-white py-10 flex flex-col justify-center items-center px-4 ${
          animate
            ? 'animate-fade-right animate-duration-1000 animate-delay-200'
            : ''
        }`}
      >
        <div className='flex flex-col items-left justify-center mb-10 md:w-96'>
          <h1 className='text-4xl font-extrabold text-center tracking-wide '>
            POMEN BORILNIH ZNANJ
          </h1>
          <div className='border-b-4 border-[rgb(228,61,78)] w-16 mt-5'></div>
        </div>
        <div className='flex items-center md:w-96 justify-center text-left mb-5'>
          <p className='leading-relaxed text-lg'>
            Na osnovi bogatih izkušenj iz borilnih veščin, znanstvenega
            raziskovanja ter desetletij pedagoškega dela oblikujemo moderne
            vadbene programe.
          </p>
        </div>
        <div className='flex items-center md:w-96 justify-center text-left text-gray-400 mb-5'>
          <p className='leading-relaxed text-lg'>
            Čeprav so borilne veščine ena izmed najbolj številčnih gibalih
            aktivnosti v svetu, v družbi še vedno obstaja kar precej predsodkov
            do njih. Eden takih razširjenih predsodkov je, da naj bi borilne
            veščine spodbujale agresijo in nasilje, ter da v borilnih veščinah
            prihaja do nekontroliranega fizičnega kontakta. Taki predsodki
            izvirajo iz...
            <span className='inline-block'>
              <Link
                className=' flex text-sm text-[rgb(228,61,78)]  m-2 hover:text-white cursor-pointer transition ease-in-out'
                to='/about/'
              >
                PREBERI VEČ
                <FaArrowDown className='m-1 text-sm' />
              </Link>
            </span>
          </p>
        </div>
        <div>
          <p className='text-xl font-bold'>Dr. Jernej Sever</p>
          <p className='text-xs text-gray-500'>PREDSEDNIK KLUBA</p>
        </div>
      </div>
    </div>
  );
};

export default About;
