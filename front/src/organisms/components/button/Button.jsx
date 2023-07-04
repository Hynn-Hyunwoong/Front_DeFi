import { NavLink } from 'react-router-dom';
import { ButtonStyled } from './styled';

export const Button = ({ children, to, ...rest }) => {
  return (
    <NavLink to={to} style={{ textDecoration: 'none' }}>
      <ButtonStyled {...rest}>{children}</ButtonStyled>
    </NavLink>
  );
};

// width={width}
// height={height}
// colors={colors}
// size={size}
// onClick={onClick}
// marginTop={marginTop}
