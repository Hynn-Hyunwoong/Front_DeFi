import styled, { css } from 'styled-components';

const Flex = css`
  display: flex;
  justify-content: space-between;
`;
const basicOption = css`
  ${Flex}
  padding: 0 30px;
  border-bottom: 1px solid #dee3eb;
  align-items: center;
`;

// GovernanceHeader
export const HeaderSection = styled.section`
  ${Flex}
  width: 100%;
  margin-bottom: 70px;
`;

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
export const ButtonSection = styled.section`
  ${Flex}
  width: 100%;
  justify-content: end;
  margin-bottom: 20px;
`;
export const ListSection = styled.section`
  ${Flex}
  width: 100%;
  flex-direction: column;
  background: white;
`;
export const FlexDiv = styled.div`
  ${Flex}
  width: ${({ width }) => width};
  align-items: center;
`;
export const PageDiv = styled.div`
  ${Flex}
  width: 20%;
  align-items: center;
  margin: 15px auto;
`;
