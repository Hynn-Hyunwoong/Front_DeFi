import { useRecoilState, useRecoilValue } from 'recoil';
import { ExchageCard, BoxArticle, ButtonArticle } from '../../components';
import {
  FromTokenState,
  ToTokenState,
  swapFromAmountState,
  swapToAmountState,
  tokenPricesState,
  transactionState,
} from '../../store';
import { useEffect } from 'react';
import { BigNumber, ethers } from 'ethers';

export const ExchangeBox = ({ provider, contract }) => {
  const fromToken = useRecoilValue(FromTokenState);
  const toToken = useRecoilValue(ToTokenState);
  const fromAmount = useRecoilValue(swapFromAmountState);
  const toAmount = useRecoilValue(swapToAmountState);
  const [price, setPrice] = useRecoilState(tokenPricesState);
  const [transaction, setTransaction] = useRecoilState(transactionState);

  const tokenCA = {
    ASD: process.env.REACT_APP_ASD_TOKEN_ADDRESS,
    ETH: process.env.REACT_APP_ETH_TOKEN_ADDRESS,
    ARB: process.env.REACT_APP_ARB_TOKEN_ADDRESS,
    USDT: process.env.REACT_APP_USDT_TOKEN_ADDRESS,
  };

  const swap = async (fromToken, toToken, amount) => {
    // console.log(
    //   tokenCA[fromToken],
    //   tokenCA[toToken],
    //   BigNumber.from(ethers.utils.parseEther(amount)).toString()
    // );
    try {
      const tx = await contract.swapToken(
        tokenCA[fromToken],
        tokenCA[toToken],
        ethers.utils.parseEther(amount),
        {
          maxFeePerGas: ethers.utils.parseUnits('10', 'gwei'),
          maxPriorityFeePerGas: ethers.utils.parseUnits('1', 'gwei'),
        }
      );
      // const receipt = await tx.wait();
      setTransaction((prevTX) => [...prevTX, tx]);
      console.log(transaction);
    } catch (e) {
      console.log(e.message);
    }
  };

  const clickSwap = async () => {
    try {
      if (fromToken === 'ASD') {
        if (toAmount) {
          swap('ASD', toToken, toAmount);
        } else if (fromAmount) {
          swap('ASD', toToken, fromAmount);
        }
      } else if (toToken === 'ASD') {
        if (toAmount) {
          swap(fromToken, 'ASD', toAmount);
        } else if (fromAmount) {
          swap(fromToken, 'ASD', fromAmount);
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    // 데이터는 BoxArticle, ButtonArticle에 있습니다!
    <>
      <ExchageCard
        onClick={clickSwap}
        boxContent={<BoxArticle title1={'From'} title2={'To'} sign={'↑↓'} />}
        buttonContent={
          <ButtonArticle
            actionText={'Swap'}
            alertText={'토큰을 선택해주세요'}
          />
        }
      />
    </>
  );
};
