import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const ContactLine = () => {
  return (
    <div className='flex-col md:flex-row bg-[#13182A] flex text-white py-10 font-oswald'>
      {/* Phone */}
      <div className='text-center flex-1 relative' style={{ display: 'grid' }}>
        <StaticImage
          src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/phone_p2wyfl'
          alt='Call us 24/7'
          style={{
            gridArea: '1/1',
            maxWidth: '100%',
            height: 'auto',
            maxHeight: 400,
          }}
          layout='constrained'
          formats={['auto', 'webp', 'avif']}
          className='bg-no-repeat bg-center m-auto'
        />
        <div
          style={{
            gridArea: '1/1',
            position: 'relative',
            placeItems: 'center',
            display: 'grid',
          }}
        >
          <div className='text-center'>
            <p className=' text-[rgb(228,61,78)]'>POKLIČITE NAS NA</p>
            <span className='text-2xl'>040/799 797</span>
          </div>
        </div>
      </div>
      {/* Location */}
      <div className='text-center flex-1 relative' style={{ display: 'grid' }}>
        <StaticImage
          src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/location_xbbtzv'
          alt='Season Street 45/2'
          style={{
            gridArea: '1/1',
            maxWidth: '100%',
            height: 'auto',
            maxHeight: 400,
          }}
          layout='constrained'
          formats={['auto', 'webp', 'avif']}
          className='bg-no-repeat bg-center m-auto'
        />
        <div
          style={{
            gridArea: '1/1',
            position: 'relative',
            placeItems: 'center',
            display: 'grid',
          }}
        >
          <div className='special-heading text-center'>
            <p className='text-[rgb(228,61,78)]'>JOBSTOVA CESTA 22</p>
            <span className='text-2xl'>4226 ŽIRI</span>
          </div>
        </div>
      </div>
      {/* Time */}
      <div className='text-center flex-1 relative' style={{ display: 'grid' }}>
        <StaticImage
          src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/time_pa0qer'
          alt='Working Hours'
          style={{
            gridArea: '1/1',
            maxWidth: '100%',
            height: 'auto',
            maxHeight: 400,
          }}
          layout='constrained'
          formats={['auto', 'webp', 'avif']}
          className='bg-no-repeat bg-center m-auto'
        />
        <div
          style={{
            gridArea: '1/1',
            position: 'relative',
            placeItems: 'center',
            display: 'grid',
          }}
        >
          <div className='special-heading text-center'>
            <p className='text-[rgb(228,61,78)]'>DELOVNE URE</p>
            <span className='text-2xl'>08:00 - 15:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLine;
