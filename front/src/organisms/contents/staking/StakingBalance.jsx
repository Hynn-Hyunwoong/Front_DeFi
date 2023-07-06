import { Box, Button } from '../../components';
import { HeaderSection, Wrap } from '../governance/styled';
import {
  BoxDivBalance,
  BoxSectionBalance,
  FlexDiv,
  ButtonDiv,
  BalanceDiv,
  ExpectInfoDiv,
} from './styled';

export const StakingBalance = () => {
  const test = { stakingAmount: '2341235123', rewardAmount: '123' };

  // STATE는 로그인이 되었느냐, 혹은 수량이 있느냐 확인해서 설정해줘야 함
  const renderButton = (width, title, state) => (
    <Button
      colors={state ? 'green' : 'grey'}
      height='35px'
      width={`${width}px`}
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

  const renderBalance = (amount) => (
    <BalanceDiv className='balance'>
      <strong>{amount}</strong> ASD
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
    <Wrap>
      <HeaderSection>
        <Box colors='white' width='740px' height='130px'>
          <BoxDivBalance>
            <BoxSectionBalance className='staking' borderColor='#e6f4fe'>
              {renderHead(
                '스테이킹 수량',
                <ButtonDiv>
                  {renderButton('100', '언스테이킹', false)}
                  {renderButton('90', '스테이킹', true)}
                </ButtonDiv>
              )}
              {renderBalance(test.stakingAmount)}
              {renderExpectInfo('예상 수익률', '연 2.39% ~ 연 19.14%', true)}
            </BoxSectionBalance>
            <BoxSectionBalance className='reward'>
              {renderHead('보상 수량', renderButton('90', '보상 수령'))}
              {renderBalance(test.rewardAmount)}
              {renderExpectInfo('누적', '384927394 ASD')}
            </BoxSectionBalance>
          </BoxDivBalance>
        </Box>
      </HeaderSection>
    </Wrap>
  );
};
