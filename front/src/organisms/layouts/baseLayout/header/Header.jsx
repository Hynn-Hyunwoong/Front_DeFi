import { ethers } from 'ethers';
import { useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { HeaderWrap, HeaderTop, HeaderBottom } from './styled';
import { Navigation, Logo, Button, Popup } from '../../../components';
import {
  loginState,
  accountState,
  networkState,
  popupState,
  balanceState,
  selectedWallet,
} from '../../../store';
import { Wallet } from '../../../contents/popupWallet/Wallet';
import { useQuery } from '@tanstack/react-query';
import ASDTokenABI from '../../../../ABI/ASDToken.json';

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const ARBrpc = process.env.REACT_APP_ARBITRUM_RPC;
const ETHrpc = process.env.REACT_APP_ETHEREUM_RPC;

export const Header = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [network, setNetwork] = useRecoilState(networkState);
  const [popup, setPopup] = useRecoilState(popupState);
  // eslint-disable-next-line no-unused-vars
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  const [balance, setBalance] = useRecoilState(balanceState);

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

  const handleAccountChange = useCallback(
    (account) => {
      if (account.length === 0 || null) {
        setIsLogin(false);
        setAccount(null);
      }
    },
    [setAccount, setIsLogin],
  );
  const handleNetworkChanged = useCallback(
    (...args) => {
      const networkId = args[0];
      if (networkId.toString() === '421613') {
        setNetwork(true);
      } else setNetwork(false);
    },
    [setNetwork],
  );

  const updateBalance = useCallback(async () => {
    if (account && window.ethereum) {
      const ARBprovider = new ethers.providers.JsonRpcProvider(ARBrpc);
      const ETHprovider = new ethers.providers.JsonRpcProvider(ETHrpc);
      const contract = new ethers.Contract(
        contractAddress,
        ASDTokenABI.abi,
        ARBprovider,
      );

      const ARBbalance = ethers.utils.formatEther(
        await ARBprovider.getBalance(account),
      );
      const ETHbalance = ethers.utils.formatEther(
        await ETHprovider.getBalance(account),
      );
      const ASDbalance = ethers.utils.formatEther(
        await contract.balanceOf(account),
      );

      try {
        setBalance({
          ...balance,
          ETH: ETHbalance,
          ARB: ARBbalance,
          ASD: ASDbalance,
        });
        console.log(ETHbalance, ARBbalance, ASDbalance);
      } catch (e) {
        console.log(e);
      }
    }
  }, [account, balance, setBalance]);

  useEffect(() => {
    updateBalance();
  }, [account, network, updateBalance]);

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
      }
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountChange);
        window.ethereum.removeListener('networkChanged', handleNetworkChanged);
      }
    };
  }, [handleAccountChange, handleNetworkChanged, error, isLoading, setNetwork]);

  useEffect(() => {
    if (!isLoading && !error) {
      if (networkId === '421613') {
        console.log(`This Network is ArbitrumTestnet.${networkId}}`);
        setNetwork(true);
      } else if (networkId === '5') {
        console.log(`This Network is EthereumTestnet. ${networkId}`);
        setNetwork(true);
      } else {
        console.log('현재 연결된 네트워크가 없습니다.');
        setNetwork(false);
      }
    }
  }, [networkId, error, isLoading, setNetwork]);

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
              style={{ display: 'flex', alignItems: 'center' }} // Add flex styling
            >
              {wallet === 'metamask' && (
                <img
                  src="/images/logo-metamask.png"
                  alt="logo-metamask"
                  style={{
                    width: '25px',
                    marginRight: '10px',
                    verticalAlign: 'middle',
                  }}
                />
              )}
              {wallet === 'trustwallet' && (
                <img
                  src="/images/logo-TWT.png"
                  alt="logo-trustwallet"
                  style={{
                    width: '25px',
                    marginRight: '10px',
                    verticalAlign: 'middle',
                  }}
                />
              )}
              {wallet === 'walletconnect' && (
                <img
                  src="/images/logo-walletConnect.png"
                  alt="logo-walletconnect"
                  style={{
                    width: '20px',
                    marginRight: 'px',
                    verticalAlign: 'middle',
                  }}
                />
              )}
              {isLogin
                ? account && network
                  ? wallet + ' 연결됨'
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
