import styled from "styled-components";

export const LiStyled = styled.li`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  text-align: right;

  & > div {
    font-size: 13px;
    & > p {
      font-size: 15px;
      font-weight: 500;
      letter-spacing: -1px;
    }
  }
`;
