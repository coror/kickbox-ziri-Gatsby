import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';

const Trenerji = () => {
  return (
    <Layout>
      <div className='bg-gradient-to-br from-[#0d0f1a] to-[#111525] font-oswald  2xl:px-[24rem] px-9   py-10 md:py-40'>
        <div className='flex flex-col items-center justify-center mb-10'>
          <h1 className='text-3xl font-bold text-center text-white'>
            TRENERJI
          </h1>
          <div className='border-b-4 border-[rgb(228,61,78)] w-12 text-center mt-5'></div>
        </div>
        <div className='flex flex-col justify-center items-center '>
          {/*Trener 1 */}
          <div className='flex md:flex-row flex-col max-w-[60rem]'>
            <div className='max-w-80 md:mr-9'>
              <StaticImage
                src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/erin_pwgu7l'
                alt='erin'
                className='w-full h-full max-h-80 '
              />
            </div>
            <div className=' text-white'>
              <h1 className=' text-2xl '>Erin Ćoralić</h1>
              <p className='text-[rgb(228,61,78)] mb-10'>
                Trener odraslih in mladostnikov
              </p>
              <p>
                Erin je diplomirani violinist. Dodiplomski študij je obiskoval v
                Londonu na Guildhall School of Music and Drama. Po zaključenem
                študiju v Londonu se je vrnil v Idrijo in začel aktivno
                delovati, sprva kot trener Kickboksa, nato pa tudi kot trener
                karateja, v sklopu Karate kluba Kolektor Idrija. S karatejem se
                je začel ukvarjati pri šestih letih. Udeleževal se je številnih
                državnih in mednarodnih tekmovanj, kjer je bil zelo uspešen. V
                sklopu državnih tekmovanj je večkrat osvojil zlato. V srednji
                šoli je začel trenirati kickboks, v študentskih letih pa Muay
                Thai (tajski boks). Po vrnitvi v Idrijo je njegova pot ostala
                tesno prepletena z borilnimi veščinami, tokrat v drugačni vlogi.
                Leta 2018 je začel voditi treninge kickboksa, naslednje leto pa
                je z opravljenim usposabljanjem za vaditelja karateja, začel
                delovati tudi kot trener karateja. Trenutno je trener kickboksa
                v Idriji in v Žireh ter karate trener tekmovalcev ter
                rekreativnih skupin v Idriji, Črnem Vrhu, Spodnji Idriji in
                Žireh.
              </p>
            </div>
          </div>

          <div className='flex md:flex-row  flex-col-reverse mt-32 max-w-[60rem]'>
            <div className=' text-white'>
              <h1 className=' text-2xl  text-right'>Matej Jenko</h1>
              <p className='text-[rgb(228,61,78)] mb-10 text-right'>
                Trener odraslih
              </p>
              <p>
                Od športov ga je najprej pritegnil nogomet, katerega je začel
                trenirati pri šestih letih. Po treh letih je svoje zanimanje
                preusmeril v atletiko, kasneje pa ga je povleklo k akrobatiki,
                katero je treniral do trinajstega leta. Nadaljeval je s košarko
                vse do drugega letnika srednje šole. Po vseh teh letih
                treniranja je ugotovil, da so mu najbolj všeč športi, pri
                katerih je odvisen samo od sebe in se mora za uspeh ter dober
                rezultat zanesti nase. Zato se je začel poljubno ukvarjati z
                boksom. Pri sedemnajstih se je včlanil v Kickbox Žiri in kot
                pomočnik trenerja pomagal pri treningih. Sedaj pa kot trener že
                tri leta poučuje začetniške skupine. Delo z otroki in
                mladostniki mu ne predstavlja nobenih težav ali povzroča stresa,
                saj je velikokrat pomagal oziroma bil animator na različnih
                dogodkih.
              </p>
            </div>
            <div className='max-w-80  md:ml-9'>
              <StaticImage
                src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/maej_djr4th'
                alt='erin'
                className='w-full h-full max-h-80 '
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Trenerji;

export const Head = () => (
  <Seo
    title='Trenerji'
    description='Spoznajte našo ekipo profesionalnih trenerjev, ki so predani temu, da vam pomagajo doseči vaše fitnes cilje. Naši trenerji so izkušeni, certificirani in strastni pri zagotavljanju osebnega vodenja in podpore za vaš uspeh.'
  />
);
