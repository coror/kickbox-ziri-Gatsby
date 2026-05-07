import React from 'react';

export default function Credit() {
  return (
    <div className='bg-layout1 border-t border-white/10 font-oswald'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 py-5 text-center text-text1/30'>
        <p className='text-[0.7rem] md:text-xs tracking-[0.2em] uppercase'>
          Oblikoval in razvil{' '}
          <a
            href='#'
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-baseline gap-1 hover:text-identifier transition-colors duration-200'
          >
            ERCO ERIN ĆORALIĆ s.p.
            <span aria-hidden='true' className='text-[0.7em]'>↗</span>
          </a>
          {' · 2024'}
        </p>
      </div>
    </div>
  );
}
