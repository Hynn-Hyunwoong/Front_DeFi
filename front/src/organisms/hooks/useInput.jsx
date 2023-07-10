// import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { inputState } from '../store';

export const useInput = () => {
  const [value, setValue] = useRecoilState(inputState);

  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return { value, onChange };
};
