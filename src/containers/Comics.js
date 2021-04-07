import { useState, useEffect } from "react";
import axios from "axios";

// import components
import Search from "../components/Search";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import ComCard from "../components/ComCard";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel--back.herokuapp.com/comics?limit=100&skip=${offset}`
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
        `https://marvel--back.herokuapp.com/search-comics?title=${value}`
      );
      setData(response.data);
    } catch (error) {}
  };

  return (
    <div className="comics">
      <h1>COMICS</h1>
      <div className="search_comics">
        <Search searchCharacters={searchCharacters} />
      </div>
      {isLoading ? (
        <div className="loading">
          <Loader />
        </div>
      ) : (
        <>
          <Pagination data={data} offset={offset} setOffset={setOffset} />
          <ComCard data={data} />
        </>
      )}
    </div>
  );
};

export default Comics;
