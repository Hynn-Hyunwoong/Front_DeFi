import { SectionWrap, ExpectedArticle, TXTableHeader } from './styled';
import { Expected, TxHistoryLi } from '../../components';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { swapLogState, transactionState } from '../../store';

export const ExchangeBottom = ({ provider, contract }) => {
  // provider 이용해서 transaction 내용 받아ㅗ아서 히스토리에 뿌려주면 됨
  // const transaction = useRecoilValue(transactionState);

  // const transactions = [
  //   // 트랜잭션 데이터를 받아오면 됩니다! 아래와 같은 인터페이스로 설정해두었습니다.
  //   {
  //     action: 'Swap',
  //     hash: '0xabe4c17ef0e99cd52a2ce5374d1ddca3f1685f8c2187f3cb8cfdb710d19129b3',
  //     status: 'Success',
  //     date: '23-07-03 06:04:59',
  //   },
  //   {
  //     action: 'Approve',
  //     hash: '0xabe4c17ef0e99cd52a2ce5374d1ddca3f1685f8c2187f3cb8cfdb710d19129b3',
  //     status: 'Fail',
  //     date: '23-07-03 06:04:59',
  //   },
  // ];

  // useEffect(() => {
  //   (() => {})();
  // }, []);

  return (
    <SectionWrap>
      <ExpectedArticle className='expected' style={{ width: '85%' }}>
        <h3>예상 내역</h3>
        <Expected />
      </ExpectedArticle>
      <ExpectedArticle className='txHistory'>
        <h3>트랜잭션 내역</h3>
        <TXTableHeader>
          <p className='action'>유형</p>
          <p className='hash'>해시</p>
          <p className='status'>상태</p>
          <p className='date'>일자</p>
        </TXTableHeader>
        <div>
          <ul>
            <TxHistoryLi
            // transactions={transaction}
            />
          </ul>
        </div>
      </ExpectedArticle>
    </SectionWrap>
  );
};
