import {
  StakingHeader,
  StakingContent,
  NextButton,
  StakingListDiv,
  ApproveHeader,
  ApproveNotice,
} from './styled';
import { PopupHeader } from '../../components';

export const Unstaking = ({ closePopup, provider, contract }) => {
  const unstakingHandler = async () => {
    console.log(`언스테이킹 버튼`);
    // await contract.withDrawStaking()
  };

  return (
    <>
      <PopupHeader>트랜잭션 요청</PopupHeader>

      <StakingContent className='unstaking'>
        <article>
          <ApproveHeader>
            <h4 className='pointBlue'>언스테이킹</h4>
          </ApproveHeader>
          <ApproveHeader>
            <p>Token</p> <p>ASD</p>
          </ApproveHeader>
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
          closePopup(false);
          unstakingHandler();
        }}
      >
        언스테이킹 하기
      </NextButton>
      {/*언스테이킹 해주는 abi 넣어주면 됨*/}
    </>
  );
};
