import styled, { css } from 'styled-components';
const Flex = css`
  display: flex;
  justify-content: space-between;
`;

export const StakingHeader = styled.section`
  ${Flex}
  margin-bottom: 10px;
  padding: 40px 50px 0 50px;
`;
export const StakingContent = styled.section`
  ${Flex}
  height: 100%;
  max-height: 580px;
  flex-direction: column;
  padding: 0 50px 30px 50px;
  overflow: auto;
  @media (max-width: 768px) {
    height: 100%;
  }

  & > article {
    margin-top: 20px;
  }
  & > article:nth-child(1) {
    margin-top: 10px;
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
export const StakingListDiv = styled.div`
  ${Flex}
  margin-bottom: 8px;
`;

// step1
export const InputValueWrap = styled.div`
  display: flex;
`;
export const SelectStyled = styled.select`
  border: 1px solid #caccd1;
  width: 30%;
`;
export const InputValue = styled.div`
  ${Flex}
  align-items: center;
  border: 1px solid #caccd1;
  padding: 0 20px;
  width: 70%;
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
  width: ${({ width }) => width || '100%'};
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: white;
  height: 70px;
  background: #0194ff;
`;

// step2
export const ApproveHeader = styled.div`
  ${Flex}
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #caccd1;
  margin-bottom: 20px;
`;

export const ApproveNotice = styled.div`
  padding: 20px 0;
  color: #767c83;
  font-size: 14px;
  strong {
    padding: 3px 0;
  }
`;
