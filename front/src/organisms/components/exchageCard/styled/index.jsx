import styled, { css } from 'styled-components';
const flexCenter = css`
  display: flex;
  align-items: center;
`;
export const BoxWrap = styled.section`
  ${flexCenter}
  margin: 0 auto;
  border-radius: 20px;
  width: 800px;
  height: 305px;
  justify-content: space-between;
  background-color: white;
  box-shadow: 20px 20px 30px 0px #e6eaed;
  position: relative;
  animation: fadeInUp 0.7s;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 10%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;

export const BoxArticleStyled = styled.article`
  ${flexCenter}
  width: 77%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Exchange = styled.div`
  margin: 20px auto;
`;

export const ButtonArticleStyled = styled.article`
  width: 23%;
  height: 100%;
  background-color: #0194ff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  & > div {
    text-align: right;
    height: 50%;
    margin: 55px 20px;
  }
`;
