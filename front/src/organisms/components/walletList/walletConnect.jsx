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
  const [provider, setProvider] = useRecoilState(providerState);
  const [popupOpen, setPopupOpen] = useRecoilState(popupState);
  const [qrCodeUri, setQrCodeUri] = useState(null);
  const [isMetamaskLogin, setIsMetamaskLogin] =
    useRecoilState(metamaskLoginState);
  const [isTrustwalletLogin, setIsTrustwalletLogin] = useRecoilState(
    trustwalletLoginState,
  );
  const [balance, setBalance] = useRecoilState(balanceState);

  const updateBalances = async (ARBaccounts, ETHaccounts) => {
    const ARBprovider = new ethers.JsonRpcProvider(ARBrpc);
    const ETHprovider = new ethers.JsonRpcProvider(ETHrpc);
    const contract = new ethers.Contract(
      contractaddress,
      ASDTokenABI.abi,
      ARBprovider,
    );

    const ARBbalance = ethers.formatEther(
      await ARBprovider.getBalance(ARBaccounts[0]),
    );
    const ETHbalance = ethers.formatEther(
      await ETHprovider.getBalance(ETHaccounts[0]),
    );
    const ASDbalance = ethers.formatEther(
      await contract.balanceOf(ARBaccounts[0]),
    );

    console.log(ARBbalance, ETHbalance, ASDbalance);

    setBalance({
      ...balance,
      ETH: ETHbalance,
      ARB: ARBbalance,
      ASD: ASDbalance,
    });
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

      walletConnectProvider.on('connect', () => {
        setQrCodeUri(null);
      });

      const uri = await walletConnectProvider.connect();
      setQrCodeUri(uri);

      const walletConnectprovider = new ethers.BrowserProvider(
        walletConnectProvider,
      );
      setProvider(walletConnectprovider);

      const signer = walletConnectprovider.getSigner();
      console.log((await signer).address);

      setAccount((await signer).address);
      setIsLogin(true);
      setWallet('walletconnect');
      setPopupOpen(false);
      setIsMetamaskLogin(false);
      setIsTrustwalletLogin(false);

      await updateBalances([account], [account]);
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
