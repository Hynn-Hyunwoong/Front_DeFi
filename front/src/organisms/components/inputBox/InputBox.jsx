import { InputStyled } from './styled';
export const InputBox = ({ placeholder, width }) => {
  return (
    <InputStyled
      placeholder={placeholder}
      type='number'
      min={0}
      width={width}
    />
  );
};
