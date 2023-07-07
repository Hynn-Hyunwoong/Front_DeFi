import { useRecoilState } from 'recoil';
import {
  Button,
  InputBox,
  Popup,
  Xbutton,
  StakingOptionList,
  Radio,
} from '../../components';
import {
  StakingHeader,
  StakingContent,
  StakingListDiv,
  Notice,
  Summary,
  InputBalance,
  InputValue,
  NextButton,
} from './styled';
import {
  optionTermsState,
  optionTimesState,
  noticeChenckState,
  nextChenckState,
} from '../../store';

const testData = {
  ASDbalance: '442',
};

const buttonList = ['입금하기', '거래하기'];

export const StakingPopup = ({ option, reward }) => {
  const [optionTerm] = useRecoilState(optionTermsState);
  const [optionTimes] = useRecoilState(optionTimesState);
  const [noticeChenck, setNoticeChenck] = useRecoilState(noticeChenckState);
  const [nextChenck, setNextCheck] = useRecoilState(nextChenckState);

  // 날짜 계산
  const afterDate = typeof optionTerm === 'number' ? optionTerm * 30 : null;
  const optionDate = new Date();
  optionDate.setDate(optionDate.getDate() + afterDate);

  const formattedDate =
    afterDate === null
      ? '12+a개월'
      : optionDate.toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });

  const buttonMap = buttonList.map((v) => {
    return (
      <Button colors='lightBlue' width='60px' height='20px'>
        {v}
      </Button>
    );
  });

  return (
    <>
      <Popup width='520px' padding={'0'}>
        <StakingHeader>
          <h3>스테이킹</h3>
          <Xbutton />
        </StakingHeader>
        <StakingContent>
          <article className='inputValue'>
            <InputValue>
              <InputBox placeholder={'정수 단위로만 입력이 가능합니다'} /> ASD
            </InputValue>
            <InputBalance>
              <div className='balance'>
                <span>보유</span>
                <span>{testData.ASDbalance}</span>
              </div>
              <div className='button'>{buttonMap}</div>
            </InputBalance>
          </article>
          <article className='option'>
            <h5 style={{ marginBottom: '10px' }}>스테이킹 기간 선택</h5>
            <StakingOptionList optionList={option} />
          </article>
          <article className='detailInfo'>
            <Notice>
              <p>
                • 4개월, 8개월, 12개월 동안 스테이킹 하여 각각 1배, 2배, 4배의
                효율로 ASD 스테이킹 보상, 드랍스 에어드랍 토큰 보상, 풀 거래
                수수료 보상을 획득할 수 있습니다.
              </p>
              <p className='grey'>
                • 원하는 시점에 8배의 스테이킹 효율로 변경 가능하며, 변경
                시점부터 계속해서 ASD를 스테이킹하게 됩니다.
              </p>
            </Notice>
            <Summary>
              <div className='summaryStaking'>
                <StakingListDiv>
                  <strong>스테이킹 기간</strong>
                  <strong className='pointBlue'>{optionTerm}개월</strong>
                </StakingListDiv>
                <StakingListDiv>
                  <strong>스테이킹 종료 일시</strong>
                  <strong className='pointBlue'>{formattedDate}</strong>
                </StakingListDiv>
                <StakingListDiv>
                  <strong>추가 투표권</strong>
                  <strong className='pointBlue'>{2 * optionTimes} vASD</strong>
                </StakingListDiv>
                <StakingListDiv>
                  <strong>예상 수익률</strong>
                  <strong>
                    18.64 %
                    {/* {'스테이킹수익률+드랍스토큰보상+거래수수료보상'} */}
                  </strong>
                </StakingListDiv>
              </div>
              <div className='summaryReward'>
                <StakingListDiv>
                  <p>스테이킹 수익률</p>
                  <p>9.54 %</p>
                </StakingListDiv>
                <StakingListDiv>
                  <p>드랍스 토큰 보상</p>
                  <p>8.87 %</p>
                </StakingListDiv>
                <StakingListDiv>
                  <p>거래 수수료 보상</p>
                  <p>0 %</p>
                </StakingListDiv>
              </div>
            </Summary>
          </article>
          <article className='check'>
            <Radio checkItem={noticeChenck} setFunction={setNoticeChenck}>
              <strong>스테이킹 이용 유의사항</strong>
            </Radio>
            <Radio checkItem={nextChenck} setFunction={setNextCheck}>
              <strong>모두 확인하였으며, 계속해서 진행합니다.</strong>
            </Radio>
          </article>
        </StakingContent>
        <NextButton>다음 단계로</NextButton>
      </Popup>
    </>
  );
};
