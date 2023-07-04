import { useRecoilState } from "recoil";
import {
  LabelStyled,
  InputBoxWrap,
  InputStyled,
  TokenBox,
  RightItem,
  BalanceStyled,
  SectionStyled,
} from "./styled";
import { tokenListPopupState, FromTokenState, ToTokenState } from "../../store";

export const SelectTokenBox = ({ children, token }) => {
  const [tokenListPopup, setTokenList] = useRecoilState(tokenListPopupState);
  const [fromToken, setfromToken] = useRecoilState(FromTokenState);
  const [toToken, setToToken] = useRecoilState(ToTokenState);
  const popupOpenEvent = () => {
    setTokenList(true);
  };

  const tokenData = {
    init: {
      logo: "null",
      token: "Token",
    },
    solar: {
      logo: "solar",
      token: "ASD",
    },
    tether: {
      logo: "tether",
      token: "USDT",
    },
    ethereum: {
      logo: "ethereum",
      token: "ETH",
    },
  };

  const tokenBox = (selectedToken) => {
    return (
      <TokenBox
        key={tokenData[selectedToken].token}
        logo={tokenData[selectedToken].logo}
        token={tokenData[selectedToken].token}
        onClick={popupOpenEvent}
      >
        <img
          src={`/images/logo-${tokenData[selectedToken].logo}.png`}
          style={{ width: "30px" }}
          alt="tokenLogo"
        />
        <p>{tokenData[selectedToken].token}</p>
      </TokenBox>
    );
  };

  return (
    <SectionStyled>
      <LabelStyled>
        <strong>{children}</strong>
      </LabelStyled>
      <InputBoxWrap>
        <InputStyled type="number" min={1} placeholder="0" />
        <RightItem>{tokenBox(toToken)}</RightItem>
      </InputBoxWrap>
      <BalanceStyled>보유 : 10</BalanceStyled>
    </SectionStyled>
  );
};
