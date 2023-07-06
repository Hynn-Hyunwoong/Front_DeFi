import styled from 'styled-components';
import { Link } from 'react-router-dom';

const res = {
  mobile: '@media(max-width:768px)',
};

export const NavWrap = styled.div`
  margin: 0 120px 0 30px;
  width: 500px;
  height: 100%;

  ${res.mobile} {
    margin-left: 10px;
    width: 80%;
  }
`;

export const NavUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* padding-top: 30px; */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
  }
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

  @media (max-width: 768px) {
    font-size: 14px;
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

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavLink = styled(Link)`
  font-size: 17px;
  display: inline-block;
  text-align: center;
  &:hover .sub {
    display: block;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
