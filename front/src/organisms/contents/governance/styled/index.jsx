import styled, { css } from 'styled-components';

const Flex = css`
  display: flex;
  justify-content: space-between;
`;

export const SectionStyled = styled.section`
  ${Flex}
  width: 100%;

  justify-content: ${(justifyContent) => justifyContent};
  margin-bottom: ${(marginBottom) => marginBottom};
  flex-direction: ${(flexDirection) => flexDirection};
  background: ${(background) => background};
`;

export const FlexDiv = styled.div`
  ${Flex}
  width: ${({ width }) => width};
`;

// GovernanceHeader

export const VoteTitleDiv = styled.div`
  ${Flex}
  margin-bottom: 10px;
`;
export const ButtonStyled = styled.button`
  display: flex;
  border: none;
  background: transparent;
  color: white;
`;
export const AmountDiv = styled.div`
  display: flex;
  align-items: end;
  & > span {
    font-weight: 200;
  }
  & > span > strong {
    font-size: 24px;
  }
`;

// GovernanceContent
const basicOption = css`
  ${Flex}
  padding: 0 30px;
  border-bottom: 1px solid #dee3eb;
  align-items: center;
`;

export const ListHeaderDiv = styled.div`
  ${basicOption}
  height: 60px;
`;

export const ListContentDiv = styled.div`
  ${basicOption}
  height: 80px;
  cursor: pointer;
  font-size: 14px;
`;

export const PageDiv = styled.div`
  ${Flex}
  width: 20%;
  align-items: center;
  margin: 15px auto;
`;
