import {
  LabelStyled,
  InputBoxWrap,
  InputStyled,
  TokenBox,
  RightItem,
  BalanceStyled,
  SectionStyled,
} from './styled';

export const InputBox = ({ logo, token, balance, children }) => {
  return (
    <SectionStyled>
      <LabelStyled>
        <strong>{children}</strong>
      </LabelStyled>
      <InputBoxWrap>
        <InputStyled type="number" min={1} placeholder="0" />
        <RightItem>
          <TokenBox logo={logo} token={token}>
            <img
              src={`/images/logo-${logo}.png`}
              style={{ width: '30px' }}
              alt="tokenLogo"
            />
            <p>{token}</p>
          </TokenBox>
        </RightItem>
      </InputBoxWrap>
      <BalanceStyled balance={balance}>보유 : {balance}</BalanceStyled>
    </SectionStyled>
  );
};
