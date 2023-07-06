import { Search, Button, PoolList } from '../../components';
import { Wrap } from '../governance/styled';
import { MyVoteSection, FlexDiv, PoolListHeaderDiv } from './styled';

export const StakingPoolList = () => {
  const testTokenData = [
    {
      token1: 'ASD',
      token2: 'USTD',
      estimateRate: '12.65%',
    },
    {
      token1: 'ASD',
      token2: 'ETH',
      estimateRate: '4.23%',
    },
  ];

  return (
    <Wrap>
      <MyVoteSection height='100%' colors='white'>
        <PoolListHeaderDiv>
          <FlexDiv>
            <h3>풀 투표 목록</h3>
            <Button colors='blueBox' width='110px' height='30px'>
              <strong>실시간 투표 현황</strong>
            </Button>
          </FlexDiv>
          <Search placeholder='토큰명, 심볼 검색' />
        </PoolListHeaderDiv>
        <div>
          <PoolList tokenData={testTokenData} />
        </div>
      </MyVoteSection>
    </Wrap>
  );
};
