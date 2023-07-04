import styled from 'styled-components';

export const BoxStyled = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: #94ca0d;
  color: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 1px 1px 6px 0px #d6d8dd;
  align-items: center;
`;
