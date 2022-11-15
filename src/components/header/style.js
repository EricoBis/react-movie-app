import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 60px;
  background-color: black;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.342);
`;

export const ContainerSearch = styled.div`
  margin-top: 8px;
  margin-right: 32px;
`;

export const Icon = styled.div`
  svg {
    color: #857db1;
    width: 30px;
    height: 30px;
    margin-top: 16px;
    margin-left: 32px;
    cursor: pointer;

    &:hover {
      color: #fff;
      transition: 0.2s;
    }
  }
`;
