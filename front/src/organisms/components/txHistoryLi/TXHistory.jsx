import { TxLi } from './styled';
import { useRecoilValue } from 'recoil';
import { transactionState } from '../../store';
import { useEffect } from 'react';

export const TxHistoryLi = () => {
  const transactions = useRecoilValue(transactionState);

  useEffect(() => {
    // 이 코드는 `transactions` 상태가 업데이트될 때마다 실행됩니다.
    // 상태 업데이트 시 추가적으로 실행해야 할 로직이 있다면 여기에 추가하세요.
    console.log('트랜잭션 내역이 업데이트되었습니다:', transactions);
  }, [transactions]);

  return (
    <>
      {transactions[0] ? (
        transactions.map((transaction, index) => (
          <TxLi key={index}>
            <div className='action'>
              <strong>
                {transaction.data.includes('0x0c0a7630') && 'Swap Token'}
              </strong>
            </div>
            <div className='hash'>
              <div>{transaction.hash}</div>
            </div>
            <div className='status'>
              <strong>{transaction.hash ? 'Success' : 'Fail'}</strong>
            </div>
            <div className='date'>{Date.now()}</div>
          </TxLi>
        ))
      ) : (
        <TxLi>
          <div style={{ margin: '0 auto' }}>내역이 없습니다</div>
        </TxLi>
      )}
    </>
  );
};
