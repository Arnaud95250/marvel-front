import {Link} from "react-router-dom";
import logo from '../assets/img/marvel.png';

const Header = () => {
    console.log("Header");
    return (
      <div className="header">
        <div>
          <div className="nav_signin">
            <Link to="/">SIGN IN | </Link> 
            <Link to="/">JOIN</Link>
          </div>
            <Link to="/"><img src={logo} alt="marvel"/></Link>
            <div className="nav_search">
            <Link to="/">SEARCH
            </Link> 
  
          </div>
        </div>
         
          <nav>
            <ul>
              <li><Link to="characters">CHARACTERS</Link></li>
              <li><Link to="comics">COMICS</Link></li>
              <li><Link to="/">MOVIES</Link></li>
              <li><Link to="/">TV SHOWS </Link></li>
              <li><Link to="/">GAMES</Link></li>
              <li><Link to="/">NEWS</Link></li>
              <li><Link to="/">MORE</Link></li>
              <li><Link to="/">VIDEOS</Link></li>

            </ul>
          
          </nav>
      </div>
    );
  };
  
  export default Header;
