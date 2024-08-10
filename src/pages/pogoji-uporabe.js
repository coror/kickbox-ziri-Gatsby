import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function TermsOfService() {
  return (
    <Layout>
      <div className='bg-layout2 font-oswald py-10 md:py-40 px-9 text-text1 text-center'>
        <div className='flex flex-col items-center justify-center mb-10 pt-8'>
          <h1 className='text-3xl font-bold text-center text-text1'>
            POGOJI UPORABE
          </h1>
          <div className='border-b-4 border-identifier w-12 text-center mt-5'></div>
        </div>
        <span htmlFor='strinjanje' className='mb-1'>
          Karate klub Žiri uporablja aplikacijo Moje spretnosti za vodenje
          evidenc, obveščanje, zapisovanje rezultatov testiranj in izpitov,
          objavljanje izobraževalnih vsebin in izdajanje računov. S podpisom
          tega vpisnega lista se strinjate, da bo administrator v klubu vam ali
          vašemu varovancu v aplikaciji Moje Spretnosti kreiral uporabniški
          račun. Z namenom nemotenega delovanje kluba in vodenje načrtovanega
          vadbeno vzgojnega procesa v Karate klubu Žiri obdeluje naslednje
          podatke:
          <ul className='list-disc text-left px-9 mt-12 space-y-1'>
            <li>
              Podatke o vašem imenu in priimku ter naslovu zbiramo zaradi
              priprave pogodbe in izdaje računov;
            </li>
            <li>
              Podatke o vašem imenu in priimku ter naslovu zbiramo zaradi
              priprave pogodbe in izdaje računov;
            </li>
            <li>
              Podatke o imenu in priimku ter starosti otroka zbiramo zaradi
              izvedbe programa, razvrščanja v ustrezne skupine;
            </li>
            <li>
              Podatke o telefonski številki zbiramo zaradi možnosti obveščanja o
              morebitnih odpovedih ali spremembah v zvezi s tečajem iz
              kakršnihkoli razlogov;
            </li>
            <li>
              Podatke o elektronskem naslovu zbiramo, z namenom kreiranja up.
              računa v aplikaciji Moje spretnosti, zaradi obveščanja o novostih,
              posredovanju informacij, obveščanja o spremembah, obveščanju o
              tekmovanjih in dogodkih na nivoju kluba ali Karate Zveze
              Slovenije, za obveščanje članov o začetku nove sezone in
              razporeditvi v nove skupine in obveščanje članov o novih vpisih ob
              začetku sezone;
            </li>
            <li>
              Podatke o boleznih in posebnih stanjih zbiramo zato, da se lahko
              trener v primeru zapletov ustrezno odzove;
            </li>
            <li>
              Podatke o ocenah izpitov, rezultate tekmovanj in testiranj,
              zbiramo z namenom spremljanja in načrtovanja vadbenega procesa.
              Rezultate s tekmovanj uporabljamo tudi pri prijavi na občinske
              razpise za sofinanciranje športa ter jih objavljamo v javnih
              medijih;
            </li>
            <li>
              Podatke o enotni matični številki in številki zdravstvenega
              zavarovanja zbiramo v primeru registracije naših članov v
              nacionalno panožno zvezo. Izjavo o varovanju osebnih podatkov v
              Karate klubu Žiri in pogojih uporabe aplikacije Moje spretnosti si
              lahko preberete na naši spletni strani
              <a
                href='https://www.karate-institute.org/izjava-karate-klub-kolektor/'
                target='_blank'
                rel='noreferrer'
                className='text-blue-700'
              >
                {/* */} Karate Institute
              </a>
              .
            </li>
          </ul>
        </span>
      </div>
    </Layout>
  );
}

export const Head = () => (
    <Seo
      title='Pogoji uporabe'
      description="Preberite naše splošne pogoje in se seznanite s pravili, smernicami ter pravnimi sporazumi, ki urejajo uporabo naše spletne strani in storitev. Spoznajte odgovornosti uporabnikov, politiko zasebnosti in kako ščitimo vaše pravice. Bodite obveščeni o svojih obveznostih in naših zavezah."
    />
  );