import {
  StakingBalance,
  StakingHeader,
  StakingMyVote,
  StakingPoolList,
  StakingPopup,
} from '../organisms/contents/staking';

export const Staking = () => {
  const testArr = [
    { label: '스테이킹', percent: '19.14' },
    { label: '드랍스', percent: '17.96' },
    { label: '풀투표', percent: '8.74' },
    // math 함수 모아놓은 util을 하나 만들어야 할 것 같당 => 수익률 등 계산 위해서
  ];

  return (
    <>
      <div style={{ padding: '60px 0' }}>
        <StakingPopup />
        <StakingHeader reward={testArr} />
        <StakingBalance />
        <StakingMyVote />
        <StakingPoolList />
      </div>
    </>
  );
};
