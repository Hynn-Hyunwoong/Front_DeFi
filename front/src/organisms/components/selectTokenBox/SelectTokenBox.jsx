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
import { ethers } from 'ethers';
import tokenABI from '../../../ABI/contracts/SelfToken.sol/SelfToken.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const tokenData = {
  init: {
    logo: 'null',
    symbol: 'Token',
    Address: 'null',
  },
  solar: {
    logo: 'solar',
    symbol: 'ASD',
    Address: process.env.REACT_APP_ASD_TOKEN_ADDRESS,
  },
  tether: {
    logo: 'tether',
    symbol: 'USDT',
    Address: process.env.REACT_APP_USDT_TOKEN_ADDRESS,
  },
  ethereum: {
    logo: 'ethereum',
    symbol: 'ETH',
    Address: process.env.REACT_APP_ETH_TOKEN_ADDRESS,
  },
  arbitrum: {
    logo: 'arbitrum',
    symbol: 'ARB',
    Address: process.env.REACT_APP_ARB_TOKEN_ADDRESS,
  },
};

const getBalance = async (address) => {
  const contract = new ethers.Contract(address, tokenABI.abi, signer);
  const balance = await contract.balanceOf(signer.getAddress());
  return ethers.utils.formatEther(balance);
};

export const SelectTokenBox = ({
  children,
  tokenList,
  setTokenList = () => {},
  token,
  setToken,
}) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (tokenData[token]) {
      getBalance(tokenData[token].Address).then(setBalance);
    }
  }, [token]);

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
          alt="tokenLogo"
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
          <InputStyled type="number" min={1} placeholder="0" />
          <RightItem>{tokenBox(token)}</RightItem>
        </InputBoxWrap>
        <BalanceStyled>보유 : {balance}</BalanceStyled>
      </SectionStyled>
      {tokenList && (
        <Popup height={'500px'}>
          <PopupTokenList setToken={setToken} setTokenList={setTokenList} />
        </Popup>
      )}
    </>
  );
};
