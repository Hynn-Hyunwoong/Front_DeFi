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

export const PoolSection = styled.section`
  width: 900px;
  margin: 0 auto;
  &:nth-child(1) {
    margin-top: 60px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// header
export const PoolHeaderDiv = styled.div`
  ${Flex}
  height: auto;
  @media (max-width: 768px) {
    ${mobileFlex}
    margin: 0 auto;
    width: 98%;
  }
`;
export const PoolHeaderBoxDiv = styled.div`
  ${Flex}
  align-items: center;

  .header {
    padding-bottom: 15px;
    border-bottom: 1px solid #dee3eb;
  }
  .poolStatus {
    padding-top: 15px;
    padding-bottom: 10px;
  }
  .light {
    font-weight: 330;
  }
  .point {
    font-size: 22px;
  }
  .right {
    float: right;
  }
`;

// pool
export const PoolTableHeader = styled.div`
  font-size: 13px;
  width: 100%;
  display: flex;
  color: #767c83;

  .pair {
    width: 25%;
  }
  .liquidity {
    width: calc(15% - 30px);
    text-align: right;
  }
  .rewardToken {
    width: calc(20% - 10px);
    margin-left: 50px;
  }
  .rewardRate {
    width: calc(15% - 10px);
  }
  .estimated {
    width: calc(25% - 110px);
    text-align: right;
  }
`;
