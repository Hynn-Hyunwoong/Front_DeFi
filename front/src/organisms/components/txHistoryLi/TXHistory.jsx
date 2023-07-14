import { useEffect } from 'react';
import { TxLi } from './styled';
import { ethers } from 'ethers';
import { useRecoilValue } from 'recoil';
import { transactionState } from '../../store';

export const TxHistoryLi = () => {
  const transactions = useRecoilValue(transactionState);
  console.log(transactions);
  console.log(transactions[0].data);

  return (
    <>
      {transactions[0] ? (
        transactions.map((transaction, index) => (
          <TxLi key={index}>
            <div className='action'>
              {/* <strong>{ethers.utils.hexlify(transaction.data)}</strong> */}
            </div>
            <div className='hash'>
              <div>{transaction.hash}</div>
            </div>
            <div className='status'>
              <strong>{transaction.status}</strong>
            </div>
            <div className='date'>{transaction.date}</div>
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
