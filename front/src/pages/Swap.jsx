import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { ethers } from 'ethers';
import {
  ExchangeBottom,
  ExchangeBox,
  ExchangeTop,
} from '../organisms/contents/exchangeSwap';
import useProvider from '../organisms/hooks/ethersProvider';
import { tokenPricesState } from '../organisms/store';
import swapABI from '../ABI/contracts/Swap.sol/Swap.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

export const Swap = () => {
  const [provider, contract] = useProvider();
  // eslint-disable-next-line no-unused-vars
  const [prices, setPrices] = useRecoilState(tokenPricesState);

  const tokens = [
    {
      name: 'Usdt',
      symbol: 'USDT',
      address: process.env.REACT_APP_LP_USDT_ADDRESS,
    },
    {
      name: 'Eth',
      symbol: 'ETH',
      address: process.env.REACT_APP_LP_ETH_ADDRESS,
    },

    {
      name: 'Arb',
      symbol: 'ARB',
      address: process.env.REACT_APP_LP_ARB_ADDRESS,
    },
  ];

  let swapContract = new ethers.Contract(
    process.env.REACT_APP_SWAP_ADDRESS,
    swapABI.abi,
    signer,
  );

  const fetchData = async () => {
    try {
      const fetchedPrices = await Promise.all(
        tokens.map(async (token) => {
          const price = await swapContract.tokenInfo(token.symbol);
          const formattedPrice = ethers.utils.formatUnits(price, 8);
          return formattedPrice;
        }),
      );
      setPrices({
        ETH: fetchedPrices[1],
        USDT: fetchedPrices[0],
        ARB: fetchedPrices[2],
        ASD: 1,
      });
    } catch (error) {
      console.error('Error while fetching data: ', error);
    }
  };

  useEffect(() => {
    (async () => {
      if (!provider) return;
      try {
        fetchData();
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, [provider, contract]);

  return (
    <div className="swap">
      <ExchangeTop />
      <ExchangeBox provider={provider} contract={contract} />
      <ExchangeBottom provider={provider} contract={contract} />
    </div>
  );
};
