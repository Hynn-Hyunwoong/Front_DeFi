import {
  ExchangeBottom,
  ExchangeBox,
  ExchangeTop,
} from '../organisms/contents/exchangeSwap';

export const Swap = () => {
  const transactions = [
    // 트랜잭션 데이터를 받아오면 됩니다! 아래와 같은 인터페이스로 설정해두었습니다.
    {
      action: 'Swap',
      hash: '0xabe4c17ef0e99cd52a2ce5374d1ddca3f1685f8c2187f3cb8cfdb710d19129b3',
      status: 'Success',
      date: '23-07-03 06:04:59',
    },
    {
      action: 'Approve',
      hash: '0xabe4c17ef0e99cd52a2ce5374d1ddca3f1685f8c2187f3cb8cfdb710d19129b3',
      status: 'Fail',
      date: '23-07-03 06:04:59',
    },
  ];
  return (
    <div className='swap'>
      <ExchangeTop />
      <ExchangeBox />
      <ExchangeBottom transactions={transactions} />
    </div>
  );
};

// 관리해야 할 상태 : 로딩중인지 아닌지, input에 입력된 값이 from인지 to인지, amount값, token1이 뭔지(from), token2가 뭔지(to)
