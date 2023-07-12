import styled from 'styled-components';

export const TxLi = styled.li`
  display: flex;
  font-size: 13px;
  letter-spacing: -1px;
  padding-bottom: 5px;

  & > div {
    margin: 5px 0;
  }

  & > .action {
    width: 20%;
    padding-left: 20px;
  }
  & > .hash {
    width: 43%;
    & > div {
      width: 80%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }
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
