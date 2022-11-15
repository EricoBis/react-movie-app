import React from "react";
import HomeInput from "../components/input/HomeInput";

import { Flex } from "../style";
import { HomeContainer, HomeTitle } from "./style";

function Home() {
  return (
    <Flex dir="column" align="center">
      <HomeTitle>GET INFORMATION ABOUT MOVIES, SERIES AND MORE.</HomeTitle>
      <HomeContainer>
        <Flex dir="column" align="center">
          <h1>Search for a title:</h1>
          <HomeInput />
        </Flex>
      </HomeContainer>
    </Flex>
  );
}

export default Home;
