import styled, { css } from 'styled-components';

const Flex = css`
  display: flex;
  justify-content: space-between;
`;
const mobileFlex = css`
  display: flex;
  flex-direction: column;
`;
const basicOption = css`
  ${Flex}
  padding: 0 30px;
  border-bottom: 1px solid #dee3eb;
  align-items: center;
`;

export const FlexDiv = styled.div`
  ${Flex}
  align-items: center;
  & > h3 {
    margin-right: 20px;
  }
`;

// Column After Between
export const BoxDivBalance = styled.div`
  ${Flex}
  @media (max-width: 768px) {
    ${mobileFlex}
  }
`;

// Header
export const BoxSection = styled.section`
  width: 50%;
  &:nth-child(1) {
    padding-right: 20px;
    border-right: 1px solid ${({ borderColor }) => borderColor || 'white'};
  }
  &:nth-child(2) {
    padding-left: 20px;
  }
`;
export const StakingListDiv = styled.div`
  ${Flex}
  margin-bottom: 8px;
`;
export const ExpectedRewardDiv = styled.div`
  & > div {
    margin-top: 10px;
    & > p {
      font-size: 22px;
      & > strong {
        font-size: 26px;
      }
    }
  }
`;

// balance
export const ButtonDiv = styled.div`
  ${Flex}
  width: 200px;
`;
export const BoxSectionBalance = styled.section`
  width: 50%;
  &:nth-child(1) {
    padding-right: 20px;
    border-right: 1px solid ${({ borderColor }) => borderColor || 'white'};
  }
  &:nth-child(2) {
    padding-left: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 130px;
    &:nth-child(1) {
      padding-right: 0;
      border-right: none;
      padding-bottom: 20px;
      border-bottom: 1px solid ${({ borderColor }) => borderColor || 'white'};
    }
    &:nth-child(2) {
      padding-left: 0;
      padding-top: 20px;
    }
  }
`;
export const BalanceDiv = styled.div`
  color: #2c67b0;
  font-weight: lighter;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    font-weight: 300;
    letter-spacing: -1px;
    & > strong {
      color: black;
      font-size: 24px;
      margin-right: 5px;
    }
  }
`;

export const ExpectInfoDiv = styled.div`
  display: flex;
  color: #767c83;
  font-size: 14px;
  letter-spacing: -0.5px;
  & > span:nth-child(1) {
    margin-right: 20px;
  }
`;

// MyVote
export const MyVoteSection = styled.div`
  ${mobileFlex}
  justify-content: center;
  height: ${({ height }) => height || '95px'};
  background: ${({ theme, colors }) => theme[colors].background};
  color: ${({ theme, colors }) => theme[colors].color};

  @media (max-width: 768px) {
    width: 98%;
    margin: 0 auto;

    .poolList {
      display: none;
    }
  }
`;
export const VoteInfoDiv = styled.div`
  ${Flex}
  font-weight: 330;
  & > span > strong {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    ${mobileFlex}
    text-align: right;
  }
  .option {
    margin-left: 30px;
    font-size: 14px;
    cursor: pointer;
  }
`;
export const PoolVote = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-align: right;
  font-weight: 330;
  & > span:nth-child(1) {
    letter-spacing: -0.5px;
    margin-right: 15px;
  }
`;

// Pool list
export const PoolListHeaderDiv = styled.div`
  ${basicOption}
  height: ${({ height }) => height || '60px'};
  @media (max-width: 768px) {
    padding: 15px 30px;
    ${mobileFlex}
    align-items: start;

    & > input {
      margin-top: 10px;
      padding: 0;
      /* border-top: solid 1px; */
    }
  }
`;

// staking popup
