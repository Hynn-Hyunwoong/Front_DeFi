import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { HeaderWrap, HeaderTop, HeaderBottom } from './styled';
import { Navigation, Logo, Button, Popup } from '../../../components';
import {
  loginState,
  accountState,
  networkState,
  popupState,
  selectedWallet,
} from "../../../store";
import { Wallet } from "../../../contents/popupWallet/Wallet";
import { useQuery } from "@tanstack/react-query";

export const Header = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [network, setNetwork] = useRecoilState(networkState);
  const [popup, setPopup] = useRecoilState(popupState);
  const [wallet, setWallet] = useRecoilState(selectedWallet);

  const fetchNetwork = async () => {
    const networkId = await window.ethereum.request({
      method: 'net_version',
    });
    return networkId;
  };

  const {
    data: networkId,
    isLoading,
    error,
  } = useQuery(['networkId'], fetchNetwork);

  const popupHandler = (e) => {
    e.preventDefault();
    setPopup(!popup);
  };

  const handleAccountChange = (account) => {
    if (account.length === 0 || null) {
      setIsLogin(false);
      setAccount(null);
    }
  };
  const handleNetworkChanged = (...args) => {
    // console.log(args[0]);
    const networkId = args[0]; // networkId를 인자값으로 바로 넣으면 얘 없어질 수 있는데.. 왜 있지?
    // window.location.reload();
    if (networkId.toString() === '42161') {
      setNetwork(true);
      console.log(network);
    } else setNetwork(false);
  };

  useEffect(() => {
    if (window.trustwallet) {
      window.trustwallet.on('accountsChanged', handleAccountChange);
      window.trustwallet.on('networkChanged', handleNetworkChanged);
    }
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountChange);
      window.ethereum.on('networkChanged', handleNetworkChanged);
    }
    return () => {
      if (window.trustwallet) {
        window.trustwallet.off('accountsChanged', handleAccountChange);
        window.trustwallet.off('networkChanged', handleNetworkChanged);
        // console.log(networkId);
      }
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountChange);
        window.ethereum.removeListener('networkChanged', handleNetworkChanged);
      }
    };
  }, [account]);

  useEffect(() => {
    if (!isLoading && !error) {
      if (networkId === '42161') {
        console.log('현재 연결된 네트워크는 아비트럼입니다.');
        setNetwork(true);
      } else {
        console.log('현재 연결된 네트워크는 아비트럼이 아닙니다.');
        setNetwork(false);
      }
    }
  }, [networkId]);

  // Wallet 컴포넌트 안에 있는 각각의 지갑 컨트랙트는 연결만 시켜줄 뿐
  // 연결된 account가 존재하는지, 어느 네트워크에 연결 되어 있는지는 Header 컴포넌트에서 처리
  return (
    <>
      <HeaderWrap>
        <HeaderTop></HeaderTop>
        <HeaderBottom>
          <div>
            <Logo />
            <Navigation />
            <Button
              colors="blue"
              width="150px"
              height="40px"
              onClick={popupHandler}
            >
              {(wallet === 'metamask' && (
                <img
                  src="/images/logo-metamask.png"
                  style={{ width: '15px' }}
                />
              )) || (
                <img src="/images/logo-TWT.png" style={{ width: '15px' }} />
              )}
              {isLogin
                ? account && network
                  ? account
                  : ' wrong network'
                : '지갑 연결'}
            </Button>
          </div>
        </HeaderBottom>
        {popup && (
          <Popup>
            <Wallet />
          </Popup>
        )}
      </HeaderWrap>
    </>
  );
};

/*
  useEffect(() => {
    // 어카운트가 있냐 없냐 확인 => 없으면 전역에 저장한 account 값 없애야 해서 있어야 함
    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        setIsLogin(false);
        setAccount(null);
      }
    };
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }  // 실행 시켰다가 다시 리턴으로 없애기?
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
    // 연결된 네트워크가 아비트럼인지 아닌지 확인
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
    // 연결된 네트워크가 변경되었을 때 변경을 감지
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
*/
