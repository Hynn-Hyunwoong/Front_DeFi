import { WalletList } from "./styled";
import { ethers } from "ethers";
// import { useQueryClient } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import {
  loginState,
  accountState,
  loadingState,
  popupState,
  providerState,
  selectedWallet,
} from "../../../organisms/store";
import { getTrustWalletInjectedProvider } from "../../../utils/trustWallet";

export const TrustWallet = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const [popup, setPopup] = useRecoilState(popupState);
  const [provider, setProvider] = useRecoilState(providerState);
  const [wallet, setWallet] = useRecoilState(selectedWallet);

  const handleLogin = async () => {
    setIsloading(true);
    try {
      if (!window.trustwallet) {
        alert("Get Trust Wallet!");
        return;
      }
      const accounts = await window.trustwallet.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setAccount(accounts[0]);
      setIsLogin(true);
      setWallet("trustwallet");

      const injectedProvider = await getTrustWalletInjectedProvider();
      const provider = new ethers.BrowserProvider(injectedProvider);
      setProvider(provider);
      setPopup(false);
      console.log(provider);
    } catch (error) {
      console.log(error);
    }
    setIsloading(false);
  };

  return (
    <WalletList onClick={handleLogin}>
      <img src="images/logo-TWT.png" />
      <p>Trust Wallet</p>
    </WalletList>
  );
};
