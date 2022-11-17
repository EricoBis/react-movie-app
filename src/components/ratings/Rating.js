import React from "react";

import { Flex } from "../../style";

import { SiRottentomatoes } from "react-icons/si";
import { FaImdb } from "react-icons/fa";
import { RatingContainer } from "./style";

const RATER = [
  {
    name: "Internet Movie Database",
    icon: <FaImdb />,
  },
  {
    name: "Rotten Tomatoes",
    icon: <SiRottentomatoes />,
  },
];

function Rating({ value }) {
  
  const getIcon = (source) => {
    const result = RATER.find(r => r.name === source);
    if(result) return result.icon;
  };

  return (
    <Flex dir="row">
      {value &&
        value.map((rating, index) => {
          const { Source, Value } = rating;
          return (
            <RatingContainer key={index}>
              <Flex dir="row" justify="center" align="center">
                {getIcon(Source)}
                <h3>{Value}</h3>
              </Flex>
              <p>{Source}</p>
            </RatingContainer>
          );
        })}
    </Flex>
  );
}

export default Rating;
