import React from 'react';
import { useLocation } from '@reach/router';
import Navbar from './Navbar';
import Footer from './Footer';
import Credit from './Credit';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div>
      <Navbar />
      <div className={isHome ? '' : 'pt-20'}>{children}</div>
      <Footer />
      <Credit />
    </div>
  );
};

export default Layout;
