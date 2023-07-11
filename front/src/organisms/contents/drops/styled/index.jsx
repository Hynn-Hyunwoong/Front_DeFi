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

const mobileWrap = css`
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const DropsTableHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: right;
  ${mobileWrap}
`;

export const BorderBottom = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
  ${basicOption}
`;

export const AirDropWrap = styled.div`
  ${mobileWrap}
`;
export const AirDropContent = styled.div`
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
  background: white;
  overflow: hidden;
`;
export const AirDropHeader = styled.section`
  padding: 0 40px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url(${({ backgroundIMG }) => backgroundIMG}) no-repeat center/100%;
  color: white;

  @media (max-width: 768px) {
    height: 70px;
  }
`;
export const AirDropTokenTitle = styled.div`
  display: flex;
  align-items: center;
  & > img {
    height: 40px;
    width: 40px;
    border-radius: 500px;
    margin-right: 10px;
    box-shadow: #959595 1px 0 10px;
  }
  & > h1 {
    font-size: 35px;
    text-shadow: #000000 1px 0 10px;
  }
  @media (max-width: 768px) {
    & > h1 {
      font-size: 28px;
    }
  }
`;
export const AirDropContentTop = styled.section`
  padding: 70px 40px 50px;
  text-align: center;
`;
export const AirDropContentBottom = styled.section`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dee3eb;
  margin: 0 40px;
  padding: 40px 0;
`;
