import styled from 'styled-components';

// @media (max-width: 768px) {}

export const Wrap = styled.div`
  background: rgba(130, 130, 130, 0.334);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;

  animation: modal-show 0.3s;

  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -10px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

export const ContentWrap = styled.div`
  margin: auto;
  width: ${({ width }) => width || '480px'};
  max-height: 750px;
  height: ${({ height }) => height || 'auto'};
  background: white;
  z-index: 1;
  /* overflow: auto; */

  @media (max-width: 768px) {
    width: 100%;
    max-height: 100%;
  }
`;

export const Content = styled.div`
  padding: ${({ padding }) => padding || '50px'};
`;
