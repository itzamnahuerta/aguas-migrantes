import React, { useState }  from 'react';



const SectionThree = () => {
  const [dayOne, setDayOne] = useState(false);
  const [dayTwo, setDayTwo] = useState(false);
  const [dayThree, setDayThree]  = useState(false);

  const toggleDayOne = () => setDayOne(!dayOne);
  const toggleDayTwo = () => setDayTwo(!dayTwo);
  const toggleDayThree = () => setDayThree(!dayThree);

  const dayOneContent = () => {
    return(
      <div>
        <h1> I am day 1 yaaaaaall</h1>
      </div>
    )
  }

  const dayTwoContent = () => {
    return(
      <div>
        <h1> I am day 2 yaaaaaall</h1>
      </div>
    )
  }
  
  const dayThreeContent = () => {
    return(
      <div>
        <h1> I am day 3 yaaaaaall</h1>
      </div>
    )
  }

  const renderContent = () => {
    if(dayOne === true) {
      return(
        dayOneContent()
      );
    } else if (dayTwo === true) {
      return(
        dayTwoContent()
      )
    } else if(dayThree === true) {
      return(
        dayThreeContent()
      )
    } else {
      return(
        dayOneContent()
      )
    }
  }

  return(
    <div className="section-3-container live-stream-container"> 
      <div className="schedule-container"> 
        <div className="button-container">
          <button  onClick={toggleDayOne}> Day 18 </button>
          <button  onClick={toggleDayTwo}> Day 19 </button>
          <button  onClick={toggleDayThree}> Day 20</button>
        </div>

        {renderContent()}
      </div>
    </div>     
  )
};

export default SectionThree;