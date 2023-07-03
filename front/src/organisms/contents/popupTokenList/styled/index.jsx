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

export const Table = styled.tr`
  position: sticky;
  width: 100%;
  display: flex;
  & > tr {
    font-size: 12px;
  }

  & > .token {
    width: 48%;
  }
  & > .price {
    width: 25%;
  }
  & > .balance {
    width: 25%;
  }
  margin-bottom: 10px;
  color: #767c83;
`;

export const List = styled.li`
  background-color: #f7f8fa;
  padding: 3px;
  display: flex;
  font-size: 13px;
  letter-spacing: -0.04em;
  margin-bottom: 10px;

  & > .token {
    width: 47%;
    display: flex;

    & > img {
      height: 33px;
      margin-right: 5px;
    }
  }

  & > .price {
    width: 25%;
  }
  & > .balance {
    width: 25%;
  }
`;
