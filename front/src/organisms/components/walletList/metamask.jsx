import { WalletList } from './styled';
import { ethers } from 'ethers';
import { useRecoilState } from 'recoil';
import {
  loginState,
  accountState,
  loadingState,
  popupState,
  providerState,
  selectedWallet,
  trustwalletLoginState,
  walletconnectLoginState,
} from '../../../organisms/store';

export const Metamask = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  const [provider, setProvider] = useRecoilState(providerState);
  const [popupOpen, setPopupOpen] = useRecoilState(popupState);
  const [isTrustwalletLogin, setIsTrustwalletLogin] = useRecoilState(
    trustwalletLoginState,
  );
  const [isWalletconnectLogin, setIsWalletconnectLogin] = useRecoilState(
    walletconnectLoginState,
  );

  const handleLogin = async () => {
    setIsloading(true);
    try {
      if (!window.ethereum) {
        alert('Get MetaMask!');
        return;
      }

      const networkDetails = {
        chainId: '0x66eed',
        chainName: 'Arbitrum Testnet',
        nativeCurrency: {
          name: 'ETH',
          symbol: 'ETH',
          decimals: 18,
        },
        rpcUrls: 'bridge.arbitrum.io/rpc',
        blockExplorerUrls: 'https://goerli.arbiscan.io/',
      };

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
        wallet_addEthereumChain: networkDetails,
      });

      setIsTrustwalletLogin(false);
      setIsWalletconnectLogin(false);
      setAccount(accounts[0]);
      setIsLogin(true);
      setWallet('metamask');

      const provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(provider);
      setPopupOpen(false);
    } catch (error) {
      console.error(error);
    }
    setIsloading(false);
  };

  return (
    <>
      <WalletList onClick={handleLogin}>
        <img src="images/logo-metaMask.png" />
        <p>
          {isLogin && wallet === 'metamask' ? 'Metamask 연결됨' : 'Metamask'}
        </p>
      </WalletList>
    </>
  );
};
