import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Programi = () => {
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
    <div className='relative  pt-20'>
      <StaticImage
        src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/IMG_20240625_131334_wskrzp'
        alt='Background'
        placeholder='blurred'
        className='fixed inset-0 w-full h-full object-cover'
        style={{
          zIndex: -1,
        }}
      />
      <div className='absolute inset-0 bg-[#13182A] opacity-75'></div>
      <div className='relative text-white font-oswald'>
        <div className='container mx-auto py-10' ref={ref}>
          <div className='flex flex-col items-center justify-center mb-10'>
            <h1 className='text-3xl font-bold text-center'>PROGRAMI</h1>
            <div className='border-b-4 border-[rgb(228,61,78)] w-12 text-center mt-5'></div>
          </div>
          <div
            className={`flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 ${
              animate
                ? 'animate-fade-right animate-duration-1000 animate-delay-200 animate-ease-in-out'
                : ''
            } `}
          >
            <div className='bg-[#13182A] shadow-lg max-w-xs m-5'>
              <Link to='/programi/#kickbox-za-odrasle'>
                <div className='w-full h-56 md:h-64 overflow-hidden'>
                  <StaticImage
                    src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri-stran/kb1_nmuml2'
                    alt='Traditional Martial Arts'
                    className='w-full h-full hover:opacity-50 transition-opacity duration-500 ease-in-out cursor-pointer max-w-96'
                  />
                </div>
              </Link>

              <div className='p-4 flex flex-col'>
                <Link
                  className='text-xl font-semibold mb-2 cursor-pointer text-center items-center'
                  to='/programi/#kickbox-za-odrasle'
                >
                  Kickbox za odrasle 1
                </Link>
                <p className='text-[rgb(228,61,78)] mb-4 text-center'>
                  18:00 - 19:30 / Erin Ćoralić
                </p>
                <p className='text-center'>Nadaljevalna skupina</p>
              </div>
            </div>

            <div className='bg-[#13182A] shadow-lg max-w-xs m-5'>
              <Link to='/programi/#kickbox-za-odrasle'>
                <div className='w-full h-56 md:h-64 overflow-hidden'>
                  <StaticImage
                    src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri-stran/kb4_lf47du'
                    alt='Traditional Martial Arts'
                    className='w-full h-full hover:opacity-50 transition-opacity duration-300 ease-in-out cursor-pointer max-w-96'
                  />
                </div>
              </Link>

              <div className='p-4 flex flex-col'>
                <Link
                  className='text-xl font-semibold mb-2 cursor-pointer text-center items-center'
                  to='/programi/#kickbox-za-odrasle'
                >
                  Kickbox za odrasle 2
                </Link>
                <p className='text-[rgb(228,61,78)] mb-4 text-center'>
                  19:30 - 20:30 / Matej Jenko
                </p>
                <p className=' text-center'>Začetna skupina</p>
              </div>
            </div>

            <div className='bg-[#13182A] shadow-lg max-w-xs m-5'>
              <Link to='/programi/'>
                <div className=' h-56 md:h-64 overflow-hidden'>
                  <StaticImage
                    src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri-stran/20240226_173253_r1zimw'
                    alt='Kick Boxing Group'
                    className='w-full h-full hover:opacity-50 transition-opacity duration-300 ease-in-out cursor-pointer max-w-96'
                  />
                </div>
              </Link>

              <div className='p-4 flex flex-col'>
                <Link
                  className='text-xl font-semibold mb-2 cursor-pointer text-center items-center'
                  to='/programi/'
                >
                  Kickbox za mladostnike
                </Link>
                <p className='text-[rgb(228,61,78)] mb-4 text-center'>
                  17:00 - 18:00 / Erin Ćoralić
                </p>
                <p className=' text-center'>Mladostniki od 12 let naprej</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programi;
