import styled from "styled-components";

export const Xbutton = styled.button`
  position: relative;
  padding-right: 15px;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    right: 7px;
    top: 6px;
    content: "";
    height: 20px;
    width: 2px;
    background-color: #222;
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
  border: none;
  background: none;
`;
