import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { useInView } from 'react-intersection-observer';

const TrainerCard = ({ to, image, name, role, animate, delay }) => (
  <div
    className={`group flex flex-col text-center justify-start items-center mx-4 ${
      animate ? `animate-fade-up animate-once animate-duration-1000 ${delay}` : ''
    }`}
  >
    <Link className='block w-64 h-64 lg:w-72 lg:h-72 relative' to={to}>
      <div className='w-full h-full rounded-full overflow-hidden ring-4 ring-transparent group-hover:ring-identifier transition-all duration-300 shadow-xl'>
        {image}
      </div>
    </Link>
    <div className='mt-6'>
      <Link
        className='text-text1 text-2xl hover:text-identifier transition-colors'
        to={to}
      >
        {name}
      </Link>
      <p className='text-text1/70 mt-1'>{role}</p>
    </div>
  </div>
);

const Trenerji = () => {
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
    <div className='bg-layout2 font-oswald py-16 md:py-24'>
      <div
        className={`max-w-7xl mx-auto px-6 transition-opacity duration-1000 ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        ref={ref}
      >
        <div
          className={`flex flex-col items-center justify-center mb-16 ${
            animate
              ? 'animate-fade-up animate-duration-1000 animate-delay-200'
              : ''
          }`}
        >
          <h1 className='text-3xl md:text-5xl font-extrabold text-center text-text1 tracking-wide'>
            TRENERJI
          </h1>
          <div className='border-b-4 border-identifier w-16 mt-5'></div>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12'>
          <TrainerCard
            to='/trenerji/#erin'
            name='Erin Ćoralić'
            role='Trener odraslih in mladostnikov'
            animate={animate}
            delay='animate-delay-500'
            image={
              <StaticImage
                src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723162451/karate-kickbox-ostalo/cmzhy6t8c0213jvu2iyw.jpg'
                alt='erin'
                className='w-full h-full transition-transform duration-500 group-hover:scale-105'
              />
            }
          />
          <TrainerCard
            to='/trenerji/#matej'
            name='Matej Jenko'
            role='Trener odraslih'
            animate={animate}
            delay='animate-delay-700'
            image={
              <StaticImage
                src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723120147/karate-kickbox-ostalo/w5oiligkc0uiits58yss.jpg'
                alt='matej'
                className='w-full h-full transition-transform duration-500 group-hover:scale-105'
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Trenerji;
