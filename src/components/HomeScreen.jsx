import React from 'react'
import SidebarMenu from '../components/SidebarMenu';
import '../styles/HomeScreen.scss'


const HomeScreen = () => {
    return (
      <div className="home-container">
        <div className="mission-statement item">
          <h2> Aguas Migrantes connects our communities through art by learning and teaching about the migration patterns, traditions and cultural productions of the places we come from. This is accomplished by engaging with members of our communities through free workshops, mural projects, independent film festivals, residencies and culminating exhibitions.</h2>
        </div> 
        <div className="sidebar-section item"> 
        <SidebarMenu />
        </div>
      </div>
  )
};

export default HomeScreen;