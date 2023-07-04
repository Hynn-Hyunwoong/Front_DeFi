import { LiStyled } from "./styled";

export const Expected = () => {
  const testArr = [
    { title: "교환 비율(가격)", data: "1 KLAY ≈ 0.300551 KSP ($0.1627)" },
    { title: "", data: "현재 가격 대비 차이 < 0.01%" },
    { title: "최소 거래 수량", data: "from값 설정시" },
    { title: "최소 전송 수량", data: "to값 설정시" },
    { title: "수수료", data: "0.036695 KLAY" },
    { title: "교환 경로", data: "KLAY ➤ KDAI" },
  ];

  const testMap = testArr.map((v, index) => {
    return (
      <LiStyled key={index}>
        <div>{v.title}</div>
        <div>
          <p>{v.data}</p>
        </div>
      </LiStyled>
    );
  });

  return <ul>{testMap}</ul>;
};

/*
      <LiStyled>
        <div>교환 비율(가격)</div>
        <div>
          <p>1 KLAY ≈ 0.300551 KSP ($0.1627)</p>
        </div>
      </LiStyled>
      <LiStyled>
        <div></div>
        <div>
          현재 가격 대비 차이 {`<`} 0.01%
          </div>
          </LiStyled>
          <LiStyled>
            <div>최소 거래 수량 </div>
            <div>
              <p>from값 설정시</p>
            </div>
            {<h4>최대 전송 수량</h4> : to값 설정시 => 상태값에 따라 바껴야 함}
          </LiStyled>
          <LiStyled>
            <div>수수료 </div>
            <div>
              <p>0.036695 KLAY</p> {그냥 단순 계산}
            </div>
          </LiStyled>
          <LiStyled>
            <div>교환 경로</div>
            <div>
              <p>KLAY ➤ KDAI</p>
            </div>
            {원래대로라면 최적경로 탐색, 근데 우리는 별로 업스니까 그냥 맞교환?}
          </LiStyled>
*/
