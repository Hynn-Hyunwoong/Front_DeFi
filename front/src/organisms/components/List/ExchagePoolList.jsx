import {
  PoolList,
  PoolContentWrap,
  PoolTokenInfo,
  Liquidity,
  RewardToken,
  RewardRate,
  Estimated,
} from './styled';
import { Button } from '../button/Button';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  poolToken1State,
  poolToken2State,
  transactionState,
} from '../../store';
import { useEffect, useRef, useState } from 'react';
import { ethers } from 'ethers';
import FactoryABI from '../../../ABI/contracts/Factory_v1.sol/Factory_v1.json';
import SwapABI from '../../../ABI/contracts/Swap.sol/Swap.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

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

let SwapContract = new ethers.Contract(
  process.env.REACT_APP_SWAP_ADDRESS,
  SwapABI.abi,
  signer,
);

let FacContract = new ethers.Contract(
  process.env.REACT_APP_FACTORY_ADDRESS,
  FactoryABI.abi,
  signer,
);

export const ExchangePoolList = ({ tokenData, setPopup }) => {
  const setToken1 = useSetRecoilState(poolToken1State);
  const setToken2 = useSetRecoilState(poolToken2State);
  const transaction = useRecoilValue(transactionState);
  const previousTransactionTimestampRef = useRef();
  const [monthlyReturnRate, setMonthlyReturnRate] = useState(0);
  const [annualReturnRate, setAnnualReturnRate] = useState(0);

  const [prices, setPrices] = useState([]);
  const [totalPoolAmounts, setTotalPoolAmounts] = useState([]);

  useEffect(() => {
    const dailyReturnRate = 0.22;

    const monthlyReturnRate = ((1 + dailyReturnRate / 100) ** 30 - 1) * 100;
    const annualReturnRate = ((1 + dailyReturnRate / 100) ** 365 - 1) * 100;

    setMonthlyReturnRate(monthlyReturnRate.toFixed(2));
    setAnnualReturnRate(annualReturnRate.toFixed(2));
  }, []);

  const fetchData = async () => {
    try {
      const fetchedPrices = await Promise.all(
        tokens.map(async (token) => {
          const price = await SwapContract.tokenInfo(token.symbol);
          const formattedPrice = ethers.utils.formatUnits(price, 8);
          return formattedPrice;
        }),
      );

      const fetchedTotalPoolAmounts = await Promise.all(
        tokens.map(async (token) => {
          const totalSupply = await FacContract[
            'lqAmount' + token.name.toUpperCase()
          ]();
          const formattedSupply = ethers.utils.formatUnits(totalSupply, 0);
          return formattedSupply;
        }),
      );

      setPrices(fetchedPrices);
      setTotalPoolAmounts(fetchedTotalPoolAmounts);
    } catch (error) {
      console.error('Error while fetching data: ', error);
    }
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (
      transaction &&
      transaction.timestamp !== previousTransactionTimestampRef.current
    ) {
      if (transaction.status === 1) {
        setPopup(false);
      } else if (transaction.status === 0) {
      }
      setPopup(false);
      previousTransactionTimestampRef.current = transaction.timestamp;
    }
  }, [transaction, setPopup]);

  const tokenLogoRender = (item) => (
    <img src={`/images/logo-${item}.png`} alt={`${item}`} />
  );

  const listMap = tokenData.map((v, index) => (
    <PoolList key={index} cursor="auto">
      <PoolContentWrap width="86%">
        <PoolTokenInfo>
          <div className="logo">
            {tokenLogoRender(v.token1.logo)}
            {tokenLogoRender(v.token2.logo)}
          </div>
          <div>
            <div className="name">{`${v.token1.name} + ${v.token2.name}`}</div>
            <div className="symbol">{`${v.token1.symbol} + ${v.token2.symbol}`}</div>
          </div>
        </PoolTokenInfo>
        <Liquidity>
          <p className="mobile">유동성 규모</p>
          <strong className="pointColor">
            ${''}
            {totalPoolAmounts[index] && prices[index]
              ? numberWithCommas(
                  (totalPoolAmounts[index] * prices[index]).toFixed(2),
                )
              : 0}
          </strong>
        </Liquidity>
        <RewardToken>
          <div className="logo">{tokenLogoRender(v.token1.logo)}</div>
        </RewardToken>
        <RewardRate>
          <span>ASD 분배</span> <span>{monthlyReturnRate}%</span>
        </RewardRate>
        <Estimated>
          <p className="mobile">예상 수익률</p>
          <strong>{annualReturnRate}</strong> %
        </Estimated>
      </PoolContentWrap>
      <PoolContentWrap width="14%" className="right">
        <Button
          colors={`blue`}
          width="60px"
          height="30px"
          onClick={() => {
            setToken1(v.token1.symbol);
            setToken2(v.token2.symbol);
            setPopup(true);
          }}
        >
          예치
        </Button>
      </PoolContentWrap>
    </PoolList>
  ));

  return listMap;
};
