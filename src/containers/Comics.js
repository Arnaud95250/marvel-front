import {useParams, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const Comics = () => {
  const {id} = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
          try{  
              const response = await axios.get(`http://localhost:3000/comics/${id}`);
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
               {/* <p>{data.title}</p>  */}
      </div>
    );
  };
  
  export default Comics;
