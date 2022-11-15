import styled from "styled-components";
import { Link } from "react-router-dom";

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.dir};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;