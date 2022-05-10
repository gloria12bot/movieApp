import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";
import CarouselPage from "./CarouselPage";
import Movieheading from "./Movieheading";
import Romanticmovies from "./Romanticmovies";
import Animationmovies from "./Animationmovies";
import Comedymovies from "./Comedymovies";
import Actionmovies from "./Actionmovies";
import Horrormovies from "./Horrormovies";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function MovieList( ) {
   const [movies, setMovies] = useState([]);
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
      setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - 50;

      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
      }
      if (direction === "right" && slideNumber < 7) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
    };
      // useEffect to loop the data from api
useEffect(() => {
  axios
    .get("https://yts.mx/api/v2/list_movies.json?genre=sci-fi&limit=12")
    .then((res) => {
      console.log(res.data.data.movies);
      setMovies(res.data.data.movies);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);



  return (
    <div>
      <CarouselPage />
      {/* // jsx syntax to display the list of all movies */}
      <div className="list">
        <Movieheading heading="Sci-fi Movies" />
        <div className="wrapper">
          <ArrowBackIosIcon
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
          <div className="contain" ref={listRef}>
            {/* list of the movies  */}
            {movies.map((movie, index) => (
              <div className="image-container d-flex justify-content-start m-3 col-lg-2">
                {/* a link required to fetch a specific id when the image is clicked */}
                <Link to={`/movies/${movie.id}`} className="links">
                  <div className="MovieContainer">
                    <img
                      key={index}
                      src={movie.medium_cover_image}
                      alt="movie"
                      className="CoverImage"
                    ></img>
                    <span className="MovieName">{movie.title}</span>
                    <div className="InfoColumn">
                      <span className="MovieInfo">Year: {movie.year}</span>
                      <span className="MovieInfo">
                        Rate:   {movie.rating} &#9733;
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <ArrowForwardIosIcon
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
      <Romanticmovies />
      <Animationmovies />
      <Comedymovies />
      <Actionmovies />
      <Horrormovies />
    </div>
  );
}

export default MovieList