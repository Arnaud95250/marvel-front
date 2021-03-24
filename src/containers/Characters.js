import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import searchBoolean from "../assets/img/search.svg";
import etoile from "../assets/img/etoile_vide.svg";
import etoile_ok from "../assets/img/etoile_plein.svg";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState(false);
  const [star, setStar] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3100/characters`);
        const characters = response.data;
        console.log(characters);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const searchCharacters = async (value) => {
    try {
      // const response = await axios.get(`http://localhost:3100/test/${value}`);
      const response = await axios.get(
        `http://localhost:3100/search-characters?name=${value}`
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {}
  };

  return (
    <div className="characters">
      <h1>CHARACTERS</h1>
      {search ? (
        <div>
          <div className="search_characters">
            <Search searchCharacters={searchCharacters} />
          </div>
          <img
            className="img_search"
            src={searchBoolean}
            alt=""
            onClick={() => setSearch(false)}
          ></img>
        </div>
      ) : (
        <img
          className="img_search"
          src={searchBoolean}
          alt=""
          onClick={() => setSearch(true)}
        ></img>
      )}
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
        <div className="content_characters">
          {data.results.map((elem, index) => {
            const characterId = elem._id;
            return elem ? (
              <div key={index}>
                <Link to={`/cardcharacters/${characterId}`}>
                  <img
                    src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                    alt={elem.name}
                  />
                  <h3>{elem.name}</h3>
                  {/* <span>{elem.description}</span> */}
                </Link>
              </div>
            ) : (
              <div style={{ background: "red", height: "100vh" }}></div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Characters;
