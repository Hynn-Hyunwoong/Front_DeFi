import { useRecoilState } from "recoil";
import { Xbutton } from "../../components";
import { tokenListPopupState } from "../../store";
import { ListTop, InputBox, SearchWrap, ListWrap, Table, List } from "./styled";

export const TokenList = () => {
  const [tokenListPopup, setTokenList] = useRecoilState(tokenListPopupState);
  const closePopup = () => {
    setTokenList(false);
  };

  return (
    <div style={{ height: "100%" }}>
      <ListTop>
        <h3>토큰을 선택해주세요</h3>
        <Xbutton onClick={closePopup} />
      </ListTop>
      <SearchWrap>
        <InputBox type="text" placeholder="코인명, 심볼, 토큰주소 검색" />
      </SearchWrap>
      <ListWrap>
        <Table>
          <tr className="token">토큰</tr>
          <tr className="price">가격</tr>
          <tr className="balance">보유/평가금액</tr>
        </Table>
        <ul>
          <List>
            <div className="token">
              <img src="/images/logo-solar.png" alt="tokenLogo" />
              <div>
                <p>솔라스왑</p>
                <p>ASD</p>
              </div>
            </div>
            <div className="price">$ 30,634.0034</div>
            <div className="balance">$ 123933.3212</div>
          </List>
        </ul>
      </ListWrap>
    </div>
  );
};
