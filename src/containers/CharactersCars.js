import {useParams} from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';

const CharactersCars = () => {
    const {characters_id} = useParams;
    const [data, setData] = useState();
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{  
                const response = await axios.get(
                `https://lereacteur-marvel-api.herokuapp.com/comics/${characters_id}`
                  );
                  console.log(response.data);
                  setData(response.data.characters);
                //   setIsLoading(false);
            } catch (error){
                console.log(error.message);
            }
        };
        fetchData();
      }, []);
    

    return(
        <div className="characters_id">
            <p>toto</p>
        </div>
    )
}

export default CharactersCars;