import {
  StakingContent,
  NextButton,
  StakingListDiv,
  ApproveHeader,
  ApproveNotice,
} from './styled';
import { PopupHeader } from '../../components';
import { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  stakingPopup,
  stakingValueState,
  optionTermsState,
  selectedLPTokenState,
} from '../../store';
import { ethers } from 'ethers';

const LPaddress = {
  ARBLP: process.env.REACT_APP_LP_ARB_ADDRESS,
  ETHLP: process.env.REACT_APP_LP_ETH_ADDRESS,
  USDTLP: process.env.REACT_APP_LP_USDT_ADDRESS,
};

export const Step2 = ({ closePopup, date, provider, contract }) => {
  const [approve, setApprove] = useState(false);
  const [stakingValue] = useRecoilState(stakingValueState);
  const stakingTerms = useRecoilValue(optionTermsState);
  const lpToken = useRecoilValue(selectedLPTokenState);
  const setStaking = useSetRecoilState(stakingPopup);

  const fatchStaking = async () => {
    try {
      await contract.LpStaking(
        LPaddress[lpToken],
        ethers.utils.parseEther(stakingValue),
        stakingTerms,
        {
          gasLimit: 1000000,
          maxFeePerGas: ethers.utils.parseUnits('10', 'gwei'),
          maxPriorityFeePerGas: ethers.utils.parseUnits('1', 'gwei'),
        },
      );
    } catch (e) {
      console.log(e.message);
    }
  };

  const stakingHandler = async () => {
    console.log(
      `스테이킹 버튼`,
      `amount:${stakingValue} `,
      `개월수: ${stakingTerms}`,
      `선택한 lp : ${lpToken}`,
    );
    fatchStaking();
  };

  return (
    <>
      <PopupHeader>트랜잭션 요청</PopupHeader>

      {approve ? (
        <>
          <StakingContent className="staking">
            <article>
              <ApproveHeader>
                <h4 className="pointBlue">스테이킹</h4>
              </ApproveHeader>
              <ApproveHeader>
                <p>{stakingValue}</p> <p>ASD</p>
              </ApproveHeader>
            </article>
            <article>
              <ApproveNotice>
                <StakingListDiv>
                  <strong>종료 일시</strong>
                  {date}
                </StakingListDiv>
                <StakingListDiv>
                  <strong>수익률</strong>
                  52%
                </StakingListDiv>
                <StakingListDiv>
                  <strong>지분율</strong>
                  50%
                </StakingListDiv>
                <StakingListDiv>
                  <strong>획득 투표권</strong>
                  0vASD
                </StakingListDiv>
              </ApproveNotice>
            </article>
          </StakingContent>
          <NextButton
            onClick={() => {
              closePopup(false);
              stakingHandler();
            }}
          >
            스테이킹 하기
          </NextButton>
        </>
      ) : (
        <>
          <StakingContent className="approve">
            <article>
              <ApproveHeader>
                <h4 className="pointBlue">토큰 승인</h4>
              </ApproveHeader>
              <ApproveHeader>
                <p>Token</p> <p>ASD</p>
              </ApproveHeader>
            </article>
            <article>
              <ApproveNotice>
                위 토큰에 대해 컨트랙트의 접근을 허용할 수 있도록 최초 1회에
                한해 Approve 트랜랜잭션을 실행합니다. 트랜잭션 성공 후 계속해서
                다음 트랜잭션을 요청할 수 있습니다.
              </ApproveNotice>
            </article>
          </StakingContent>
          <NextButton
            onClick={() => {
              setApprove(true);
              // approve 요청하는 abi 넣어줘야 함, 응답이 성공적으로 오면 상태 바꿔서 진행 가능하도록 바꿔줘야 함
            }}
          >
            승인하기
          </NextButton>
        </>
      )}
    </>
  );
};
