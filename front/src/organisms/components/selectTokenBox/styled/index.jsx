import styled from 'styled-components';

export const Wrap = styled.div``;

export const LabelStyled = styled.div`
  & > strong {
    color: #0194ff;
    font-size: 20px;
  }
`;

// InputBox
export const InputBoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputStyled = styled.input`
  width: 50%;
  border: none;
  font-size: 25px;
  &:focus {
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const RightItem = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TokenBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  & > p {
    padding-top: 3px;
    font-size: 12px;
    font-weight: bold;
    color: #0169b6;
  }
`;

export const BalanceStyled = styled.p`
  font-weight: lighter;
  font-size: 12px;
`;

export const SectionStyled = styled.section`
  width: 80%;
`;
