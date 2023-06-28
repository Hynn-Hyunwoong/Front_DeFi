import { useRecoilState } from "recoil";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { loginState, accountState, loadingState } from "../organisms/store";
import { Button, Loader, Popup } from "../organisms/components";

export const Test = () => {
  return (
    <>
      <Popup>안농!~~!!</Popup>
    </>
  );
};

/* 메타마스크 로그인
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [isLoading, setIsloading] = useRecoilState(loadingState);
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
    } catch (e) {
      console.log(e);
      setIsloading(false);
    }
  };
  // 연결을 끊는 건 없고, 지갑 변경을 눌렀을 때 다른 지갑으로 요청 보내면 될 것 같음

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="TEST">
          {account}
          <Button colors={"blue"} onClick={handleLogin}>
            MetaMask 연결하기
          </Button>
          <Button colors={"green"}>TrustWallet 연결하기</Button>
          <Button colors={"yellow"}>WalletConnect 연결하기</Button>
        </div>
      )}
    </>
  );
*/
