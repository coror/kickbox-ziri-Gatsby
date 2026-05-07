import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import { Link } from 'gatsby';

const SubNavLink = ({ href, label }) => (
  <a
    href={href}
    className='text-text1/70 hover:text-identifier transition-colors duration-200 py-4 px-3 text-sm md:text-base tracking-widest whitespace-nowrap'
  >
    {label}
  </a>
);

const TrainerRow = ({ id, image, name, role, reverse, children }) => (
  <section
    id={id}
    className='scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24'
  >
    <div
      className={`flex flex-col gap-10 lg:gap-14 items-center lg:items-start ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <div className='shrink-0'>
        <div className='w-64 h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden ring-4 ring-identifier/20 shadow-2xl'>
          {image}
        </div>
      </div>
      <div className='flex-1 text-left w-full'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide'>
          {name}
        </h2>
        <p className='text-identifier uppercase tracking-widest text-sm mt-3'>
          {role}
        </p>
        <div className='border-b-2 border-identifier w-12 mt-4 mb-6'></div>
        <div className='space-y-4 md:text-lg leading-relaxed text-text1/85'>
          {children}
        </div>
      </div>
    </div>
  </section>
);

const Trenerji = () => {
  return (
    <Layout>
      <div className='-mt-20 font-oswald'>
        <div className='relative w-full min-h-[40vh] md:min-h-[70vh] overflow-hidden'>
          <StaticImage
            src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723159813/karate-kickbox-ostalo/goardssdi7slsfgaji5q.jpg'
            alt='Trenerji'
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
                TRENERJI
              </h1>
              <div className='border-b-4 border-identifier w-16 mt-5 mx-auto animate-fade-up animate-duration-1000 animate-delay-500'></div>
            </div>
          </div>
        </div>

        <nav className='sticky top-20 z-30 bg-layout1/85 backdrop-blur-md border-b border-white/10'>
          <div className='max-w-7xl mx-auto px-6 flex justify-center gap-2 md:gap-8 overflow-x-auto'>
            <SubNavLink href='#erin' label='ERIN' />
            <SubNavLink href='#matej' label='MATEJ' />
          </div>
        </nav>

        <div className='bg-layout2 text-text1'>
          <TrainerRow
            id='erin'
            name='Erin Ćoralić'
            role='Trener odraslih in mladostnikov'
            image={
              <StaticImage
                src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723162451/karate-kickbox-ostalo/cmzhy6t8c0213jvu2iyw.jpg'
                alt='erin'
                className='w-full h-full'
              />
            }
          >
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
              Žireh. Poleg tega je reprezentančni trener Karate zveze
              Slovenije, kjer svoje bogate izkušnje in znanje prenaša tudi na
              vrhunske športnike.
            </p>
          </TrainerRow>

          <div className='border-t border-text1/10'></div>

          <TrainerRow
            id='matej'
            reverse
            name='Matej Jenko'
            role='Trener odraslih'
            image={
              <StaticImage
                src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723120147/karate-kickbox-ostalo/w5oiligkc0uiits58yss.jpg'
                alt='matej'
                className='w-full h-full'
              />
            }
          >
            <p>
              Od športov ga je najprej pritegnil nogomet, katerega je začel
              trenirati pri šestih letih. Po treh letih je svoje zanimanje
              preusmeril v atletiko, kasneje pa ga je povleklo k akrobatiki,
              katero je treniral do trinajstega leta. Nadaljeval je s košarko
              vse do drugega letnika srednje šole. Po vseh teh letih treniranja
              je ugotovil, da so mu najbolj všeč športi, pri katerih je odvisen
              samo od sebe in se mora za uspeh ter dober rezultat zanesti nase.
              Zato se je začel poljubno ukvarjati z boksom. Pri sedemnajstih se
              je včlanil v Kickbox Žiri in kot pomočnik trenerja pomagal pri
              treningih. Sedaj pa kot trener že tri leta poučuje začetne
              skupine. Delo z otroki in mladostniki mu ne predstavlja nobenih
              težav ali povzroča stresa, saj je velikokrat pomagal oziroma bil
              animator na različnih dogodkih.
            </p>
          </TrainerRow>

          <div className='text-center pb-16 md:pb-24'>
            <Link
              to='/vpis'
              className='inline-block bg-identifier border-2 border-identifier py-3 px-8 text-lg lg:text-xl text-text1 cursor-pointer hover:text-identifier hover:bg-transparent transition-colors duration-200 ease-in-out tracking-wider'
            >
              PRIDRUŽI SE NAM!
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Trenerji;

export const Head = ({ location }) => (
  <Seo
    pathname={location.pathname}
    title='Trenerji'
    description='Spoznajte našo ekipo predanih kickbox trenerjev, ki vam bodo pomagali doseči vaše cilje v kickboxu. Naši trenerji so izkušeni, certificirani in strastni v svojem delu, ter zagotavljajo profesionalno vodenje in podporo za vaš napredek.'
  />
);
