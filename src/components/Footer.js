import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='text-white flex md:flex-row flex-col bg-[#13182A] items-center justify-center'>
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
            <FaFacebookF className='hover:text-[rgb(228,61,78)] cursor-pointer transition ease-in-out' />
          </div>
          <div className=' border-2 rounded-full p-2 mx-2'>
            <FaInstagram className='hover:text-[rgb(228,61,78)] cursor-pointer transition ease-in-out' />
          </div>
        </div>
      </div>
      <div className='m-10 md:m-20 text-center'>
        <p>Karate klub Kolektor Idrija</p>
        <p>Mokraška vas 15, Idrija</p>
        <p>5280 Idrija</p>
        <p>Id. številka z DDV: 37424386</p>
      </div>
      <div className='m-10 md:m-20'>
        <p className='flex items-center m-2'>
          <MdEmail className='text-[rgb(228,61,78)] mx-3' /> info@premik.si
        </p>
        <p className='flex items-center m-2'>
          <FaPhoneAlt className='text-[rgb(228,61,78)] mx-3' />
          040/799 797
        </p>
      </div>
    </div>
  );
};

export default Footer;
