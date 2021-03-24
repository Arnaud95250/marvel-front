import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/img/marvel.png";
import axios from "axios";
import Search from "../components/Search";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="header">
      <div>
        <div className="nav_signin">
          <Link to="/signin">SIGN IN | </Link>
          <Link to="/Join">JOIN</Link>
        </div>
        <Link to="/">
          <img src={logo} alt="marvel" />
        </Link>
        <div className="nav_search"></div>
      </div>
      <nav>
        <ul>
          <Link to="/characters">
            <li>CHARACTERS</li>
          </Link>
          <Link to="/comics">
            <li>COMICS</li>
          </Link>
          <Link to="/">
            <li>FAVORITES</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
