import styled from "styled-components";

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
    height: 100%;
    width: 47%;
    display: flex;
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
    align-items: center;
  }

  & > .price {
    width: 28%;
    display: flex;
    align-items: center;
  }

  & > .balance {
    width: 25%;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 10px;
    & > div > p:nth-child(1) {
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
`;
