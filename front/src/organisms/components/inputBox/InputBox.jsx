import { useRecoilState } from 'recoil';
import { InputStyled } from './styled';
import { stakingValueState } from '../../store';
import { useState } from 'react';

export const InputBox = ({ placeholder, width, value, onChange }) => {
  const [stakingValue, setStakingValue] = useRecoilState(stakingValueState);
  const inputChange = (e) => {
    setStakingValue(e.target.value);
  };

  return (
    <InputStyled
      placeholder={placeholder}
      type="number"
      min={0}
      width={width}
      value={value}
      onChange={inputChange}
    />
  );
};
