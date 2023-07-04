import { useState } from 'react';
import { ethers } from 'ethers';
import { WalletList } from './styled';
import { useRecoilState } from 'recoil';
import {
  loginState,
  accountState,
  loadingState,
  popupState,
  providerState,
  selectedWallet,
  metamaskLoginState,
  trustwalletLoginState,
} from '../../../organisms/store';
import { EthereumProvider } from '@walletconnect/ethereum-provider';

const APIKEY = process.env.REACT_APP_INFURA_ID;

export const WalletConnect = () => {
  const [provider, setProvider] = useRecoilState(providerState);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  const [qrCodeUri, setQrCodeUri] = useState(null);
  const [popupOpen, setPopupOpen] = useRecoilState(popupState);
  const [isMetamaskLogin, setIsMetamaskLogin] =
    useRecoilState(metamaskLoginState);
  const [isTrustwalletLogin, setIsTrustwalletLogin] = useRecoilState(
    trustwalletLoginState,
  );

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

      walletConnectProvider.on('connect', () => {
        setQrCodeUri(null);
      });

      const uri = await walletConnectProvider.connect();
      setQrCodeUri(uri);
      const provider = new ethers.BrowserProvider(walletConnectProvider);
      setProvider(provider);
      const signer = provider.getSigner();
      setAccount((await signer).address);
      setIsLogin(true);
      setWallet('walletconnect');
      setIsMetamaskLogin(false);
      setIsTrustwalletLogin(false);
      setPopupOpen(false);
      const wei = await provider.getBalance(account);
      const balance = ethers.formatEther(wei);
      console.log(balance);
    } catch (error) {
      if (error.message === 'User closed modal') {
        console.log('WalletConnect Closed');
      } else {
        console.error(error);
      }
    }
    setIsloading(false);
  };

  return (
    <>
      <WalletList onClick={handleLogin}>
        <img src="/images/logo-walletconnect.png" />
        <p>
          {isLogin && wallet === 'walletconnect'
            ? 'WalletConnect 연결됨'
            : 'WalletConnect'}
        </p>
      </WalletList>
    </>
  );
};
