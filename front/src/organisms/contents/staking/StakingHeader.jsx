import { Box, Button } from '../../components';
import { Wrap, HeaderSection, HeaderDiv } from '../governance/styled';
import {
  FlexDiv,
  BoxSection,
  StakingListDiv,
  ExpectedRewardDiv,
} from './styled';

export const StakingHeader = ({ reward }) => {
  const stakingList = reward.map((v) => {
    return (
      <StakingListDiv key={v.label}>
        <h4>{v.label}</h4>
        <p>
          <strong>{v.percent} </strong> %
        </p>
      </StakingListDiv>
    );
  });

  return (
    <Wrap>
      <HeaderSection>
        <HeaderDiv>
          <h1>
            ASD 스테이킹으로 <br />
            <strong className='pointColor'>추가 보상</strong>을 획득하세요
          </h1>
        </HeaderDiv>
        <HeaderDiv>
          <Box colors='green' width='450px' height='130px'>
            <FlexDiv>
              <BoxSection>
                <div>{stakingList}</div>
                <Button
                  colors='greenBox'
                  width='100%'
                  height='30px'
                  marginTop='10px'
                >
                  보상 획득 방법
                </Button>
              </BoxSection>
              <BoxSection>
                <ExpectedRewardDiv>
                  <h4>예상수익률</h4>
                  <div>
                    <p>
                      연 <strong>5.79</strong> %
                    </p>
                    <p> ~ </p>
                    <p>
                      연 <strong>46.36</strong> %
                    </p>
                  </div>
                </ExpectedRewardDiv>
              </BoxSection>
            </FlexDiv>
          </Box>
        </HeaderDiv>
      </HeaderSection>
    </Wrap>
  );
};
