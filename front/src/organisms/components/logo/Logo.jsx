import { LogoImg, LogoText, LogoWrap } from "./styled";

export const Logo = () => {
  return (
    <LogoWrap>
      <LogoImg src="/images/logo.png" />
      <LogoText src="/images/LogoText.png" />
    </LogoWrap>
  );
};
