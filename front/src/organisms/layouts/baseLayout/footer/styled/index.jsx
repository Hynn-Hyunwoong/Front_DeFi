import styled from "styled-components";

export const FooterWrap = styled.footer`
  width: 100%;
  height: 140px;
  background: #0169b6;
`;

export const ContentWrap = styled.div`
  margin: auto;
  padding-top: 60px;
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  & > div > span {
    color: white;
  }
`;
