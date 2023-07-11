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
  letter-spacing: -0.5px;
`;
