import styled from 'styled-components';

export const SearchInput = styled.input`
  border: 1px solid #0194ff;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '30px'};
  border-radius: 50px;
  padding: 0 10px;
  background: transparent;
  @media (max-width: 768px) {
    width: 100%;
    border: none;
    border-radius: 0;
  }
`;
