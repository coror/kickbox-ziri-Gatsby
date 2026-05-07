import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const mladostniki = 'border-l-amber-400';
const nadaljevalna = 'border-l-rose-400';
const zacetna = 'border-l-emerald-400';

const days = ['PON', 'TOR', 'SRE', 'ČET', 'PET'];

const sessions = [
  { day: 'PON', label: 'Kickbox mladostniki', time: '17:00 - 18:00', trainer: 'Erin Ćoralić', color: mladostniki },
  { day: 'PON', label: 'Kickbox odrasli / nadaljevalna', time: '18:00 - 19:30', trainer: 'Erin Ćoralić', color: nadaljevalna },
  { day: 'PON', label: 'Kickbox odrasli / začetna', time: '19:30 - 20:30', trainer: 'Matej Jenko', color: zacetna },
  { day: 'SRE', label: 'Kickbox mladostniki', time: '17:00 - 18:00', trainer: 'Erin Ćoralić', color: mladostniki },
  { day: 'SRE', label: 'Kickbox odrasli / nadaljevalna', time: '18:00 - 19:30', trainer: 'Erin Ćoralić', color: nadaljevalna },
  { day: 'SRE', label: 'Kickbox odrasli / začetna', time: '19:30 - 20:30', trainer: 'Matej Jenko', color: zacetna },
];

const SessionCard = ({ s }) => (
  <div
    className={`bg-white/5 backdrop-blur-md border border-white/10 border-l-[3px] ${s.color} p-5 text-text1`}
  >
    <p className='font-bold text-lg'>{s.label}</p>
    <p className='text-sm opacity-90 mt-1'>{s.time}</p>
    <p className='text-xs opacity-70 tracking-wider uppercase mt-2'>
      {s.trainer}
    </p>
  </div>
);

const DayColumn = ({ day, sessions: daySessions }) => (
  <div className='flex flex-col text-left'>
    <div className='mb-5'>
      <h3 className='text-2xl font-bold tracking-wide'>{day}</h3>
      <div className='border-b-2 border-identifier w-10 mt-2'></div>
    </div>
    <div className='flex flex-col gap-3'>
      {daySessions.length === 0 ? (
        <p className='text-text1/40 text-sm'>—</p>
      ) : (
        daySessions.map((s, i) => <SessionCard key={i} s={s} />)
      )}
    </div>
  </div>
);

const Urnik = () => {
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
    <div className='relative w-full overflow-hidden font-oswald text-text1 text-center bg-layout1'>
      <img
        src='https://res.cloudinary.com/di4ms4xaz/image/upload/c_fill,ar_3:5,g_west,f_auto,q_auto:best,w_750/v1723162330/karate-kickbox-ostalo/czm5p1wl3hcnvprsjfol.jpg'
        alt='Urnik background'
        loading='lazy'
        decoding='async'
        className='md:hidden absolute inset-0 w-full h-full object-cover'
        style={{ objectPosition: '60% 50%' }}
      />
      <img
        src='https://res.cloudinary.com/di4ms4xaz/image/upload/f_auto,q_auto:best,w_1920/v1723162330/karate-kickbox-ostalo/czm5p1wl3hcnvprsjfol.jpg'
        srcSet='https://res.cloudinary.com/di4ms4xaz/image/upload/f_auto,q_auto:best,w_1080/v1723162330/karate-kickbox-ostalo/czm5p1wl3hcnvprsjfol.jpg 1080w, https://res.cloudinary.com/di4ms4xaz/image/upload/f_auto,q_auto:best,w_1366/v1723162330/karate-kickbox-ostalo/czm5p1wl3hcnvprsjfol.jpg 1366w, https://res.cloudinary.com/di4ms4xaz/image/upload/f_auto,q_auto:best,w_1920/v1723162330/karate-kickbox-ostalo/czm5p1wl3hcnvprsjfol.jpg 1920w, https://res.cloudinary.com/di4ms4xaz/image/upload/f_auto,q_auto:best,w_2560/v1723162330/karate-kickbox-ostalo/czm5p1wl3hcnvprsjfol.jpg 2560w'
        sizes='100vw'
        alt='Urnik background'
        loading='lazy'
        decoding='async'
        className='hidden md:block absolute inset-0 w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-layout1/85 z-10'></div>

      <div
        ref={ref}
        className={`relative z-20 max-w-7xl mx-auto px-6 py-16 md:py-24 transition-opacity duration-1000 ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div
          className={`flex flex-col items-center justify-center mb-12 ${
            animate
              ? 'animate-fade-up animate-duration-1000 animate-delay-200'
              : ''
          }`}
        >
          <h1 className='text-3xl md:text-5xl font-extrabold text-center tracking-wide'>
            URNIK
          </h1>
          <div className='border-b-4 border-identifier w-16 mt-5'></div>
        </div>

        <div
          className={`hidden md:grid md:grid-cols-5 gap-6 lg:gap-8 ${
            animate
              ? 'animate-fade-up animate-duration-1000 animate-delay-500'
              : ''
          }`}
        >
          {days.map((day) => (
            <DayColumn
              key={day}
              day={day}
              sessions={sessions.filter((s) => s.day === day)}
            />
          ))}
        </div>

        <div
          className={`md:hidden flex flex-col gap-10 text-left ${
            animate
              ? 'animate-fade-up animate-duration-1000 animate-delay-500'
              : ''
          }`}
        >
          {days.map((day) => {
            const daySessions = sessions.filter((s) => s.day === day);
            if (daySessions.length === 0) return null;
            return (
              <DayColumn key={day} day={day} sessions={daySessions} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Urnik;
