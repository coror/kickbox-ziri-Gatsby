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
