import {Link} from "react-router-dom";
import hero from '../assets/img/hero3.jpg';
import { useState, useEffect } from "react";
import axios from 'axios';

const Home = () => {
  const [characters, setCharacters] = useState();
  const [comics, setComics] = useState();
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
          try{  
            const responseCharacters = await axios.get(`http://localhost:3000/characters?limit=7`);
            const responseComics = await axios.get(`http://localhost:3000/comics?limit=7`);
              setCharacters(responseCharacters.data);
              setComics(responseComics.data);
              setIsLoading(false);
          } catch (error){
              console.log(error.message);
          }
      };
      fetchData();
    }, []);

    return (
      <div className="home">
          <img src={hero} alt="hero"/>
        <div >
          <h1 className="home_h1">Marvel, site développé dans le cadre d'une formation Full-Stack JS avec Le Reacteur</h1>
        </div>
          
          
          
          <div className="characters_home">
            <h1>CHARACTERS</h1>
                {isLoading ? (
                  <span>En cours de chargement... </span>
                  ) : (
                    <div className="content_characters_home">
                      {characters.results.map((characters, index) => {
                        return (
                          
                            <div key={index}>
                              <Link to={`/characterId/${characters._id}`}>
                                  <img src={characters.thumbnail.path + "." +characters.thumbnail.extension} alt={characters.name}/>
                              </Link>
                            </div>
                          );
                      })}
                  </div>
                )}
          </div>


                . +         
            <div className="comics_home">
              <h1>comics</h1>
                {isLoading ? (
                  <span>En cours de chargement... </span>
                  ) : (
                    <div className="content_comics_home">
                      {comics.results.map((comics, index) => {
                        return (
                            <div key={index}>
                              <Link to={`/`}>
                                  <img src={comics.thumbnail.path + "." +comics.thumbnail.extension} alt={comics.name}/>
                              </Link>
                            </div>
                          );
                      })}
                </div>
              )}
          </div>
        </div>
    );
};
  
  export default Home;
