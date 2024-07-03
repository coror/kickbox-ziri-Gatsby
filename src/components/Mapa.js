import React from 'react';

const Mapa = () => {
  return (
    <div className='w-full h-96 md:h-[450px] flex justify-center items-center'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1164.339664756702!2d14.10800331219468!3d46.04547258825165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477adc360f1d8eb7%3A0x3a6b6281dd33d38!2zT3Nub3ZuYSDFoW9sYSDFvWlyaQ!5e0!3m2!1sen!2ssi!4v1708984689758!5m2!1sen!2ssi'
        className='w-full h-full border-0'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        title='map'
      ></iframe>
    </div>
  );
};

export default Mapa;
