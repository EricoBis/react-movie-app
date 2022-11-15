import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Flex } from "../style";
import { Details, Section, Img, MainInfo, PG } from "./style";
import Rating from "../components/ratings/Rating";

const searchURL = process.env.REACT_APP_OMDB_SEARCH_ID;
const key = process.env.REACT_APP_OMDB_KEY;

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    try {
      const res = await axios.get(`${searchURL}${id}${key}`);
      setMovie(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex justify="center">
      <Details>
        {movie && (
          <>
            <MainInfo>
              <Flex dir="column" align="center">
                <Img src={movie.Poster} alt={movie.title} />
                <h2>{movie.Title}</h2>
                <Flex dir="row" justify="center" align="center">
                  <PG>{movie.Rated}</PG>
                  {`${movie.Year}, ${movie.Genre.replaceAll(", ", "/")}, ${
                    movie.Runtime
                  }`}
                </Flex>
                <p>{movie.Plot}</p>
              </Flex>
            </MainInfo>

            <div>
              <Section>Ratings</Section>
              <Rating value={movie.Ratings} />
            </div>

            <div>
              <Section>Info</Section>
              {movie.Awards && <h3>{`Awards: ${movie.Awards}`}</h3>}
              <p>
                Rating: <span>{movie.Rated}</span>
              </p>
              <p>
                Genre: <span>{movie.Genre.replaceAll(", ", "/")}</span>
              </p>
              <p>
                Original Language: <span>{movie.Language}</span>
              </p>
              <p>
                Director: <span>{movie.Director}</span>
              </p>
              <p>
                Writer: <span>{movie.Writer}</span>
              </p>
              <p>
                Actors: <span>{movie.Actors}</span>
              </p>
              <p>
                Release Date: <span>{movie.Released}</span>
              </p>
              {movie.BoxOffice && (
                <p>
                  Box Office: <span>{movie.BoxOffice}</span>
                </p>
              )}
              {movie.totalSeasons && (
                <p>
                  Total Seasons: <span>{movie.totalSeasons}</span>
                </p>
              )}
            </div>
          </>
        )}
      </Details>
    </Flex>
  );
}

export default MovieDetails;
