import {
  StakingContent,
  NextButton,
  ApproveHeader,
  ApproveNotice,
} from './styled';
import { PopupHeader } from '../../components';

export const Reward = ({ closePopup, provider, contract }) => {
  const rewardHandler = async () => {
    console.log(`리워드 버튼`);
    // await contract.claimAmount(ASDtokneAddr)????
    // 리워드 받는 함수가 뭔지 잘 모르곘음....
  };
  return (
    <>
      <PopupHeader>트랜잭션 요청</PopupHeader>

      <StakingContent className='reward'>
        <article>
          <ApproveHeader>
            <h4 className='pointBlue'>보상 수령</h4>
          </ApproveHeader>
          <ApproveHeader>
            <p>1298334</p> <p>ASD</p>
          </ApproveHeader>
        </article>
        <article>
          <ApproveNotice>
            현재 공급중인 유동성 토큰을 풀에서 출금하지 않고 분배된 보상만
            수령합니다. 트랜잭션 완료 후 지갑에서 보상을 확인할 수 있습니다.
          </ApproveNotice>
        </article>
      </StakingContent>
      <NextButton
        onClick={() => {
          rewardHandler();
          closePopup(false);
        }}
      >
        수령하기
      </NextButton>
      {/*이용자의 지갑으로 수령해주는 abi 넣어주면 됨*/}
    </>
  );
};
