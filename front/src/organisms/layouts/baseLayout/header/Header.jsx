import { HeaderWrap, HeaderTop, HeaderBottom } from "./styled";
import { Navigation, Logo, Button } from "../../../components";
import { useRecoilState } from "recoil";
import { loginState, accountState, networkState } from "../../../store";
import { useEffect } from "react";

export const Header = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [network, setNetwork] = useRecoilState(networkState);

  useEffect(() => {
    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        setIsLogin(false);
        setAccount(null);
      }
    };
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      }
    };
  }, [account]);

  useEffect(() => {
    (async () => {
      try {
        const networkId = await window.ethereum.request({
          method: "net_version",
        });
        if (networkId === "42161") {
          console.log("현재 연결된 네트워크는 아비트럼입니다.");
          setNetwork(true);
        } else {
          console.log("현재 연결된 네트워크는 아비트럼이 아닙니다.");
          setNetwork(false);
        }
      } catch (error) {
        console.error("네트워크 확인 중 오류가 발생했습니다.", error);
      }
    })();
  }, [network]);

  useEffect(() => {
    const handleNetworkChanged = (...args) => {
      const networkId = args[0];
      window.location.reload();
      if (networkId === "42161") {
        setNetwork(true);
      } else setNetwork(false);
    };

    window.ethereum?.on("networkChanged", handleNetworkChanged);
    return () => {
      window.ethereum?.removeListener("networkChanged", handleNetworkChanged);
    };
  });

  return (
    <HeaderWrap>
      <HeaderTop>
      </HeaderTop>
      <HeaderBottom>
        <div>
          <Logo />
          <Navigation />
          <Button colors="blue" width="150px" height="40px">
            {isLogin
              ? account && network
                ? account
                : "wrong network"
              : "지갑 연결"}
          </Button>
        </div>
      </HeaderBottom>
    </HeaderWrap>
  );
};
