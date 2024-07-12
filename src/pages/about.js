import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';

const About = () => {
  return (
    <Layout>
      <div className='bg-gradient-to-br from-[#0d0f1a] to-[#111525] font-oswald py-10 md:py-40 text-white px-9 '>
        <div className='flex flex-col items-center justify-center mb-10'>
          <h1 className='text-3xl font-bold text-center text-white'>
            POMEN BORILNIH VEŠČIN
          </h1>
          <div className='border-b-4 border-[rgb(228,61,78)] w-12 text-center mt-5'></div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='mx-2 mb-10  lg:w-1/2'>
            <StaticImage
              src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri-stran/20240327_172117_txogpe'
              alt='erin'
              className='w-full h-full'
            />
          </div>
          <p className=' lg:w-1/2'>
            Čeprav so borilne veščine ena izmed najbolj številčnih gibalih
            aktivnosti v svetu, v družbi še vedno obstaja kar precej predsodkov
            do njih. Eden takih razširjenih predsodkov je, da naj bi borilne
            veščine spodbujale agresijo in nasilje, ter da v borilnih veščinah
            prihaja do nekontroliranega fizičnega kontakta. Taki predsodki
            izvirajo iz površnega poznavanja izvora agresivnega vedenja in
            slabega razumevanja borilnih znanj. Borbeno vedenje je eno od
            osnovnih in pomembnejših vedenj, ki so se razvila v evolucijskem
            razvoju. Živemu bitju omogočajo, da varuje svoje ozemlje in na ta
            način zagotovi varnost, hrano, spolnega partnerja in naraščaj.
            Borbeno vedenje v naravi v večini primerov poteka po prirojenih ali
            naučenih pravilih, ki onemogočajo, da bi bili konflikti in spopadi
            preveč nevarni ali usodni. Do agresivnih, nekontroliranih odzivov
            pride zelo redko, se pa tudi v živalskem svetu dogajajo. V primeru
            agresivnega odziva odpovedo prirojena in naučena pravila, ki
            onemogočajo, da so spopadi usodni za pripadnike iste vrste. Človeku
            najbližji primer takega agresivnega vedenja so bojni pohodi
            nekaterih opic, pri katerih pobijejo poražene skupine in se
            izživljajo nad njihovimi mladiči.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center mt-10'>
          <div className=' mb-10 mx-2 lg:w-1/2'>
            <StaticImage
              src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri-stran/kb5_nlq2cz'
              alt='erin'
              className='w-full h-full'
            />
          </div>
          <p className='lg:w-1/2'>
            Zgodovina in naše vsakdanje življenje kažeta na to, da ljudje
            nikakor nismo imuni na agresiven in nasilen način odzivanja. Ne
            glede na to, ali gre za fizičen napad ali pa verbalno poniževanje.
            Nasilja in agresivnosti ne rešimo tako, da si zatiskamo oči in se
            pretvarjamo, da ne obstajata, ampak da spoznamo naše borbeno vedenje
            in se ga skozi vadbeni naučimo usmerjati in oblikovati. Vadba
            borilnih aktivnosti v modernem času upošteva vse principe in znanja
            športne in rekreativne vadbe, hkrati pa ohranja tudi tradicionalna
            znanja in izkušnje, ki so se nabrale v večtisočletnem razvoju
            borilnih veščin. Predsodki pred borilnimi veščinami so odveč Ko so
            borbena znanja v začetku prejšnjega stoletja v večini izgubila
            vojaški namen, se je večina borilnih veščin preoblikovalo v športne
            discipline ali pa psihofizične oblike celostne vadbe. Nekatere izmed
            njih so nekontaktne, pri drugih pa se kontakt s partnerjem dogaja na
            osnovi vnaprej dogovorjenih pravil. Borilna znanja so zato zelo
            primeren poligon, kjer lahko znotraj kontroliranega okolja razvijamo
            svoje gibalne potenciale in hkrati spoznavamo tudi naše najbolj
            primarne odzive in vedenja. Na ta način, poleg zdravega telesa,
            razvijamo tudi samozavest, sproščenost, spoštovanje in odločnost. Z
            njihovo pomočjo lahko živimo bolj polno in kvalitetno življenje.
            Predsodki pred borilnimi veščinami so torej odveč. Med bogato
            ponudbo različnih metod in pristopov je potrebno le poiskati tisto,
            ki najbolj ustreza posameznikovim pričakovanjem in potrebam.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

export const Head = () => (
  <Seo
    title='O nas'
    description='Spoznajte filozofijo in načela, ki stojijo za našimi borilnimi veščinami. Naučite se, kako odpravljamo pogoste predsodke o borilnih veščinah, s poudarkom na kontroliranem vadbenem okolju, ki spodbuja fizični, mentalni in čustveni razvoj. Naš pristop poudarja spoštovanje, samozavest in uravnotežen življenjski slog, ki vam pomaga doseči vaš polni potencial.'
  />
);
