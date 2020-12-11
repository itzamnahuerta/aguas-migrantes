import React from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

// packages
import { ParallaxProvider } from 'react-scroll-parallax';

// styles
import '../../styles/OjoDeAguaFilmFestival2021.scss';

// assets
import aguaGiphy from '../../assets//ojo-de-agua-2020/agua-giphy.gif';


const OjoDeAguaFilmFestival2020Screen = () => {
    return (
      <div className="ojo-de-agua-screen">

        <div className="ojo-de-agua-banner">
          <div className="left-section f-item">  
            <img className="gif" src={aguaGiphy} alt="agua-giphy" />
          </div>

          <div className="right-sectiton f-item"> 
            <h1> Ojos de Agua Film Festival </h1>
          </div>
        </div> 

        <SectionOne/>
        <SectionTwo/>
      </div>
  )
};

export default OjoDeAguaFilmFestival2020Screen;