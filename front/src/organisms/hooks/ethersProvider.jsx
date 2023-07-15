import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import FactoryABI from '../../ABI/contracts/Factory_v1.sol/Factory_v1.json';
import { accountState } from '../store';

const abi = FactoryABI.abi;
const factory = process.env.REACT_APP_FACTORY_ADDRESS;

const ARBRPC = process.env.REACT_APP_ARBITRUM_RPC;

const useProvider = () => {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const account = useRecoilValue(accountState);

  useEffect(() => {
    (async () => {
      const test = new ethers.providers.Web3Provider(window.ethereum);
      await test.send('eth_requestAccounts', []);
      const signer = test.getSigner();
      const contract = new ethers.Contract(factory, abi, signer);
      setProvider(test);
      setContract(contract);
    })();
  }, [account]);
  return [provider, contract];
};

export default useProvider;

// console.log(await signer.getAddress());
