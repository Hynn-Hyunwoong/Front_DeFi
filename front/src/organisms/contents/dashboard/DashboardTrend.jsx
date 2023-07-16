import {
  TrendingBox,
  TrendingTitle,
  TrendingEmphasis,
  TrendingVariation,
  TrendingVariationIcon,
  TrendingTopic2,
  DashboardContainer,
  TablesWrapper,
} from './styled';
import axios from 'axios';
import { useEffect, useState } from 'react';

const APIURL = process.env.REACT_APP_AXIOS_URL;
const symbols = ['ETH', 'ARB', 'USDT', 'ASD'];
const names = ['Ethereum', 'Arbitrum', 'Tether(USDT)', 'Solar ASD']; // names for each symbol

const getCoinData = async (symbol) => {
  const currentlyCoinPriceResponse = await axios.get(
    `${APIURL}/token/today/${symbol}`,
  );
  const trendingResponse = await axios.get(
    `${APIURL}/token/priceChangePercentage/${symbol}`,
  );
  return {
    currentlyCoinPrice: currentlyCoinPriceResponse.data.dailyEndPriceUSD,
    trending: trendingResponse.data.priceChangePercentage,
  };
};

export const DashboardTrend = () => {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    const fetchTrendingData = async () => {
      const newTrendingData = [];
      for (let i = 0; i < symbols.length; i++) {
        const coinData = await getCoinData(symbols[i]);
        newTrendingData.push({
          title: names[i],
          value: parseFloat(coinData.currentlyCoinPrice).toFixed(1),
          trending: parseFloat(coinData.trending).toFixed(3),
          isPositive: coinData.trending >= 1, // updated this condition
        });
      }
      setTrendingData(newTrendingData);
    };

    fetchTrendingData();
  }, []);

  return (
    <>
      <DashboardContainer>
        <TrendingTopic2>Token 실시간 가격 현황</TrendingTopic2>
        <TablesWrapper>
          {trendingData.map((data, index) => (
            <TrendingBox key={index}>
              <TrendingTitle>{data.title}</TrendingTitle>
              <TrendingEmphasis>$ {data.value}</TrendingEmphasis>
              <TrendingVariation isPositive={data.isPositive}>
                <TrendingVariationIcon>
                  {data.isPositive ? '+' : '-'} {/* Updated this output */}
                </TrendingVariationIcon>
                {Math.abs(data.trending)}%{' '}
                {/* Get the absolute value of trending */}
              </TrendingVariation>
            </TrendingBox>
          ))}
        </TablesWrapper>
      </DashboardContainer>
    </>
  );
};
