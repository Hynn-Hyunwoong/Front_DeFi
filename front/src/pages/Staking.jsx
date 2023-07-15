import { useRecoilState } from 'recoil';
import {
  StakingBalance,
  StakingHeader,
  StakingMyVote,
  StakingPoolList,
  StakingPopup,
} from '../organisms/contents/staking';
import { stakingPopup } from '../organisms/store';
import { useEffect } from 'react';
import useProvider from '../organisms/hooks/ethersProvider';

const stakingOption = [
  // 스테이킹 배수, 기간(개월)
  { times: 1, term: 4 },
  { times: 2, term: 8 },
  { times: 4, term: 12 },
  { times: 8, term: '12+a' },
];
const testArr = [
  // 수익률 박스
  { label: '스테이킹', percent: '00.00' }, // 스테이킹 수익률?
  { label: '드랍스', percent: '준비중' },
  { label: '풀투표', percent: '준비중' },
];
// 얘는 여기 꼭 있어야 함

//
// 예상 수익률
const testRewardRate = { min: '0', max: '46.36' }; // 헤더 박스, 수익률 계산 어떻게 하는지,,??
const stakingRewardRate = { min: '0', max: '18.89' }; // 밸런스 박스

const testAmounts = {
  // 스테이킹 수량, 보상 수량
  stakingAmount: 0,
  rewardAmount: '123',
  holeAmount: '2342', // 누적 amount 가져오는 메서드 없으면 그냥 없애기
};

// 0이면 false, 값이 있으면 true??
// 스테이킹의 경우 타임락 걸어서 정한 기간이 다가오면 언스테이킹 버튼 활성화?
const state = {
  staking: testAmounts.stakingAmount != 0,
  unstaking: true, // 기간이 되면 true가 되어야 하는데...
  reward: testAmounts.rewardAmount != 0,
};

const testData = {
  // 투표권 => vASD값 받아오면 되는데, 이 값으로 풀 투표하는 기능은 준비중으로 처리
  myVote: 0,
  participate_amount: 0,
};

// 스테이킹 풀 투표 목록
const testTokenData = [
  {
    token1: { name: '솔라스왑', symbol: 'ASD', logo: 'solar' },
    token2: { name: '테더', symbol: 'USDT', logo: 'tether' },
    estimateRate: '12.65%',
  },
  {
    token1: { name: '솔라스왑', symbol: 'ASD', logo: 'solar' },
    token2: { name: '이더리움', symbol: 'ETH', logo: 'ethereum' },
    estimateRate: '4.23%',
  },
  {
    token1: { name: '솔라스왑', symbol: 'ASD', logo: 'solar' },
    token2: { name: '아비트럼', symbol: 'ARB', logo: 'arbitrum' },
    estimateRate: '27.98%',
  },
];

export const Staking = () => {
  const [provider, contract] = useProvider();
  const [staking] = useRecoilState(stakingPopup);
  const amount = `contract에서 받아와야 함`;

  useEffect(() => {
    (async () => {
      // const amount = await contract.checkToken(lptokenAddr) 사용해서 lp token balance 받아오기 => 그리고 상태에 저장
      console.log(`staking page useEffect`);
    })();
  }, [amount]);

  return (
    <div>
      <StakingHeader reward={testArr} rate={testRewardRate} />
      <StakingBalance
        amounts={testAmounts}
        state={state}
        stakingRewardRate={stakingRewardRate}
      />
      {staking && <StakingPopup option={stakingOption} reward={testArr} />}

      {/*얘네는 준비중*/}
      <StakingMyVote voteAmount={testData} />
      <StakingPoolList tokenData={testTokenData} />
    </div>
  );
};

// 스테이킹 => 엘피토큰 addr 뭔지
// 언스테이킹 => 메서드 뭔지? withDrawStaking 맞는지 확인해야 함!
