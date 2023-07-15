import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Popup, PopupHeader, SelectTokenBox } from '../../components';
import { poolToken1State, poolToken2State } from '../../store';
import { PopupBoxWrap } from './styled';
import { NextButton } from '../popupStaking/styled';
import { Exchange } from '../../components/exchageCard/styled';
import { ethers } from 'ethers';
import FactoryABI from '../../../ABI/contracts/Factory_v1.sol/Factory_v1.json';
import TokenABI from '../../../ABI/contracts/SelfToken.sol/SelfToken.json';

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

export const PopupDeposit = () => {
  const [token1] = useRecoilState(poolToken1State);
  const [token2] = useRecoilState(poolToken2State);
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState('');

  const handleAddLiquidity = async () => {
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
      handleClose();
      return receipt;
    } catch (error) {
      setTransactionMessage(`Transaction failed: ${error.message}`);
      handleClose();
    }
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Popup
        width="520px"
        padding="0"
        isOpen={showPopup}
        handleClose={handleClose}
      >
        <PopupHeader>{transactionMessage}</PopupHeader>
      </Popup>
      <Popup width="520px" padding="0">
        <PopupHeader>트랜잭션 요청</PopupHeader>
        <PopupBoxWrap>
          <SelectTokenBox
            token={token1}
            amount={amount1}
            setAmount={setAmount1}
          />
          <Exchange> ➕ </Exchange>
          <SelectTokenBox
            token={token2}
            amount={amount2}
            setAmount={setAmount2}
          />
        </PopupBoxWrap>
        <NextButton onClick={handleAddLiquidity}>예치하기</NextButton>
      </Popup>
    </>
  );
};
