import { Wrapped, MainArticle, H1 } from "./styled";
import { Button, RotateImg } from "../../components";

export const SectionFirst = () => {
  return (
    <Wrapped>
      <RotateImg />
      <MainArticle>
        <H1>
          내 디지털 자산에 <strong>잠재된 수익</strong>,
          <br /> 솔라스왑에서 찾아가세요
        </H1>
        <Button colors="green" width="200px" height="60px" size="18px">
          지갑 연결
        </Button>
      </MainArticle>
    </Wrapped>
  );
};
