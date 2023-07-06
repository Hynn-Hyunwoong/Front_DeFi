import {
  DashboardWrap,
  DashboardLeftWrap,
  DashboardRightWrap,
  DashboardTrendingWrap,
  TrendingBox,
  TrendingTitle,
  TrendingEmphasis,
  TrendingVariation,
  TrendingVariationIcon,
  AvatarCard,
  AvatarImage,
  AvatarContent,
  AvatarName,
  AvatarDescription,
  AvatarTitle,
  AvatarStatus,
  AvatarRole,
  TableHeader,
  HeaderItem,
} from './styled';
import {
  Card,
  Img,
  GraphWrap,
  Infos,
  Text,
  Stats,
  Links,
} from '../assert/styled';
import { GraphData } from '../../components';
import { Button } from '../../components';
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
  const trendingData = [
    {
      title: 'Subscribers',
      value: '4.7K',
      trending: '12',
      isPositive: true,
    },
    {
      title: 'Subscribers',
      value: '4.7K',
      trending: '12',
      isPositive: true,
    },
    {
      title: 'Subscribers',
      value: '4.7K',
      trending: '12',
      isPositive: true,
    },
    {
      title: 'Subscribers',
      value: '4.7K',
      trending: '12',
      isPositive: true,
    },
  ];

  const avatarData = [
    {
      avatar: 'https://your-avatar-url.com',
      name: 'Your Name',
      title: 'Main Title',
      status: 'Active',
      role: 'Member',
    },
    {
      avatar: 'https://your-avatar-url.com',
      name: 'Your Name',
      title: 'Main Title',
      status: 'Active',
      role: 'Member',
    },
    {
      avatar: 'https://your-avatar-url.com',
      name: 'Your Name',
      title: 'Main Title',
      status: 'Active',
      role: 'Member',
    },
    {
      avatar: 'https://your-avatar-url.com',
      name: 'Your Name',
      title: 'Main Title',
      status: 'Active',
      role: 'Member',
    },
  ];
  return (
    <>
      <DashboardWrap>
        <DashboardLeftWrap>
          <Card>
            <Img>
              <img src="" alt="" />
            </Img>
            <GraphWrap>
              <AreaChart
                width={'100%'}
                height={'100%'}
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
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />{' '}
              </AreaChart>
            </GraphWrap>
            <Infos>
              <h2>1</h2>
              <h4>2</h4>
            </Infos>
            <Text>내 보유수량 : </Text>
            <Stats></Stats>
          </Card>

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
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />{' '}
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
      <DashboardTrendingWrap>
        {trendingData.map((data, index) => (
          <TrendingBox key={index}>
            <TrendingTitle>{data.title}</TrendingTitle>
            <TrendingEmphasis>{data.value}</TrendingEmphasis>
            <TrendingVariation isPositive={data.isPositive}>
              <TrendingVariationIcon>
                {data.isPositive ? '↑' : '↓'}
              </TrendingVariationIcon>
              {data.trending}%
            </TrendingVariation>
          </TrendingBox>
        ))}
      </DashboardTrendingWrap>
      <TableHeader>
        <HeaderItem>Avatar</HeaderItem>
        <HeaderItem>Name</HeaderItem>
        <HeaderItem>Title</HeaderItem>
        <HeaderItem>Status</HeaderItem>
        <HeaderItem>Role</HeaderItem>
      </TableHeader>
      {avatarData.map((data, index) => (
        <AvatarCard key={index}>
          <AvatarImage src={data.avatar} />
          <AvatarName>{data.name}</AvatarName>
          <AvatarTitle>{data.title}</AvatarTitle>
          <AvatarStatus>{data.status}</AvatarStatus>
          <AvatarRole>{data.role}</AvatarRole>
          <AvatarRole>{data.role}</AvatarRole>
        </AvatarCard>
      ))}
    </>
  );
};
