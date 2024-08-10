import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <div className='text-text1 flex md:flex-row flex-col bg-layout1 items-center justify-center'>
      <div className='flex flex-col items-center m-10 md:m-20'>
        <div className='flex items-center mb-5'>
          <StaticImage
            className='h-10 w-10 rounded-md'
            alt='logo'
            src='../../images/logo.jpg'
          />
          <p className='text-2xl ml-2 font-oswald'>KARATE INSTITUTE</p>
        </div>
        <div className='flex'>
          <div className=' border-2 rounded-full p-2 mx-2'>
            <a
              href='https://www.facebook.com/p/Kickbox-%C5%BDiri-100065681191602/'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebookF className='hover:text-identifier cursor-pointer transition ease-in-out' />
            </a>
          </div>
          <div className=' border-2 rounded-full p-2 mx-2'>
            <a
              href='https://www.instagram.com/kickbox_ziri/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram className='hover:text-identifier cursor-pointer transition ease-in-out' />
            </a>
          </div>
        </div>
      </div>
      <div className='m-10 md:m-20 text-center'>
        <p>Karate klub Žiri</p>
        <p>Partizanska cesta 101</p>
        <p>4226 Žiri</p>
        <p>Id. številka: 99431238</p>
        <p className='m-2'>
          <Link
            to='/pogoji-uporabe'
            className='text-identifier hover:underline'
          >
            Pogoji uporabe
          </Link>
        </p>
      </div>
      <div className='m-10 md:m-20'>
        <p className='flex items-center m-2'>
          <MdEmail className='text-identifier mx-3' /> info@premik.si
        </p>
        <p className='flex items-center m-2'>
          <FaPhoneAlt className='text-identifier mx-3' />
          040/799 797
        </p>
      </div>
    </div>
  );
};

export default Footer;
