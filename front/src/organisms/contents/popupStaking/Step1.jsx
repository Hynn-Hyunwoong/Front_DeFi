import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
import {
  Button,
  InputBox,
  StakingOptionList,
  Radio,
  PopupHeader,
} from '../../components';
import {
  StakingContent,
  StakingListDiv,
  Notice,
  Summary,
  InputBalance,
  InputValue,
  NextButton,
  InputValueWrap,
  SelectStyled,
} from './styled';
import {
  LPtokenState,
  optionTermsState,
  optionTimesState,
  selectedLPTokenState,
  stakingValueState,
} from '../../store';

// const testData = {
//   ASDbalance: 442,
// };

const buttonList = ['입금하기', '거래하기'];

export const Step1 = ({ option, reward, closePopup, setStep, date }) => {
  // eslint-disable-next-line no-unused-vars
  const LPtokenAmount = useRecoilValue(LPtokenState);
  const optionTime = useRecoilValue(optionTimesState);
  const [optionTerm, setoptionTerm] = useRecoilState(optionTermsState);
  const [stakingValue] = useRecoilState(stakingValueState);
  const [noticeChenck, setNoticeChenck] = useState(false);
  const [nextChenck, setNextCheck] = useState(false);
  const [lpToken, setLpToken] = useRecoilState(selectedLPTokenState);
  // const [lpToken, setLpToken] = useState('');

  const buttonMap = buttonList.map((v, index) => {
    return (
      <Button colors='lightBlue' width='60px' height='20px' key={index}>
        {v}
      </Button>
    );
  });

  const LpTokenSelectHandler = (e) => {
    setLpToken(e.target.value);
  };

  return (
    <>
      <PopupHeader>스테이킹</PopupHeader>
      <StakingContent>
        <article className='inputValue'>
          <InputValueWrap>
            <SelectStyled onChange={LpTokenSelectHandler}>
              <option>선택</option>
              <option value='ARBLP'>ARB LP Token</option>
              <option value='ETHLP'> ETH LP Token</option>
              <option value='USDTLP'>USDT LP Token</option>
            </SelectStyled>
            <InputValue>
              <InputBox placeholder={'정수 단위로만 입력이 가능합니다'} /> ASD
              {/*입력한 값은 다음 컴포넌트에 넘겨줘야 함*/}
            </InputValue>
          </InputValueWrap>
          <InputBalance>
            <div className='balance'>
              <span>보유</span>
              <span>{lpToken ? LPtokenAmount[lpToken] : '0'}</span>
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
              • 원하는 시점에 8배의 스테이킹 효율로 변경 가능하며, 변경 시점부터
              계속해서 ASD를 스테이킹하게 됩니다.
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
                <strong className='pointBlue'>{date}</strong>
              </StakingListDiv>
              <StakingListDiv>
                <strong>예상 수익률</strong>
                <strong>18.64 %</strong>
              </StakingListDiv>
            </div>
            <div className='summaryReward'>
              <StakingListDiv>
                <p>스테이킹 수익률</p>
                <p>9.54 %</p>
              </StakingListDiv>
              <StakingListDiv>
                <p>지분율</p>
                <p>8.87 %</p>
              </StakingListDiv>
              <StakingListDiv>
                <p>획득 투표권</p>
                <p>{1 * optionTime} vASD</p>
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
      <NextButton
        onClick={() => {
          if (Number(stakingValue) > LPtokenAmount[lpToken]) {
            alert('수량이 부족합니다'); // 데이터 타입 잘 보기! => number가 맞는지
            return;
          }
          noticeChenck && nextChenck && setStep('step2');
        }}
      >
        다음 단계로
      </NextButton>
    </>
  );
};
