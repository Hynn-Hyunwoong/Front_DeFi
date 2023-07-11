import { useQuery } from '@tanstack/react-query';
import { Card, Img, Infos, Text, Stats, Links, GraphWrap } from './styled';
import { Button, Loader, GraphData } from '../../components';
import { balanceState } from '../../store';
import { useRecoilState } from 'recoil';

import axios from 'axios';

const APIURL = process.env.REACT_APP_AXIOS_URL;

const getImagePath = (logo) => `/images/${logo}`;

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
  // eslint-disable-next-line no-unused-vars
  const [balance, setBalance] = useRecoilState(balanceState);
  const logoPath = getImagePath(item.logo);
  const priceQuery = useQuery(['coinPrice', item.symbol], () =>
    getTokenValue(item.symbol),
  );

  if (priceQuery.isLoading) {
    return <Loader />;
  }

  if (priceQuery.isError) {
    return 'An error has occurred';
  }

  try {
    const { usdPrice, krwPrice } = priceQuery.data;
    const formattedUSDPrice = Number(usdPrice).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const formattedKRWPrice = Number(krwPrice).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const tokenBalance = balance[item.symbol] ?? 0.0;

    return (
      <Card>
        <Img>
          <img src={logoPath} alt={item.name} />
        </Img>
        <GraphWrap>
          <GraphData symbol={item.symbol} />
        </GraphWrap>
        <Infos>
          <h2>{item.name}</h2>
          <h4>{item.description}</h4>
        </Infos>

        <Text>내 보유수량 : {tokenBalance}</Text>
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
