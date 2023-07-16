import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  poolToken1State,
  poolToken2State,
  transactionState,
  transactionMessageState,
} from '../../store';
import { Popup, PopupHeader, SelectTokenBox } from '../../components';
import { PopupBoxWrap } from './styled';
import { NextButton } from '../popupStaking/styled';
import { Exchange } from '../../components/exchageCard/styled';
import { handleAddLiquidity } from './handleAddLiquidity';

export const PopupDeposit = () => {
  const [token1, setToken1] = useRecoilState(poolToken1State);
  const [token2, setToken2] = useRecoilState(poolToken2State);
  const [transaction, setTransaction] = useRecoilState(transactionState);
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [showPopup, setShowPopup] = useRecoilState(transactionMessageState);
  const [transactionMessage, setTransactionMessage] = useRecoilState(
    transactionMessageState,
  );

  const onAddLiquidityClick = async () => {
    try {
      await handleAddLiquidity(
        token1,
        amount1,
        token2,
        amount2,
        setTransaction,
        setShowPopup,
        setTransactionMessage,
      );
    } catch (error) {
      console.error('An error occurred while adding liquidity:', error);
      // You might want to add additional logic here, such as showing an error message to the user
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
        <NextButton onClick={onAddLiquidityClick}>예치하기</NextButton>
      </Popup>
    </>
  );
};
