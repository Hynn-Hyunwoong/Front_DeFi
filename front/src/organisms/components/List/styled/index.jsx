import styled, { css } from 'styled-components';

const Flex = css`
  display: flex;
  justify-content: space-between;
`;

const basicOption = css`
  ${Flex}
  padding: 0 30px;
  border-bottom: 1px solid #dee3eb;
  align-items: center;
`;

export const ListContentDiv = styled.div`
  ${basicOption}
  min-height: 80px;
  cursor: ${({ cursor }) => cursor || 'pointer'};

  font-size: 14px;

  .right {
    justify-content: right;
  }

  @media (max-width: 768px) {
    width: 100%;
    /* height: auto; */
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;
  }
`;
export const FlexDiv = styled.div`
  ${Flex}
  width: ${({ width }) => width};
  height: auto;
  align-items: center;

  & > .period {
    color: #767c83;
  }

  ${({ width }) =>
    width &&
    css`
      @media (max-width: 768px) {
        width: 90%;
        &:nth-child(1) {
          margin-bottom: 10px;
        }
      }
    `}
`;

// governance list
export const ActionColor = styled.span`
  font-weight: bold;
  color: ${({ status }) => {
    if (status === 'exectued') {
      return '#767C83';
    }
    if (status === 'progress') {
      return '#F74343';
    }
    if (status === 'canceled') {
      return '#CACCD2';
    }
  }};
`;

// pool list
export const TokenInfo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  letter-spacing: -0.3px;

  .logo {
    margin-right: 20px;
    & > img {
      height: 32px;
      width: 32px;
      box-shadow: 1px 1px 6px 0px #d6d8dd;
      border-radius: 100px;
    }
  }
  .name {
    color: black;
    margin-bottom: 3px;
    font-size: 16px;
  }
  .symbol {
    color: grey;
    font-size: 13px;
    font-weight: 350;
  }
`;

export const EstimatieRate = styled.div`
  text-align: right;
  .text {
    font-size: 10px;
    color: grey;
  }
  & > strong {
    font-size: 22px;
  }
`;
