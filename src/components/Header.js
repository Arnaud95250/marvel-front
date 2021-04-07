import { Link } from "react-router-dom";
import logo from "../assets/img/marvel.png";

const Header = () => {
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
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/characters">
            <li>CHARACTERS</li>
          </Link>
          <Link to="/comics">
            <li>COMICS</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
