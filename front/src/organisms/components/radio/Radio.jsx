import { RadioStyled, CheckBox } from './styled';
export const Radio = ({ children, setFunction, checkItem, ...rest }) => {
  const color = checkItem ? 'blue' : 'white';
  return (
    <RadioStyled
      {...rest}
      onClick={() => {
        setFunction(!checkItem);
      }}
    >
      <CheckBox colors={color}>✓</CheckBox>
      {children}
    </RadioStyled>
  );
};
