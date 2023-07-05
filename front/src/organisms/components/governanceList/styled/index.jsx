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

export const ListContentDiv = styled.div`
  ${basicOption}
  height: 80px;
  cursor: pointer;
  font-size: 14px;
`;
export const FlexDiv = styled.div`
  ${Flex}
  width: ${({ width }) => width};
  align-items: center;
`;
export const ActionColor = styled.span`
  font-weight: bold;
  color: ${({ status }) => {
    if (status === 'exectued') {
      return '#767C83';
    }
    if (status === 'progress') {
      return '#F74343';
    }
    if (status === 'canceled') {
      return '#CACCD2';
    }
  }};
`;
