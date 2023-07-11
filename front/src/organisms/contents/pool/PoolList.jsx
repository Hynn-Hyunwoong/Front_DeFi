import { PoolSection, PoolTableHeader } from './styled';
import { Search, ExchangePoolList, Button } from '../../components';
import { MyVoteSection, PoolListHeaderDiv, FlexDiv } from '../staking/styled';

export const PoolList = () => {
  const testTokenData = [
    {
      token1: { name: '솔라스왑', symbol: 'ASD', logo: 'solar' },
      token2: { name: '테더', symbol: 'USDT', logo: 'tether' },
      estimateRate: '12.65%',
    },
    {
      token1: { name: '솔라스왑', symbol: 'ASD', logo: 'solar' },
      token2: { name: '이더리움', symbol: 'ETH', logo: 'ethereum' },
      estimateRate: '4.23%',
    },
    {
      token1: { name: '솔라스왑', symbol: 'ASD', logo: 'solar' },
      token2: { name: '아비트럼', symbol: 'ARB', logo: 'arbitrum' },
      estimateRate: '27.98%',
    },
  ];
  return (
    <>
      <PoolSection style={{ marginTop: '30px' }}>
        <MyVoteSection
          height='100%'
          colors='white'
          style={{ marginBottom: '30px' }}
        >
          <PoolListHeaderDiv>
            <FlexDiv>
              <h3>전체 목록</h3>
            </FlexDiv>
            <Search placeholder='토큰명, 심볼 검색' />
          </PoolListHeaderDiv>
          <PoolListHeaderDiv height='30px' className='poolList'>
            <PoolTableHeader>
              <div className='pair'>페어명</div>
              <div className='liquidity'>유동성 규모</div>
              <div className='rewardToken'>분배 토큰</div>
              <div className='rewardRate'>수익률 상세</div>
              <div className='estimated'>예상 수익률</div>
            </PoolTableHeader>
          </PoolListHeaderDiv>
          <div>
            <ExchangePoolList tokenData={testTokenData} />
          </div>
        </MyVoteSection>
        <Button colors='blueBox' width='100%' height='50px'>
          <strong>➕ 유동성 풀 추가</strong>
        </Button>
      </PoolSection>
    </>
  );
};
