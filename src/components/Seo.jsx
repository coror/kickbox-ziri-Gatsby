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
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta
        name='image'
        content='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723207597/karate-kickbox-ostalo/qydmowmkgir6u3buby9o.jpg'
      />
      <link rel='icon' href={logo} />
      {children}
    </>
  );
};

export default Seo; // Ensure correct export
