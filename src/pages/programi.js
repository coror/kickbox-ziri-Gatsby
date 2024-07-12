import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';

function Programi() {
  return (
    <Layout>
      <div className='relative font-oswald  py-10 md:py-40'>
        <StaticImage
          src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/20240624_192858_mcnu7o'
          alt='Background'
          placeholder='blurred'
          className='fixed inset-0 w-full h-full object-cover'
          style={{
            zIndex: -1,
          }}
        />
        <div className='absolute inset-0 bg-[#13182A] opacity-75'></div>
        <div className='text-white flex flex-col items-center justify-center p-8'>
          <div className='relative flex items-center flex-col'>
            <div className='flex flex-col items-center mb-10'>
              <div className='flex flex-col items-center justify-center  mb-10 '>
                <h1 className='text-4xl font-extrabold text-center tracking-wide '>
                  KICKBOX ZA MLADOSTNIKE
                </h1>
                <div className='border-b-4 border-[rgb(228,61,78)] w-16 mt-5'></div>
              </div>
              <p className='max-w-[50rem]'>
                Če razmišljate o vpisu svojega otroka, starega od 12 do 16 let,
                v kickbox tečaj, ste na pravem mestu. Kickbox je dinamičen in
                energičen šport, ki prinaša številne koristi za razvoj
                mladostnikov. Vabimo vas, da se pridružite naši skupnosti
                kickboxa za mladostnike in dovolite svojemu otroku, da odkrije
                vse prednosti tega dinamičnega športa. Z veseljem bomo delili
                znanje, izkušnje in navdušenje nad kickboxom!
              </p>
            </div>
            <div className='relative max-w-[60rem]'>
              <StaticImage
                src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri-stran/20240325_171926_xrjvnj'
                alt='erin'
                className='max-w-[80rem] h-auto rounded-sm shadow-lg filter brightness-90 contrast-125'
              />
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50 rounded-lg'></div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center'>
              <div className='text-center max-w-[50rem] pt-10'>
                <ul>
                  <li className='mb-5 text-xl font-semibold'>
                    POVEČANJE SAMOZAVESTI
                  </li>
                  <p className='mb-5'>
                    Vadba kickboxa je odličen način za krepitve samozavesti pri
                    mladostnikih. Sistematično učenje novih tehnik in
                    premagovanje izzivov na treningih prispeva k občutku
                    dosežkov, kar ima pozitiven vpliv na otrokovo samopodobo.
                  </p>
                  <li className='mb-5 text-xl font-semibold'>
                    SPRETNOSTI SAMOOBRAMBE
                  </li>
                  <p className='mb-5'>
                    Kickbox ni le šport, temveč tudi učinkovita metoda
                    samoobrambe. Mladostniki se učijo različnih tehnik, ki jim
                    lahko pomagajo v primeru morebitnih neprijetnih situacij.
                    Razvijanje teh spretnosti povečuje otrokovo občutje varnosti
                    in mu daje znanje, kako se zaščititi.
                  </p>
                  <li className='mb-5 text-xl font-semibold'>
                    VADBA ZA CELOTNO TELO
                  </li>
                  <p className='mb-5'>
                    Kickbox je celostna vadba, ki vključuje različne mišične
                    skupine. Mladostniki bodo razvijali moč, vzdržljivost,
                    gibljivost in koordinacijo. Redna vadba kickboxa spodbuja
                    zdrav življenjski slog in prispeva k celostnemu fizičnemu
                    razvoju.
                  </p>
                  <li className='mb-5 text-xl font-semibold'>
                    SOCIALNE VEŠČINE IN EKIPNO DELO
                  </li>
                  <p className='mb-5'>
                    Tečaji kickboxa nudijo priložnost za druženje in sodelovanje
                    z vrstniki. Skupaj s treningi se mladostniki učijo tudi o
                    pomenu spoštovanja, discipline in ekipnega dela. To prispeva
                    k razvoju socialnih veščin, ki so pomembne za uspešno
                    interakcijo v življenju.
                  </p>
                  <li className='mb-5 text-xl font-semibold'>
                    RAZVIJANJE DISPLINE IN VZSTRAJNOSTI
                  </li>
                  <p className='mb-5'>
                    Redni treningi kickboxa zahtevajo discipline in vztrajnosti.
                    Mladostniki se naučijo postavljati cilje, delati na njih in
                    premagovati ovire. To so ključne veščine, ki jih bodo
                    koristile v šoli, doma in v prihodnjem življenju.
                  </p>
                </ul>
              </div>
            </div>
          </div>
          {/* */}
          <div className='relative flex items-center flex-col mt-14'>
            <div className='flex flex-col items-center mb-10'>
              <div className='flex flex-col items-center justify-center  mb-10 '>
                <h1
                  className='text-4xl font-extrabold text-center tracking-wide '
                  id='kickbox-za-odrasle'
                >
                  KICKBOX ZA ODRASLE
                </h1>
                <div className='border-b-4 border-[rgb(228,61,78)] w-16 mt-5'></div>
              </div>
              <p className='max-w-[50rem]'>
                Kickbox je primeren za vse ne glede na spol. Naši tečaji so
                zasnovani tako, da omogočajo udobno in varno okolje za vadbo
                tako ženskam kot moškim. Prilagoditve se lahko naredijo glede na
                posameznikove potrebe. Pridružite se nam in dovolite, da kickbox
                postane del vašega življenja! Ne glede na to, ali iščete
                kondicijski izziv, sredstvo za sprostitev ali novo skupnost,
                boste pri nas našli vse to in še več. Kickbox je šport, ki ne
                pozna starostnih omejitev, in prinaša številne koristi za
                vsakogar, ne glede na spol.
              </p>
            </div>

            <div className='relative  max-w-[60rem] pt-15'>
              <StaticImage
                src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri-stran/20240327_192918_vnmnmu'
                alt='erin'
                className='max-w-[80rem] h-auto rounded-sm shadow-lg filter brightness-90 contrast-125'
              />
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50 rounded-lg'></div>
            </div>
            <div className='text-center max-w-[50rem] pt-10'>
              <ul>
                <li className='mb-5 text-xl font-semibold'>
                  CELOSTNA VADBA ZA VSE RAVNI
                </li>
                <p className='mb-5'>
                  Naši tečaji so primerni tako za popolne začetnike kot tudi za
                  tiste, ki že imajo nekaj izkušenj s kickboxom. Tečaji so
                  prilagojeni različnim ravneh spretnosti, zato boste lahko
                  uživali v vadbi, ne glede na to, ali ste novinec ali izkušen
                  borec.
                </p>
                <li className='mb-5 text-xl font-semibold'>
                  KREPITEV TELESNE KONDICIJE
                </li>
                <p className='mb-5'>
                  K Kickbox je odlična vadba za celotno telo, ki združuje kardio
                  trening, močnostno vadbo in fleksibilnost. S tem boste krepili
                  mišice, izboljšali vzdržljivost in poskrbeli za svoje splošno
                  zdravje.
                </p>
                <li className='mb-5 text-xl font-semibold'>
                  SPROSTITEV IN ZMANJŠEVANJE STRESA
                </li>
                <p className='mb-5'>
                  Aktivno sodelovanje v kickboxu je odličen način za sprostitev
                  in zmanjšanje stresa. Sprostite se ob energični vadbi in
                  pozabite na vsakodnevne skrbi, medtem ko izboljšujete svoje
                  telo in duha.
                </p>
                <li className='mb-5 text-xl font-semibold'>
                  UČINKOVITA SAMOOBRAMBA
                </li>
                <p className='mb-5'>
                  Poleg tega, da je kickbox odlična vadba, je tudi učinkovita
                  metoda samoobrambe. Naučili se boste različnih tehnik, ki vam
                  lahko pomagajo v vsakdanjem življenju in povečajo vaš občutek
                  varnosti.
                </p>
                <li className='mb-5 text-xl font-semibold'>
                  SKUPINSKO DRUŽENJE
                </li>
                <p className='mb-5'>
                  Naša skupnost kickboxa ponuja priložnost za sklepanje novih
                  prijateljstev in gradnjo podpore v skupini. Ne glede na vašo
                  raven izkušenj boste deležni spodbude in motivacije, saj
                  skupaj rastemo in napredujemo.
                </p>
                <li className='mb-5 text-xl font-semibold'>
                  PRIMEREN ZA ŽENSKE IN MOŠKIMI
                </li>
                <p className='mb-5'>
                  Kickbox je primeren za vse ne glede na spol. Naši tečaji so
                  zasnovani tako, da omogočajo udobno in varno okolje za vadbo
                  tako ženskam kot moškim. Prilagoditve se lahko naredijo glede
                  na posameznikove potrebe.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Programi;

export const Head = () => (
  <Seo
    title='Programi'
    description='Odkrijte našo raznoliko ponudbo programov, zasnovanih za vse ravni telesne pripravljenosti in interese. Od treninga moči do joge, naši strokovni trenerji nudijo osebno usmerjanje, da vam pomagajo doseči vaše fitnes cilje.'
  />
);
