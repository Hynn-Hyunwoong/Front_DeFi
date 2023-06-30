import { SectionWrap, ExpectedArticle, Div } from "./styled";

export const ExchangeBottom = () => {
  return (
    <SectionWrap>
      <ExpectedArticle className="expected">
        <h3>예상 내역</h3>
        <div>
          <Div>
            <p>교환 비율(가격) </p>
            <div>
              <p>1 KLAY ≈ 0.300551 KSP ($0.1627)</p>
              <p>현재 가격 대비 차이 {`<`} 0.01% </p> {/*이걸 할 수 있나?*/}
            </div>
          </Div>
          <Div>
            <p>최소 거래 수량 </p>from값 설정시
            {/* <h4>최대 전송 수량</h4> : to값 설정시 => 상태값에 따라 바껴야 함*/}
          </Div>
          <Div>
            <p>수수료 </p>
            <p>0.036695 KLAY</p> {/*그냥 단순 계산*/}
          </Div>
          <Div>
            <p>교환 경로 </p>
            <p>KLAY ➤ KDAI</p>{" "}
            {/*원래대로라면 최적경로 탐색, 근데 우리는 별로 업스니까 그냥 맞교환?*/}
          </Div>
        </div>
      </ExpectedArticle>
      {/* <article className="txHistory">트랜잭션 내역</article> */}
    </SectionWrap>
  );
};
