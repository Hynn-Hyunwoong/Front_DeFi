import { useRecoilState } from 'recoil';
import {
  StakingBalance,
  StakingHeader,
  StakingMyVote,
  StakingPoolList,
  StakingPopup,
} from '../organisms/contents/staking';
import { stakingPopup } from '../organisms/store';
import { useState } from 'react';

export const Staking = () => {
  const [staking] = useRecoilState(stakingPopup);
  const [unstaking, setUnstaking] = useState(false);
  const testArr = [
    { label: '스테이킹', percent: '19.14' },
    { label: '드랍스', percent: '17.96' },
    { label: '풀투표', percent: '8.74' },
    // math 함수 모아놓은 util을 하나 만들어야 할 것 같당 => 수익률 등 계산 위해서
  ];
  const stakingOption = [
    { times: 1, term: 4 },
    { times: 2, term: 8 },
    { times: 4, term: 12 },
    { times: 8, term: '12+a' },
  ];

  return (
    <>
      <div>
        <StakingHeader reward={testArr} />
        <StakingBalance />
        <StakingMyVote />
        <StakingPoolList />
        {staking && <StakingPopup option={stakingOption} reward={testArr} />}
      </div>
    </>
  );
};
