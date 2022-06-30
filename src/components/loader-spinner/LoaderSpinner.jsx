import React from 'react';
import './loader-spinner.scss'

const LoaderSpinner = () => {
  return (
   <div className="overlay">
     <div className="loader-wrapper">
       <div className="lds-dual-ring"></div>
     </div>
   </div>
  );
};

export default LoaderSpinner;