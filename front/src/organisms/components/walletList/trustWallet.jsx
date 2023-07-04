import { WalletList } from "./styled";
import { ethers } from "ethers";
import { useRecoilState } from "recoil";
import {
  loginState,
  accountState,
  loadingState,
  popupState,
  providerState,
  selectedWallet,
  metamaskLoginState,
  walletconnectLoginState,
} from "../../../organisms/store";
import { getTrustWalletInjectedProvider } from "../../../utils/trustWallet";


export const TrustWallet = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const [provider, setProvider] = useRecoilState(providerState);
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  const [popupOpen, setPopupOpen] = useRecoilState(popupState);
  const [isMetamaskLogin, setIsMetamaskLogin] =
    useRecoilState(metamaskLoginState);
  const [isWalletconnectLogin, setIsWalletconnectLogin] = useRecoilState(walletconnectLoginState);

  const handleLogin = async () => {
    setIsloading(true);
    try {
      if (!window.trustwallet) {
        alert('Get Trust Wallet!');
        return;
      }

      const accounts = await window.trustwallet.request({
        method: 'eth_requestAccounts',
      });
      console.log(123);
      setIsMetamaskLogin(false);
      setIsWalletconnectLogin(false);
      setAccount(accounts[0]);
      setIsLogin(true);
      setWallet('trustwallet');

      const injectedProvider = await getTrustWalletInjectedProvider();
      const newProvider = new ethers.BrowserProvider(injectedProvider);
      setProvider(newProvider);
      setPopupOpen(false);
    } catch (error) {
      console.error(error);
    }
    setIsloading(false);
  };

  return (
    <>
      <WalletList onClick={handleLogin}>
        <img src="/images/logo-TWT.png" />
        <p>
          {isLogin && wallet === "trustwallet"
            ? "Trust Wallet 연결됨"
            : "Trust Wallet"}
        </p>
      </WalletList>
    </>
  );
};
