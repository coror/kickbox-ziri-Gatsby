import * as React from 'react';
import Layout from '../components/Layout';

import ContactLine from '../components/ContactLine';
import About from '../components/About';
import ProgramiComponent from '../components/ProgramiComponent';
import Trenerji from '../components/Trenerji';
import Urnik from '../components/Urnik';
import Mapa from '../components/Mapa';
import Seo from '../components/Seo'; // Ensure correct import
import Header from '../components/Header';

import Parse from 'parse';

const appId = process.env.GATSBY_APP_PARSE_APPLICATION_ID;
const jsKey = process.env.GATSBY_APP_PARSE_JAVASCRIPT_KEY;
const serverURL = process.env.GATSBY_APP_PARSE_HOST_URL;

if (!appId || !jsKey || !serverURL) {
  console.error('Missing environment variables for Parse initialization');
}

Parse.initialize(appId, jsKey);
Parse.serverURL = serverURL;

export default function Home() {
  return (
    <Layout>
      <Header />
      <ContactLine />
      <About />
      <ProgramiComponent />
      <Trenerji />
      <Urnik />
      <Mapa />
    </Layout>
  );
}

export const Head = () => <Seo />;
