import React, { useState, useEffect, useCallback } from 'react';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner'; // Import the Spinner component
import { useStaticQuery, graphql } from 'gatsby';
import Seo from '../components/Seo';

const Galerija = () => {
  const [clImages, setClImages] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  const data = useStaticQuery(graphql`
    query CloudinaryImage {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `);

  useEffect(() => {
    const preloadImages = async () => {
      const validImages = [];
      for (const image of data.allCloudinaryMedia.edges) {
        const img = new Image();
        img.src = image.node.secure_url;
        await new Promise((resolve) => {
          img.onload = () => {
            validImages.push(image);
            resolve();
          };
          img.onerror = () => resolve(); // Ignore broken images
        });
      }
      setClImages(validImages);
      setLoading(false); // Set loading to false after images are loaded
    };

    preloadImages();
  }, [data.allCloudinaryMedia.edges]);

  // State to track which image is clicked for fullscreen view
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (imageIndex) => {
    setSelectedImage(imageIndex);
  };

  const handleKeyDown = (event, imageIndex) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setSelectedImage(imageIndex);
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleCloseKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape' || event.key === ' ') {
        setSelectedImage(null);
      } else if (event.key === 'ArrowRight') {
        setSelectedImage((prevIndex) => (prevIndex + 1) % clImages.length);
      } else if (event.key === 'ArrowLeft') {
        setSelectedImage(
          (prevIndex) => (prevIndex - 1 + clImages.length) % clImages.length
        );
      }
    },
    [clImages.length]
  );

  useEffect(() => {
    if (selectedImage !== null) {
      document.addEventListener('keydown', handleCloseKeyDown);
    } else {
      document.removeEventListener('keydown', handleCloseKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleCloseKeyDown);
    };
  }, [selectedImage, handleCloseKeyDown]);

  return (
    <Layout>
      <div className='bg-layout2 py-10 md:py-40 '>
        <div className='container mx-auto'>
          {loading ? ( // Show spinner while loading
            <Spinner loading={true} />
          ) : (
            <div className='grid m-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {clImages.map((image, index) => (
                <div
                  key={index}
                  className='relative'
                  tabIndex={0}
                  onClick={() => handleClick(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  role='button'
                  aria-label={`Open image ${index}`}
                >
                  <img
                    src={image.node.secure_url}
                    alt={`${index}`}
                    className='rounded-lg cursor-pointer object-cover w-full h-64 sm:h-48 md:h-56 lg:h-64 xl:h-80'
                  />
                </div>
              ))}
            </div>
          )}

          {/* Fullscreen overlay */}
          {selectedImage !== null && (
            <div
              className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 overflow-hidden'
              style={{ backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 50 }}
              onClick={handleClose}
              onKeyDown={handleCloseKeyDown}
              tabIndex={0}
              role='button'
              aria-label='Close fullscreen image'
            >
              <div className='max-w-3/4 rounded-lg p-12 overflow-hidden'>
                <img
                  src={clImages[selectedImage].node.secure_url}
                  alt={`${selectedImage}`}
                  className='rounded-lg shadow-xl object-contain max-h-full'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Galerija;

export const Head = () => (
  <Seo
    title='Galerija'
    description='Raziščite našo galerijo, kjer si lahko ogledate fotografije naših dogodkov in skupnostnih aktivnosti. Pridobite vpogled v živahno in podporno okolje, ki vam pomaga doseči vaše fitnes cilje.'
  />
);
