import { useState, useRef, useEffect } from 'react';
import { ethers } from 'ethers';
import { WalletList } from './styled';
import { useRecoilState } from 'recoil';
import {
  loginState,
  accountState,
  loadingState,
  popupState,
  selectedWallet,
  metamaskLoginState,
  trustwalletLoginState,
  balanceState,
} from '../../../organisms/store';
import TokenABi from '../../../ABI/contracts/SelfToken.sol/SelfToken.json';
import { EthereumProvider } from '@walletconnect/ethereum-provider';

const APIKEY = process.env.REACT_APP_INFURA_ID;
const ARBrpc = process.env.REACT_APP_ARBITRUM_RPC;

export const WalletConnect = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  const [popupOpen, setPopupOpen] = useRecoilState(popupState);
  const [qrCodeUri, setQrCodeUri] = useState(null);
  const [isMetamaskLogin, setIsMetamaskLogin] =
    useRecoilState(metamaskLoginState);
  const [isTrustwalletLogin, setIsTrustwalletLogin] = useRecoilState(
    trustwalletLoginState,
  );
  const [balance, setBalance] = useRecoilState(balanceState);

  const updateBalances = async (accounts) => {
    if (!account) {
      console.log('Account is not defined');
      return;
    }
    const provider = new ethers.providers.JsonRpcProvider(ARBrpc);
    const tokenAddressMap = {
      ARB: process.env.REACT_APP_ARB_TOKEN_ADDRESS,
      ETH: process.env.REACT_APP_ETH_TOKEN_ADDRESS,
      ASD: process.env.REACT_APP_ASD_TOKEN_ADDRESS,
      USDT: process.env.REACT_APP_USDT_TOKEN_ADDRESS,
    };

    let newBalance = { ...balance };

    for (let tokenName in tokenAddressMap) {
      const tokenContract = new ethers.Contract(
        tokenAddressMap[tokenName],
        TokenABi.abi,
        provider,
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
      const walletConnectProvider = await EthereumProvider.init({
        projectId: APIKEY,
        chains: [421613],
        showQrModal: true,
        methods: ['eth_accounts', 'eth_sendTransaction'],
        events: [
          'session_request',
          'session_update',
          'session_reject',
          'call_request',
          'disconnect',
          'connect',
          'reset',
        ],
      });

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
        wallet: 'walletconnect',
      });

      walletConnectProvider.on('connect', () => {
        setQrCodeUri(null);
      });

      const uri = await walletConnectProvider.connect();
      setQrCodeUri(uri);

      const walletConnectProviderAccounts = new ethers.providers.Web3Provider(
        walletConnectProvider,
      );
      const signer = walletConnectProviderAccounts.getSigner();

      setAccount(accounts[0]);
      setIsLogin(true);
      setWallet('walletconnect');
      await updateBalances(accounts);
      setPopupOpen(false);
      setIsTrustwalletLogin(false);
      setIsMetamaskLogin(false);
    } catch (e) {
      console.log(e);
    }
    setIsloading(false);
  };

  const intervalId = useRef(null);
  useEffect(() => {
    intervalId.current = setInterval(() => {
      if (isLogin) {
        updateBalances([account]);
      }
    }, 30000); // 30 seconds

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [isLogin, account]);

  return (
    <>
      <WalletList onClick={handleLogin}>
        <img src="/images/logo-wallet.png" alt="WalletConnect" />
        <p style={{ fontSize: '24px', whiteSpace: 'nowrap' }}>
          {isLogin && wallet === 'walletconnect'
            ? 'WalletConnect 연결됨'
            : 'WalletConnect'}
        </p>
      </WalletList>
    </>
  );
};
