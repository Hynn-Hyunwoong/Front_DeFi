import styled from "styled-components";

export const SectionWrap = styled.section`
  width: 800px;
  margin: 80px auto;
`;

export const BoxWrap = styled.section`
  margin: 0 auto;
  border-radius: 20px;
  width: 800px;
  height: 305px;
  display: flex;
  align-items: center;
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

// Bottom

export const ExpectedArticle = styled.article`
  width: 100%;
  margin: 0 auto;
  color: #767c83;

  &:nth-child(1) {
    margin-bottom: 80px;
  }
`;

export const HoverSpan = styled.span`
  cursor: pointer;
`;

export const TXTableHeader = styled.div`
  margin: 20px 0;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #caccd2;
  border-top: 1px solid #caccd2;
  font-size: 13px;
  display: flex;

  & > .action {
    width: 20%;
    padding-left: 20px;
  }
  & > .hash {
    width: 40%;
  }
  & > .status {
    width: 15%;
  }
  & > .date {
    width: 25%;
    text-align: right;
    padding-right: 20px;
  }
`;
