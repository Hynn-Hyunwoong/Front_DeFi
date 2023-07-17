import { Link } from 'react-router-dom';
import { LogoImg, LogoText, LogoWrap } from './styled';

export const Logo = () => {
  return (
    <Link to="/">
      <LogoWrap>
        <LogoImg src="/images/logo-solar.png" alt="solarLogo" />
        <LogoText src="/images/Logotext.png" alt="Text" />
      </LogoWrap>
    </Link>
  );
};
