import { ButtonStyled } from './styled';

export const Button = ({ children, ...rest }) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

// width={width}
// height={height}
// colors={colors}
// size={size}
// onClick={onClick}
// marginTop={marginTop}
