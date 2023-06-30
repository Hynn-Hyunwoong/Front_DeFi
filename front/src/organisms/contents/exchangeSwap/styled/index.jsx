import styled from "styled-components";

export const BoxWrap = styled.section`
  margin: 0 auto;
  border-radius: 20px;
  width: 800px;
  height: 305px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;

  box-shadow: 5px 5px 20px 0px #ebecf0;
`;

export const BoxArticle = styled.article`
  width: 77%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Exchange = styled.div`
  margin: 20px auto;
`;

export const ButtonArticle = styled.article`
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
