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
  /* height: 45%; */
  width: ${({ width }) => width || '30rem'};
  background: white;
  /* padding: 50px; */
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  overflow: auto;
  padding: 50px;
`;
