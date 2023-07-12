import { useRecoilState } from 'recoil';
import { BoxWrap, BoxArticle, Exchange, ButtonArticle } from './styled';
import { LightP } from '../main/styled';
import { SelectTokenBox } from '../../components';
import {
  FromTokenState,
  ToTokenState,
  tokenFromListPopupState,
  tokenToListPopupState,
} from '../../store';

export const ExchangeBox = () => {
  const [fromTokenList, setFromTokenList] = useRecoilState(
    tokenFromListPopupState
  );
  const [toTokenList, setToTokenList] = useRecoilState(tokenToListPopupState);
  const [fromToken, setFromToken] = useRecoilState(FromTokenState);
  const [toToken, setToToken] = useRecoilState(ToTokenState);

  const test = () => {
    console.log(`hi`);
  };

  return (
    <>
      <BoxWrap className='swapBox'>
        <BoxArticle>
          <SelectTokenBox
            token={fromToken}
            tokenList={fromTokenList}
            setToken={setFromToken}
            setTokenList={setFromTokenList}
          >
            From
          </SelectTokenBox>
          <Exchange>
            <span>↑↓</span>
          </Exchange>
          <SelectTokenBox
            token={toToken}
            tokenList={toTokenList}
            setToken={setToToken}
            setTokenList={setToTokenList}
          >
            To
          </SelectTokenBox>
        </BoxArticle>

        <ButtonArticle onClick={test}>
          {!fromToken || !toToken ? (
            <div className='errorAlert'>
              <div>❗️❗️❗️</div>
              <div>
                <LightP size='14px'>토큰을 선택해주세요</LightP>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className='swapButton'>
            <h2>SWAP</h2>
          </div>
        </ButtonArticle>
      </BoxWrap>
    </>
  );
};
