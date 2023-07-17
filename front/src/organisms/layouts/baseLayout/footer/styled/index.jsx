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
  max-width: 900px;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const CopyrightSection = styled.section`
  & > .copyright {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
export const NameSection = styled.section`
  display: flex;
`;

export const MemberInfo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-right: 1px solid #cecece8a;
  font-size: 14px;
  &:nth-last-child(1) {
    border-right: none;
    padding-right: 0;
  }
  & > img {
    width: 25px;
    margin-right: 5px;
  }
`;
