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
const listStyled = css`
  ${basicOption}
  min-height: 80px;
  cursor: ${({ cursor }) => cursor || 'pointer'};
  font-size: 14px;
  .right {
    justify-content: right;
  }
`;
const tokenInfo = css`
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
const mobileListOption = css`
  width: 100%;
  margin: 10px 0 0 75px;
`;
const mobileListNone = css`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ListContentDiv = styled.div`
  ${listStyled}
  @media (max-width: 768px) {
    width: 100%;
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

// staking vote pool list
export const TokenInfo = styled.div`
  ${tokenInfo}
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

// staking option list
export const Size18 = styled.p`
  font-size: 18px;
`;

// exchange pool list
export const PoolList = styled.div`
  ${listStyled}
  @media (max-width: 768px) {
    flex-direction: row;
    padding: 10px 20px;
  }
`;

export const PoolContentWrap = styled.div`
  ${Flex}
  width: ${({ width }) => width};
  height: auto;
  align-items: center;
  letter-spacing: -0.3px;
  .mobile {
    display: none;
  }

  ${({ width }) =>
    width &&
    css`
      @media (max-width: 768px) {
        width: ${({ width }) => width};
        align-items: start;
        font-size: 12px !important;
        flex-direction: column;

        .mobile {
          display: block;
          color: #767c83;
        }
      }
    `}
`;
export const PoolTokenInfo = styled.div`
  ${tokenInfo}
  width: 38%;
  @media (max-width: 768px) {
    width: 100%;
    .logo {
      & > img {
        height: 28px;
        width: 28px;
      }
    }
    .name {
      font-size: 13px;
    }
    .symbol {
      font-size: 12px;
    }
  }
`;

export const Liquidity = styled.div`
  width: 16%;
  @media (max-width: 768px) {
    ${mobileListOption}
  }
`;
export const RewardToken = styled.div`
  ${mobileListNone}
  width: 15%;
  .logo {
    & > img {
      height: 25px;
    }
  }
`;
export const RewardRate = styled.div`
  ${mobileListNone}
  width: 20%;
  text-align: center;
  font-size: 12px;
`;
export const Estimated = styled.div`
  width: 15%;
  text-align: right;
  & > strong {
    font-size: 18px;
    font-weight: 350;
  }
  @media (max-width: 768px) {
    ${mobileListOption}
    text-align: left;
  }
`;
