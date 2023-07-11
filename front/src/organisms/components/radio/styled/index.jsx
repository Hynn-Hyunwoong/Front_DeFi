import styled, { css } from 'styled-components';

const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const RadioStyled = styled.div`
  ${flexAlignCenter}
  padding: 0 10px;
  width: ${({ width }) => width || '95%%'};
  height: ${({ height }) => height || '50px'};
  border: solid 1px #caccd2;
  cursor: pointer;

  &:nth-child(1) {
    margin-bottom: 10px;
  }
`;

export const CheckBox = styled.div`
  ${flexAlignCenter}
  justify-content: center;
  width: ${({ boxsize }) => boxsize || '30px'};
  height: ${({ boxsize }) => boxsize || '30px'};
  border-radius: 50px;
  border: solid 1px #caccd2;
  margin-right: 10px;
  background: ${({ theme, colors }) => theme[colors].background};
  color: ${({ theme, colors }) => theme[colors].color};
`;
