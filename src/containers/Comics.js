import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const Comics = () => {
  // const {id} = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
          try{  
              const response = await axios.get(`http://localhost:3000/comics`);
              const comics = response.data.comics;
              console.log(comics);
              setData(response.data);
              setIsLoading(false); 
          } catch (error){
              console.log(error.message);
          }
      };
      fetchData();
    }, []);




    return (
      <div className="comics">
          <h1>comics</h1>
          <Link to="characters">direction la page personnage</Link>
          {isLoading ? (
            <span>En cours de chargement... </span>
            ) : (
              <div className="content_comics">
                {data.results.map((comics, index) => {
                  return (
                    
                      <div key={index}>
                         <Link to="comics/:characterId">
                        <img src={comics.thumbnail.path + "." +comics.thumbnail.extension} alt={comics.name}/>
                        <h3>{comics.name}</h3>
                        <span>{comics.description}</span> 
                        </Link>
                      </div>
                    );
                })}
              </div>
            )}
      </div>
    );
  };
  
  export default Comics;
