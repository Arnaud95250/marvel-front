import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";

const CardCharacter = () => {
  let { characterId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataTitle, setDataTitle] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel--back.herokuapp.com/comics/${characterId}`
        );
        setData(response.data.comics);
        console.log(response.data.comics);
        setDataTitle(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <div className="loading">
      <Loader />
    </div>
  ) : (
    <div className="comics_characters">
      <div className="characters_selected">
        <img
          src={dataTitle.thumbnail.path + "." + dataTitle.thumbnail.extension}
          alt=""
        />
      </div>
      <div className="content_info">
        <h1>Ou trouver {dataTitle.name} </h1>
        <p>{dataTitle.description} </p>
        <div className="content_info_scroll">
          <div className={"scroll"}>
            {data.map((elem, index) => {
              const comicsId = elem._id;
              return (
                <Link
                  key={index}
                  to={`/cardcomics/${comicsId}`}
                  className="content_comics_characters"
                >
                  <div>
                    <img
                      src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                      alt={elem.name}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCharacter;
