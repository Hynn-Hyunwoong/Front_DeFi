import { Div, H1, LightP, MainArticle, Wrapped } from './styled';

export const SectionThird = () => {
  return (
    <Wrapped>
      <Div>
        <MainArticle className="img left">
          <img src="images/blockchain.png" alt="blockchain" />
        </MainArticle>
        <MainArticle className="text right">
          <H1>
            초 단위로 쌓이는 수익,
            <br />
            출금은 자유롭게!
          </H1>
          <LightP size="22px">
            365일 24시간 매 초 불어나는 수익을
            <br />
            눈으로 직접 확인하세요.
            <br />
            자산은 묶이지 않고 <br />
            자유롭게 입출금 할 수 있습니다.
            <br />
          </LightP>
        </MainArticle>
      </Div>
    </Wrapped>
  );
};
