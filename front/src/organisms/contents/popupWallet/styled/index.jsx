import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #caccd2;
`;

export const Xbutton = styled.button`
  position: relative;
  padding-right: 15px;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    right: 7px;
    top: 6px;
    content: '';
    height: 20px;
    width: 2px;
    background-color: #222;
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
  border: none;
  background: none;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Notice = styled.p`
  margin-top: 30px;
  font-size: 13px;
  letter-spacing: -0.04em;
  color: #767c83;
`;
