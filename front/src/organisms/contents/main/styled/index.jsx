import styled from "styled-components";

export const Wrapped = styled.section`
  margin-top: 100px;
  width: 100%;
  min-width: 1000px;
  text-align: center;
`;

export const MainArticle = styled.article`
  margin-bottom: 100px;
`;

export const H1 = styled.h1`
  font-size: 35px;

  & > strong {
    color: #6d962c;
  }
`;

export const LightP = styled.p`
  font-size: ${({ size }) => size};
  font-weight: lighter;
  margin-top: 20px;
`;

export const Div = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 200px auto;

  & > .text {
    display: flex;
    flex-direction: column;
    margin: auto 0;
  }

  & > .left {
    float: left;
    text-align: left;
  }
  & > .right {
    float: right;
    text-align: right;
  }
`;
