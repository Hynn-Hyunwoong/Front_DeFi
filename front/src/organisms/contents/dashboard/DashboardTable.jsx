import {
  AvatarImage,
  AvatarName,
  AvatarTitle,
  AvatarStatus,
  AvatarRole,
  TableHeader,
  Table,
  TableRow,
  TableData,
} from './styled';

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import FactoryABI from '../../../ABI/contracts/Factory_v1.sol/Factory_v1.json';
import SwapABI from '../../../ABI/contracts/Swap.sol/Swap.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const tokens = [
  {
    name: 'USDT',
    avatar: '/images/logo-tether.png',
    symbol: 'USDT',
    address: process.env.REACT_APP_LP_USDT_ADDRESS,
  },
  {
    name: 'ETH',
    avatar: '/images/logo-ethereum.png',
    symbol: 'ETH',
    address: process.env.REACT_APP_LP_ETH_ADDRESS,
  },

  {
    name: 'ARB',
    avatar: '/images/logo-arbitrum.png',
    symbol: 'ARB',
    address: process.env.REACT_APP_LP_ARB_ADDRESS,
  },
];

let SwapContract = new ethers.Contract(
  process.env.REACT_APP_SWAP_ADDRESS,
  SwapABI.abi,
  signer
);

let FacContract = new ethers.Contract(
  process.env.REACT_APP_FACTORY_ADDRESS,
  FactoryABI.abi,
  signer
);

export const DashboardTable = () => {
  const [prices, setPrices] = useState([]);
  const [totalPoolAmounts, setTotalPoolAmounts] = useState([]);
  const [annualReturnRate, setAnnualReturnRate] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPrices = await Promise.all(
        tokens.map(async (token) => {
          const price = await SwapContract.tokenInfo(token.symbol);
          const formattedPrice = ethers.utils.formatUnits(price, 8);
          return formattedPrice;
        })
      );

      const fetchedTotalPoolAmounts = await Promise.all(
        tokens.map(async (token) => {
          const totalSupply = await FacContract[
            'lqAmount' + token.name.toUpperCase()
          ]();
          const formattedSupply = ethers.utils.formatUnits(totalSupply, 0);
          return formattedSupply;
        })
      );

      const dailyReturnRate = 0.22;
      const annualReturnRate = ((1 + dailyReturnRate / 100) ** 365 - 1) * 100;

      setPrices(fetchedPrices);
      setTotalPoolAmounts(fetchedTotalPoolAmounts);
      setAnnualReturnRate(annualReturnRate.toFixed(2));
    };

    fetchData();
  }, []);

  const TokenData = tokens.map((token, index) => ({
    avatar: token.avatar,
    name: token.name,
    totalDeposit: (totalPoolAmounts[index] * prices[index]).toLocaleString(
      undefined,
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    ),
    liquidityPoolToken: Number(totalPoolAmounts[index]).toLocaleString(),
    volume: Number(totalPoolAmounts[index]).toLocaleString(),
    fee: '1,62Gwei',
    estimatedYield: annualReturnRate,
  }));

  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader></TableHeader>
          <TableHeader>토큰명</TableHeader>
          <TableHeader>총 예치규모</TableHeader>
          <TableHeader className='liquidityPoolToken'>
            유동성 풀 토큰
          </TableHeader>
          <TableHeader className='volume'>거래량</TableHeader>
          <TableHeader className='fee'>수수료</TableHeader>
          <TableHeader>예상 수익률</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {TokenData.map((data, index) => (
          <TableRow key={index}>
            <TableData>
              <AvatarImage src={data.avatar} />
            </TableData>
            <TableData>
              <AvatarName>{data.name}</AvatarName>
            </TableData>
            <TableData>
              <AvatarTitle>{data.totalDeposit} $</AvatarTitle>
            </TableData>
            <TableData className='liquidityPoolToken'>
              <AvatarStatus>{data.liquidityPoolToken}</AvatarStatus>
            </TableData>
            <TableData className='volume'>
              <AvatarRole>{data.volume}</AvatarRole>
            </TableData>
            <TableData className='fee'>
              <AvatarRole>{data.fee}</AvatarRole>
            </TableData>
            <TableData>
              <AvatarRole>{data.estimatedYield}%</AvatarRole>
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
