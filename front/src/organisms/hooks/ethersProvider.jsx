import { ethers } from 'ethers';

const ARBRPC = process.env.REACT_APP_ARBITRUM_RPC;

export const getProvider = () => {
  const provider = new ethers.providers.JsonRpcProvider(ARBRPC);
  return provider;
};
