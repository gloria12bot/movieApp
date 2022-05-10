import React,{useState} from 'react'
// import { Link } from "react-router-dom";
import "./App.css";
import Logo from "../output-onlinepngtools (1).png";
import { Link } from 'react-router-dom';

function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  return (
    <div className={isScrolled ? "app-nav scrolled" : "app-nav"}>
      <div className="container">
        <div className="left">
          <img src={Logo} alt="" />
        </div>
        <div className="right">
          <Link to={"/"} className="links">
            <span>Homepage</span>
          </Link>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
      </div>
    </div>
  );
}

export default Navigation