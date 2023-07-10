import { useRecoilState } from 'recoil';
import { InputStyled } from './styled';
import { stakingValueState } from '../../store';

export const InputBox = ({ placeholder, width }) => {
  const [stakingValue, setStakingValue] = useRecoilState(stakingValueState);
  const inputChange = (e) => {
    setStakingValue(e.target.value);
  };

  return (
    <InputStyled
      placeholder={placeholder}
      type='number'
      min={0}
      width={width}
      onChange={inputChange}
    />
  );
};
