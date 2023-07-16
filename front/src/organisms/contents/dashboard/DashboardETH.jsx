import { useEffect, useState } from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import SwapABI from '../../../ABI/contracts/Swap.sol/Swap.json';
import FacABI from '../../../ABI/contracts/Factory_v1.sol/Factory_v1.json';
import TokenABI from '../../../ABI/contracts/SelfToken.sol/SelfToken.json';
import {
  TrendingBox,
  TrendingTitle,
  TrendingEmphasis,
  TrendingVariation,
  TrendingVariationIcon,
  TrendingTopic2,
  DashboardContainer,
  TablesWrapperB,
} from './styled';

const provider = new ethers.providers.Web3Provider(window.ethereum);

let SwapContract = new ethers.Contract(
  process.env.REACT_APP_SWAP_ADDRESS,
  SwapABI.abi,
  provider,
);

let FacContract = new ethers.Contract(
  process.env.REACT_APP_FACTORY_ADDRESS,
  FacABI.abi,
  provider,
);

let LPContract = new ethers.Contract(
  process.env.REACT_APP_LP_ETH_ADDRESS,
  TokenABI.abi,
  provider,
);

const fetchData = async () => {
  const previousDataResponse = await axios.get(
    `${process.env.REACT_APP_AXIOS_URL}/dashboard/findDate/ETH`,
  );

  const amount = await FacContract.lqAmountETH();
  const supply = Number(ethers.utils.formatUnits(amount, 0));

  const value = await SwapContract.tokenInfo('ETH');
  const formatted = Number(ethers.utils.formatUnits(value, 8));

  const LpTotalSupply = await LPContract.totalSupply();
  const LpTokenAmount = Number(ethers.utils.formatEther(LpTotalSupply));

  const TotalDeposit = supply * formatted;
  const TotalSupply = supply;
  const TotalRewardLp = LpTokenAmount * formatted;

  return {
    previousData: previousDataResponse.data,
    currentData: {
      TotalDeposit,
      TotalSupply,
      TotalRewardLp,
    },
  };
};

const symbols = ['TotalDeposit', 'TotalSupply', 'TotalRewardLp'];
const names = ['총 예치 규모', '총 예치 코인 수량', '리워드 제공 토큰 규모']; // names for each symbol

export const DashboardETH = () => {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    const fetchTrendingData = async () => {
      const { previousData, currentData } = await fetchData();

      const newTrendingData = [];
      for (let i = 0; i < symbols.length; i++) {
        const previous = previousData[symbols[i]];
        const current = currentData[symbols[i]];

        newTrendingData.push({
          title: names[i],
          value: current.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
          trending: (((current - previous) / previous) * 100).toFixed(2),
          isPositive: current >= previous,
        });
      }
      setTrendingData(newTrendingData);
    };

    fetchTrendingData();
  }, []);

  return (
    <>
      <DashboardContainer>
        <TrendingTopic2>ASD & Ethereum Dashboard</TrendingTopic2>
        <TablesWrapperB>
          {trendingData.map((data, index) => (
            <TrendingBox key={index}>
              <TrendingTitle>{data.title}</TrendingTitle>
              <TrendingEmphasis>$ {data.value}</TrendingEmphasis>
              <TrendingVariation isPositive={data.isPositive}>
                <TrendingVariationIcon>
                  {data.isPositive ? '+' : '-'}
                </TrendingVariationIcon>
                {Math.abs(data.trending)}%{' '}
              </TrendingVariation>
            </TrendingBox>
          ))}
        </TablesWrapperB>
      </DashboardContainer>
    </>
  );
};
