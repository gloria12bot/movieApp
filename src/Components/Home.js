import React from 'react';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Moviesdetails from "./Moviesdetails";

function Home() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/movies/:id" element={<Moviesdetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
