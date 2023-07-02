import { useState, useEffect } from 'react';
import { Card, Img, Infos, Text, Stats, Links, GraphWrap } from './styled';
import { Button } from '../../components';
import { AreaChart, Area, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

export const ASDTokenCard = () => {
  const [logoURL, setLogoURL] = useState(null);

  const APIURL = process.env.REACT_APP_AXIOS_URL;

  const getLogo = async (logo) => {
    const { data } = await axios.get(`${APIURL}/aws/signedurl/${logo}`);
    const response = data.signedURL;
    return response;
  };

  useEffect(() => {
    const fetchLogo = async () => {
      const logo = await getLogo('logo.png');
      setLogoURL(logo);
    };
    fetchLogo();
  });

  return (
    <>
      <Card>
        <Img>{logoURL && <img src={logoURL} alt="ASD Logo" />}</Img>
        <GraphWrap>
          <AreaChart
            width={250}
            height={80}
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
        </GraphWrap>
        <Infos>
          <h2>ASD</h2>
          <h4>SolarSwap의 공식 통화</h4>
        </Infos>
        <Text>내 보유수량 :</Text>
        <Stats>
          <li>
            <h3>1.00</h3>
            <h4>$ USD</h4>
          </li>
          <li>
            <h3>1350.00</h3>
            <h4>￦ KRW</h4>
          </li>
        </Stats>
        <Links>
          <Button width={'45%'} height={'40px'} colors={'blue'}>
            구매하기
          </Button>
          <Button width={'45%'} height={'40px'} colors={'blue'}>
            판매하기
          </Button>
        </Links>
      </Card>
    </>
  );
};
