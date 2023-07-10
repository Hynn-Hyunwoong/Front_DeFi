import { useRecoilState } from 'recoil';
import { Search, Button, PoolList } from '../../components';
import { Wrap } from '../governance/styled';
import { MyVoteSection, FlexDiv, PoolListHeaderDiv } from './styled';
import { searchKeyword } from '../../store';

export const StakingPoolList = () => {
  const [keyword] = useRecoilState(searchKeyword);
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

  const filteredData = testTokenData.filter(
    (item) =>
      item.token1.symbol.toLowerCase().includes(keyword.toLowerCase()) ||
      item.token2.symbol.toLowerCase().includes(keyword.toLowerCase()) ||
      item.token1.name.includes(keyword) ||
      item.token2.name.includes(keyword)
  );

  return (
    <Wrap>
      <MyVoteSection
        height='100%'
        colors='white'
        style={{ marginBottom: '70px' }}
      >
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
          <PoolList tokenData={keyword ? filteredData : testTokenData} />
        </div>
      </MyVoteSection>
    </Wrap>
  );
};
