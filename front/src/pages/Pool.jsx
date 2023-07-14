import { useRecoilState } from 'recoil';
import { PoolHeader, PoolList } from '../organisms/contents/pool';
import { balanceState } from '../organisms/store';

export const Pool = () => {
  const [balance] = useRecoilState(balanceState);
  const testTokenData = [
    {
      token1: { name: '솔라스왑', symbol: 'ASD', logo: 'solar' },
      token2: { name: '테더', symbol: 'USDT', logo: 'tether' },
      estimateRate: '12.65%',
      CA: '0x5471783860098f0366d7d76a4739239966f66a21',
    },
    {
      token1: { name: '솔라스왑', symbol: 'ASD', logo: 'solar' },
      token2: { name: '이더리움', symbol: 'ETH', logo: 'ethereum' },
      estimateRate: '4.23%',
      CA: '0x5471783860098f0366d7d76a4739239966f66ae4',
    },
    {
      token1: { name: '솔라스왑', symbol: 'ASD', logo: 'solar' },
      token2: { name: '아비트럼', symbol: 'ARB', logo: 'arbitrum' },
      estimateRate: '27.98%',
      CA: '0x5471783860098f0366d7d76a4739239966f66469',
    },
  ];

  return (
    <div>
      <PoolHeader balance={balance} />
      <PoolList tokenData={testTokenData} />
    </div>
  );
};
