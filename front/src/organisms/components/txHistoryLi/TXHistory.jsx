import { TxLi } from "./styled";

export const TxHistoryLi = () => {
  return (
    <>
      <TxLi>
        <div className="action">
          <strong>Swap</strong>
        </div>
        <div className="hash">
          <div>
            0xabe4c17ef0e99cd52a2ce5374d1ddca3f1685f8c2187f3cb8cfdb710d19129b3
          </div>
        </div>
        <div className="status">
          <strong>Success</strong>
        </div>
        <div className="date">23-07-03 06:04:59</div>
      </TxLi>
      <TxLi>
        <div className="action">
          <strong>Approve</strong>
        </div>
        <div className="hash">
          <div>
            0xabe4c17ef0e99cd52a2ce5374d1ddca3f1685f8c2187f3cb8cfdb710d19129b3
          </div>
        </div>
        <div className="status">
          <strong>Fail</strong>
        </div>
        <div className="date">23-07-03 06:04:59</div>
      </TxLi>
      <TxLi>
        <div className="action">
          <strong>Swap</strong>
        </div>
        <div className="hash">
          <div>
            0xabe4c17ef0e99cd52a2ce5374d1ddca3f1685f8c2187f3cb8cfdb710d19129b3
          </div>
        </div>
        <div className="status">
          <strong>Success</strong>
        </div>
        <div className="date">23-07-03 06:04:59</div>
      </TxLi>
    </>
  );
};
