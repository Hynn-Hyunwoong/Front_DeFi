import styled from 'styled-components';

export const InputStyled = styled.input`
  border: none;
  outline: none;
  width: ${({ width }) => width || '100%'};
  height: 35px;
  font-size: 17px;
  &::placeholder {
    font-size: 15px;
    color: #caccd1;
  }
`;
