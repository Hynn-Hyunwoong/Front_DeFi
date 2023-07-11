import { useQuery } from '@tanstack/react-query';
import { Card, Img, Infos, Text, Stats, Links, GraphWrap } from './styled';
import { Button, Loader } from '../../components';
import axios from 'axios';
import { GraphData } from '../../components/graph';
import { balanceState } from '../../store';
import { useRecoilState } from 'recoil';

const APIURL = process.env.REACT_APP_AXIOS_URL;

const getLogoData = async () => {
  const { data } = await axios.get(`${APIURL}/aws/signedurl/logo.png`);
  return data.signedURL;
};

const getCoinData = async () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  let todayStr = yyyy + '-' + mm + '-' + dd;
  const { data } = await axios.get(
    `${APIURL}/token/tokenValue/ASD/${todayStr}`,
  );

  return data;
};

await getCoinData();

export const ASDTokenCard = () => {
  // eslint-disable-next-line no-unused-vars
  const [balance, setBalance] = useRecoilState(balanceState);
  console.log(balance.Date);
  const { data: logoURL, isError, isLoading } = useQuery(['logo'], getLogoData);
  const {
    data: coinData,
    isError: isCoinDataError,
    isLoading: isCoinDataLoading,
  } = useQuery(['coinData'], getCoinData);

  if (isLoading || isCoinDataLoading) {
    return <Loader />;
  }

  if (isError || isCoinDataError) {
    return <div>Error occurred while fetching data</div>;
  }

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
  console.log(`ASd token is ${balance.ASD}`);
  return (
    <>
      <Card>
        <Img>{logoURL && <img src={logoURL} alt="ASD Logo" />}</Img>
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
