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
  balanceState,
} from '../../../organisms/store';
import ASDTokenABI from '../../../ABI/ASDToken.json';

const contractaddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const ARBrpc = process.env.REACT_APP_ARBITRUM_RPC;
const ETHrpc = process.env.REACT_APP_ETHEREUM_RPC;

export const Metamask = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  const [popupOpen, setPopupOpen] = useRecoilState(popupState);
  const [isTrustwalletLogin, setIsTrustwalletLogin] = useRecoilState(
    trustwalletLoginState,
  );
  const [isWalletconnectLogin, setIsWalletconnectLogin] = useRecoilState(
    walletconnectLoginState,
  );
  const [balance, setBalance] = useRecoilState(balanceState);

  const updateBalances = async (
    ARBProvider,
    ETHProvider,
    ASDProvider,
    accounts,
  ) => {
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
  };

  const handleLogin = async () => {
    setIsloading(true);
    try {
      if (!window.ethereum) {
        alert('Metamask가 설치되어있지 않습니다. 설치 후 다시시도해주세요.');
        return;
      }
      const ARBProvider = new ethers.providers.JsonRpcProvider(ARBrpc);
      const ETHProvider = new ethers.providers.JsonRpcProvider(ETHrpc);
      const ASDProvider = new ethers.Contract(
        contractaddress,
        ASDTokenABI.abi,
        ARBProvider,
      );
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
        wallet: 'metamask',
      });

      setAccount(accounts[0]);
      setIsLogin(true);
      setWallet('metamask');
      updateBalances(ARBProvider, ETHProvider, ASDProvider, accounts);
      setPopupOpen(false);
      setIsTrustwalletLogin(false);
      setIsWalletconnectLogin(false);
    } catch (error) {
      console.error(error);
    }
    setIsloading(false);
  };

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
