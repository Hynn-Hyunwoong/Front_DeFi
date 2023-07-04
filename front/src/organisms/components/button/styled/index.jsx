import styled from 'styled-components';

export const ButtonStyled = styled.button`
  overflow: hidden;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  background: ${({ theme, colors }) => theme[colors].background};
  color: ${({ theme, colors }) => theme[colors].color};
  &:hover {
    background: ${({ theme, colors }) => theme[colors].hover};
    cursor: pointer;
  }

  font-size: ${({ size }) => size};
  margin-top: 20px;

  border-radius: 5px;
  border: none;
`;

// width, height, background, color, hover
