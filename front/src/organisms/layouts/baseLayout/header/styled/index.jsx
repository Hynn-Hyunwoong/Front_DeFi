import styled, { css } from 'styled-components';

const flexCenter = css`
  display: flex;
  align-items: center;
`;

export const HeaderWrap = styled.header`
  width: 100%;
  height: 136px;
  position: sticky;
  top: 0;
  z-index: 1;
  background: #f7f8fa;
  box-shadow: 1px 1px 6px 0px #d6d8dd;
`;

export const HeaderTop = styled.section`
  width: 100%;
  height: 40%;
  border-bottom: 1px solid #ebeef2;

  & > div {
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
  }

  & > div > span {
    font-weight: bold;
    font-size: 13px;
    margin-top: 20px;
    float: right;
    color: #767c83;
    margin-left: 20px;
  }
`;

export const HeaderBottom = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 60%;
  ${flexCenter}

  & > div {
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
    ${flexCenter}
    flex-direction: row;
    justify-content: space-around;
  }

  & > div > button {
    margin-left: auto;
  }
`;
