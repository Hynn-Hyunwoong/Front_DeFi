import { useQuery } from '@tanstack/react-query';
import { Card, Img, Infos, Text, Stats, Links, GraphWrap } from './styled';
import { Button, Loader } from '../../components';
import axios from 'axios';
import { GraphData } from '../../components/graph';
import { balanceState } from '../../store';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

const APIURL = process.env.REACT_APP_AXIOS_URL;

const getCoinData = async () => {
  const todayStr = new Date().toISOString().split('T')[0];
  const { data } = await axios.get(
    `${APIURL}/token/tokenValue/ASD/${todayStr}`,
  );

  return data;
};

export const ASDTokenCard = () => {
  const [balance, setBalance] = useRecoilState(balanceState);
  const {
    data: coinData,
    isError: isCoinDataError,
    isLoading: isCoinDataLoading,
  } = useQuery(['coinData'], getCoinData);
  const navigate = useNavigate();

  if (isCoinDataLoading) {
    return <Loader />;
  }
  if (isCoinDataError) {
    return <div>Error occurred while fetching data</div>;
  }

  const redirectToPool = (e) => {
    e.preventDefault();
    navigate('/exchange/pool');
  };

  const redirectToswap = (e) => {
    e.preventDefault();
    navigate('/exchange/swap');
  };

  // USD and KRW values
  const usdValue =
    coinData.dailyEndPriceUSD !== '0'
      ? coinData.dailyEndPriceUSD
      : coinData.dailyOpenPriceUSD;
  const krwValue =
    coinData.dailyEndPriceKRW !== '0'
      ? coinData.dailyEndPriceKRW
      : coinData.dailyOpenPriceKRW;

  // formatted values
  const formattedUsdValue = Number(
    Number(usdValue).toFixed(2),
  ).toLocaleString();
  const formattedKrwValue = Number(
    Number(krwValue).toFixed(2),
  ).toLocaleString();

  return (
    <>
      <Card>
        <Img>
          <img src={`/images/logo-solar.png`} alt="ASD Logo" />
        </Img>
        <GraphWrap>
          <GraphData symbol={'ASD'} />
        </GraphWrap>
        <Infos>
          <h2>ASD</h2>
          <h4>SolarSwap의 공식 통화</h4>
        </Infos>
        <Text>내 보유수량 : {balance.ASD}</Text>
        <Stats>
          <li>
            <h3>USD $ {formattedUsdValue}</h3>
          </li>
          <li>
            <h3>KRW ￦ {formattedKrwValue}</h3>
          </li>
        </Stats>
        <Links>
          <Button
            width={'10rem'}
            height={'40px'}
            colors={'blue'}
            onClick={redirectToPool}
          >
            예치하기
          </Button>
          <Button
            width={'10rem'}
            height={'40px'}
            colors={'blue'}
            onClick={redirectToswap}
          >
            스왑하기
          </Button>
        </Links>
      </Card>
    </>
  );
};
