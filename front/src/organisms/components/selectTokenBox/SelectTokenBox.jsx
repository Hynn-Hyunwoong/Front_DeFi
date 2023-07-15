import React, { useEffect, useState } from 'react';
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
import { useRecoilState, useRecoilValue } from 'recoil';
import { balanceState, fromAmount, tokenPricesState } from '../../store';
import { InputBox } from '../inputBox/InputBox';
import { ethers } from 'ethers';
import tokenABI from '../../../ABI/contracts/SelfToken.sol/SelfToken.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const tokenData = {
  init: {
    logo: 'null',
    symbol: 'Token',
    value: '0',
    Address: 'null',
  },
  ASD: {
    logo: 'solar',
    name: '솔라스왑',
    symbol: 'ASD',
    price: '30,634.0034',
    balance: '10384',
    evaluation: '123933.3212',
    Address: process.env.REACT_APP_ASD_TOKEN_ADDRESS,
  },
  USDT: {
    logo: 'tether',
    name: '테더',
    symbol: 'USDT',
    price: '0,634.0034',
    balance: '0',
    evaluation: '0.00',
    Address: process.env.REACT_APP_USDT_TOKEN_ADDRESS,
  },
  ETH: {
    logo: 'ethereum',
    name: '이더리움',
    symbol: 'ETH',
    price: '30,634.0034',
    balance: '12',
    evaluation: '123933.3212',
    Address: process.env.REACT_APP_ETH_TOKEN_ADDRESS,
  },
  ARB: {
    logo: 'arbitrum',
    name: '아비트럼',
    symbol: 'ARB',
    price: '0,634.0034',
    balance: '0',
    evaluation: '0.00',
    Address: process.env.REACT_APP_ARB_TOKEN_ADDRESS,
  },
};

export const SelectTokenBox = ({
  children,
  tokenList,
  setTokenList = () => {},
  token,
  setToken,
  amount,
  setAmount,
}) => {
  const balance = useRecoilValue(balanceState);
  const tokenPrices = useRecoilValue(tokenPricesState);

  const inputChange = (e) => {
    setAmount(e.target.value);
  };

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
          <InputStyled
            onChange={inputChange}
            type="number"
            min={1}
            placeholder="0"
          />
          <RightItem>{tokenBox(token)}</RightItem>
        </InputBoxWrap>
        <BalanceStyled>보유 : {balance[tokenData[token].symbol]}</BalanceStyled>
      </SectionStyled>
      {tokenList && (
        <Popup height={'500px'}>
          <PopupTokenList setToken={setToken} setTokenList={setTokenList} />
        </Popup>
      )}
    </>
  );
};
