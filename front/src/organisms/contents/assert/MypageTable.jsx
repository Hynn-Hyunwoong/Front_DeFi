import { ContentWrap } from './styled';
import { MyCard } from './MypageCard';
import { ASDTokenCard } from './ASDTokenCard';

export const MypageTable = () => {
  const data = [
    {
      name: 'Ethereum',
      logo: 'logo-ethereum.png',
      symbol: 'ETH',
      description: 'Ethereum 공식통화',
      MyValue: '100',
      ValueUSD: '$111',
      ValueKRW: '1231',
    },
    {
      name: 'Arbitrum',
      logo: 'logo-arbitrum.png',
      symbol: 'ARB',
      description: 'Layer 2 의 선두주자',
      MyValue: '100',
      ValueUSD: '$111',
      ValueKRW: '1231',
    },
    {
      name: 'tether',
      logo: 'logo-tether.png',
      symbol: 'USDT',
      description: 'USD 의 가치를 보장',
      MyValue: '100',
      ValueUSD: '$111',
      ValueKRW: '1231',
    },
  ];

  return (
    <>
      <ContentWrap>
        {data.map((item, index) => (
          <MyCard key={index} item={item} />
        ))}
        <ASDTokenCard />
      </ContentWrap>
    </>
  );
};
