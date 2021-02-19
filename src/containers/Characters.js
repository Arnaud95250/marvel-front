import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
          const limit = 100;
          const skip = 0;


          try{  
            const response = await axios.get(`http://localhost:3000/characters?skip=${skip}&limit=${limit}`);
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
          {isLoading ? (
            <span>En cours de chargement... </span>
            ) : (
              <div className="content_characters">
                {data.results.map((characters, index) => {
                  return (
                    <Link to="comics/:characterId">
                    <div key={index}>
                      <img src={characters.thumbnail.path + "." +characters.thumbnail.extension} alt={characters.name}/>
                      <h3>{characters.name}</h3>
                      <span>{characters.description}</span> 
                    </div>
                    </Link>
                    );
                })}
              </div>
            )}
      </div>
    );
  };
  
  export default Characters;
