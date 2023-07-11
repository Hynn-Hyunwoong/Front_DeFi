import { useRecoilState } from 'recoil';
import { BoxWrap, BoxArticle, Exchange, ButtonArticle } from './styled';
import { LightP } from '../main/styled';
import { SelectTokenBox } from '../../components';
import { FromTokenState, ToTokenState } from '../../store';

export const ExchangeBox = () => {
  // 필요한 상태값
  // 토큰 선택 했는지 안했는지
  // 선택한 토큰의 종류
  // eslint-disable-next-line no-unused-vars
  const [fromToken, setFromToken] = useRecoilState(FromTokenState);
  // eslint-disable-next-line no-unused-vars
  const [toToken, setToToken] = useRecoilState(ToTokenState);

  const test = () => {
    console.log(`hi`);
  };

  return (
    <>
      <BoxWrap className="swapBox">
        <BoxArticle>
          <SelectTokenBox
            children="From"
            // balance="100"
          />
          <Exchange>
            <span>↑↓</span>
          </Exchange>
          <SelectTokenBox
            children="To"
            // balance="100"
          />
        </BoxArticle>

        <ButtonArticle onClick={test}>
          {!fromToken || !toToken ? (
            <div className="errorAlert">
              <div>❗️❗️❗️</div>
              <div>
                <LightP size="14px">토큰을 선택해주세요</LightP>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="swapButton">
            <h2>SWAP</h2>
          </div>
        </ButtonArticle>
      </BoxWrap>
    </>
  );
};
