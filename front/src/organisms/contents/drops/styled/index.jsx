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

export const DropsTableHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const BorderBottom = styled.div`
  width: 100%;
  height: 60px;
  ${basicOption}
`;
