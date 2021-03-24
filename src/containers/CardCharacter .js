import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CardCharacter = () => {
  let { characterId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataTitle, setDataTitle] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3100/comics/${characterId}`
        );
        // console.log(response.data);
        setData(response.data.comics);
        setDataTitle(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId]);

  console.log(dataTitle);
  return isLoading ? (
    <div
      className="loading"
      style={{
        height: "80vh",
        background: "rgb(92, 0, 0)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "22px",
        fontWeight: "700",
      }}
    >
      <span>En cours de chargement... </span>
    </div>
  ) : (
    <div className="comics_characters">
      <h1>Ou trouver {dataTitle.name} </h1>
      <div className="characters_selected">
        <img
          src={dataTitle.thumbnail.path + "." + dataTitle.thumbnail.extension}
          alt=""
        />
      </div>
      <hr />

      {data.map((elem, index) => {
        const comicsId = elem._id;
        console.log(comicsId);
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
            <div>
              <span>{elem.title}</span>
              <p>{elem.description}</p>
            </div>

            <div>{/* <span>{elem.description}</span> */}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default CardCharacter;
