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

const mobileFlex = css`
  display: flex;
  flex-direction: column;
`;

export const StakingWrap = styled.div`
  width: 850px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;

// Header
export const FlexDiv = styled.div`
  ${Flex}
`;

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
export const BoxDivBalance = styled.div`
  ${Flex}
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
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
