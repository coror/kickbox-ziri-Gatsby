import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import { Link } from 'gatsby';

function Programi() {
  return (
    <Layout>
      <div className='relative font-oswald py-20 md:py-40 bg-layout2 text-text1'>
        <div
          className=' flex flex-col items-center justify-center p-8'
          id='kickbox-za-mladostnike'
        >
          <div className='relative flex items-center flex-col'>
            <div className='flex flex-col items-center justify-center mb-10'>
              <h1 className='text-4xl font-extrabold text-center tracking-wide'>
                KIKBOKS ZA MLADOSTNIKE
              </h1>
              <div className='border-b-4 border-identifier w-16 mt-5'></div>
            </div>
            <div className='flex 2xl:flex-row flex-col'>
              <div className='relative max-w-[60rem] md:mt-10 mb-10'>
                <StaticImage
                  src='https://res.cloudinary.com/dbssbnuph/image/upload/v1718978856/kickbox-ziri-stran/20240325_171926_xrjvnj.jpg'
                  alt='mladostniki'
                  className='max-w-[60rem] h-auto rounded-sm shadow-lg filter brightness-90 contrast-125  animate-fade-right animate-duration-1000 animate-delay-1500'
                />
              </div>
              <div className='md:mt-10 flex flex-col items-center 2xl:block  animate-fade-right animate-duration-1000 animate-delay-1000'>
                <p className='max-w-[50rem] md:text-lg md:mx-10 text-center'>
                  Čeprav je kikboks kontaktni borilni šport je predsodek, da gre
                  za agresiven ali nasilen šport, ki ni primeren za mladostnike,
                  odveč. Program je prilagojen mladostnikom od 12 do 16 leta.
                  Vadba se izvaja v nadzorovane okolju, z ustrezno zaščitno
                  opremo. Vadeči se postopno privajajo na rahle kontakte, kar
                  jim lahko pomaga, da premagujejo strah, gradijo samozavest in
                  se tudi učijo nadzorovati lastno agresijo. Z izvajanjem tehnik
                  na različne tarče (fokusarje) razvijajo natančnost in moč, v
                  dogovorjenih borbah pa se na varen način srečujejo z borbenimi
                  situacijami. Kikboks je zelo dinamičen, zanimiv, socialen,
                  raznolik in tudi fizično naporen šport, ki lahko mladostnike
                  ustrezno nagovori tudi v njihovi najstniški fazi.
                </p>
                <p className='max-w-[50rem] md:text-lg md:mx-10 text-center mt-10'>
                  Poleg vadbe kikboksa so vadeči vključeni v redna letna
                  testiranja gibalnih sposobnosti. Mladostnike pa za delo v
                  klubu in v šoli dodatno motiviramo s pomočjo motivacijske igre
                  Joker, ki Digitalno okolje uporablja za motiviranje vadečih
                  pri doseganju boljših rezultatov v šoli in pri kikboksu.
                  Jokerja je mogoče osvojiti z dobrimi ocenami v šoli, dobrimi
                  rezultati na testiranju gibalnih sposobnosti, s pomočjo na
                  treningih in tekmovanjih. Kikboks je dinamičen in energičen
                  šport, ki prinaša številne koristi za razvoj mladostnikov.
                  Vabimo vas, da se nam pridružite. Z veseljem bomo z vami
                  delili naše znanje, izkušnje in navdušenje nad tem zanimivim
                  borilnim športom.
                </p>
                <div className='flex flex-col md:flex-row items-center justify-center'>
                  <div className='text-center max-w-[40rem] pt-10'>
                    <div className='text-xl mb-7 underline'>
                      Glavni učinki vadbe:
                    </div>
                    <ul>
                      <li className='mb-5 text-lg font-semibold'>
                        POVEČANJE SAMOZAVESTI
                      </li>
                      <p className='mb-5 md:text-lg'>
                        Vadba kikboksa je odličen način za krepitev samozavesti
                        pri mladostnikih. Učenje borbenih elementov, delo v
                        paru, zaupanje partnerju, privajanje na rahle kontakte
                        ima pozitiven učinek na mladostnikovo soočanje s
                        strahom, stresnimi situacijami in pomaga pri krepitvi
                        odločnosti in pozornosti.
                      </p>
                      <li className='mb-5 text-lg font-semibold md:text-lg'>
                        SPRETNOSTI SAMOOBRAMBE
                      </li>
                      <p className='mb-5 md:text-lg'>
                        Kikboks ni le šport, temveč tudi učinkovita metoda
                        samoobrambe. Otroci se učijo različnih tehnik, ki jim
                        lahko pomagajo v primeru morebitnih neprijetnih
                        situacij. Razvijanje teh spretnosti povečuje
                        mladostnikovo občutje varnosti in mu daje znanje, kako
                        se zaščititi pred medvrstniškim nasiljem.
                      </p>
                      <li className='mb-5 text-lg font-semibold'>
                        VADBA ZA CELOTNO TELO
                      </li>
                      <p className='mb-5 md:text-lg'>
                        Kikboks je intenzivna celostna vadba, ki vključuje
                        različne mišične skupine. Mladostniki razvijajo moč,
                        vzdržljivost, gibljivost in koordinacijo. Redna vadba
                        karateja spodbuja zdrav življenjski slog in prispeva k
                        celostnemu fizičnemu razvoju.
                      </p>
                      <li className='mb-5 text-lg font-semibold'>
                        SOCIALNE VEŠČINE IN EKIPNO DELO
                      </li>
                      <p className='mb-5 md:text-lg'>
                        Kikboks nudi priložnost za druženje in sodelovanje z
                        vrstniki. Mladostniki se na treningih učijo tudi o
                        pomenu spoštovanja, discipline, urejenosti, sodelovanja
                        in ekipnega dela. To prispeva k razvoju socialnih
                        veščin, ki so pomembne za uspešne interakcije v
                        vsakdanjem življenju.
                      </p>
                      <li className='mb-5 text-lg font-semibold'>
                        RAZVIJANJE DISCIPLINE IN VZTRAJNOSTI
                      </li>
                      <p className='mb-5 md:text-lg'>
                        Redni treningi kikboksa zahtevajo disciplino in
                        vztrajnost. Mladostniki se učijo postavljati cilje,
                        delati na njih in premagovati ovire. To so ključne
                        veščine, ki jim bodo koristile v šoli, doma in v
                        življenju.
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className=' flex flex-col items-center justify-center mt-10 md:mt-24'
            id='kickbox-za-odrasle'
          >
            <div className='relative flex items-center flex-col'>
              <div className='flex flex-col items-center justify-center mb-10'>
                <h1 className='text-4xl font-extrabold text-center tracking-wide'>
                  KICKBOX ZA ODRASLE
                </h1>
                <div className='border-b-4 border-identifier w-16 mt-5'></div>
              </div>
              <div className='flex 2xl:flex-row flex-col'>
                <div className='relative max-w-[60rem] md:mt-10 mb-10'>
                  <StaticImage
                    src='https://res.cloudinary.com/dbssbnuph/image/upload/v1718978851/kickbox-ziri-stran/20240327_192918_vnmnmu.jpg'
                    alt='karate practice'
                    className='max-w-[60rem] h-auto rounded-sm shadow-lg filter brightness-90 contrast-125  animate-fade-right animate-duration-1000 animate-delay-1500'
                  />
                </div>
                <div className='md:mt-10 flex flex-col items-center 2xl:block  animate-fade-right animate-duration-1000 animate-delay-1000'>
                  <p className='max-w-[50rem] md:text-lg md:mx-10 text-center'>
                    Program kikboks za odrasle je zelo primeren za odrasle, ki
                    si želijo intenzivne, rahlo kontaktne, aerobne vadbe v
                    parih. Zaradi uporabe rok in nog pri vadbi kikboksa
                    razvijamo množico različnih telesnih sposobnosti
                    vzdržljivost, moč, hitrost pa tudi gibljivost in
                    koordinacijo. Šport je iz borbenega vidika zelo praktičen in
                    uporaben. V kontroliranem, dogovorjenem okolju se srečujemo
                    z različnimi razsežnostmi borbe in se učimo samoobrambe,
                    premagovanja strahu, treme in krepitve koncentracije v
                    stresnih situacijah. Kikboks je primeren za vse ne glede na
                    spol. Naši tečaji so zasnovani tako, da omogočajo udobno in
                    varno okolje za vadbo tako ženskam kot moškim. Prilagoditve
                    se lahko naredijo glede na posameznikove potrebe. Pridružite
                    se nam in dovolite, da kickbox postane del vašega življenja!
                    Ne glede na to, ali iščete kondicijski izziv, sredstvo za
                    sprostitev ali novo skupnost, boste pri nas našli vse to in
                    še več. Kikboks je šport, ki ne pozna starostnih omejitev,
                    in prinaša številne koristi za vsakogar, ne glede na spol.
                  </p>
                  <div className='flex flex-col md:flex-row items-center justify-center'>
                    <div className='text-center max-w-[40rem] pt-10'>
                      <div className='text-xl mb-7 underline'>
                        Glavni učinki vadbe:
                      </div>
                      <ul>
                        <li className='mb-5 text-lg font-semibold'>
                          CELOSTNA VADBA ZA VSA ZNANJE IN STAROSTI
                        </li>
                        <p className='mb-5 md:text-lg'>
                          Naš program je primeren tako za popolne začetnike kot
                          tudi za tiste, ki že imajo nekaj izkušenj s kikboksom.
                          Program je prilagojen različnim ravnem znanja, zato
                          boste lahko uživali v vadbi, ne glede na to, ali ste
                          novinec ali izkušen borec.
                        </p>
                        <li className='mb-5 text-lg font-semibold md:text-lg'>
                          KREPITEV TELESNE KONDICIJE
                        </li>
                        <p className='mb-5 md:text-lg'>
                          Program kikboksa za odrasle je odlična vadba za
                          celotno telo, ki združuje kardio trening, vadbo za moč
                          in fleksibilnost. S tem boste krepili mišice,
                          izboljšali vzdržljivost in poskrbeli za svoje splošno
                          zdravje.
                        </p>
                        <li className='mb-5 text-lg font-semibold'>
                          SPROSTITEV IN ZMANJŠEVANJE STRESA
                        </li>
                        <p className='mb-5 md:text-lg'>
                          Aktivna vadba kikboksa je odličen način sprostitve in
                          zmanjšanja stresa. Ob energični vadbi boste pozabili
                          na vsakodnevne skrbi, hkrati pa boste vadili svoje
                          telo in duha.
                        </p>

                        <li className='mb-5 text-lg font-semibold'>
                          SOCIALIZACIJA IN DRUŽENJE
                        </li>
                        <p className='mb-5 md:text-lg'>
                          Naše kikboks skupine ponuja priložnost za sklepanje
                          novih prijateljstev. Ne glede na vaše znanje boste
                          deležni spodbude in motivacije, saj skupaj rastemo in
                          napredujemo.
                        </p>
                        <li className='mb-5 text-lg font-semibold'>
                          PRIMEREN ZA ŽENSKE IN MOŠKE
                        </li>
                        <p className='mb-5 md:text-lg'>
                          Kikboks je primeren za vse ne glede na spol. Naš
                          program je zasnovan tako, da omogoča udobno in varno
                          okolje za vadbo tako ženskam kot moškim. Prilagoditve
                          se lahko naredijo glede na posameznikove potrebe.
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center mt-14 z-50'>
            <Link
              to='/vpis'
              className='bg-identifier border-4 border-identifier rounded-sm py-3 px-6 text-xl cursor-pointer hover:text-text1 hover:bg-transparent transition-colors duration-200 ease-in-out'
            >
              Pridruži se nam!
            </Link>
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
