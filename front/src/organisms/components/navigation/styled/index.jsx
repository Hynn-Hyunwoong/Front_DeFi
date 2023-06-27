import styled from "styled-components";

export const NavWrap = styled.div`
  margin-left: 30px;
  width: 500px;
  height: 100%;
`;

export const NavUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

export const NavLi = styled.li`
  font-size: 17px;
  display: inline-block;
  text-align: center;

  &:hover .sub {
    display: block;
  }

  & > .subBox {
    background: white;
  }
`;

export const SubLi = styled.li`
  width: 100%;
  font-size: 13px;
  display: none;

  &:hover {
    background: #f0f4f5;
  }
  padding: 10px 0;
`;
