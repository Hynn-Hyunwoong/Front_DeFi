import { WalletList } from './styled';
import { ethers } from 'ethers';
import { useRecoilState } from 'recoil';
import { useEffect, useRef } from 'react';
import {
  loginState,
  accountState,
  loadingState,
  popupState,
  providerState,
  selectedWallet,
  trustwalletLoginState,
  walletconnectLoginState,
  balanceState,
} from '../../../organisms/store';
import ASDTokenABI from '../../../ABI/ASDToken.json';

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

const ARBnetworkDetails = {
  chainId: '421613',
  chainName: 'Arbitrum Testnet',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: 'https://goerli-rollup.arbitrum.io/rpc',
  blockExplorerUrls: 'https://goerli.arbiscan.io/',
};

const ETHnetworkDetails = {
  chainId: '5',
  chainName: 'Goerli Testnet',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: 'https://ethereum-goerli.publicnode.com',
  blockExplorerUrls: 'https://goerli.etherscan.io/',
};

export const Metamask = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  const [provider, setProvider] = useRecoilState(providerState);
  const [popupOpen, setPopupOpen] = useRecoilState(popupState);
  const [isTrustwalletLogin, setIsTrustwalletLogin] = useRecoilState(
    trustwalletLoginState,
  );
  const [isWalletconnectLogin, setIsWalletconnectLogin] = useRecoilState(
    walletconnectLoginState,
  );
  const [balance, setBalance] = useRecoilState(balanceState);
  const intervalRef = useRef();

  const updateBalances = async (ARBaccounts, ETHaccounts) => {
    const ARBprovider = new ethers.JsonRpcProvider(ARBnetworkDetails.rpcUrls);
    const ETHprovider = new ethers.JsonRpcProvider(ETHnetworkDetails.rpcUrls);
    const contract = new ethers.Contract(
      contractAddress,
      ASDTokenABI.abi,
      ARBprovider,
    );

    const ARBbalance = ethers.formatEther(
      await ARBprovider.getBalance(ARBaccounts[0]),
    );
    const ETHbalance = ethers.formatEther(
      await ETHprovider.getBalance(ETHaccounts[0]),
    );
    const ASDbalance = ethers.formatEther(
      await contract.balanceOf(ARBaccounts[0]),
    );

    console.log(`this is updateBalance`, ARBbalance, ETHbalance, ASDbalance);

    setBalance({
      ...balance,
      ETH: ETHbalance,
      Arbitrum: ARBbalance,
      ASD: ASDbalance,
    });
  };

  useEffect(() => {
    if (isLogin && wallet === 'metamask') {
      intervalRef.current = setInterval(updateBalances, 10000);
      return () => {
        clearInterval(intervalRef.current);
      };
    }
  }, [isLogin, wallet, updateBalances]);

  const handleLogin = async () => {
    setIsloading(true);
    try {
      if (!window.ethereum) {
        alert('Get MetaMask!');
        return;
      }
      //network define for metamask

      // Connect Requets method
      const ARBaccounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
        wallet_addEthereumChain: ARBnetworkDetails,
      });

      const ETHaccounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
        wallet_addEthereumChain: ETHnetworkDetails,
      });

      setIsTrustwalletLogin(false);
      setIsWalletconnectLogin(false);
      setIsLogin(true);
      setWallet('metamask');
      setAccount(ARBaccounts[0]);

      await updateBalances(ARBaccounts, ETHaccounts);

      setProvider(provider);
      setPopupOpen(false);
    } catch (error) {
      console.error(error);
    }
    setIsloading(false);
  };

  return (
    <>
      <WalletList onClick={handleLogin}>
        <img src="/images/logo-metaMask.png" />
        <p>
          {isLogin && wallet === 'metamask' ? 'Metamask 연결됨' : 'Metamask'}
        </p>
      </WalletList>
    </>
  );
};
