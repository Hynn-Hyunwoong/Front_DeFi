/* <section>
<div>
  <strong>From :</strong>
</div>
<div>
  <input />
  <div>ASD</div>
</div>
<div>보유 : 0</div>
</section> */

import {
  LabelStyled,
  InputBoxWrap,
  InputStyled,
  TokenBox,
  RightItem,
  BalanceStyled,
} from "./styled";

export const Label = ({ children }) => {
  return (
    <LabelStyled>
      <strong>{children}</strong>
    </LabelStyled>
  );
};

export const InputBox = ({ children }) => {
  return (
    <>
      <InputBoxWrap>
        <InputStyled type="number" min={1} placeholder="0" />
        <RightItem>
          <TokenBox>{children}</TokenBox>
        </RightItem>
      </InputBoxWrap>
    </>
  );
};

export const Balance = ({ children }) => {
  return <BalanceStyled>보유 : {children}</BalanceStyled>;
};
