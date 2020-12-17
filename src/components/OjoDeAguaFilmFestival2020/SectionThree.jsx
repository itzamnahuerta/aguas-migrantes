import React, {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs'

// film cover images
import renegade from '../../assets/ojo-de-agua-2020/film-covers/day-1/renegade-gabrielle-lee.jpg';
import frequensee from '../../assets/ojo-de-agua-2020/film-covers/day-1/frequenSee-allison-tanenhaus.jpg';
import afterwork from '../../assets/ojo-de-agua-2020/film-covers/day-1/after-work-liat-berdugo.jpg';
import mynameissami from '../../assets/ojo-de-agua-2020/film-covers/day-1/my-name-is-sami-daniela-lucato.jpg';
import thestoryofemotican from '../../assets/ojo-de-agua-2020/film-covers/day-1/the-story-of-emoticon-jarry-huang.jpg'

import invalid from '../../assets/ojo-de-agua-2020/film-covers/day-2/invalid-jun-yuan-hong.jpg';
import clenchmyfists from '../../assets/ojo-de-agua-2020/film-covers/day-2/clench-my-fists-sarah-trad.jpg';
import manifestoartdowngrade from '../../assets/ojo-de-agua-2020/film-covers/day-2/manifesto-art-downgrade-ruiqi-zhang.jpg';
import objectsandcells from '../../assets/ojo-de-agua-2020/film-covers/day-2/objects-and-cells-3-caspar-gelmini.jpg';
import beforethenationwentbankrupt from '../../assets/ojo-de-agua-2020/film-covers/day-2/before-the-nation-went-bankrupt-nathtaniel-sullivan.jpg';

import corporate from '../../assets/ojo-de-agua-2020/film-covers/day-3/corporate-responsibility-pledge-allison-tanenhaus.jpg';
import talamanca from '../../assets/ojo-de-agua-2020/film-covers/day-3/talamanca-davide-marino.jpg';
import theendofthings from '../../assets/ojo-de-agua-2020/film-covers/day-3/the-end-of-things-fair-brane.jpg';

const SectionThree = () => {
  const [key, setKey] = useState('dayOne');

  const dayOneContent = () => {
    return(
      <div className="film-schedule-container">
        <div className="film-container ">
          <div className="film-content item">
            <h2> Renegade</h2>
            <p> "RENEGADE" is an experimental short film that explores the exchange of matter in the universe. Everything on earth, alive or not alive, is comprised of atoms that originated in the impossibly hot centers of stars. As Carl Sagan famously said, "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.”</p>
            <p> Director: Gabrielle Lee</p>
          </div>

          <div className="film-img item">
            <img src={renegade} alt="renegade" />
          </div>
        </div>

        <div className="film-container ">
          <div className="film-content item">
            <h2> FrequenSee </h2>
            <p> Allison Tanenhaus first foray with the AudioKit Synth One app, coupled with my glitched-out archival footage. </p>
            <p> Allison Tanenhaus </p>
          </div>
          <div className="film-img item">
            <img src={frequensee} alt="frequensee" />
          </div>
        </div>

        <div className="film-container ">
          <div className="film-content item">
            <h2> After Work </h2>
            <p> Two specters are haunting earth in the 21st-century: ecological catastrophe and technological automation. Taken to their logical extremes, these twin anxieties will drive the end of capitalism. What are the implications of artificial intelligence, automation, and the future of work?
            <br/><br/>
            This video draws adapted text from social critic Peter Frase's 2016 book, Four Futures, and archival footage from the Prelinger Archives, to form a speculative exercise in social science fiction.</p>
            <p> Director: Liat Berdugo </p>
          </div>
          <div className="film-img item">
            <img src={afterwork} alt="afterwork" />
          </div>
        </div>


        <div className="film-container ">
          <div className="film-content item">
            <h2> My name is Sami </h2>
            <p> 
              Short Film made during COVID-19
              <br/><br/>
              During the COVID-19 pandemic Sami apparently calls a friend to tell her a tragic episode.

             </p>
            <p> Director: Daniela Lucato</p>
          </div>
          <div className="film-img item">
            <img src={mynameissami} alt="my name is sami" />
          </div>
        </div>

        <div className="film-container ">
          <div className="film-content item">
            <h2> The story of emoticon</h2>
            <p> Director: Jarry Huang </p>
          </div>
          <div className="film-img item">
            <img src={thestoryofemotican} alt="the story of emoticon" />
          </div>
        </div>
      </div>
    )
  }

  const dayTwoContent = () => {
    return(
      <div className="film-schedule-container">
        <div className="film-container ">
          <div className="film-content item">
            <h2> Invalid </h2>
            <p> Director: Jun-Yuan Hong </p>
          </div>

          <div className="film-img item">
            <img src={invalid} alt="invalid" />
          </div>
        </div>

        <div className="film-container ">
          <div className="film-content item">
            <h2>Clench my fists </h2>
            <p>
            “Clench My Fists” is a found-footage collage video that explores the process of growing up in an Arab family deeply affected by death and grief. Using footage from the Lebanese film “In the Battlefields,” as well as “Candy” and “The 100,” and audio from archival recorded Lebanese funeral laments, the video looks at how men and women express grief and anger under the patriarchy, as well as how trauma and childhood experiences can evolve into mental illness and patterns of behavior as adults. “Clench My Fists” is part of a larger body of work dealing with racial identity and the concept of “inherited grief;” that through biological or behavioral means, trauma is passed down through prospective family generations so that family members might experience the residual effects of trauma they did not personally witness. This body of work explores how the death of the artist’s grandfather, an Arab American, caused ripples of mental illness and skewed racial identity through her paternal family. Using filmic material that the artist used to connect with her heritage, “Clench My Fists” is part of a series of work focusing on not only decolonizing Imperialist Western understandings of the Middle East but to also show the beauty of the artist’s heritage, outside the context of her family.
            </p>
            <p> Director: Sarah Trad  </p>
          </div>

          <div className="film-img item">
            <img src={clenchmyfists} alt="clench my fists" />
          </div>
        </div>

        <div className="film-container ">
          <div className="film-content item">
            <h2> Manifesto: Art Downgrade </h2>
            <p>
            Manifesto: Art Downgrade (2019) is a composite concept that combines art and economics, from the research of image production related to the popularity of low-cost smartphones and the slowdown of China's economic growth in recent years. With the declining consumption power of the urban middle class, new economic growth points exist in a wider range of non-urban areas and rural populations. This manifesto advocates reevaluate alternative perspectives and decentralization of urban narrative in contemporary art creation. By splicing a large number of green screen materials from the Internet and selfie clips made by mobile phone, the manifesto aims to evoke the creative impulse and imagination of ordinary people. Meanwhile, it encourages the integration of open-source media, technology, and daily labour in creation.
            </p>
            <p> Director: Ruiqi Zhang </p>
          </div>

          <div className="film-img item">
            <img src={manifestoartdowngrade} alt="manifesto art downgrade" />
          </div>
        </div>

        <div className="film-container ">
          <div className="film-content item">
            <h2> Objects and Cells 3 </h2>
            <p>Director: Caspar de Gelmini  </p>
          </div>
          <div className="film-img item">
            <img src={objectsandcells} alt="objects and cells 3" />
          </div>
        </div>

        <div className="film-container ">
          <div className="film-content item">
            <h2>Before The Nation Went Bankrupt, Letter To William Winters</h2>
            <p> Monday morning, September 15, 2008. The economy is in shambles, an unprecedented boom has come to an end. The CEOs of the largest banks had just been summoned to the Federal Reserve, in Lower Manhattan, for a full weekend. His role: solve the world economy and rewrite the financial rules. Not much is known about what happened that weekend at the Federal Reserve. Until now.
            <br/><br/>
            On Monday morning, JP Morgan Chase CEO Jamie Dimon has a vision for the economy of the future. Dimon writes a letter to Bill Winters, his head of investment banking at JP Morgan Chase, on his helicopter ride to work. This is the letter. </p>
            <p>Director: Nathaniel Sullivan  </p>
          </div>
          <div className="film-img item">
            <img src={beforethenationwentbankrupt} alt="before the nation went bankrupt" />
          </div>
        </div>


      </div>
    )
  }
  
  const dayThreeContent = () => {
    return(
      <div className="film-schedule-container">
        <div className="film-container ">
          <div className="film-content item">
            <h2> Corporate Responsibility Pledge </h2>
            <p> Musically, the work explores a combination of a fixed macro-musical structure with that of performer-determined micro-musical structure. The piece evolves over 6 minutes by predetermined decisions by the composer and the performers, who determine the repetition and ordering of small musical phrases within the middle of the piece. The fixed computer and video part serves as an anchor for timing and dynamic/rhythmic growth. The aim is to allow the performers to become co-authors of the work, making each performance unique, yet having a similar over-arching shape.
            <br/><br/>
            The video is an assemblage of public domain footage from the mid-twentieth century—industrial shorts, advertisements, PSAs, environmental films, and home movies—that has been ripped, glitched, and restitched. The resulting narrative originates with the golden potential of capitalism for the American nuclear family, and quickly deteriorates into a neon-tinged, retrofuturistic miasma of big business’s shortcomings. With an eye on economy and ecology in equal measure, the video both celebrates and laments the premise and promise of commercial progress. </p>
            <p>Director: Allison Tanenhaus </p>
          </div>
          <div className="film-img item">
            <img src={corporate} alt="corporate responsibility pledge" />
          </div>
        </div>

        <div className="film-container ">
          <div className="film-content item">
            <h2>The End of Things  </h2>
            <p>  </p>
            <p>Director: Fair Brane </p>
          </div>
          <div className="film-img item">
            <img src={theendofthings} alt="the end of things" />
          </div>
        </div>

        <div className="film-container ">
          <div className="film-content item">
            <h2> Talamanca </h2>
            <p> 
            There is a sound echoing across the forest of Talamanca. It reveals the extraordinary in the ordinary universe of Justo, BriBri farmer, father and adventurer. As ethereal manifestation of all that surrounds, it expands a story made by imaginative materialities, enshrined amidst Earth's restless wonders and indigenous worldly epic.
            <br/><br/>    
            Filmed in Costa Rica across the BriBri indigenous territories in Talamanca.
            </p>
            <p>Director: Davide Marino </p>
          </div>
          <div className="film-img item">
            <img src={talamanca} alt="talamanca" />
          </div>
        </div>
      </div>
    )
  }

  return(
    <div className="section-3-container"> 
      <div className="schedule-container">

        <h2 className="s-3-header"> Line-Up </h2>
        <Tabs
        id="controlled-tab"
        activeKey={key} 
        onSelect={(k) => setKey(k)}
        >
          <Tabs.Tab 
            eventKey="dayOne" 
            title="Day 18"
            className="day-1"
          >
            {dayOneContent()}
          </Tabs.Tab>
          <Tabs.Tab eventKey="dayTwo" title="Day 19">
            {dayTwoContent()}
          </Tabs.Tab>
          <Tabs.Tab eventKey="dayThree" title="Day 20">
            {dayThreeContent()}
          </Tabs.Tab>
        </Tabs>
      </div>
    </div>     
  )
};

export default SectionThree;