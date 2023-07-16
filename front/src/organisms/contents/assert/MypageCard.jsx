import { useQuery } from '@tanstack/react-query';
import { Card, Img, Infos, Text, Stats, Links, GraphWrap } from './styled';
import { Button, Loader, GraphData } from '../../components';
import { balanceState } from '../../store';
import { useRecoilState } from 'recoil';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const APIURL = process.env.REACT_APP_AXIOS_URL;

const getImagePath = (logo) => `/images/${logo}`;

const getTokenValue = async (symbol) => {
  try {
    const response = await axios.get(`${APIURL}/coinMarket/currency`);
    const data = response.data;

    const usdPrice = data?.USD?.data?.[symbol]?.quote?.USD?.price;
    const krwPrice = data?.KRW?.data?.[symbol]?.quote?.KRW?.price;

    if (!usdPrice || !krwPrice) {
      throw new Error('Missing price data');
    }
    return {
      usdPrice,
      krwPrice,
    };
  } catch (error) {
    console.error('Error fetching token value', error);
    throw error;
  }
};

export const MyCard = ({ item }) => {
  const [balance] = useRecoilState(balanceState);
  const logoPath = getImagePath(item.logo);
  const navigate = useNavigate();
  const priceQuery = useQuery(['coinPrice', item.symbol], () =>
    getTokenValue(item.symbol),
  );

  const redirectToPool = (e) => {
    e.preventDefault();
    navigate('/exchange/pool');
  };

  const redirectToswap = (e) => {
    e.preventDefault();
    navigate('/exchange/swap');
  };

  if (priceQuery.isLoading) {
    return <Loader />;
  }

  if (priceQuery.isError) {
    return 'An error has occurred';
  }

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
  );
};
