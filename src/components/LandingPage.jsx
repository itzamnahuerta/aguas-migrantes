import React from 'react';

const LandingPage = props => {

  return(
    <React.Fragment>
      <h3> i am the landing page </h3>
      <button onClick={props.toggleLandingPage} > enter page </button>
    </React.Fragment>
  )
}

export default LandingPage;