const ARBrpc = process.env.REACT_APP_ARBITRUM_RPC;
const ETHrpc = process.env.REACT_APP_ETHEREUM_RPC;

export const ARBnetworkDetails = {
  chainId: '421613',
  chainName: 'Arbitrum Testnet',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ARBrpc,
  blockExplorerUrls: 'https://goerli.arbiscan.io/',
};

export const ETHnetworkDetails = {
  chainId: '5',
  chainName: 'Goerli Testnet',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ETHrpc,
  blockExplorerUrls: 'https://goerli.etherscan.io/',
};
