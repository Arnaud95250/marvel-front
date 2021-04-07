import { useState, useEffect } from "react";
import axios from "axios";

// import components
import Search from "../components/Search";
import Loader from "../components/Loader";
import CharCard from "../components/CharCard";
import Pagination from "../components/Pagination";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel--back.herokuapp.com/characters?limit=100&skip=${offset}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [offset]);

  const searchCharacters = async (value) => {
    try {
      const response = await axios.get(
        `https://marvel--back.herokuapp.com/search-characters?name=${value}`
      );
      setData(response.data);
    } catch (error) {}
  };

  return (
    <div className="characters">
      <h1>CHARACTERS</h1>
      <div className="search_characters">
        <Search searchCharacters={searchCharacters} />
      </div>
      {isLoading ? (
        <div className="loading">
          <Loader />
        </div>
      ) : (
        <>
          <Pagination data={data} offset={offset} setOffset={setOffset} />
          <CharCard data={data} />
        </>
      )}
    </div>
  );
};

export default Characters;
