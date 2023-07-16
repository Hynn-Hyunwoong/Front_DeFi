import { Box, Button } from '../../components';
import { HeaderSection, SectionStyled } from '../governance/styled';
import {
  BoxDivBalance,
  BoxSectionBalance,
  FlexDiv,
  ButtonDiv,
  BalanceDiv,
  ExpectInfoDiv,
} from './styled';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { LPtokenState, stakingPopup, stakingStep } from '../../store';

export const StakingBalance = ({ stakingRewardRate }) => {
  const setStaking = useSetRecoilState(stakingPopup);
  const setStep = useSetRecoilState(stakingStep);
  const { ARBLP, ETHLP, USDTLP, vASD } = useRecoilValue(LPtokenState);
  const stakingAlert = () => alert(`수량이 부족합니다.`);

  const state = {
    staking: ARBLP || ETHLP || USDTLP,
    unstaking: true, // 기간이 되면 true가 되어야 하는데...
    reward: ARBLP || ETHLP || USDTLP,
  };

  // STATE는 로그인이 되었느냐, 혹은 수량이 있느냐 확인해서 설정해줘야 함
  const renderButton = (width, title, state, popup) => (
    <Button
      colors={state ? 'green' : 'grey'}
      height='35px'
      width={`${width}px`}
      onClick={
        state
          ? () => {
              setStaking(true);
              setStep(popup);
            }
          : stakingAlert
      }
    >
      <h3>{title}</h3>
    </Button>
  );

  const renderHead = (title, buttonGroup) => (
    <FlexDiv className='head'>
      <h4>{title}</h4>
      {buttonGroup}
    </FlexDiv>
  );

  const renderBalance = (token, amount) => (
    <BalanceDiv className='balance'>
      <span>{token}</span>
      <span>
        <strong>{amount}</strong>
        ASD
      </span>
    </BalanceDiv>
  );

  const renderExpectInfo = (label, value, isHighlighted) => (
    <ExpectInfoDiv className='expectInfo'>
      <span>{label}</span>
      <span className={isHighlighted ? 'pointColor' : ''}>
        <strong>{value}</strong>
      </span>
    </ExpectInfoDiv>
  );

  return (
    <SectionStyled>
      <HeaderSection>
        <Box colors='white' width='740px' height='100%'>
          <BoxDivBalance>
            <BoxSectionBalance className='staking' borderColor='#e6f4fe'>
              {renderHead(
                '스테이킹 수량',
                <ButtonDiv>
                  {renderButton(
                    '100',
                    '언스테이킹',
                    state.unstaking,
                    'unstaking'
                  )}
                  {renderButton('90', '스테이킹', state.staking, 'step1')}
                </ButtonDiv>
              )}
              {renderBalance('ARB LP Token', ARBLP)}
              {renderBalance('ETH LP Token', ETHLP)}
              {renderBalance('USDT LP Token', USDTLP)}
              {renderExpectInfo(
                '예상 수익률',
                `연 ${stakingRewardRate.min}% ~ 연 ${stakingRewardRate.max}%`,
                true
              )}
            </BoxSectionBalance>
            <BoxSectionBalance className='reward'>
              {renderHead(
                '보상 수량',
                renderButton('90', '보상 수령', state.reward, 'reward')
              )}
              {renderBalance('total', ARBLP)}
              {renderExpectInfo('누적', `${ARBLP} ASD`)}
            </BoxSectionBalance>
          </BoxDivBalance>
        </Box>
      </HeaderSection>
    </SectionStyled>
  );
};
