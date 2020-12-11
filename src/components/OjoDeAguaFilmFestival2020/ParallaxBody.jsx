import React from 'react';

// packages
import { ParallaxProvider } from 'react-scroll-parallax';


// page sections 
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

const ParallaxBody = () => {
  return(
    <ParallaxProvider>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
  </ParallaxProvider>
  )
};

export default ParallaxBody;