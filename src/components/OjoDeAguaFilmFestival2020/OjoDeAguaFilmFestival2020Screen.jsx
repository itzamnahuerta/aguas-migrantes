import React from 'react';

// page sections 
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';


// packages
import {  ParallaxProvider,ParallaxBanner, } from 'react-scroll-parallax';

// styles
import '../../styles/OjoDeAguaFilmFestival2021.scss';

// assets
import aguaGiphy from '../../assets//ojo-de-agua-2020/agua-giphy.gif';


const OjoDeAguaFilmFestival2020Screen = () => {
    return (
      <ParallaxProvider>
      <div className="ojo-de-agua-screen">
        <div className="ojo-de-agua-banner">
          <div className="left-section f-item">  
            <img className="gif" src={aguaGiphy} alt="agua-giphy" />
          </div>

          <div className="right-sectiton f-item"> 
            <h1> Ojo de Agua <br/> Film Festival </h1>
          </div>
        </div> 

        <ParallaxBanner
          layers={[
            {
                children: <SectionOne/> ,
                expanded: false,
                amount: 0.1,

            },
          ]}
          style={{
            height: '800px',
        }}
        >
        </ParallaxBanner>

        <SectionThree/>
        <SectionTwo/>
      </div>
      </ParallaxProvider>
      
  )
};

export default OjoDeAguaFilmFestival2020Screen;