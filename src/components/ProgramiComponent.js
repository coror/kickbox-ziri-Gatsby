import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useInView } from 'react-intersection-observer';

const ProgramCard = ({ to, image, title, time, group, animate, delay }) => (
  <Link
    to={to}
    className={`group relative block bg-layout1 overflow-hidden shadow-2xl w-full max-w-sm transition-transform duration-500 hover:-translate-y-2 ${
      animate ? `animate-fade-up animate-duration-1000 ${delay}` : ''
    }`}
  >
    <div className='relative h-72 xl:h-80 overflow-hidden'>
      <div className='absolute inset-0 transition-transform duration-700 group-hover:scale-110'>
        {image}
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-layout1 via-layout1/40 to-transparent'></div>
      <div className='absolute bottom-0 left-0 right-0 p-6'>
        <h3 className='text-2xl md:text-[1.6rem] font-semibold leading-tight tracking-wide'>
          {title}
        </h3>
      </div>
    </div>

    <div className='p-6 flex flex-col gap-2'>
      <p className='text-identifier text-sm tracking-wider'>{time}</p>
      <p className='text-text1/70 text-sm'>{group}</p>
    </div>

    <div className='absolute bottom-0 left-0 h-1 w-0 bg-identifier transition-all duration-500 group-hover:w-full'></div>
  </Link>
);

const Programi = () => {
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
    <div className='relative w-full overflow-hidden font-oswald'>
      <StaticImage
        src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723241604/karate-kickbox-ostalo/c3okrhrxtxytwboj9i5b.jpg'
        alt='Programi background'
        className='!absolute inset-0 w-full h-full'
        objectFit='cover'
      />
      <div className='absolute inset-0 bg-layout1/85 z-10'></div>

      <div
        ref={ref}
        className={`relative z-20 max-w-7xl mx-auto px-6 py-16 md:py-40 text-text1 transition-opacity duration-1000 ${
          animate ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`flex flex-col items-center justify-center mb-16 ${
            animate
              ? 'animate-fade-up animate-duration-1000 animate-delay-200'
              : ''
          }`}
        >
          <h1 className='text-3xl md:text-5xl font-extrabold text-center tracking-wide'>
            PROGRAMI
          </h1>
          <div className='border-b-4 border-identifier w-16 mt-5'></div>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8'>
          <ProgramCard
            to='/programi/#kickbox-za-odrasle'
            title='Kickbox za odrasle 1'
            time='18:00 - 19:30 / Erin Ćoralić'
            group='Nadaljevalna skupina'
            animate={animate}
            delay='animate-delay-500'
            image={
              <StaticImage
                src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723159813/karate-kickbox-ostalo/fw2mwguzdjqhnd2rlojq.jpg'
                alt='nadaljevalna'
                className='w-full h-full'
                objectFit='cover'
              />
            }
          />
          <ProgramCard
            to='/programi/#kickbox-za-odrasle'
            title='Kickbox za odrasle 2'
            time='19:30 - 20:30 / Matej Jenko'
            group='Začetna skupina'
            animate={animate}
            delay='animate-delay-700'
            image={
              <StaticImage
                src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723159813/karate-kickbox-ostalo/g2zjomy5ed3fgnsfcvio.jpg'
                alt='začetna'
                className='w-full h-full'
                objectFit='cover'
              />
            }
          />
          <ProgramCard
            to='/programi/#kickbox-za-mladostnike'
            title='Kickbox za mladostnike'
            time='17:00 - 18:00 / Erin Ćoralić'
            group='Mladostniki od 12 let naprej'
            animate={animate}
            delay='animate-delay-1000'
            image={
              <StaticImage
                src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723159814/karate-kickbox-ostalo/l48qkl1u0m6jk4itho3n.jpg'
                alt='mladostniki'
                className='w-full h-full'
                objectFit='cover'
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Programi;
