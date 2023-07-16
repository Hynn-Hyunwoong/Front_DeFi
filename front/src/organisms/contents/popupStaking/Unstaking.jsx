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
import { selectedUnstakingLPtokenState } from '../../store';
import stakingABI from '../../../ABI/contracts/Staking.sol/Staking.json';
import { ethers } from 'ethers';

const LPaddress = {
  ARBLP: process.env.REACT_APP_LP_ARB_ADDRESS,
  ETHLP: process.env.REACT_APP_LP_ETH_ADDRESS,
  USDTLP: process.env.REACT_APP_LP_USDT_ADDRESS,
};

const stakingAddress = process.env.REACT_APP_STAKING_ADDRESS;

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const stakingContract = new ethers.Contract(
  stakingAddress,
  stakingABI.abi,
  signer
);

export const Unstaking = ({ closePopup, provider, contract }) => {
  const [unstakingLpToken, setLpToken] = useRecoilState(
    selectedUnstakingLPtokenState
  );

  const LpTokenSelectHandler = (e) => {
    setLpToken(e.target.value);
  };

  const unstakingHandler = async () => {
    console.log(`언스테이킹 버튼`);
    const test = await contract.withDrawStaking(LPaddress.ARBLP, 10);
    // const test = await stakingContract.getValue1();
    console.log(test);
  };

  return (
    <>
      <PopupHeader>트랜잭션 요청</PopupHeader>

      <StakingContent className='unstaking'>
        <article>
          <ApproveHeader>
            <h4 className='pointBlue'>언스테이킹</h4>
          </ApproveHeader>
          <InputValueWrap>
            <SelectStyled onChange={LpTokenSelectHandler}>
              <option>선택</option>
              <option value='ARBLP'>ASD LP Token</option>
              <option value='ETHLP'> ETH LP Token</option>
              <option value='USDTLP'>USDT LP Token</option>
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
          // closePopup(false);
          unstakingHandler();
        }}
      >
        언스테이킹 하기
      </NextButton>
      {/*언스테이킹 해주는 abi 넣어주면 됨*/}
    </>
  );
};
