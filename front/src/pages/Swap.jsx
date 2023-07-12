import {
  ExchangeBottom,
  ExchangeBox,
  ExchangeTop,
} from '../organisms/contents/exchangeSwap';

export const Swap = () => {
  // const [tokenList] = useRecoilState(tokenListPopupState);

  return (
    <div className='swap'>
      <ExchangeTop />
      <ExchangeBox />
      <ExchangeBottom />
    </div>
  );
};

// 관리해야 할 상태 : 로딩중인지 아닌지, input에 입력된 값이 from인지 to인지, amount값, token1이 뭔지(from), token2가 뭔지(to)
