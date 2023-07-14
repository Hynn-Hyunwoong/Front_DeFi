import { useEffect } from 'react';
import { TxLi } from './styled';
import { ethers } from 'ethers';
import { useRecoilValue } from 'recoil';
import { transactionState } from '../../store';

export const TxHistoryLi = () => {
  const transactions = useRecoilValue(transactionState);
  console.log(transactions);

  const statusState = {};

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
