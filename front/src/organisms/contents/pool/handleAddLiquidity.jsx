import { ethers } from 'ethers';
import FactoryABI from '../../../ABI/contracts/Factory_v1.sol/Factory_v1.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const FacContract = new ethers.Contract(
  process.env.REACT_APP_FACTORY_ADDRESS,
  FactoryABI.abi,
  signer,
);

let tokenAddressMapping = {
  ASD: process.env.REACT_APP_ASD_TOKEN_ADDRESS,
  ARB: process.env.REACT_APP_ARB_TOKEN_ADDRESS,
  ETH: process.env.REACT_APP_ETH_TOKEN_ADDRESS,
  USDT: process.env.REACT_APP_USDT_TOKEN_ADDRESS,
};

export const handleAddLiquidity = async (
  token1,
  amount1,
  token2,
  amount2,
  setTransaction,
  setShowPopup,
  setTransactionMessage,
) => {
  const token1Address = tokenAddressMapping[token1];
  const token2Address = tokenAddressMapping[token2];

  console.log('token1:', token1, 'address:', token1Address);
  console.log('token2:', token2, 'address:', token2Address);
  console.log('amount1:', amount1, 'amount2:', amount2);

  try {
    console.log('Trying to add liquidity...');
    const tx = await FacContract.addLiquid_1(
      token2Address,
      ethers.utils.parseEther(amount2.toString()),
      token1Address,
      ethers.utils.parseEther(amount1.toString()),
      {
        gasLimit: 1000000,
        maxFeePerGas: ethers.utils.parseUnits('10', 'gwei'),
        maxPriorityFeePerGas: ethers.utils.parseUnits('1', 'gwei'),
      },
    );

    console.log('Transaction sent:', tx);

    const receipt = await tx.wait();

    console.log('Transaction receipt:', receipt);

    setTransaction(receipt);

    if (receipt.status === 1) {
      setShowPopup(false);
      alert('트랜잭션이 올바르게 완료되었습니다.');
    } else if (receipt.status === 0) {
      setShowPopup(false);
      alert(
        '트랜잭션이 실패하였습니다. 세부사항은 지갑의 거래내역을 확인해주세요',
      );
    } else {
      alert('트랜잭션이 실패하였습니다. 오류를 확인 후 다시 시도해주세요');
    }

    return receipt;
  } catch (error) {
    console.error('Transaction failed:', error);
    setTransactionMessage(`Transaction failed: ${error.message}`);
    setShowPopup(false);
  }
};
