import {
  BoxWrap,
  SectionStyled,
  ArticleStyeld,
  Exchange,
  Wrap,
} from "./styled";
import { H1 } from "../main/styled";
import { Label, InputBox, Balance } from "../../components";

export const SwapTest = () => {
  return (
    <>
      <div>
        <H1>
          원하는 자산으로 바로 <strong>교환(스왑)</strong>하세요
        </H1>
      </div>
      <Wrap>
        <BoxWrap className="swapBox">
          <ArticleStyeld>
            <SectionStyled>
              <Label>From</Label>
              <InputBox>
                <img src="/images/logo.png" style={{ width: "30px" }} />
                <p>ASD</p>
              </InputBox>
              <Balance>0</Balance>
            </SectionStyled>
            <Exchange>
              <span>↑↓</span>
            </Exchange>
            <SectionStyled>
              <Label>To</Label>
              <InputBox>
                <img src="/images/logo.png" style={{ width: "30px" }} />
                <p>ASD</p>
              </InputBox>
              <Balance>0</Balance>
            </SectionStyled>
          </ArticleStyeld>
        </BoxWrap>
        <article>
          <button>클릭</button>
        </article>
      </Wrap>
    </>
  );
};
