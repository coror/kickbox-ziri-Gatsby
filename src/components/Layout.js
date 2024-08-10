import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Credit from './Credit'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
      <Credit />
    </div>
  );
};

export default Layout;

