import { useQuery } from '@tanstack/react-query';
import { Card, Img, Infos, Text, Stats, Links, GraphWrap } from './styled';
import { Button, Loader, GraphData } from '../../components';
import axios from 'axios';

const APIURL = process.env.REACT_APP_AXIOS_URL;

const getLogo = async (logo) => {
  const { data } = await axios.get(`${APIURL}/aws/signedurl/${logo}`);
  const response = data.signedURL;
  return response;
};

const getTokenValue = async (symbol) => {
  const response = await axios.get(`${APIURL}/coinMarket/currency`);
  const data = response.data;

  const usdPrice = data?.USD?.data?.[symbol]?.quote?.USD?.price;
  const krwPrice = data?.KRW?.data?.[symbol]?.quote?.KRW?.price;
  return {
    usdPrice,
    krwPrice,
  };
};

export const MyCard = ({ item }) => {
  const logoQuery = useQuery(['coinLogo', item.logo], () => getLogo(item.logo));
  const priceQuery = useQuery(['coinPrice', item.symbol], () =>
    getTokenValue(item.symbol),
  );

  if (logoQuery.isLoading || priceQuery.isLoading) {
    return <Loader />;
  }

  if (logoQuery.isError || priceQuery.isError) {
    return 'An error has occurred';
  }

  try {
    const { usdPrice, krwPrice } = priceQuery.data;
    const formattedUSDPrice = Number(usdPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const formattedKRWPrice = Number(krwPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return (
      <Card>
        <Img>
          <img src={logoQuery.data} alt={item.name} /></Img>
          <GraphWrap>
            <GraphData symbol={item.symbol} />
          </GraphWrap>
        <Infos>
          <h2>{item.name}</h2>
          <h4>{item.description}</h4>
        </Infos>
        
        <Text>내 보유수량 :</Text>
        <Stats>
          <li>
            <h3>USD $ {formattedUSDPrice}</h3>
          </li>
          <li>
            <h3>KRW ￦ {formattedKRWPrice}</h3>
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
    );
  } catch (error) {
    return 'Price data is missing';
  }
};
