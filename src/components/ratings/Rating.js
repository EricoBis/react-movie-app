import React from "react";

import { Flex } from "../../style";

import { SiRottentomatoes } from "react-icons/si";
import { FaImdb } from "react-icons/fa";
import { RatingContainer } from "./style";

const RATER = {
  imdb: "Internet Movie Database",
  rotten: "Rotten Tomatoes",
};

function Rating({ value }) {
  const formatSource = (source) => {
    if (source === RATER.imdb) return "IMDb";
    else if (source === RATER.rotten) return "Rotten T.";
    else return source;
  };

  const getIcon = (source) => {
    if (source === RATER.imdb) return <FaImdb />;
    else if (source === RATER.rotten) return <SiRottentomatoes />;
  };

  return (
    <Flex dir="row">
      {value &&
        value.map((rating) => {
          const { Source, Value } = rating;
          return (
            <RatingContainer>
              <Flex dir="row" align="center">
                {getIcon(Source)}
                <h3>{Value}</h3>
              </Flex>
              <p>{formatSource(Source)}</p>
            </RatingContainer>
          );
        })}
    </Flex>
  );
}

export default Rating;

