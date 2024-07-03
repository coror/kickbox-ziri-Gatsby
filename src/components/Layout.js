import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import Parse from 'parse';

const appId = process.env.GATSBY_APP_PARSE_APPLICATION_ID;
const jsKey = process.env.GATSBY_APP_PARSE_JAVASCRIPT_KEY;
const serverURL = process.env.GATSBY_APP_PARSE_HOST_URL;

if (!appId || !jsKey || !serverURL) {
  console.error('Missing environment variables for Parse initialization');
}

Parse.initialize(appId, jsKey);
Parse.serverURL = serverURL;

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

