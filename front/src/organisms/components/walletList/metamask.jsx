import { WalletList } from './styled';
import { ethers } from 'ethers';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  loginState,
  accountState,
  loadingState,
  popupState,
  selectedWallet,
  trustwalletLoginState,
  walletconnectLoginState,
  balanceState,
} from '../../../organisms/store';
import TokenABi from '../../../ABI/contracts/SelfToken.sol/SelfToken.json';
import { useRef, useEffect } from 'react';

export const Metamask = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  const providerRef = useRef(null);
  const [popupOpen, setPopupOpen] = useRecoilState(popupState);
  const [isTrustwalletLogin, setIsTrustwalletLogin] = useRecoilState(
    trustwalletLoginState,
  );
  const [isWalletconnectLogin, setIsWalletconnectLogin] = useRecoilState(
    walletconnectLoginState,
  );
  const [balance, setBalance] = useRecoilState(balanceState);

  const updateBalances = async () => {
    if (providerRef.current === null) {
      console.log('Provider is not initialized');
      return;
    }
    const tokenAddressMap = {
      USDT: process.env.REACT_APP_USDT_TOKEN_ADDRESS,
      ARB: process.env.REACT_APP_ARB_TOKEN_ADDRESS,
      ETH: process.env.REACT_APP_ETH_TOKEN_ADDRESS,
      ASD: process.env.REACT_APP_ASD_TOKEN_ADDRESS,
    };

    let newBalance = { ...balance };

    for (let tokenName in tokenAddressMap) {
      const tokenContract = new ethers.Contract(
        tokenAddressMap[tokenName],
        TokenABi.abi,
        providerRef.current,
      );
      const tokenBalance = await tokenContract.balanceOf(account);
      newBalance[tokenName] = ethers.utils.formatEther(tokenBalance);
    }
    setBalance(newBalance);
  };

  const handleLogin = async () => {
    setIsloading(true);
    try {
      if (!window.ethereum) {
        alert('Metamask가 설치되어있지 않습니다. 설치 후 다시시도해주세요.');
        return;
      }
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      providerRef.current = provider;
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      if (address) {
        setAccount(address);
        setIsLogin(true);
        setWallet('metamask');
        setPopupOpen(false);
        setIsTrustwalletLogin(false);
        setIsWalletconnectLogin(false);
        await updateBalances();
      } else {
        alert('로그인이 만료되었거나, 실패하였습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error(error);
    }
    setIsloading(false);
  };

  const intervalId = useRef(null);
  useEffect(() => {
    intervalId.current = setInterval(() => {
      if (isLogin) {
        updateBalances();
      }
    }, 30000);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [isLogin]);

  return (
    <>
      <WalletList onClick={handleLogin}>
        <img src="/images/logo-metaMask.png" alt="Metamask" />
        <p>
          {isLogin && wallet === 'metamask' ? 'Metamask 연결됨' : 'Metamask'}
        </p>
      </WalletList>
    </>
  );
};
