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
  width: 23%;
  @media (max-width: 768px) {
    ${mobileListOption}
  }
`;
export const RewardToken = styled.div`
  ${mobileListNone}
  width: 15%;

  .logo {
    & > img {
      margin-left: 0.5rem;
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
    margin-left: 1.5rem;
    font-size: 18px;
    font-weight: 350;
  }
  @media (max-width: 768px) {
    ${mobileListOption}
    text-align: left;
  }
`;

// airDrop
const margin30to20 = css`
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const AirDropContent = styled.div`
  margin-top: 50px;
  width: 100%;
  border-radius: 10px;
  background: white;
  overflow: hidden;
  box-shadow: 1px 1px 6px 0px #d6d8dd;
`;
export const AirDropHeader = styled.section`
  padding: 0 40px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url(${({ backgroundIMG }) => backgroundIMG}) no-repeat center/100%;
  color: white;

  @media (max-width: 768px) {
    height: 70px;
  }
`;
export const AirDropTokenTitle = styled.div`
  display: flex;
  align-items: center;
  & > img {
    height: 40px;
    width: 40px;
    border-radius: 500px;
    margin-right: 10px;
    box-shadow: #959595 1px 0 10px;
  }
  & > h1 {
    font-size: 35px;
    text-shadow: #000000 1px 0 10px;
  }
  @media (max-width: 768px) {
    & > h1 {
      font-size: 28px;
    }
  }
`;
export const AirDropContentTop = styled.section`
  padding: 50px 40px;
  text-align: center;

  & > h1 {
    ${margin30to20}
  }
`;
export const BalanceText = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #94ca0d;
  letter-spacing: -1px;
  ${margin30to20}
  & > span {
    font-size: 1rem;
    color: grey;
  }
`;
export const RewardDate = styled.div`
  color: #94ca0d;
  ${margin30to20}
`;

export const AirDropContentBottom = styled.section`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dee3eb;
  margin: 0 40px;
  padding: 40px 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 0;
  }

  .airDrop {
    width: 50%;
    font-size: 14px;
    color: grey;

    & > div {
      display: flex;
      justify-content: space-between;
      &:nth-child(1) {
        margin-bottom: 15px;
      }
      & > strong {
        color: black;
      }
    }
    @media (max-width: 768px) {
      width: 100%;
      & > div {
        &:nth-last-child(1) {
          margin-bottom: 15px;
        }
      }
    }
  }
`;
