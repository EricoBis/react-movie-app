import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 16px;
  padding-left: 12px;
  border: 1px solid #857db1;
  outline: none;
  font-size: 15px;
  background-color: ${(props) => props.backg};
  color: ${(props) => props.color};
`;
export const SearchButton = styled.button`
  height: 42px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transform: translateX(2px);
  svg{
    font-size: 20px;
    color: ${(props) => props.color};
  }
`;
