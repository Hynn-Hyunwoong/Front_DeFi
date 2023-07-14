import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { BigNumber } from 'ethers';
import {
  ExchangeBottom,
  ExchangeBox,
  ExchangeTop,
} from '../organisms/contents/exchangeSwap';
import useProvider from '../organisms/hooks/ethersProvider';
import { tokenPricesState } from '../organisms/store';

export const Swap = () => {
  const [provider, contract] = useProvider();
  const [prices, setPrices] = useRecoilState(tokenPricesState);

  useEffect(() => {
    (async () => {
      if (!provider) return;
      try {
        const ARBprice = await contract.ArbPrice();
        const ETHprice = await contract.EthPrice();
        const USDTprice = await contract.UsdtPrice();
        const ARB = BigNumber.from(ARBprice).toNumber() / 10 ** 8;
        const ETH = BigNumber.from(ETHprice).toNumber() / 10 ** 8;
        const USDT = BigNumber.from(USDTprice).toNumber() / 10 ** 8;
        setPrices((prevPrices) => ({
          ...prevPrices,
          ARB: ARB,
          ETH: ETH,
          USDT: USDT,
          ASD: 1,
        }));
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, [provider, contract, setPrices]);

  useEffect(() => {
    console.log(prices);
  }, [prices]);

  return (
    <div className='swap'>
      <ExchangeTop />
      <ExchangeBox provider={provider} contract={contract} />
      <ExchangeBottom provider={provider} contract={contract} />
    </div>
  );
};

// // 관리해야 할 상태 : 로딩중인지 아닌지, input에 입력된 값이 from인지 to인지, amount값, token1이 뭔지(from), token2가 뭔지(to)
