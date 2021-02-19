import {Link} from "react-router-dom";

const Home = () => {

    console.log("Home");
    return (
      <div className="Home">
          <h1>Home</h1>
          <Link to="characters">direction la page personnage</Link>
      </div>
    );
  };
  
  export default Home;
