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
import TokenABI from '../../../../ABI/contracts/SelfToken.sol/SelfToken.json';
import FacABI from '../../../../ABI/contracts/Factory_v1.sol/Factory_v1.json';

const contractAddresses = [
  process.env.REACT_APP_ARB_TOKEN_ADDRESS,
  process.env.REACT_APP_ETH_TOKEN_ADDRESS,
  process.env.REACT_APP_ASD_TOKEN_ADDRESS,
  process.env.REACT_APP_USDT_TOKEN_ADDRESS,
];

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const Contract = new ethers.Contract(
  process.env.REACT_APP_FACTORY_ADDRESS,
  FacABI.abi,
  signer,
);

export const Header = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [network, setNetwork] = useRecoilState(networkState);
  const [popup, setPopup] = useRecoilState(popupState);
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
    if (account) {
      let provider;
      switch (wallet) {
        case 'metamask':
          provider = new ethers.providers.Web3Provider(window.ethereum);
          break;
        case 'trustwallet':
          provider = new ethers.providers.Web3Provider(window.trustwallet);
          break;
        case 'walletConnect':
          provider = new ethers.providers.Web3Provider(
            window.ethereum || window.walletConnect,
          );
          break;
        default:
          console.log('Unknown wallet type');
          return;
      }

      const newBalance = {};

      for (let i = 0; i < contractAddresses.length; i++) {
        const contract = new ethers.Contract(
          contractAddresses[i],
          TokenABI.abi,
          provider,
        );

        const tokenBalance = ethers.utils.formatEther(
          await contract.balanceOf(account),
        );

        switch (i) {
          case 0:
            newBalance['ARB'] = tokenBalance;
            break;
          case 1:
            newBalance['ETH'] = tokenBalance;
            break;
          case 2:
            newBalance['ASD'] = tokenBalance;
            break;
          case 3:
            newBalance['USDT'] = tokenBalance;
            break;
          default:
            console.log('Unknown token index');
            return;
        }
      }

      setBalance(newBalance);
    }
  }, [account, setBalance, wallet]);

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
        console.log(`This Network is ArbitrumTestnet.${networkId}`);
        setNetwork(true);
      } else {
        console.log('현재 연결된 네트워크가 없습니다.');
        setNetwork(false);
      }
    }
  }, [networkId, error, isLoading, setNetwork]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountChange);
      window.ethereum.on('networkChanged', handleNetworkChanged);
    } else {
      console.log('Ethereum wallet is not connected.');
    }

    if (window.trustwallet) {
      window.trustwallet.on('accountsChanged', handleAccountChange);
      window.trustwallet.on('networkChanged', handleNetworkChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountChange);
        window.ethereum.removeListener('networkChanged', handleNetworkChanged);
      }
      if (window.trustwallet) {
        window.trustwallet.off('accountsChanged', handleAccountChange);
        window.trustwallet.off('networkChanged', handleNetworkChanged);
      }
    };
  }, [handleAccountChange, handleNetworkChanged]);

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
              width="160px"
              height="40px"
              margin="auto"
              onClick={popupHandler}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {wallet === 'metamask' && (
                <img
                  src="/images/logo-metaMask.png"
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
              {wallet === 'walletConnect' && (
                <img
                  src="/images/logo-wallet.png"
                  alt="logo-walletconnect"
                  style={{
                    width: '20px',
                    marginRight: '2px',
                    marginLeft: '0.3rem',
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
