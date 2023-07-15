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
  ASD: '0xC1162804aA55fD78cD9C112395d92aa4a5645ed8',
  ARB: '0x88A19c26eE0ecb39e02F00e400F02218bAA883D3',
  ETH: '0x19097cFFF4ebbc1d9c44F2D5E9760A1168a36E48',
  USDT: '0x16ac33004C9fe527bB72dE7Dd87E3D53d2a5200C',
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

  try {
    const tx = await FacContract.addLiquid_1(
      token2Address,
      ethers.utils.parseEther(amount2.toString()),
      token1Address,
      ethers.utils.parseEther(amount1.toString()),
    );

    const receipt = await tx.wait();
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
    setTransactionMessage(`Transaction failed: ${error.message}`);
    setShowPopup(false);
  }
};
