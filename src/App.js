import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// current main pages
// import LandingPage from './components/LandingPage';
import HomeScreen  from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import NavBar from './components/NavBar';
import SidebarMenu from './components/SidebarMenu';
import Shop from './components/Shop';

import OjoDeAguaFilmFestival2020Screen from './components/OjoDeAguaFilmFestival2020/OjoDeAguaFilmFestival2020Screen.jsx';

function App() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
          <Route path="/ojo-agua-film-festival-2020">
              <OjoDeAguaFilmFestival2020Screen />
            </Route>
            <Route path="/about">
              <AboutScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </Router>
      </div>
    );


}

export default App;
