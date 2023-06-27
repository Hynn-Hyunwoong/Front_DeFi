import { useRecoilState } from "recoil";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { loginState, accountState, loadingState } from "../organisms/store";
import { Button, Loader } from "../organisms/components";

export const Test = () => {
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
      } else {
        alert("로그인 햇자나!");
      }
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
            {/* {isLogin ? "로그인 됨!" : "로그인 안됨"} */}
            메타마스크
          </Button>
          <Button colors={"green"}>트러스트 월렛</Button>
          <Button colors={"yellow"}>월렛 커넥트</Button>
          {/* {loading && <Loader />} */}
        </div>
      )}
    </>
  );
};
