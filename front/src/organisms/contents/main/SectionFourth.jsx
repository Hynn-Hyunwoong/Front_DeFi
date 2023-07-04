import { Div, H1, LightP, MainArticle, Wrapped } from './styled';

export const SectionFourth = () => {
  return (
    <Wrapped>
      <Div>
        <MainArticle className="text left">
          <H1>
            솔라스왑의 핵심,
            <br />
            ASD 성장과 함께
            <br />
            수익도 극대화
          </H1>
        </MainArticle>
        <MainArticle className="img right">
          <img src="images/chart.png" alt="chart" />
          <LightP size="16px">
            솔라스왑은 ASD 자산을 수익으로 분배하는 동시에, ASD 가치 상승을 위해
            설계된 <br />
            아비트럼 기반의 프로토콜입니다. 솔라스왑과 ASD 지속적인 성장에 따라
            극대화 된 수익을 <br />
            경험할 수 있는 선순환 구조를 통해 더 많은 참여자와 생태계 확장을
            가능하게 합니다.
          </LightP>
        </MainArticle>
      </Div>
    </Wrapped>
  );
};
