import styled from "styled-components";

export const Card = styled.div`
  width: 90%;
  min-width: 300px;
  max-width: 700px;
  margin: 8px;
  padding: 10px;
  border-radius: 10px;
  border: 3px solid black;

  box-sizing: border-box;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: 0.4s;
  background: #fff;
  color: black;
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transform: translate(0px, -8px);
    border: 3px solid #3d396a;
    color: #3d396a;
  }

  h2{
    font-size: 18px;
  }

`;

export const Img = styled.img`
  width: 70px;
  height: 100px;
  margin-right: 8px;
  border-radius: 6px;
  display: block;
`;

export const Icon = styled.svg`
  font-size: 20px;
`;
