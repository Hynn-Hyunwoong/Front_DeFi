import styled from 'styled-components';

export const FooterWrap = styled.footer`
  width: 100%;
  height: 140px;
  background: #0169b6;
  color: white;
`;

export const ContentWrap = styled.div`
  margin: auto;
  align-items: center;
  max-width: 1000px;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const CopyrightSection = styled.section`
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
export const NameSection = styled.section`
  display: flex;
`;

export const MemberInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  &:nth-last-child(1) {
    margin-right: 0;
  }
  & > img {
    width: 25px;
    margin-right: 3px;
  }
`;
