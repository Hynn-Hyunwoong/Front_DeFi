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
  metamaskLoginState,
  walletconnectLoginState,
  balanceState,
} from '../../../organisms/store';
import ASDTokenABI from '../../../ABI/ASDToken.json';
import { getTrustWalletInjectedProvider } from '../../../utils/trustWalletInject';

const contractaddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const ARBrpc = process.env.REACT_APP_ARBITRUM_RPC;
const ETHrpc = process.env.REACT_APP_ETHEREUM_RPC;

export const TrustWallet = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  // eslint-disable-next-line no-unused-vars
  const [provider, setProvider] = useRecoilState(providerState);
  // eslint-disable-next-line no-unused-vars
  const [popupOpen, setPopupOpen] = useRecoilState(popupState);
  // eslint-disable-next-line no-unused-vars
  const [isMetamaskLogin, setIsMetamaskLogin] =
    useRecoilState(metamaskLoginState);
  // eslint-disable-next-line no-unused-vars
  const [isWalletconnectLogin, setIsWalletconnectLogin] = useRecoilState(
    walletconnectLoginState,
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
      ARB: ARBbalance,
      ETH: ETHbalance,
      ASD: ASDbalance,
    });
  };

  const handleLogin = async () => {
    setIsloading(true);
    try {
      if (!window.trustwallet) {
        alert(
          'Trust-Wallet 이 설치되어 있지 않습니다. 설치 후 다시시도해주세요.',
        );
        return;
      }
      const Provider = new ethers.BrowserProvider(
        await getTrustWalletInjectedProvider(),
      );

      const ARBaccounts = await window.trustwallet.request({
        method: 'eth_requestAccounts',
      });
      setProvider((await Provider.getSigner()).address);

      setAccount(ARBaccounts);
      setIsLogin(true);
      setWallet('trustwallet');
      setPopupOpen(false);
      setIsMetamaskLogin(false);
      setIsWalletconnectLogin(false);
      await updateBalances([account], [account]);
    } catch (e) {
      console.error(e);
    }
  };

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
