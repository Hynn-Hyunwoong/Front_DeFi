import {
  tokenFromListPopupState,
  tokenToListPopupState,
  FromTokenState,
  ToTokenState,
  swapFromAmountState,
  swapToAmountState,
  otherAmountState,
} from '../../store';
import { useRecoilState } from 'recoil';
import { SelectTokenBox } from '../selectTokenBox/SelectTokenBox';
import { Exchange } from './styled';

export const BoxArticle = ({ title1, sign, title2 }) => {
  const [fromTokenList, setFromTokenList] = useRecoilState(
    tokenFromListPopupState
  );
  const [fromAmount, setFromAmount] = useRecoilState(swapFromAmountState);
  const [toAmount, setToAmount] = useRecoilState(swapToAmountState);
  const [toTokenList, setToTokenList] = useRecoilState(tokenToListPopupState);
  const [fromToken, setFromToken] = useRecoilState(FromTokenState);
  const [toToken, setToToken] = useRecoilState(ToTokenState);

  return (
    <>
      <SelectTokenBox
        token={fromToken} // token값은 solar, tether 같은 로고 명으로 들어갑니다!
        tokenList={fromTokenList} // 모달창 띄우고 닫을 수 있는 상태
        amount={fromAmount}
        setToken={setFromToken}
        setTokenList={setFromTokenList}
        setAmount={setFromAmount}
      >
        {title1}
      </SelectTokenBox>
      <Exchange>
        <span>{sign}</span>
      </Exchange>
      <SelectTokenBox
        token={toToken}
        tokenList={toTokenList}
        amount={toAmount}
        setToken={setToToken}
        setTokenList={setToTokenList}
        setAmount={setToAmount}
      >
        {title2}
      </SelectTokenBox>
    </>
  );
};
