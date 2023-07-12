import { TxLi } from './styled';

export const TxHistoryLi = ({ transactions }) => {
  return (
    <>
      {transactions.map((transaction, index) => (
        <TxLi key={index}>
          <div className='action'>
            <strong>{transaction.action}</strong>
          </div>
          <div className='hash'>
            <div>{transaction.hash}</div>
          </div>
          <div className='status'>
            <strong>{transaction.status}</strong>
          </div>
          <div className='date'>{transaction.date}</div>
        </TxLi>
      ))}
    </>
  );
};
