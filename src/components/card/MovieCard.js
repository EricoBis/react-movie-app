import React from "react";
import { Flex } from "../../style";
import { Card, Img, Icon } from "./style";
import { IoIosArrowForward } from "react-icons/io";
import { StyledLink } from "../../style";

function MovieCard({ movie }) {
  return (
    <Card>
      <StyledLink to={`/movie/${movie.imdbID}`}>
        <Flex dir="row" justify="space-between" align="center">
          <Flex dir="row" align="flex-start">
            <Img src={movie.Poster} alt={movie.title} />
            <div>
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
            </div>
          </Flex>
          <IoIosArrowForward />
        </Flex>
      </StyledLink>
    </Card>
  );
}

export default MovieCard;
