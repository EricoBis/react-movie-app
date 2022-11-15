import styled from "styled-components";

export const HomeTitle = styled.h1`
  margin: 0px 20px 50px;
  max-width: 500px;
  text-align: left;
  margin-top: 120px;
  font-size: 26px;
`;

export const HomeContainer = styled.div`
  width: 80%;
  max-width: 500px;
  padding: 10px 20px 60px;
  border-radius: 20px;
  border: solid 4px #857db1;
  background-color: lightgrey;
  color: black;
  font-size: 12px;
`;

export const Result = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  margin-top: 80px;

  .rectangle {
    width: 8px;
    height: 24px;
    background-color: #857db1;
    margin-right: 5px;
  }
  span {
    color: #857db1;
  }
`;

export const Details = styled.div`
  width: 90%;
  min-width: 300px;
  max-width: 700px;
  padding: 16px;
  margin: 80px 0;
  background-color: #fff;
  color: #000;
  border-radius: 16px;
`;

export const Img = styled.img`
  width: 148px;
  height: 220px;
  margin-right: 8px;
  border-radius: 12px;
  display: block;
`;
export const MainInfo = styled.div`
  padding: 16px 8px;
  border-radius: 12px;
  margin: 10px 0;
  background-color: #f3f3f3;
`;
export const PG = styled.p`
  width: fit-content;
  margin-right: 6px;
  padding: 3px;
  border-radius: 2px;
  border: 1px solid black;
`;

export const Section = styled.div`
  width: 100%;
  padding: 2px 5px;
  background-color: #857db1;
  color: black;
  font-size: 24px;
  font-family: Impact;
`;

export const Info = styled.div``;
