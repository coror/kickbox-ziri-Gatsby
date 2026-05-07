import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import Seo from '../components/Seo';

const optimize = (url, transform = 'f_auto,q_auto:best') => {
  const clean = url.split('?')[0];
  const match = clean.match(
    /^(https?:\/\/[^/]+\/[^/]+\/upload\/)(?:[^v][^/]*\/)?v\d+\/(.+)$/
  );
  if (!match) return clean;
  return `${match[1]}${transform}/${match[2]}`;
};

const blurUrl = (url) =>
  optimize(url, 'e_blur:1000,w_60,h_60,c_fill,f_auto,q_30');

const Galerija = () => {
  const data = useStaticQuery(graphql`
    query CloudinaryImage {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
            width
            height
          }
        }
      }
    }
  `);

  const allImages = data.allCloudinaryMedia.edges
    .map((e) => e.node)
    .filter((n) => n.secure_url.includes('/image/upload/'));

  const [failed, setFailed] = useState(() => new Set());
  const images = allImages.filter((img) => !failed.has(img.secure_url));

  return (
    <Layout>
      <div className='-mt-20 font-oswald'>
        <div className='relative w-full min-h-[40vh] md:min-h-[70vh] overflow-hidden'>
          <StaticImage
            src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723159813/karate-kickbox-ostalo/goardssdi7slsfgaji5q.jpg'
            alt='Galerija'
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
                GALERIJA
              </h1>
              <div className='border-b-4 border-identifier w-16 mt-5 mx-auto animate-fade-up animate-duration-1000 animate-delay-500'></div>
            </div>
          </div>
        </div>

        <div className='bg-layout2 py-16 md:py-24'>
          <div className='max-w-7xl mx-auto px-4 md:px-8'>
            <Gallery
              options={{
                bgOpacity: 0.95,
                showHideAnimationType: 'fade',
              }}
            >
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4'>
                {images.map((img, i) => (
                  <Item
                    key={i}
                    original={optimize(img.secure_url)}
                    thumbnail={optimize(
                      img.secure_url,
                      'c_fill,w_600,h_600,f_auto,q_auto'
                    )}
                    width={img.width}
                    height={img.height}
                  >
                    {({ ref, open }) => (
                      <button
                        ref={ref}
                        onClick={open}
                        type='button'
                        style={{
                          backgroundImage: `url("${blurUrl(img.secure_url)}")`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                        className='group relative overflow-hidden rounded-md w-full h-48 sm:h-56 md:h-64 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-identifier focus-visible:ring-offset-2'
                        aria-label={`Odpri sliko ${i + 1}`}
                      >
                        <img
                          src={optimize(
                            img.secure_url,
                            'c_fill,w_600,h_600,f_auto,q_auto'
                          )}
                          alt={`Galerija slika ${i + 1}`}
                          loading='lazy'
                          onError={() =>
                            setFailed(
                              (prev) => new Set(prev).add(img.secure_url)
                            )
                          }
                          className='relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]'
                        />
                        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300'></div>
                      </button>
                    )}
                  </Item>
                ))}
              </div>
            </Gallery>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Galerija;

export const Head = ({ location }) => (
  <Seo
    pathname={location.pathname}
    title='Galerija'
    description='Raziščite našo galerijo, kjer si lahko ogledate fotografije naših dogodkov in skupnostnih aktivnosti. Pridobite vpogled v živahno in podporno okolje, ki vam pomaga doseči vaše cilje.'
  />
);
