import React from 'react';
import '../styles/SidebarMenu.scss'

import {
  Link
} from 'react-router-dom';


const SidebarMenu = () => {
  return(
      <nav className="menu-container open-menu close-menu">
        <div className="link-container">
          <Link className="link-item left" to="/ojo-agua-film-festival-2020"> Ojo De Agua Film Festival</Link>
        </div>
        <div className="link-container">
          <Link className="link-item left" to="/">Workshops</Link>
        </div>
        <div className="link-container">
          <Link className="link-item left" to="/about">Mural Projects</Link>
        </div>
        <div className="link-container">
          <Link className="link-item left" to="/about">EXHIBITIONS</Link>
        </div>
      </nav>
  )
}

export default SidebarMenu;