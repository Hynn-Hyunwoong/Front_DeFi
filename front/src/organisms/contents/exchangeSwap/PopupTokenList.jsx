import { Xbutton } from '../../components';
import {
  ListTop,
  InputBox,
  SearchWrap,
  ListWrap,
  ListHeader,
  List,
} from './styled';
import { useRecoilValue } from 'recoil';
import { balanceState, tokenPricesState } from '../../store';

export const PopupTokenList = ({ setToken, setTokenList }) => {
  const prices = useRecoilValue(tokenPricesState);
  const balance = useRecoilValue(balanceState);

  const tokenData = [
    {
      logo: 'solar',
      name: '솔라스왑',
      symbol: 'ASD',
      price: prices.ASD,
      balance: balance?.ASD || 0,
      evaluation: ((balance?.ASD || 0) * prices.ASD).toFixed(2),
    },
    {
      logo: 'ethereum',
      name: '이더리움',
      symbol: 'ETH',
      price: prices.ETH,
      balance: balance?.ETH || 0,
      evaluation: ((balance?.ETH || 0) * prices.ETH).toFixed(2),
    },
    {
      logo: 'tether',
      name: '테더',
      symbol: 'USDT',
      price: prices.USDT,
      balance: balance?.USDT || 0,
      evaluation: ((balance?.USDT || 0) * prices.USDT).toFixed(2),
    },
    {
      logo: 'arbitrum',
      name: '아비트럼',
      symbol: 'ARB',
      price: prices.ARB,
      balance: balance?.ARB || 0,
      evaluation: ((balance?.ARB || 0) * prices.ARB).toFixed(2),
    },
  ];

  const closePopup = () => {
    setTokenList(false);
  };

  const tokenListMap = tokenData.map((v) => {
    return (
      <List
        key={v.symbol}
        onClick={() => {
          setToken(v.symbol);
          setTokenList(false);
        }}
      >
        <div className="token">
          <img src={`/images/logo-${v.logo}.png`} alt="tokenLogo" />
          <div>
            <p>{`${v.name}`}</p>
            <p>{`${v.symbol}`}</p>
          </div>
        </div>
        <div className="price">$ {v.price}</div>
        <div className="balance">
          <div>
            <p>{Number(v.balance).toFixed(4)}</p>
            <p>$ {v.evaluation}</p>
          </div>
        </div>
      </List>
    );
  });

  return (
    <div>
      <ListTop>
        <h3>토큰을 선택해주세요</h3>
        <Xbutton onClick={closePopup} />
      </ListTop>
      <SearchWrap>
        <InputBox type="text" placeholder="코인명, 심볼, 토큰주소 검색" />
      </SearchWrap>
      <ListWrap>
        <ListHeader>
          <p className="token">토큰</p>
          <p className="price">가격</p>
          <p className="balance">보유/평가금액</p>
        </ListHeader>
        <ul>{tokenListMap}</ul>
      </ListWrap>
    </div>
  );
};
