import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className='relative bg-layout1 text-text1 font-oswald overflow-hidden'>
      <div className='h-1 bg-identifier'></div>

      <div className='absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none'></div>

      <div className='relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start'>
          <div className='md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left'>
            <div className='flex items-center mb-7'>
              <StaticImage
                className='h-14 w-14 rounded-md overflow-hidden'
                alt='logo'
                src='../../images/logo.jpg'
              />
              <p className='text-2xl md:text-3xl ml-3 tracking-wide'>
                KARATE INSTITUTE
              </p>
            </div>
            <div className='flex gap-3'>
              <a
                href='https://www.facebook.com/p/Kickbox-%C5%BDiri-100065681191602/'
                target='_blank'
                rel='noreferrer'
                aria-label='Facebook'
                className='w-10 h-10 rounded-full border border-text1/30 flex items-center justify-center hover:bg-identifier hover:border-identifier hover:text-text1 transition-all duration-300'
              >
                <FaFacebookF />
              </a>
              <a
                href='https://www.instagram.com/kickbox_ziri/'
                target='_blank'
                rel='noreferrer'
                aria-label='Instagram'
                className='w-10 h-10 rounded-full border border-text1/30 flex items-center justify-center hover:bg-identifier hover:border-identifier hover:text-text1 transition-all duration-300'
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className='md:col-span-3 text-center md:text-left space-y-1 text-text1/80'>
            <p className='text-text1 text-lg mb-1'>Karate klub Žiri</p>
            <p>Partizanska cesta 101</p>
            <p>4226 Žiri</p>
            <p>Id. številka: 99431238</p>
            <p className='pt-4'>
              <Link
                to='/pogoji-uporabe'
                className='text-identifier hover:underline'
              >
                Pogoji uporabe
              </Link>
            </p>
          </div>

          <div className='md:col-span-4 flex flex-col items-center md:items-start gap-3'>
            <a
              href='mailto:info@premik.si'
              className='inline-flex items-center gap-3 hover:text-identifier transition-colors duration-200'
            >
              <MdEmail className='text-identifier text-lg' />
              info@premik.si
            </a>
            <a
              href='tel:040799797'
              className='inline-flex items-center gap-3 hover:text-identifier transition-colors duration-200'
            >
              <FaPhoneAlt className='text-identifier' />
              040/799 797
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
