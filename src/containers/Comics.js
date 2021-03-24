import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  // const {id} = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(`http://localhost:3000/comics`);
        const response = await axios.get(
          `https://marvel--back.herokuapp.com/comics`
        );
        const comics = response.data.comics;
        console.log(comics);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="comics">
      <h1>COMICS</h1>
      {isLoading ? (
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
        <div className="content_comics">
          {data.results.map((elem, index) => {
            const comicsId = elem._id;
            return (
              <div key={index}>
                <Link to={`/cardcomics/${comicsId}`}>
                  <img
                    src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                    alt={elem.name}
                  />
                  <h3>{elem.name}</h3>
                  <span>{elem.description}</span>
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
