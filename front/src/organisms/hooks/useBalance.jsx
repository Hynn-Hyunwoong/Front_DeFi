import TokenABI from '../../ABI/contracts/SelfToken.sol/SelfToken.json';
import { accountState, balanceState } from '../store';
import { ethers } from 'ethers';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';

const tokenABI = TokenABI.abi;
const ASDTokenAddress = process.env.REACT_APP_ASD_TOKEN_ADDRESS;
const ARBTokenAddress = process.env.REACT_APP_ARB_TOKEN_ADDRESS;
const USDTTokenAddress = process.env.REACT_APP_USDT_TOKEN_ADDRESS;
const ETHTokenAddress = process.env.REACT_APP_ETH_TOKEN_ADDRESS;

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const ASDcontract = new ethers.Contract(ASDTokenAddress, tokenABI, signer);
const ARBcontract = new ethers.Contract(ARBTokenAddress, tokenABI, signer);
const USDTcontract = new ethers.Contract(USDTTokenAddress, tokenABI, signer);
const ETHcontract = new ethers.Contract(ETHTokenAddress, tokenABI, signer);

const useFetchBalance = () => {
  const [balance, setBalance] = useRecoilState(balanceState);
  const account = useRecoilValue(accountState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const test1 = await ASDcontract.balanceOf(signer.getAddress());
        const ASD = ethers.utils.formatEther(test1);
        const test3 = await ARBcontract.balanceOf(signer.getAddress());
        const ARB = ethers.utils.formatEther(test3);
        const test5 = await USDTcontract.balanceOf(signer.getAddress());
        const USDT = ethers.utils.formatEther(test5);
        const test7 = await ETHcontract.balanceOf(signer.getAddress());
        const ETH = ethers.utils.formatEther(test7);

        setBalance({
          ...balance,
          USDT: USDT,
          ETH: ETH,
          ARB: ARB,
          ASD: ASD,
        });
      } catch (error) {
        console.error('An error occurred while fetching balances:', error);
      }
    };

    fetchData();
  }, [signer]);

  return balance;
};

export default useFetchBalance;
