import { DashboardRightWrap } from './styled';
import { AreaChart, Area, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'ETH/ASD', pool: 13 },
  { name: 'USDT/ASD', pool: 12 },
  { name: 'ARB/ASD', pool: 7 },
];

export const DashboardTopRight = () => {
  return (
    <>
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
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />{' '}
        </AreaChart>
      </DashboardRightWrap>
    </>
  );
};
