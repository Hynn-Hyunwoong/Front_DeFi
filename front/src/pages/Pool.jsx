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
      CA: '0xD4A26cD7829228AF19ef347F1292cF2B412ab015',
    },
    {
      token1: { name: '솔라스왑', symbol: 'ASD', logo: 'solar' },
      token2: { name: '이더리움', symbol: 'ETH', logo: 'ethereum' },
      estimateRate: '4.23%',
      CA: '0x1Dc43DC1cBf77aF8fe038a01945B013cfb4E5f85',
    },
    {
      token1: { name: '솔라스왑', symbol: 'ASD', logo: 'solar' },
      token2: { name: '아비트럼', symbol: 'ARB', logo: 'arbitrum' },
      estimateRate: '27.98%',
      CA: '0xd2166f9CbdB60e234AD51B517548E9eC6dcD81a8',
    },
  ];

  return (
    <div>
      <PoolHeader balance={balance} />
      <PoolList tokenData={testTokenData} />
    </div>
  );
};
