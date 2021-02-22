import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const Characters = () => {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {

          try{ 
            const response = await axios.get(`https://sharp-lichterman-1c20d3.netlify.app/characters`);
              const characters = response.data.characters;
              console.log(characters);
              setData(response.data);
              setIsLoading(false);
          } catch (error){
              console.log(error.message);
          }
      };
      fetchData();
    }, []);


    return (
      <div className="characters">
          <h1>CHARACTERS</h1>
          <Link to="comics">direction la page comics</Link>
          {isLoading ? (
            <span>En cours de chargement... </span>
            ) : (
              <div className="content_characters">
                {data.results.map((characters, index) => {
                  return (
                    
                      <div >
                        <Link key={index} to={`/characterId/${characters._id}`}>
                        <img src={characters.thumbnail.path + "." + characters.thumbnail.extension} alt={characters.name}/>
                        <h3>{characters.name}</h3>
                        <span>{characters.description}</span> 
                        </Link>
                      </div>
                    );
                })}
              </div>
            )}
      </div>
    );
  };
  
  export default Characters;
