import React, { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useInView } from 'react-intersection-observer';

const ContactLine = () => {
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <div className='flex-col md:flex-row  bg-layout2 flex text-text2 py-8 font-oswald'>
      <div
        className={`flex flex-col lg:flex-row mx-auto space-y-4 2xl:space-x-[18rem] ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        ref={ref}
      >
        {/* Phone */}
        <div
          className={`text-center flex-1 relative w-[10rem] xl:w-[19rem] ${
            animate
              ? 'animate-fade-left animate-duration-1000 animate-delay-200 animate-ease-in-out'
              : ''
          } `}
          style={{ display: 'grid' }}
        >
          <StaticImage
            src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/phone_p2wyfl'
            alt='Call us 24/7'
            style={{
              gridArea: '1/1',
            }}
            placeholder='blurred'
            layout='constrained'
            formats={['auto', 'webp', 'avif']}
            className='bg-no-repeat bg-center m-auto w-auto h-auto'
          />
          <div
            style={{
              gridArea: '1/1',
              position: 'relative',
              placeItems: 'center',
              display: 'grid',
            }}
          >
            <div className='text-center'>
              <p className=' text-white'>POKLIČITE NAS NA</p>
              <span className='lg:text-2xl'>040/799 797</span>
            </div>
          </div>
        </div>
        {/* Location */}
        <div
          className={`text-center flex-1 relative w-[10rem] xl:w-[19rem] ${
            animate
              ? 'animate-fade-left animate-duration-1000 animate-delay-200 animate-ease-in-out'
              : ''
          } `}
          style={{ display: 'grid' }}
        >
          <StaticImage
            src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/location_xbbtzv'
            alt='Season Street 45/2'
            style={{
              gridArea: '1/1',
            }}
            placeholder='blurred'
            layout='constrained'
            formats={['auto', 'webp', 'avif']}
            className='bg-no-repeat bg-center m-auto w-auto h-auto'
          />
          <div
            style={{
              gridArea: '1/1',
              position: 'relative',
              placeItems: 'center',
              display: 'grid',
            }}
          >
            <div className='text-center'>
              <p className='text-white'>KJE SMO</p>
              <span className='lg:text-2xl'>
                PARTIZANSKA CESTA 101, 4226 ŽIRI
              </span>
            </div>
          </div>
        </div>
        {/* Time */}
        <div
          className={`text-center flex-1 relative w-[10rem] xl:w-[19rem] ${
            animate
              ? 'animate-fade-left animate-duration-1000 animate-delay-200 animate-ease-in-out'
              : ''
          } `}
          style={{ display: 'grid' }}
        >
          <StaticImage
            src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/time_pa0qer'
            alt='Working Hours'
            style={{
              gridArea: '1/1',
            }}
            placeholder='blurred'
            layout='constrained'
            formats={['auto', 'webp', 'avif']}
            className='bg-no-repeat bg-center m-auto w-auto h-auto'
          />
          <div
            style={{
              gridArea: '1/1',
              position: 'relative',
              placeItems: 'center',
              display: 'grid',
            }}
          >
            <div className='special-heading text-center'>
              <p className='text-white'>DELOVNE URE</p>
              <span className='lg:text-2xl'>08:00 - 15:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLine;
