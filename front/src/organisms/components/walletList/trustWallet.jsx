import { WalletList } from './styled';
import { ethers } from 'ethers';
import { useRecoilState } from 'recoil';
import { useRef, useEffect } from 'react';
import {
  loginState,
  accountState,
  loadingState,
  popupState,
  selectedWallet,
  metamaskLoginState,
  walletconnectLoginState,
  balanceState,
} from '../../../organisms/store';
import TokenABi from '../../../ABI/contracts/SelfToken.sol/SelfToken.json';

export const TrustWallet = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  const providerRef = useRef(null);
  const [popupOpen, setPopupOpen] = useRecoilState(popupState);
  const [isMetamaskLogin, setIsMetamaskLogin] =
    useRecoilState(metamaskLoginState);
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
    console.log(newBalance);
    setBalance(newBalance);
  };

  const handleLogin = async () => {
    setIsloading(true);
    try {
      if (!window.trustWallet) {
        alert('TrustWallet이 설치되어있지 않습니다. 설치 후 다시시도해주세요.');
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.trustWallet);
      providerRef.current = provider;
      const accounts = await window.trustWallet.request({
        method: 'eth_requestAccounts',
      });

      if (accounts[0]) {
        setAccount(accounts[0]);
        setIsLogin(true);
        setWallet('trustwallet');
        setPopupOpen(false);
        setIsMetamaskLogin(false);
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
        <img src="/images/logo-TWT.png" alt="TWT" />
        <p>
          {isLogin && wallet === 'trustwallet'
            ? 'Trust Wallet 연결됨'
            : 'Trust Wallet'}
        </p>
      </WalletList>
    </>
  );
};
