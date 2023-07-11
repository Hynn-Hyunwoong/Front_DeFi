import { DashboardLeftWrap } from './styled';
import { Card, Img, GraphWrap, Infos, Text, Stats } from '../assert/styled';
import { AreaChart, Area, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'ETH/ASD', pool: 13 },
  { name: 'USDT/ASD', pool: 12 },
  { name: 'ARB/ASD', pool: 7 },
];

export const DashboardTopLeft = () => {
  return (
    <>
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
              <Area type="monotone" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" stroke="#82ca9d" fill="#82ca9d" />
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
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />{' '}
        </AreaChart>
      </DashboardLeftWrap>
    </>
  );
};
