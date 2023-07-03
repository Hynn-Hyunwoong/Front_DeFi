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
import { tokenListPopupState } from "../../store";

export const SelectTokenBox = ({ children }) => {
  const [tokenListPopup, setTokenList] = useRecoilState(tokenListPopupState);

  const init = {
    logo: "null",
    token: "Token",
    balance: 100,
  };

  const popupOpenEvent = () => {
    setTokenList(true);
  };

  return (
    <SectionStyled>
      <LabelStyled>
        <strong>{children}</strong>
      </LabelStyled>
      <InputBoxWrap>
        <InputStyled type="number" min={1} placeholder="0" />
        <RightItem>
          <TokenBox
            logo={init.logo}
            token={init.token}
            onClick={popupOpenEvent}
          >
            <img
              src={`/images/logo-${init.logo}.png`}
              style={{ width: "30px" }}
              alt="tokenLogo"
            />
            <p>{init.token}</p>
          </TokenBox>
        </RightItem>
      </InputBoxWrap>
      <BalanceStyled balance={init.balance}>
        보유 : {init.balance}
      </BalanceStyled>
    </SectionStyled>
  );
};
