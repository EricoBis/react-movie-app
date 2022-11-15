import React from "react";
import { Link } from "react-router-dom";

import { Container, ContainerSearch, Icon } from "./style";
import { BiCameraMovie } from "react-icons/bi";
import NavInput from "../input/NavInput";
import { Flex } from "../../style";

function Header() {
  return (
    <Container>
      <Flex dir="row" justify="space-between" align="center">
        <Link to="/">
          <Icon>
            <BiCameraMovie />
          </Icon>
        </Link>
        <ContainerSearch>
          <NavInput />
        </ContainerSearch>
      </Flex>
    </Container>
  );
}

export default Header;
