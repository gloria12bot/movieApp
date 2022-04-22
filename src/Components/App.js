import React from "react";
import Navigation from "./Navigation";
import MovieList from "./MovieList";
import './App.css';
import Movieheading from "./Movieheading";

function App(){
 
  return (
    <div>
      <Navigation />
      <Movieheading heading="my list of Movies" />
      <div className="d-flex justify-content-start m-3 pb-2">
        <MovieList />
      </div>
    </div>
  );
}

export default App