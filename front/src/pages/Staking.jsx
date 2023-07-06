import {
  StakingBalance,
  StakingHeader,
  StakingMyvote,
  StakingPoolList,
} from '../organisms/contents/staking';

export const Staking = () => {
  const testArr = [
    { label: '스테이킹', percent: '19.14' },
    { label: '드랍스', percent: '17.96' },
    { label: '풀투표', percent: '8.74' },
  ];

  return (
    <>
      <div style={{ padding: '60px 0' }}>
        <StakingHeader reward={testArr} />
        <StakingBalance />
        <StakingMyvote />
        <StakingPoolList />
      </div>
    </>
  );
};
