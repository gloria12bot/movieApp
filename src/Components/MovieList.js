import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MovieList( ) {
   const [movies, setMovies] = useState([]);
      // useEffect to loop the data from api
useEffect(() => {
  axios
    .get("https://yts.mx/api/v2/list_movies.json?quality=3D&limit=12")
    .then((res) => {
      console.log(res.data.data.movies);
      setMovies(res.data.data.movies);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);



  return (
    // jsx syntax to display the list of all movies
    <div className="container-fluid movie-app">
      <div className="row">
        {/* list of the movies  */}
        {movies.map((movie, index) => (
          <div className="col-lg-3 pb-4 ">
            {/* a link required to fetch a specific id when the image is clicked */}
            <Link to={`/movies/${movie.id}`}>
              <img
                key={movie.id}
                src={movie.medium_cover_image}
                alt="movie"
              ></img>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList