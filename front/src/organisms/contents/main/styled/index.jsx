import styled from 'styled-components';

export const Wrapped = styled.section`
  margin-top: 100px;
  width: 100%;
  text-align: center;
`;

export const MainArticle = styled.article`
  margin-bottom: 100px;

  & > img {
    width: 100%;
    height: auto;
  }
`;

export const H1 = styled.h1`
  font-size: 35px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  & > strong {
    color: #94ca0d;
  }
`;

export const LightP = styled.p`
  font-size: ${({ size }) => size};
  font-weight: lighter;
  margin-top: 20px;
`;

export const Div = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 200px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  & > .text {
    display: flex;
    flex-direction: column;
    margin: auto 0;
  }

  @media (min-width: 769px) {
    & > .left {
      text-align: left;
    }
    & > .right {
      text-align: right;
    }
  }
`;
