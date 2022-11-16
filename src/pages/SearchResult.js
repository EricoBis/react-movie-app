import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import MovieCard from "../components/card/MovieCard";
import { Flex } from "../style";
import { Result } from "./style";

const searchURL = process.env.REACT_APP_OMDB_SEARCH_TITLE;
const key = process.env.REACT_APP_OMDB_KEY;

function SearchResult() {
  const [movies, setMovies] = useState([]);

  const [searchParams] = useSearchParams();
  const searchFor = searchParams.get("s");

  useEffect(() => {
    getData();
  }, [searchFor]);

  const getData = async () => {
    try {
      const res = await axios.get(`${searchURL}${searchFor}${key}`);
      setMovies(res.data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex dir="column" align="center">
      <Result>
        <div className="rectangle" />
        <h2>
          Search result for: <span>{searchFor}</span>
        </h2>
      </Result>
      {movies &&
        movies.map((movie, index) => {
          return <MovieCard key={index} movie={movie}></MovieCard>;
        })}
      {!movies && <h2>Your search found no results!</h2>}
    </Flex>
  );
}

export default SearchResult;
