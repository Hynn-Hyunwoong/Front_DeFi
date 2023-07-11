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
import { ARBnetworkDetails, ETHnetworkDetails } from './networkDefine';
import ASDTokenABI from '../../../ABI/ASDToken.json';

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const ARBrpc = process.env.REACT_APP_ARBITRUM_RPC;
const ETHrpc = process.env.REACT_APP_ETHEREUM_RPC;

export const Metamask = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  // eslint-disable-next-line no-unused-vars
  const [account, setAccount] = useRecoilState(accountState);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  const [provider, setProvider] = useRecoilState(providerState);
  // eslint-disable-next-line no-unused-vars
  const [popupOpen, setPopupOpen] = useRecoilState(popupState);
  // eslint-disable-next-line no-unused-vars
  const [isTrustwalletLogin, setIsTrustwalletLogin] = useRecoilState(
    trustwalletLoginState,
  );
  // eslint-disable-next-line no-unused-vars
  const [isWalletconnectLogin, setIsWalletconnectLogin] = useRecoilState(
    walletconnectLoginState,
  );
  const [balance, setBalance] = useRecoilState(balanceState);

  const updateBalances = async (ARBaccounts, ETHaccounts) => {
    const ARBprovider = new ethers.JsonRpcProvider(ARBrpc);
    const ETHprovider = new ethers.JsonRpcProvider(ETHrpc);
    const contract = new ethers.Contract(
      contractAddress,
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
      if (!window.ethereum) {
        alert('Metamask가 설치되어있지 않습니다. 설치 후 다시시도해주세요.');
        return;
      }

      setProvider(provider);
      const ARBaccounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
        wallet_addEthereumChain: ARBnetworkDetails,
      });

      const ETHaccounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
        wallet_addEthereumChain: ETHnetworkDetails,
      });

      setAccount(ARBaccounts[0]);
      setIsLogin(true);
      setWallet('metamask');
      setPopupOpen(false);
      setIsTrustwalletLogin(false);
      setIsWalletconnectLogin(false);
      await updateBalances(ARBaccounts, ETHaccounts);
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
