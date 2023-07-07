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
  & > strong {
    color: black;
    font-size: 24px;
  }
  color: #2c67b0;
  font-weight: lighter;
  margin: 20px 0;
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
  /* height: 95px; */
  height: ${({ height }) => height || '95px'};
  background: ${({ theme, colors }) => theme[colors].background};
  color: ${({ theme, colors }) => theme[colors].color};

  @media (max-width: 768px) {
    width: 98%;
    margin: 0 auto;
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
  height: 60px;
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
export const StakingHeader = styled.section`
  ${Flex}
  margin-bottom: 10px;
  padding: 40px 50px 0 50px;
`;
export const StakingContent = styled.section`
  ${Flex}
  height: 580px;
  flex-direction: column;
  padding: 0 50px 30px 50px;
  overflow: auto;
  @media (max-width: 768px) {
    height: 100%;
  }

  & > article {
    margin-top: 20px;
  }

  .detailInfo {
    border: 1px solid #0194ff;
    background: #d2edff;
    padding: 20px;
    font-size: 13px;

    & > div {
      margin-bottom: 10px;
    }
    & > div:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
  .grey {
    color: grey;
  }
`;
export const InputValue = styled.div`
  ${Flex}
  align-items: center;
  border: 1px solid #caccd1;
  padding: 0 20px;
`;
export const InputBalance = styled.div`
  ${Flex}
  margin: 10px 0 20px 0;
  & > .balance {
    color: #767c83;
    & > span:nth-child(1) {
      margin-right: 15px;
    }
  }
  & > .button {
    ${Flex}
    width: 125px;
  }
`;

export const Notice = styled.div`
  & > p:nth-child(1) {
    margin-bottom: 20px;
  }
`;
export const Summary = styled.div`
  margin: 30px 0;
  .summaryStaking > div {
    margin-bottom: 15px;
  }
  .summaryReward {
    padding: 0 10px;
    margin-top: 15px;
    border-left: 1px solid #caccd2;
    border-right: 1px solid #caccd2;
  }
`;
export const NextButton = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: white;
  height: 70px;
  background: #0194ff;
`;
