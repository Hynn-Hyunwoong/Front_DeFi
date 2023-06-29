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
} from "../../../organisms/store";
import { Loader } from "../loader/Loader";

export const Metamask = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const [popup, setPopup] = useRecoilState(popupState);
  const [provider, setProvider] = useRecoilState(providerState);

  const handleLogin = async () => {
    setIsloading(true);
    try {
      if (!window.ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setAccount(accounts[0]);
      setIsLogin(true);

      const provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(provider);
      setPopup(false);
      console.log(provider);
    } catch (error) {
      console.log(error);
    }
    setIsloading(false);
  };

  return (
    <>
      {isLoading ? (
        <p>metamask 연결중</p>
      ) : (
        <WalletList onClick={handleLogin}>
          <img src="images/logo-metaMask.png" />
          <p>Metamask</p>
        </WalletList>
      )}
    </>
  );
};

/*
  // const queryClient = useQueryClient();

  // const fetchAccount = async () => {
  //   const accounts = await window.ethereum.request({
  //     method: "eth_requestAccounts",
  //   });
  //   return accounts[0];
  // };

  // const handleLogin = async () => {
  //   try {
  //     setIsloading(true);
  //     const data = await queryClient.fetchQuery(["account"], fetchAccount);
  //     setAccount(data);
  //     setIsLogin(true);
  //     setIsloading(false);
  //     setPopup(false);
  //   } catch (e) {
  //     console.log(e);
  //     setIsloading(false);
  //   }
  // };

        // const signer = provider.getSigner();
      // const wavePortalContract = new ethers.Contract(
      //   contractAddress,
      //   contractABI,
      //   signer
      // );

      // let count = await wavePortalContract.getTotalWaves();
*/
