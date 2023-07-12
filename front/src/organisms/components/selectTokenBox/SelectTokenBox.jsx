import {
  LabelStyled,
  InputBoxWrap,
  InputStyled,
  TokenBox,
  RightItem,
  BalanceStyled,
  SectionStyled,
} from './styled';
import { Popup } from '../popup/Popup';
import { PopupTokenList } from '../../contents/exchangeSwap';

const tokenData = {
  init: {
    logo: 'null',
    symbol: 'Token',
  },
  solar: {
    logo: 'solar',
    symbol: 'ASD',
  },
  tether: {
    logo: 'tether',
    symbol: 'USDT',
  },
  ethereum: {
    logo: 'ethereum',
    symbol: 'ETH',
  },
  arbitrum: {
    logo: 'arbitrum',
    symbol: 'ARB',
  },
};

export const SelectTokenBox = ({
  children,
  tokenList,
  setTokenList = () => {},
  token,
  setToken,
}) => {
  const popupOpenEvent = () => {
    if (setTokenList) {
      setTokenList(true);
    }
  };

  const tokenBox = (token) => {
    return (
      <TokenBox
        key={tokenData[token].symbol}
        logo={tokenData[token].logo}
        token={tokenData[token].symbol}
        onClick={popupOpenEvent}
      >
        <img
          src={`/images/logo-${tokenData[token].logo}.png`}
          style={{ width: '30px' }}
          alt='tokenLogo'
        />
        <p>{tokenData[token].symbol}</p>
      </TokenBox>
    );
  };

  return (
    <>
      <SectionStyled>
        <LabelStyled>
          <strong>{children}</strong>
        </LabelStyled>
        <InputBoxWrap>
          <InputStyled type='number' min={1} placeholder='0' />
          <RightItem>{tokenBox(token)}</RightItem>
        </InputBoxWrap>
        <BalanceStyled>보유 : 10</BalanceStyled>
      </SectionStyled>
      {tokenList && (
        <Popup height={'500px'}>
          <PopupTokenList setToken={setToken} setTokenList={setTokenList} />
        </Popup>
      )}
    </>
  );
};
