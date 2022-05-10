import React from 'react'
import movie from "../blackw.webp";
import movie1 from "../tomholland.jpg";
import movie2 from "../tom.jpg";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function CarouselPage() {
 return (
   <Carousel fade>
     <Carousel.Item>
       <img className="d-block w-100" src={movie2} alt="First slide" />
       <Carousel.Caption>
         <h3 className="info">Spider-Man: No Way Home</h3>
         <span className="desc">
           Peter Parker seeks Doctor Strange's help to make people forget about
           Spiderman's identity. However, when the spell he casts gets
           corrupted, several unwanted guests enter their universe.
         </span>
         <div className="buttons">
           <button className="play">
             <PlayArrowIcon />
             <span>Play</span>
           </button>
           <button className="more">
             <InfoOutlinedIcon />
             <span>Info</span>
           </button>
         </div>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img className="d-block w-100" src={movie1} alt="Second slide" />

       <Carousel.Caption>
         <h3>Uncharted</h3>
         <span className="desc">
           Treasure hunter Victor "Sully" Sullivan recruits street-smart Nathan
           Drake to help him recover a 500-year-old lost fortune amassed by
           explorer Ferdinand Magellan. What starts out as a heist soon becomes
           a globe-trotting, white-knuckle race to reach the prize before the
           ruthless Santiago Moncada can get his hands on it. If Sully and Nate
           can decipher the clues and solve one of the world's oldest mysteries,
           they stand to find $5 billion in treasure -- but only if they can
           learn to work together.
         </span>
         <div className="buttons">
           <button className="play">
             <PlayArrowIcon />
             <span>Play</span>
           </button>
           <button className="more">
             <InfoOutlinedIcon />
             <span>Info</span>
           </button>
         </div>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img className="d-block w-100" src={movie} alt="Third slide" />

       <Carousel.Caption>
         <h3>Black Widow</h3>
         <span className="desc">
           Natasha Romanoff, a former KGB spy, is shocked to find out that her
           ex handler, General Dreykov, is still alive. While evading capture by
           Taskmaster, she is forced to confront her dark past.
         </span>
         <div className="buttons">
           <button className="play">
             <PlayArrowIcon />
             <span>Play</span>
           </button>
           <button className="more">
             <InfoOutlinedIcon />
             <span>Info</span>
           </button>
         </div>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
 );
}

export default CarouselPage