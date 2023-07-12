import React, { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  AreaChart,
  XAxis,
  Tooltip,
  YAxis,
  Area,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import { Loader } from '../loader/Loader';
import { ToggleSwitch } from '../../contents/assert/styled';

const APIURL = process.env.REACT_APP_AXIOS_URL;

const fetchCoinData = async ({ queryKey }) => {
  const [, symbol] = queryKey;
  const result = await axios.get(`${APIURL}/token/tokenValue/${symbol}`);
  return result.data;
};

const CustomTooltip = ({ active, payload, label, selectedCurrency }) => {
  if (active && payload && payload.length) {
    const formatter = new Intl.NumberFormat();
    return (
      <div className='custom-tooltip'>
        <p
          className='label'
          style={{
            color: '#333333',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px black',
          }}
        >{`날짜 : ${label}`}</p>
        {selectedCurrency === 'USD' && (
          <>
            <p
              className='intro'
              style={{
                color: '#8884d8',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px black',
              }}
            >{`시작가(USD : $ ${formatter.format(payload[0].value)}`}</p>
            <p
              className='intro'
              style={{
                color: '#82ca9d',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px black',
              }}
            >{`종가(USD) : $ ${formatter.format(payload[1].value)}`}</p>
          </>
        )}
        {selectedCurrency === 'KRW' && (
          <>
            <p
              className='intro'
              style={{
                color: '#ffc658',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px black',
              }}
            >{`시작가(KRW) : ₩ ${formatter.format(payload[0].value)}`}</p>
            <p
              className='intro'
              style={{
                color: '#ff7300',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px black',
              }}
            >{`종가(KRW) : ₩ ${formatter.format(payload[1].value)}`}</p>
          </>
        )}
      </div>
    );
  }
  return null;
};

export const GraphData = ({ symbol }) => {
  const { data, isLoading, isError } = useQuery(
    ['coinData', symbol],
    fetchCoinData
  );
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const modifiedData = data?.map((d) => ({
    ...d,
    date: d.date,
    dailyOpenPriceUSD: Number(`${d.dailyOpenPriceUSD}`).toFixed(2),
    dailyEndPriceUSD: Number(d.dailyEndPriceUSD).toFixed(2),
    dailyOpenPriceKRW: Number(d.dailyOpenPriceKRW).toFixed(2),
    dailyEndPriceKRW: Number(d.dailyEndPriceKRW).toFixed(2),
  }));

  const maxValue = useMemo(() => {
    if (modifiedData) {
      return Math.max(...modifiedData.map((d) => Number(d.dailyEndPriceUSD)));
    } else {
      return 0;
    }
  }, [modifiedData]);

  const handleToggle = (e) => {
    setSelectedCurrency(e.target.checked ? 'KRW' : 'USD');
  };

  if (isLoading) return <Loader />;
  if (isError) return 'An error has occurred';

  return (
    <>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          data={modifiedData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <Tooltip
            content={<CustomTooltip selectedCurrency={selectedCurrency} />}
          />
          <XAxis dataKey='date' axisLine={false} tick={false} />
          <YAxis
            domain={[maxValue * 0.8, maxValue * 1.2]}
            orientation='right'
            axisLine={false}
            tick={false}
          />
          {selectedCurrency === 'USD' && (
            <>
              <Area
                type='monotone'
                dataKey='dailyOpenPriceUSD'
                stroke='#8884d8'
                fill='#d8d784'
              />
              <Area
                type='monotone'
                dataKey='dailyEndPriceUSD'
                stroke='#82ca9d'
                fill='#ca8282'
              />
            </>
          )}
          {selectedCurrency === 'KRW' && (
            <>
              <Area
                type='monotone'
                dataKey='dailyOpenPriceKRW'
                stroke='#d8d784'
                fill='#8884d8'
              />
              <Area
                type='monotone'
                dataKey='dailyEndPriceKRW'
                stroke='#ca8282'
                fill='#82ca9d'
              />
            </>
          )}
        </AreaChart>
      </ResponsiveContainer>
      <ToggleSwitch>
        <input
          type='checkbox'
          checked={selectedCurrency === 'KRW'}
          onChange={handleToggle}
        />
        <span className='slider round'></span>
      </ToggleSwitch>
    </>
  );
};
