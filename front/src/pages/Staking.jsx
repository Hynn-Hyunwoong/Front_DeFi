import { useRecoilState } from 'recoil';
import {
  StakingBalance,
  StakingHeader,
  StakingMyVote,
  StakingPoolList,
  StakingPopup,
} from '../organisms/contents/staking';
import { LPtokenState, stakingPopup } from '../organisms/store';
import { useEffect } from 'react';
import useProvider from '../organisms/hooks/ethersProvider';
import { ethers } from 'ethers';

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

// const testData = {
//   // 투표권 => vASD값 받아오면 되는데, 이 값으로 풀 투표하는 기능은 준비중으로 처리
//   myVote: 0,
//   participate_amount: 0,
// };

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

const ARBlp = process.env.REACT_APP_LP_ARB_ADDRESS;
const ETHlp = process.env.REACT_APP_LP_ETH_ADDRESS;
const USDTlp = process.env.REACT_APP_LP_USDT_ADDRESS;
const vASDAddress = process.env.REACT_APP_VASD_ADDRESS;

export const Staking = () => {
  // eslint-disable-next-line no-unused-vars
  const [provider, contract] = useProvider();
  const [staking] = useRecoilState(stakingPopup);
  const [LPamount, setLPamount] = useRecoilState(LPtokenState);
  // 블럭 length가 바뀔 때마다 재랜더링?

  const fetchData = async () => {
    if (!contract) return;
    try {
      const ARB = await contract.checkToken(ARBlp);
      const ETH = await contract.checkToken(ETHlp);
      const USDT = await contract.checkToken(USDTlp);
      const vASD = await contract.checkToken(vASDAddress);
      setLPamount({
        ARBLP: Number(ethers.utils.formatEther(ARB)),
        ETHLP: Number(ethers.utils.formatEther(ETH)),
        USDTLP: Number(ethers.utils.formatEther(USDT)),
        vASD: Number(ethers.utils.formatEther(vASD)),
      });
      console.log(`hi`);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [contract]);

  return (
    <div>
      <StakingHeader reward={testArr} rate={testRewardRate} />
      <StakingBalance stakingRewardRate={stakingRewardRate} />
      {staking && <StakingPopup option={stakingOption} reward={testArr} />}

      {/*얘네는 준비중*/}
      <StakingMyVote LPamount={LPamount} />
      <StakingPoolList tokenData={testTokenData} />
    </div>
  );
};

// 스테이킹 => 엘피토큰 addr 뭔지
// 언스테이킹 => 메서드 뭔지? withDrawStaking 맞는지 확인해야 함!
