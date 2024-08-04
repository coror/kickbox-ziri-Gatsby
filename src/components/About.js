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
    <div
      className='font-oswald flex flex-col md:flex-row bg-layout2 text-text1 items-center justify-center p-8'
      ref={ref}
    >
      <div
        className={` py-10 flex flex-col justify-center items-center px-4 ${
          animate
            ? 'animate-fade-right animate-duration-1000 animate-delay-200'
            : ''
        }`}
      >
        <div className='flex flex-col items-left justify-center mb-10 md:w-96'>
          <h1 className='text-4xl font-extrabold text-left tracking-wide'>
            ZGODOVINA KLUBA
          </h1>
          <div className='border-b-4 border-identifier w-16 mt-5'></div>
        </div>
        <div className='flex items-center md:w-96 justify-center text-left mb-5'>
          <p className='leading-relaxed text-lg'>
            Karate klub Žiri je bil ustanovljen v začetku leta 2013. Razvil se
            je iz karate sekcije, ki je pred tem v Žireh delovala že 7 let pod
            okriljem Karate kluba Kolektor Idrija.
          </p>
        </div>
        <div className='flex items-center md:w-96 justify-center text-left  mb-5'>
          <p className='leading-relaxed text-lg'>
            Karate tako v Žireh poučujemo neprekinjeno že skoraj 20 let. Karate
            klub Žiri je del Inštituta borilnih veščin (prej Karate inštituta),
            ki ga vodi dr. Jernej Sever in je, s preko 400 aktivnimi člani, eno
            največjih slovenskih združenj borilnih športov in veščin...
            <span className='inline-block'>
              <Link
                className=' flex text-sm hover:text-identifier border-b-2 border-identifier m-2  cursor-pointer transition ease-in-out'
                to='/about/'
              >
                PREBERI VEČ
                <FaArrowDown className='m-1 text-sm ' />
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className='relative max-w-lg md:max-w-none mx-4'>
        <StaticImage
          src='https://res.cloudinary.com/dbssbnuph/image/upload/v1718978917/kickbox-ziri-stran/20240226_185506_ydetve.jpg'
          alt='erin'
          className='max-w-[40rem]  max-h-96 h-auto rounded-sm shadow-lg filter brightness-90 contrast-125'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50 rounded-lg'></div>
      </div>
    </div>
  );
};

export default Meaning;
