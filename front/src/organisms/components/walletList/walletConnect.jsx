import { useState } from 'react';
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
import ASDTokenABI from '../../../ABI/ASDToken.json';
import { EthereumProvider } from '@walletconnect/ethereum-provider';

const APIKEY = process.env.REACT_APP_INFURA_ID;
const contractaddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const ARBrpc = process.env.REACT_APP_ARBITRUM_RPC;
const ETHrpc = process.env.REACT_APP_ETHEREUM_RPC;

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
    try {
      const ARBProvider = new ethers.providers.JsonRpcProvider(ARBrpc);
      const ETHProvider = new ethers.providers.JsonRpcProvider(ETHrpc);
      const ASDProvider = new ethers.Contract(
        contractaddress,
        ASDTokenABI.abi,
        ARBProvider,
      );

      const ARBsigner = await ARBProvider.getBalance(accounts[0]);
      const ETHsigner = await ETHProvider.getBalance(accounts[0]);
      const ASDsigner = await ASDProvider.balanceOf(accounts[0]);

      const balanceA = ethers.utils.formatEther(ARBsigner);
      const balanceE = ethers.utils.formatEther(ETHsigner);
      const balanceASD = ethers.utils.formatEther(ASDsigner);

      setBalance({
        ...balance,
        ARB: balanceA,
        ETH: balanceE,
        ASD: balanceASD,
      });

      console.log(balanceA, balanceE, balanceASD);
    } catch (err) {
      console.error(`Failed to update balances: ${err}`);
    }
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
  };

  return (
    <>
      <WalletList onClick={handleLogin}>
        <img src="/images/logo-walletconnect.png" alt="WalletConnect" />
        <p>
          {isLogin && wallet === 'walletconnect'
            ? 'WalletConnect 연결됨'
            : 'WalletConnect'}
        </p>
      </WalletList>
    </>
  );
};
