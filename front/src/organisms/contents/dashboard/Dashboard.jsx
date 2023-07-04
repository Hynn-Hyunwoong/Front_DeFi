import {
  DashboardWrap,
  DashboardLeftWrap,
  DashboardRightWrap,
  DashboardTrendingWrap,
} from './styled';
import { AreaChart, Area, YAxis, Tooltip, Legend } from 'recharts';

import React from 'react';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const options = {
  scales: {
    y: {
      type: 'linear',
      beginAtZero: true,
    },
  },
};

export const Dashboard = () => {
  return (
    <>
      <DashboardWrap>
        <DashboardLeftWrap>
          <AreaChart
            width={800}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />{'12351231'}
            // Line 대신 Area 사용
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />{' '}
            // Line 대신 Area 사용
          </AreaChart>

          <AreaChart
            width={800}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />{' '}
            // Line 대신 Area 사용
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />{' '}
            // Line 대신 Area 사용
          </AreaChart>
        </DashboardLeftWrap>
        <DashboardRightWrap>
          <AreaChart
            width={800}
            height={600}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />{' '}
            // Line 대신 Area 사용
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />{' '}
            // Line 대신 Area 사용
          </AreaChart>
        </DashboardRightWrap>
      </DashboardWrap>
      <DashboardTrendingWrap></DashboardTrendingWrap>
    </>
  );
};
