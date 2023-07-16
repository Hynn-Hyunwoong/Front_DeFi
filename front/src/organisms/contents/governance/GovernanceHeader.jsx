import { useRecoilState } from 'recoil';
import { Box, Button } from '../../components';
import { GovToken } from '../../store';
import {
  VoteTitleDiv,
  ButtonStyled,
  AmountDiv,
  HeaderSection,
  SectionStyled,
  HeaderDiv,
} from './styled';

export const GovernanceHeader = () => {
  const [gov] = useRecoilState(GovToken)

  return (
    <SectionStyled>
      <HeaderSection>
        <HeaderDiv>
          <h1>
            SOLARswap에 <strong className='pointColor'>제안</strong> 등록하기
          </h1>
          <Button
            colors='blueBox'
            width='150px'
            height='35px'
            marginTop='20px'
            to='https://docs.klayswap.com/v/kr/product/governance'
          >
            거버넌스 정책 상세보기
          </Button>
        </HeaderDiv>
        <HeaderDiv>
          <Box colors='green' width='260px' height='60px'>
            <VoteTitleDiv>
              <h5>보유 투표권</h5>
              <ButtonStyled>
                <h6>투표권 획득 방법 ❔</h6>
              </ButtonStyled>
            </VoteTitleDiv>
            <AmountDiv>
              <span>
                <strong>{parseInt(gov)}</strong> vKSP
              </span>
            </AmountDiv>
          </Box>
        </HeaderDiv>
      </HeaderSection>
    </SectionStyled>
  );
};
