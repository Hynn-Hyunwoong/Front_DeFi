import {
  StakingHeader,
  StakingContent,
  NextButton,
  StakingListDiv,
  ApproveHeader,
  ApproveNotice,
  SelectStyled,
  InputValue,
  InputValueWrap,
} from './styled';
import { InputBox, PopupHeader } from '../../components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedUnstakingLPtokenState, stakingValueState } from '../../store';
import stakingABI from '../../../ABI/contracts/Staking.sol/Staking.json';
import FacABI from '../../../ABI/contracts/Factory_v1.sol/Factory_v1.json';
import { ethers } from 'ethers';
import { useState } from 'react';

const LPaddress = {
  ARBLP: process.env.REACT_APP_LP_ARB_ADDRESS,
  ETHLP: process.env.REACT_APP_LP_ETH_ADDRESS,
  USDTLP: process.env.REACT_APP_LP_USDT_ADDRESS,
};

const stakingAddress = process.env.REACT_APP_STAKING_ADDRESS;

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const factoryContract = new ethers.Contract(
  process.env.REACT_APP_FACTORY_ADDRESS,
  FacABI.abi,
  signer,
);

export const Unstaking = ({ closePopup, provider, contract }) => {
  const [unstakingLpToken, setLpToken] = useRecoilState(
    selectedUnstakingLPtokenState,
  );
  // const [inputValue, setInputValue] = useState('');
  const unstakingValue = useRecoilValue(stakingValueState);

  const LpTokenSelectHandler = (e) => {
    setLpToken(e.target.value);
    console.log(`Selected LP token: ${e.target.value}`);
  };

  // const inputValueHandler = (e) => {
  //   setInputValue(e.target.value);
  //   console.log(`Input value: ${e.target.value}`);
  // };

  const unstakingHandler = async () => {
    const lpAddress = LPaddress[unstakingLpToken];
    if (!lpAddress) {
      console.log('Invalid LP token selected');
      return;
    }
    console.log(`LP token address: ${lpAddress}`);

    // const amount = Number(inputValue);
    // if (isNaN(amount)) {
    //   console.log('Invalid input value');
    //   return;
    // }
    // console.log(`Withdrawal amount: ${amount}`);

    try {
      const tx = await factoryContract.withDrawLiquid(
        lpAddress,
        ethers.utils.parseEther(unstakingValue),
        process.env.REACT_APP_ASD_TOKEN_ADDRESS,
        {
          gasLimit: 1000000,
          maxFeePerGas: ethers.utils.parseUnits('10', 'gwei'),
          maxPriorityFeePerGas: ethers.utils.parseUnits('1', 'gwei'),
        },
      );
      console.log('Transaction sent: ', tx);
      const receipt = await tx.wait();
      console.log('Transaction receipt: ', receipt);
    } catch (error) {
      console.log('Error in unstaking: ', error);
    }
  };

  return (
    <>
      <PopupHeader>트랜잭션 요청</PopupHeader>
      <StakingContent className="unstaking">
        <article>
          <ApproveHeader>
            <h4 className="pointBlue">언스테이킹</h4>
          </ApproveHeader>
          <InputValueWrap>
            <SelectStyled onChange={LpTokenSelectHandler}>
              <option>선택</option>
              <option value="ARBLP">ASD LP Token</option>
              <option value="ETHLP"> ETH LP Token</option>
              <option value="USDTLP">USDT LP Token</option>
            </SelectStyled>
            <InputValue>
              <InputBox />
            </InputValue>
          </InputValueWrap>
        </article>
        <article>
          <ApproveNotice>
            <StakingListDiv>
              <strong>수익률</strong>
              52%
            </StakingListDiv>
            <StakingListDiv>
              <strong>지분율</strong>
              50%
            </StakingListDiv>
            <StakingListDiv>
              <strong>보상 수령</strong>
              234 ASD
            </StakingListDiv>
            <StakingListDiv>
              <strong>반환 투표권</strong>
              0vASD
            </StakingListDiv>
          </ApproveNotice>
        </article>
        <article>
          <ApproveNotice>
            풀 투표 참여 상태에서 투표권이 반환되는 경우, 투표 내역은 전체
            철회되며, 풀 투표로 분배된 거래 수수료는 지갑으로 자동적으로
            수령됩니다.
          </ApproveNotice>
        </article>
      </StakingContent>
      <NextButton
        onClick={() => {
          unstakingHandler();
        }}
      >
        언스테이킹 하기
      </NextButton>
    </>
  );
};
