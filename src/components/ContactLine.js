import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const ContactItem = ({ icon, label, value, delay, animate }) => (
  <div
    className={`flex items-center gap-4 ${
      animate ? `animate-fade-left animate-duration-1000 ${delay}` : ''
    }`}
  >
    <div className='shrink-0 w-14 h-14 rounded-full border-2 border-identifier flex items-center justify-center text-identifier text-xl'>
      {icon}
    </div>
    <div className='text-left'>
      <p className='text-identifier text-sm tracking-wider'>{label}</p>
      <span className='text-base lg:text-xl'>{value}</span>
    </div>
  </div>
);

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
    <div className='bg-layout1 text-text1 py-8 font-oswald'>
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-around gap-8 transition-opacity duration-1000 ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <ContactItem
          icon={<FaPhoneAlt />}
          label='POKLIČITE NAS NA'
          value='040/799 797'
          delay='animate-delay-200'
          animate={animate}
        />
        <ContactItem
          icon={<FaMapMarkerAlt />}
          label='KJE SMO'
          value='PARTIZANSKA CESTA 101, 4226 ŽIRI'
          delay='animate-delay-500'
          animate={animate}
        />
        <ContactItem
          icon={<FaRegClock />}
          label='DELOVNE URE'
          value='08:00 - 15:00'
          delay='animate-delay-1000'
          animate={animate}
        />
      </div>
    </div>
  );
};

export default ContactLine;
