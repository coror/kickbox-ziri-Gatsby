import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import { Link } from 'gatsby';
import { useInView } from 'react-intersection-observer';

const SubNavLink = ({ href, label }) => (
  <a
    href={href}
    className='text-text1/70 hover:text-identifier transition-colors duration-200 py-4 px-3 text-sm md:text-base tracking-widest whitespace-nowrap'
  >
    {label}
  </a>
);

const SectionHeading = ({ children }) => (
  <div className='flex flex-col items-center justify-center mb-12 md:mb-14'>
    <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-center tracking-wide'>
      {children}
    </h2>
    <div className='border-b-4 border-identifier w-16 mt-5'></div>
  </div>
);

const BenefitItem = ({ title, children }) => (
  <li className='border-l-2 border-identifier/40 pl-5 py-1'>
    <p className='font-semibold text-lg tracking-wide mb-2'>{title}</p>
    <p className='md:text-lg leading-relaxed text-text1/85'>{children}</p>
  </li>
);

function Programi() {
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

  return (
    <Layout>
      <div className='-mt-20 font-oswald'>
        <div
          className='relative w-full min-h-[40vh] md:min-h-[70vh] overflow-hidden bg-layout1'
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/di4ms4xaz/image/upload/e_blur:1000,w_60,c_limit,f_auto,q_30/v1723159813/karate-kickbox-ostalo/goardssdi7slsfgaji5q.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        >
          <StaticImage
            src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723159813/karate-kickbox-ostalo/goardssdi7slsfgaji5q.jpg'
            alt='Programi'
            className='!absolute inset-0 w-full h-full'
            imgClassName='!scale-150 !origin-top md:!scale-100 md:!origin-center'
            loading='eager'
            placeholder='blurred'
            objectFit='cover'
            objectPosition='center 40%'
            layout='fullWidth'
            quality={100}
            formats={['auto', 'webp', 'avif']}
            breakpoints={[750, 1080, 1366, 1920, 2560]}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40 z-10'></div>
          <div className='relative z-20 flex items-center justify-center min-h-[40vh] md:min-h-[70vh] pt-20'>
            <div className='text-center text-text1 px-6 animate-fade-up animate-duration-1000'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider leading-tight'>
                PROGRAMI
              </h1>
              <div className='border-b-4 border-identifier w-16 mt-5 mx-auto animate-fade-up animate-duration-1000 animate-delay-500'></div>
            </div>
          </div>
        </div>

        <nav className='sticky top-20 z-30 bg-layout1/85 backdrop-blur-md border-b border-white/10'>
          <div className='max-w-7xl mx-auto px-6 flex justify-center gap-2 md:gap-8 overflow-x-auto'>
            <SubNavLink href='#kickbox-za-mladostnike' label='MLADOSTNIKI' />
            <SubNavLink href='#kickbox-za-odrasle' label='ODRASLI' />
          </div>
        </nav>

        <div className='bg-layout2 text-text1'>
          <section
            id='kickbox-za-mladostnike'
            className='scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24'
          >
            <SectionHeading>KICKBOX ZA MLADOSTNIKE</SectionHeading>
            <div
              ref={ref}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-14 items-start mb-14 ${
                animate
                  ? 'opacity-100 translate-y-0 transition-all duration-1000'
                  : 'opacity-0 translate-y-5'
              }`}
            >
              <div
                className={`lg:w-1/2 w-full ${
                  animate
                    ? 'animate-fade-right animate-duration-1000'
                    : 'opacity-0'
                }`}
              >
                <StaticImage
                  src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723159814/karate-kickbox-ostalo/lc5xmqqn23ejlcswmesr.jpg'
                  alt='kickbox-mladostniki'
                  className='w-full h-auto rounded-sm shadow-2xl'
                />
              </div>
              <div
                className={`lg:w-1/2 w-full text-left space-y-6 ${
                  animate
                    ? 'animate-fade-right animate-duration-1000 animate-delay-500'
                    : 'opacity-0'
                }`}
              >
                <p className='md:text-lg leading-relaxed'>
                  Čeprav je kikboks kontaktni borilni šport je predsodek, da gre
                  za agresiven ali nasilen šport, ki ni primeren za mladostnike,
                  odveč. Program je prilagojen mladostnikom od 12. do 16. leta.
                  Vadba se izvaja v nadzorovanem okolju, z ustrezno zaščitno
                  opremo. Vadeči se postopno privajajo na rahle kontakte, kar jim
                  lahko pomaga, da premagujejo strah, gradijo samozavest in se
                  tudi učijo nadzorovati lastno agresijo. Z izvajanjem tehnik na
                  različne tarče (fokusarje) razvijajo natančnost in moč, v
                  dogovorjenih borbah pa se na varen način srečujejo z borbenimi
                  situacijami. Kikboks je zelo dinamičen, zanimiv, socialen,
                  raznolik in tudi fizično naporen šport, ki lahko mladostnike
                  ustrezno nagovori tudi v njihovi najstniški fazi.
                </p>
                <p className='md:text-lg leading-relaxed'>
                  Poleg vadbe kikboksa so vadeči vključeni v redna letna
                  testiranja gibalnih sposobnosti. Mladostnike pa za delo v
                  klubu in v šoli dodatno motiviramo s pomočjo motivacijske igre
                  Joker, ki digitalno okolje uporablja za motiviranje vadečih
                  pri doseganju boljših rezultatov v šoli in pri kikboksu.
                  Jokerja je mogoče osvojiti z dobrimi ocenami v šoli, dobrimi
                  rezultati na testiranju gibalnih sposobnosti ali s pomočjo na
                  treningih in tekmovanjih. Kikboks je dinamičen in energičen
                  šport, ki prinaša številne koristi za razvoj mladostnikov.
                  Vabimo vas, da se nam pridružite. Z veseljem bomo z vami delili
                  naše znanje, izkušnje in navdušenje nad tem zanimivim borilnim
                  športom.
                </p>
              </div>
            </div>

            <div className='max-w-3xl mx-auto'>
              <p className='text-xl text-center mb-10 tracking-wide'>
                Glavni učinki vadbe:
              </p>
              <ul className='space-y-8'>
                <BenefitItem title='POVEČANJE SAMOZAVESTI'>
                  Vadba kikboksa je odličen način za krepitev samozavesti pri
                  mladostnikih. Učenje borbenih elementov, delo v paru, zaupanje
                  partnerju, privajanje na rahle kontakte ima pozitiven učinek
                  na mladostnikovo soočanje s strahom, stresnimi situacijami in
                  pomaga pri krepitvi odločnosti in pozornosti.
                </BenefitItem>
                <BenefitItem title='SPRETNOSTI SAMOOBRAMBE'>
                  Kikboks ni le šport, temveč tudi učinkovita metoda
                  samoobrambe. Otroci se učijo različnih tehnik, ki jim lahko
                  pomagajo v primeru morebitnih neprijetnih situacij. Razvijanje
                  teh spretnosti povečuje mladostnikovo občutje varnosti in mu
                  daje znanje, kako se zaščititi pred medvrstniškim nasiljem.
                </BenefitItem>
                <BenefitItem title='VADBA ZA CELOTNO TELO'>
                  Kikboks je intenzivna celostna vadba, ki vključuje različne
                  mišične skupine. Mladostniki razvijajo moč, vzdržljivost,
                  gibljivost in koordinacijo. Redna vadba kikboksa spodbuja
                  zdrav življenjski slog in prispeva k celostnemu fizičnemu
                  razvoju.
                </BenefitItem>
                <BenefitItem title='SOCIALNE VEŠČINE IN EKIPNO DELO'>
                  Kikboks nudi priložnost za druženje in sodelovanje z vrstniki.
                  Mladostniki se na treningih učijo tudi o pomenu spoštovanja,
                  discipline, urejenosti, sodelovanja in ekipnega dela. To
                  prispeva k razvoju socialnih veščin, ki so pomembne za uspešne
                  interakcije v vsakdanjem življenju.
                </BenefitItem>
                <BenefitItem title='RAZVIJANJE DISCIPLINE IN VZTRAJNOSTI'>
                  Redni treningi kikboksa zahtevajo disciplino in vztrajnost.
                  Mladostniki se učijo postavljati cilje, delati na dosegi
                  ciljev in premagovati ovire. To so ključne veščine, ki jim
                  bodo koristile v šoli, doma in v življenju.
                </BenefitItem>
              </ul>
            </div>
          </section>

          <div className='border-t border-text1/10'></div>

          <section
            id='kickbox-za-odrasle'
            className='scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24'
          >
            <SectionHeading>KICKBOX ZA ODRASLE</SectionHeading>
            <div className='flex flex-col lg:flex-row-reverse gap-10 lg:gap-14 items-start mb-14'>
              <div className='lg:w-1/2 w-full'>
                <StaticImage
                  src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723162718/karate-kickbox-ostalo/ehzouzziozimd6v90hzq.png'
                  alt='kickbox-odrasli'
                  className='w-full h-auto rounded-sm shadow-2xl'
                />
              </div>
              <div className='lg:w-1/2 w-full text-left space-y-6'>
                <p className='md:text-lg leading-relaxed'>
                  Program kikboks za odrasle je zelo primeren za odrasle, ki si
                  želijo intenzivne, rahlo kontaktne, aerobne vadbe v parih.
                  Zaradi uporabe rok in nog pri vadbi kikboksa razvijamo množico
                  različnih telesnih sposobnosti: vzdržljivost, moč, hitrost pa
                  tudi gibljivost in koordinacijo. Šport je z borbenega vidika
                  zelo praktičen in uporaben. V kontroliranem, dogovorjenem
                  okolju se srečujemo z različnimi razsežnostmi borbe in se
                  učimo samoobrambe, premagovanja strahu, treme in krepitve
                  koncentracije v stresnih situacijah. Kikboks je primeren za
                  vse ne glede na spol. Naši tečaji so zasnovani tako, da
                  omogočajo udobno in varno okolje za vadbo tako ženskam kot
                  moškim. Prilagoditve se lahko naredijo glede na posameznikove
                  potrebe. Pridružite se nam in dovolite, da kickbox postane del
                  vašega življenja! Ne glede na to, ali iščete kondicijski
                  izziv, sredstvo za sprostitev ali novo skupnost, boste pri nas
                  našli vse to in še več. Kikboks je šport, ki ne pozna
                  starostnih omejitev in prinaša številne koristi za vsakogar,
                  ne glede na spol.
                </p>
              </div>
            </div>

            <div className='max-w-3xl mx-auto'>
              <p className='text-xl text-center mb-10 tracking-wide'>
                Glavni učinki vadbe:
              </p>
              <ul className='space-y-8'>
                <BenefitItem title='CELOSTNA VADBA ZA VSE NIVOJE ZNANJA IN STAROSTI'>
                  Naš program je primeren tako za popolne začetnike kot tudi za
                  tiste, ki že imajo nekaj izkušenj s kikboksom. Program je
                  prilagojen različnim ravnem znanja, zato boste lahko uživali v
                  vadbi, ne glede na to, ali ste novinec ali izkušen borec.
                </BenefitItem>
                <BenefitItem title='KREPITEV TELESNE KONDICIJE'>
                  Program kikboksa za odrasle je odlična vadba za celotno telo,
                  ki združuje kardio trening, vadbo za moč in fleksibilnost. S
                  tem boste krepili mišice, izboljšali vzdržljivost in poskrbeli
                  za svoje splošno zdravje.
                </BenefitItem>
                <BenefitItem title='SPROSTITEV IN ZMANJŠEVANJE STRESA'>
                  Aktivna vadba kikboksa je odličen način sprostitve in
                  zmanjšanja stresa. Ob energični vadbi boste pozabili na
                  vsakodnevne skrbi, hkrati pa boste vadili svoje telo in duha.
                </BenefitItem>
                <BenefitItem title='SOCIALIZACIJA IN DRUŽENJE'>
                  Naše kikboks skupine ponujajo priložnost za sklepanje novih
                  prijateljstev. Ne glede na vaše znanje boste deležni spodbude
                  in motivacije, saj skupaj rastemo in napredujemo.
                </BenefitItem>
                <BenefitItem title='PRIMEREN ZA ŽENSKE IN MOŠKE'>
                  Kikboks je primeren za vse, ne glede na spol. Naš program je
                  zasnovan tako, da omogoča udobno in varno okolje za vadbo tako
                  ženskam kot moškim. Prilagoditve se lahko naredijo glede na
                  posameznikove potrebe.
                </BenefitItem>
              </ul>
            </div>

            <div className='text-center mt-16'>
              <Link
                to='/vpis'
                className='inline-block bg-identifier border-2 border-identifier py-3 px-8 text-lg lg:text-xl text-text1 cursor-pointer hover:text-identifier hover:bg-transparent transition-colors duration-200 ease-in-out tracking-wider'
              >
                PRIDRUŽI SE NAM!
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Programi;

export const Head = ({ location }) => (
  <Seo
    pathname={location.pathname}
    title='Programi'
    description='Pridružite se našim kickboks programom za mladostnike in odrasle v Karate klubu Žiri. Izboljšajte svojo moč, vzdržljivost in samoobrambne spretnosti pod vodstvom izkušenih trenerjev. Naši treningi ponujajo intenzivno vadbo, ki krepi telo in duha, hkrati pa spodbuja samozavest in zdrav življenjski slog. Vpišite se zdaj in doživite kickboks v podporni in motivirajoči skupnosti.'
  />
);
