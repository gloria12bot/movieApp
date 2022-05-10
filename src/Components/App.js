import React from "react";
import Navigation from "./Navigation";
import MovieList from "./MovieList";
import './App.css';



function App(){
 
  return (
    <div>
      <Navigation />
      <div>
        <MovieList />
      </div>
    </div>
  );
}

export default App