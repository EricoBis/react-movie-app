import React from "react";

import { Flex } from "../../style";

import { SiRottentomatoes } from "react-icons/si";
import { FaImdb } from "react-icons/fa";
import { RatingContainer } from "./style";

function Rating({ value }) {
  return (
    <Flex dir="row">
      {value[0] && (
        <RatingContainer>
          <Flex dir="row" align="center">
            <FaImdb />
            <h3>{value[0].Value}</h3>
          </Flex>
          <p>IMDb</p>
        </RatingContainer>
      )}
      {value[1] && (
        <RatingContainer>
          <Flex dir="row" align="center">
            <SiRottentomatoes />
            <h3>{value[1].Value}</h3>
          </Flex>
          <p>Rotten Tomatoes</p>
        </RatingContainer>
      )}
    </Flex>
  );
}

export default Rating;
