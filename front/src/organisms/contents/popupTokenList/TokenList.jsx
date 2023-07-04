import { useRecoilState } from "recoil";
import { Xbutton } from "../../components";
import { tokenListPopupState, FromTokenState } from "../../store";
import {
  ListTop,
  InputBox,
  SearchWrap,
  ListWrap,
  ListHeader,
  List,
} from "./styled";

export const TokenList = () => {
  const [tokenListPopup, setTokenList] = useRecoilState(tokenListPopupState);
  const [fromToken, setFromToken] = useRecoilState(FromTokenState);

  const tokenData = [
    {
      logo: "solar",
      name: "솔라스왑",
      symbol: "ASD",
      price: "30,634.0034",
      balance: "10384",
      evaluation: "123933.3212",
    },
    {
      logo: "ethereum",
      name: "이더리움",
      symbol: "ETH",
      price: "30,634.0034",
      balance: "12",
      evaluation: "123933.3212",
    },
    {
      logo: "tether",
      name: "테더",
      symbol: "USDT",
      price: "0,634.0034",
      balance: "0",
      evaluation: "0.00",
    },
  ];

  const closePopup = () => {
    setTokenList(false);
  };

  const selectToken = (token) => {
    setFromToken(token);
  };

  const tokenListMap = tokenData.map((v) => {
    return (
      <List
        key={v.symbol}
        onClick={() => {
          selectToken(`${v.logo}`);
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
            <p>{v.balance}</p>
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
