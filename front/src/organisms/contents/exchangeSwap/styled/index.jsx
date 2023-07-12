import styled, { css } from 'styled-components';

const flexCenter = css`
  display: flex;
  align-items: center;
`;

export const SectionWrap = styled.section`
  width: 800px;
  margin: 80px auto;
  @media (max-width: 768px) {
    width: 9%;
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
    width: 45%;
  }
  & > .status {
    width: 15%;
  }
  & > .date {
    width: 20%;
    text-align: right;
    padding-right: 20px;
  }
`;

// token List CSS
export const ListTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SearchWrap = styled.div`
  display: flex;
  margin: 30px auto;
  border-bottom: 1px solid #caccd2ae;
`;

export const InputBox = styled.input`
  width: 70%;
  margin-bottom: 10px;
  border: none;
  &:focus {
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }
  border-right: 1px solid #caccd2;
`;

export const ListWrap = styled.div`
  height: 100%;

  & > ul {
    height: 70%;
    overflow: auto;
  }
`;

export const ListHeader = styled.div`
  position: sticky;
  width: 100%;
  display: flex;
  & > p {
    font-size: 12px;
    padding: 0 10px;
  }

  & > .token {
    width: 47%;
  }
  & > .price {
    width: 28%;
  }
  & > .balance {
    text-align: right;
    width: 25%;
  }
  margin-bottom: 10px;
  color: #767c83;
`;

export const List = styled.li`
  &:hover {
    cursor: pointer;
  }
  height: 40px;
  background-color: #f7f8fa;
  padding: 10px 3px;
  display: flex;
  font-size: 13px;
  letter-spacing: -1px;
  margin-bottom: 10px;
  border: 1px solid #d4f57e;

  &:last-child {
    margin-bottom: 0;
  }

  & > .token {
    ${flexCenter}
    height: 100%;
    width: 47%;
    & > img {
      height: 33px;
      margin-right: 5px;
    }
    & > div > p {
      &:nth-child(2) {
        color: #767c83;
        font-size: 12px;
      }
    }
  }

  & > .price {
    ${flexCenter}
    width: 28%;
  }

  & > .balance {
    ${flexCenter}
    width: 25%;
    text-align: right;
    justify-content: flex-end;
    margin-right: 10px;
    & > div > p:nth-child(1) {
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
`;
