import React from 'react';
import { ClipLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '100px auto',
  borderWidth: '3px', // Increase the border width to make the spinner thicker
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color='#004c98'
      loading={loading}
      cssOverride={override}
      size={150} // You can adjust the size as needed
      aria-label='Loading Spinner'
    />
  );
};

export default Spinner;
