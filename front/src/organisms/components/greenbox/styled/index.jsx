import styled, { css } from 'styled-components';

export const BoxStyled = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: #94ca0d;
  color: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 1px 1px 6px 0px #d6d8dd;
  align-items: center;

  ${({ width }) =>
    width &&
    css`
      @media (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
        margin-top: 20px;
        /* 다른 원하는 속성들 추가 */
      }
    `}
`;
