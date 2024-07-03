import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <Layout>
      <section className='bg-gradient-to-br from-[#0d0f1a] to-[#111525] font-oswald py-10 text-white px-10 min-h-screen flex-grow'>
      <div className='container m-auto max-w-2xl py-24'>
          <div className='flex justify-center'>
            <FaExclamationTriangle className='fas fa-exclamation-triangle fa-5x text-8xl text-[rgb(228,61,78)]' />
          </div>
          <div className='text-center'>
            <h1 className='text-3xl font-bold mt-4 mb-2'>404</h1>
            <p className='text-gray-500 text-xl mb-10'>
              Stran, ki jo iščeš ne obstaja.
            </p>
            <Link
              to='/'
              className='bg-[rgb(228,61,78)] hover:bg-[rgb(107,42,48)] text-black font-bold py-4 px-6 rounded'
            >
              Domov
            </Link>
          </div>
      </div>
      <div className='flex-grow'></div>
    </section>
    </Layout>
  );
};

export default NotFound;
