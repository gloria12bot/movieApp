import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";

function Moviesdetails() {
  // useparams was used to get the specific parameter from the routes
  const params  =  useParams();
  // hooks were used to fetch the details of a particular movie
  const [movie,setMovie]= useState();

   useEffect(() => {
     axios
       .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`)
       .then((res) => {
         console.log(res.data.data.movie);
         setMovie(res.data.data.movie);
       })
       .catch((err) => {
         console.log(err);
       });
   }, [params]);
  
  return (
    <div>
      {movie && (
        <div className=" movies-details pt-5">
          <Navigation />
          {/* jsx component to populate the data of the specific movie id */}
          <div className="container-fluid p-5 " style={{ width: "80%" }}>
            <img
              src={movie.medium_cover_image}
              alt="movie"
              style={{ float: "left", marginRight: 30 }}
            ></img>
            <h1>
              Title:
              <span> {movie.title}</span>
            </h1>
            <p className="MovieInfo">
              MovieRate:
              <span> {movie.rating} &#9733;</span>
            </p>
            <p className="MovieInfo">Genre: {movie.genres.join(" ,   ")}</p>
            <p className="MovieInfo">Year: {movie.year}</p>
            <p className="MovieInfo">Language: {movie.language}</p>
            <p className="MovieInfo">Released Date: {movie.date_uploaded}</p>
            <p className="MovieInfo">Movie Runtime: {movie.runtime} minutes </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Moviesdetails
