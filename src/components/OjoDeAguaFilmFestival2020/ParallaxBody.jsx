import React from 'react';

// packages
import { ParallaxProvider } from 'react-scroll-parallax';


// page sections 
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

// styles
import '../styles/NavBar.scss';

const ParallaxBody = () => {
  return(
    <ParallaxProvider>
      <SectionOne/>
      <SectionTwo/>
  <ParallaxProvider/>
  )
};

export default ParallaxBody;