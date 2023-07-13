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

const mobileFlex = css`
  display: flex;
  flex-direction: column;
`;

// @media (max-width: 768px) {}

export const SectionStyled = styled.section`
  width: 800px;
  margin: 0 auto;
  &:nth-child(1) {
    margin-top: 60px;
  }
  &:nth-last-child(1) {
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// GovernanceHeader
export const HeaderSection = styled.div`
  ${Flex}
  margin-bottom: 70px;

  @media (max-width: 768px) {
    ${mobileFlex}
    margin-bottom: 40px;
    align-items: center;
  }
`;
export const HeaderDiv = styled.div`
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const HeaderBottomDiv = styled.div`
  width: 100%;
  margin: 20px;
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
export const ButtonSection = styled.section`
  ${Flex}
  width: 100%;
  justify-content: end;
  margin-bottom: 20px;
`;
export const ListSection = styled.section`
  position: relative;
  ${Flex}
  width: 100%;
  flex-direction: column;
  background: white;
`;
export const ListHeaderDiv = styled.div`
  ${basicOption}
  height: 60px;
`;
export const ButtonStyle = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  color: #767c83;
  width: 50px;
`;
export const PageDiv = styled.div`
  ${Flex}
  width: 20%;
  align-items: center;
  margin: 15px auto;
`;
