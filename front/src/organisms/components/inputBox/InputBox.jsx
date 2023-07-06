import { InputStyled } from './styled';
export const InputBox = ({ placeholder }) => {
  return <InputStyled placeholder={placeholder} type='number' min={0} />;
};
