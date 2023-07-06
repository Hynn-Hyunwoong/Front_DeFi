import styled from 'styled-components';

export const DropBoxWrap = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  width: 130px;
  background: white;
  border: 1px solid #ececec;
  animation: fadeInDown 0.5s;

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -5%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;

export const ListStyled = styled.li`
  cursor: pointer;
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #ececec;
  color: #767c83;

  &:nth-last-child(1) {
    border-bottom: none;
  }
`;
