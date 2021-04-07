import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";

const CardComics = () => {
  let { comicsId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel--back.herokuapp.com/comics`
        );
        const comics = response.data.results;
        setData(comics);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div className="loading">
      <Loader />
    </div>
  ) : (
    <div className="comics_info">
      {data.map((elem, index) => {
        if (comicsId === elem._id) {
          console.log(comicsId + " et " + elem._id);
          return (
            <div key={index}>
              <div className="comics_selectd">
                <div>
                  <img
                    src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                    alt=""
                  />
                </div>
                <div>
                  <h1>{elem.title}</h1>
                  <p>{elem.description}</p>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CardComics;
