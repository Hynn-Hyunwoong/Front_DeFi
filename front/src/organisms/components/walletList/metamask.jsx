import { WalletList } from "./styled";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import {
  loginState,
  accountState,
  loadingState,
  popupState,
} from "../../../organisms/store";

export const Metamask = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const [popup, setPopup] = useRecoilState(popupState);

  const queryClient = useQueryClient();

  const fetchAccount = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  };

  const handleLogin = async () => {
    try {
      if (!account) {
        setIsloading(true);
        const data = await queryClient.fetchQuery(["account"], fetchAccount);
        setAccount(data);
        setIsLogin(true);
        setIsloading(false);
        setPopup(false);
      }
    } catch (e) {
      console.log(e);
      setIsloading(false);
    }
  };
  return (
    <WalletList onClick={handleLogin}>
      <img src="images/logo-metaMask.png" />
      <p>Metamask</p>
    </WalletList>
  );
};
