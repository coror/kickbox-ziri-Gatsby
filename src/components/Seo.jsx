import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import logo from '../../images/logo-modified.png';

const Seo = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ''}`,
    image:
      'https://res.cloudinary.com/di4ms4xaz/image/upload/v1723207597/karate-kickbox-ostalo/qydmowmkgir6u3buby9o.jpg',
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />

      {/* Open Graph tags for Facebook */}
      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:type' content='website' />

      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />
      <meta name='twitter:url' content={seo.url} />

      <link rel='icon' href={logo} />
      {children}
    </>
  );
};

export default Seo; // Ensure correct export
