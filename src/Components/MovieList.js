import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieList( ) {
const [movies, setMovies] = useState([]);

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
    <div className="container-fluid movie-app">
      <div className="row">
        {movies.map((movie, index) => (
          <div className="col-md-2">
            <img
              key={movie.id}
              src={movie.medium_cover_image}
              alt="movie"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList