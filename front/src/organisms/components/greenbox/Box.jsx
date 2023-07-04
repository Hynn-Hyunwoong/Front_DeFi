import { BoxStyled } from './styled';

export const Box = ({ children, ...rest }) => {
  return <BoxStyled {...rest}>{children}</BoxStyled>;
};
