import styled from "styled-components";
import { H1 } from "../main/styled";

const TopWrap = styled.section`
  width: 800px;
  margin: 80px auto;
`;

export const ExchangeTop = () => {
  return (
    <TopWrap>
      <H1>
        원하는 자산으로 바로 <strong>교환(스왑)</strong>하세요
      </H1>
    </TopWrap>
  );
};
