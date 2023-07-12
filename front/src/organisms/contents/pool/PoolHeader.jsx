import { HeaderDiv } from '../governance/styled';
import { Box } from '../../components';
import { PoolSection, PoolHeaderDiv, PoolHeaderBoxDiv } from './styled';

export const PoolHeader = ({ balance }) => {
  return (
    <PoolSection>
      <PoolHeaderDiv>
        <HeaderDiv>
          <h1>
            보유한 자산을 손쉽게 <strong className='pointColor'>예치</strong>
            하세요
          </h1>
        </HeaderDiv>
        <PoolHeaderBoxDiv>
          <Box colors='green' width='450px'>
            <PoolHeaderBoxDiv className='header'>
              <h3>You Earned</h3>
              <span className='light'>매 블록당 보상 분배</span>
            </PoolHeaderBoxDiv>
            <PoolHeaderBoxDiv className='poolStatus'>
              <h4>수령 가능</h4>
              <div className='light'>
                <span>
                  <strong className='point'>{balance.ASD} </strong>
                  ASD
                </span>
                <br />
                <p className='right'>~ $ 1</p>
              </div>
            </PoolHeaderBoxDiv>
            <PoolHeaderBoxDiv>
              <span>누적 보상</span>
              <span>1234 ASD</span>
            </PoolHeaderBoxDiv>
          </Box>
        </PoolHeaderBoxDiv>
      </PoolHeaderDiv>
    </PoolSection>
  );
};
