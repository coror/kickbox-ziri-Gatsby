import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import { Link } from 'gatsby';
import { FaArrowDown } from 'react-icons/fa';
import { BsLink } from 'react-icons/bs';
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

const ImageTextRow = ({ image, reverse, children }) => (
  <div
    className={`flex flex-col gap-10 lg:gap-14 items-start mb-14 ${
      reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
    }`}
  >
    <div className='lg:w-1/2 w-full'>{image}</div>
    <div className='lg:w-1/2 w-full text-left space-y-5 md:text-lg leading-relaxed'>
      {children}
    </div>
  </div>
);

const About = () => {
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
        <div className='relative w-full min-h-[40vh] md:min-h-[70vh] overflow-hidden'>
          <StaticImage
            src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723159813/karate-kickbox-ostalo/goardssdi7slsfgaji5q.jpg'
            alt='O nas'
            className='!absolute inset-0 w-full h-full'
            imgClassName='!scale-150 !origin-top md:!scale-100 md:!origin-center'
            loading='eager'
            placeholder='blurred'
            objectFit='cover'
            objectPosition='center 55%'
            layout='fullWidth'
            quality={100}
            formats={['auto', 'webp', 'avif']}
            breakpoints={[750, 1080, 1366, 1920, 2560]}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40 z-10'></div>
          <div className='relative z-20 flex items-center justify-center min-h-[40vh] md:min-h-[70vh] pt-20'>
            <div className='text-center text-text1 px-6 animate-fade-up animate-duration-1000'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider leading-tight'>
                O NAS
              </h1>
              <div className='border-b-4 border-identifier w-16 mt-5 mx-auto animate-fade-up animate-duration-1000 animate-delay-500'></div>
            </div>
          </div>
        </div>

        <nav className='sticky top-20 z-30 bg-layout1/85 backdrop-blur-md border-b border-white/10'>
          <div className='max-w-7xl mx-auto px-6 flex justify-center gap-2 md:gap-8 overflow-x-auto'>
            <SubNavLink href='#o-nas' label='O NAS' />
            <SubNavLink href='#pomen' label='POMEN' />
          </div>
        </nav>

        <div className='bg-layout2 text-text1'>
          <section
            id='o-nas'
            className='scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24'
          >
            <SectionHeading>O NAS</SectionHeading>
            <div
              ref={ref}
              className={`${
                animate
                  ? 'opacity-100 translate-y-0 transition-all duration-1000'
                  : 'opacity-0 translate-y-5'
              }`}
            >
              <ImageTextRow
                image={
                  <StaticImage
                    src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723159861/kickbox-ziri-galerija/ldxusif0vwxiizmoh5dh.jpg'
                    alt='onas1'
                    className='w-full h-auto rounded-sm shadow-2xl'
                  />
                }
              >
                <p>
                  Kikboks sekcija Žiri deluje v sklopu Karate kluba Žiri, ki je
                  del Inštituta borilnih veščin (prej Karate inštituta).
                  Inštitut je, s preko 400 aktivnimi člani, eno največjih
                  slovenskih združenj borilnih športov in veščin. V njem na
                  osnovi bogatih izkušenj iz borbenih znanj, inovativnega
                  znanstvenega raziskovanja, več desetletnega pedagoškega in
                  andragoškega dela, oblikujemo moderne vadbene programe
                  borilnih veščin, s poudarkom na karateju in kikboksu, ki so
                  prilagojeni potrebam modernega časa, starosti in željam
                  vsakega posameznika. Trudimo se, da redna vadba naših
                  programov pripomore k bolj polnemu in kvalitetnemu življenju
                  in vadečim omogoča, da se postopno približujejo glavnim
                  idealom borilnih veščin, vzpostavitvi notranje sproščenosti,
                  umirjenosti, odločnosti in zdravega borbenega duha.
                </p>
              </ImageTextRow>

              <ImageTextRow
                reverse
                image={
                  <StaticImage
                    src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723159862/kickbox-ziri-galerija/jx2rp3bastwftzh1r68c.jpg'
                    alt='onas2'
                    className='w-full h-auto rounded-sm shadow-2xl'
                  />
                }
              >
                <p>
                  Kikboks sekcija v Žireh deluje 4 leta. Razvila se je iz
                  kikboks sekcije v Idriji, ki ima že več kot 20 letno
                  tradicijo. S treningi kikboksa smo v Idriji začeli že leta
                  2002. Prvi trener je bil Miha Božič, ki je bil v tistem obdobju
                  državni prvak v karateju in kikboksu. Leta 2018 je vodenje
                  kikboks skupin prevzel Erin Ćoralić. Kikboks program smo pod
                  njegovim vodstvom prenovili, dodali več prvin boksa in
                  tajskega boksa ter pripravili posebne programe kikboksa za
                  mladostnike. V Žireh trenutno delujejo tri kikboks skupine.
                  Začetna in nadaljevalna kikboks skupina za odrasle ter
                  skupina kikboksa za mladostnike, aktivno pa se treningov
                  udeležuje preko 30 vadečih.
                </p>
              </ImageTextRow>
            </div>
          </section>

          <div className='border-t border-text1/10'></div>

          <section
            id='pomen'
            className='scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24'
          >
            <SectionHeading>POMEN BORILNIH VEŠČIN</SectionHeading>
            <ImageTextRow
              image={
                <StaticImage
                  src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723159866/kickbox-ziri-galerija/r0x7irkfynn7lglvjufo.jpg'
                  alt='pomen1'
                  className='w-full h-auto rounded-sm shadow-2xl'
                />
              }
            >
              <p>
                Čeprav so borilne veščine ena izmed najbolj številčnih gibalnih
                aktivnosti v svetu, v družbi še vedno obstaja kar precej
                predsodkov do njih. Eden takih razširjenih predsodkov je, da
                naj bi borilne veščine spodbujale agresijo in nasilje, ter da v
                borilnih veščinah prihaja do nekontroliranega fizičnega
                kontakta. Taki predsodki izvirajo iz površnega poznavanja
                izvora agresivnega vedenja in slabega razumevanja borilnih
                znanj. Borbeno vedenje je eno od osnovnih in pomembnejših
                vedenj, ki so se razvila v evolucijskem razvoju. Živemu bitju
                omogočajo, da varuje svoje ozemlje in na ta način zagotovi
                varnost, hrano, spolnega partnerja in naraščaj. Borbeno vedenje
                v naravi v večini primerov poteka po prirojenih ali naučenih
                pravilih, ki onemogočajo, da bi bili konflikti in spopadi
                preveč nevarni ali usodni. Do agresivnih, nekontroliranih
                odzivov pride zelo redko, se pa tudi v živalskem svetu
                dogajajo. V primeru agresivnega odziva odpovedo prirojena in
                naučena pravila, ki onemogočajo, da so spopadi usodni za
                pripadnike iste vrste. Človeku najbližji primer takega
                agresivnega vedenja so bojni pohodi nekaterih opic, pri katerih
                pobijejo poražene skupine in se izživljajo nad njihovimi
                mladiči.
              </p>
            </ImageTextRow>

            <ImageTextRow
              reverse
              image={
                <StaticImage
                  src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723159869/kickbox-ziri-galerija/rsoe0epc15ssycfpidvz.jpg'
                  alt='pomen2'
                  className='w-full h-auto rounded-sm shadow-2xl'
                />
              }
            >
              <p>
                Zgodovina in naše vsakdanje življenje kažeta na to, da ljudje
                nikakor nismo imuni na agresiven in nasilen način odzivanja. Ne
                glede na to, ali gre za fizičen napad ali pa verbalno
                poniževanje. Nasilja in agresivnosti ne rešimo tako, da si
                zatiskamo oči in se pretvarjamo, da ne obstajata, ampak da
                spoznamo naše borbeno vedenje in se ga skozi vadbeni proces
                naučimo usmerjati in oblikovati. Vadba borilnih aktivnosti v
                modernem času upošteva vse principe in znanja športne in
                rekreativne vadbe, hkrati pa ohranja tudi tradicionalna znanja
                in izkušnje, ki so se nabrale v večtisočletnem razvoju
                borilnih veščin. Predsodki pred borilnimi veščinami so zato
                odveč. Ko so borbena znanja v začetku prejšnjega stoletja v
                večini izgubila vojaški namen, se je večina borilnih veščin
                preoblikovalo v športne discipline ali pa psihofizične oblike
                celostne vadbe. Nekatere izmed njih so nekontaktne, pri drugih
                pa se kontakt s partnerjem dogaja na osnovi vnaprej
                dogovorjenih pravil. Borilna znanja so zato zelo primeren
                poligon, kjer lahko znotraj kontroliranega okolja razvijamo
                svoje gibalne potenciale in hkrati spoznavamo tudi naše najbolj
                primarne odzive in vedenja. Na ta način, poleg zdravega telesa,
                razvijamo tudi samozavest, sproščenost, spoštovanje in
                odločnost. Z njihovo pomočjo lahko živimo bolj polno in
                kvalitetno življenje. Med bogato ponudbo različnih metod in
                pristopov je potrebno le poiskati tisto, ki najbolj ustreza
                posameznikovim pričakovanjem in potrebam.
              </p>
            </ImageTextRow>

            <div className='max-w-3xl mx-auto mt-16 text-center'>
              <div className='text-xl tracking-wide flex items-center justify-center mb-6'>
                Preberi več, članek Delo:
                <FaArrowDown className='inline ml-2 animate-bounce' />
              </div>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='https://www.delo.si/polet/ucimo-se-borilnih-vescin-lahko-tudi-doma'
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 text-lg hover:text-identifier transition-colors duration-200 border-b border-transparent hover:border-identifier'
                  >
                    <BsLink />
                    Učimo se borilnih veščin, lahko tudi doma
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.delo.si/polet/borilne-vescine-za-vsakdanje-zivljenje'
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 text-lg hover:text-identifier transition-colors duration-200 border-b border-transparent hover:border-identifier'
                  >
                    <BsLink />
                    Borilne veščine za vsakdanje življenje
                  </a>
                </li>
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
};

export default About;

export const Head = ({ location }) => (
  <Seo
    pathname={location.pathname}
    title='O nas'
    description='Spoznajte filozofijo, načela in bogato zgodovino našega kluba, ki stojijo za našimi borilnimi veščinami. Odkrijte, kako že vrsto let odpravljamo pogoste predsodke o borilnih veščinah, s poudarkom na kontroliranem vadbenem okolju, ki spodbuja fizični, mentalni in čustveni razvoj. Naš pristop skozi čas poudarja spoštovanje, samozavest in uravnotežen življenjski slog, ki vam pomaga doseči vaš polni potencial.'
  />
);
