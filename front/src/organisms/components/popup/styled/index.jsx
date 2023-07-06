import styled from 'styled-components';

// @media (max-width: 768px) {}

export const Wrap = styled.div`
  padding-top: 50px;
  height: 100vh;
  width: 100%;
  background: rgba(130, 130, 130, 0.334);
`;

export const ContentWrap = styled.div`
  margin: auto;
  width: ${({ width }) => width || '480px'};
  max-height: 750px;
  height: ${({ height }) => height || 'auto'};
  background: white;
  z-index: 1;
  overflow: auto;
  @media (max-width: 768px) {
    width: 100%;
    max-height: 100%;
  }
`;

export const Content = styled.div`
  padding: 50px;
`;
