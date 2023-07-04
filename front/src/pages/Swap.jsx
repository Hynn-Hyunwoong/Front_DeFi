import { useRecoilState } from "recoil";
import {
  loadingState,
  tokenListPopupState,
  FromTokenState,
  ToTokenState,
} from "../organisms/store";
import { Popup } from "../organisms/components";

import {
  ExchangeBottom,
  ExchangeBox,
  ExchangeTop,
} from "../organisms/contents/exchangeSwap";
import { TokenList } from "../organisms/contents/popupTokenList/TokenList";

export const Swap = () => {
  const [isLoading] = useRecoilState(loadingState);
  const [tokenList] = useRecoilState(tokenListPopupState);

  return (
    <div className="swap" style={{ position: "relative" }}>
      {tokenList ? (
        <Popup>
          <TokenList />
        </Popup>
      ) : (
        <>
          <ExchangeTop />
          <ExchangeBox />
          <ExchangeBottom />
        </>
      )}
    </div>
  );
};

// 관리해야 할 상태 : 로딩중인지 아닌지, input에 입력된 값이 from인지 to인지, amount값, token1이 뭔지(from), token2가 뭔지(to)
