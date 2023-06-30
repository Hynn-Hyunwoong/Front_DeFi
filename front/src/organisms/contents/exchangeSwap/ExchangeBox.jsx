import { BoxWrap, BoxArticle, Exchange, ButtonArticle } from "./styled";
import { LightP } from "../main/styled";
import { InputBox } from "../../components";

export const ExchangeBox = () => {
  // 필요한 상태값
  // 토큰 선택 했는지 안했는지
  // 선택한 토큰의 종류

  const test = () => {
    console.log(`hi`);
  };

  return (
    <>
      <BoxWrap className="swapBox">
        <BoxArticle>
          {/*선택된 토큰에 따라 로고, 토큰, 잔액은 각각의 props로 넘겨주면 됩니다!*/}
          <InputBox children="From" logo="null" token="ASD" balance="100" />
          <Exchange>
            <span>↑↓</span>
          </Exchange>
          <InputBox children="To" logo="arbitrum" token="ARB" balance="100" />
        </BoxArticle>

        <ButtonArticle onClick={test}>
          <div className="errorAlert">
            <div>❗️❗️❗️</div>
            <div>
              <LightP size="14px">토큰을 선택해주세요</LightP>
            </div>
          </div>
          <div className="swapButton">
            <h2>SWAP</h2>
          </div>
        </ButtonArticle>
      </BoxWrap>
    </>
  );
};
