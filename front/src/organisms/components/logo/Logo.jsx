import { Link } from 'react-router-dom';
import { LogoImg, LogoText, LogoWrap } from './styled';

export const Logo = () => {
  return (
    <Link to="/">
      <LogoWrap>
        <LogoImg src="/images/logo-solar.png" />
        <LogoText src="/images/LogoText.png" />
      </LogoWrap>
    </Link>
  );
};
