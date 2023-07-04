import { Wrapped, Div, H1, LightP, MainArticle } from './styled';

export const SectionSecond = () => {
  return (
    <Wrapped>
      <Div>
        <MainArticle className="text left">
          <H1>
            내 자산, 지갑에서 직접
            <br />
            관리하며 추가 수익 획득
          </H1>
          <LightP size="22px">
            소득없이 거래소에 묻어준 자산,
            <br />내 지갑으로 옮겨 관리하면 엄청난 수익의 차이를 만듭니다
          </LightP>
        </MainArticle>
        <MainArticle className="img right">
          <img src="images/wallet.png" alt="wallet" />
        </MainArticle>
      </Div>
    </Wrapped>
  );
};
