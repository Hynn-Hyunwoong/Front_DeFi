import { useRecoilState, useRecoilValue } from 'recoil';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  ExchageCard,
  BoxArticle,
  ButtonArticle,
  Loader,
} from '../../components';
import {
  FromTokenState,
  ToTokenState,
  swapFromAmountState,
  swapToAmountState,
  transactionState,
} from '../../store';
import { BigNumber, ethers } from 'ethers';

const tokenCA = {
  ASD: process.env.REACT_APP_ASD_TOKEN_ADDRESS,
  ETH: process.env.REACT_APP_ETH_TOKEN_ADDRESS,
  ARB: process.env.REACT_APP_ARB_TOKEN_ADDRESS,
  USDT: process.env.REACT_APP_USDT_TOKEN_ADDRESS,
};

export const ExchangeBox = ({ provider, contract }) => {
  const fromToken = useRecoilValue(FromTokenState);
  const toToken = useRecoilValue(ToTokenState);
  const fromAmount = useRecoilValue(swapFromAmountState);
  const toAmount = useRecoilValue(swapToAmountState);
  const [transaction, setTransaction] = useRecoilState(transactionState);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (data) => {
      const { fromToken, toToken, amount } = data;
      await swap(fromToken, toToken, amount);
    },
    {
      onError: (error) => {
        console.log(error.message);
      },
      onSettled: () => {
        queryClient.invalidateQueries('transactionState');
      },
    }
  );

  const swap = async (fromToken, toToken, amount) => {
    console.log(
      tokenCA[fromToken],
      tokenCA[toToken],
      BigNumber.from(ethers.utils.parseEther(amount)).toString()
    );
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
      setTransaction((prevTX) => [...prevTX, tx]);
    } catch (e) {
      console.log(e.message);
    }
  };

  const clickSwap = async () => {
    try {
      if (toAmount) {
        await mutation.mutateAsync({
          fromToken,
          toToken,
          amount: toAmount,
        });
      } else if (fromAmount) {
        await mutation.mutateAsync({
          fromToken,
          toToken,
          amount: fromAmount,
        });
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      {mutation.isLoading && <Loader />}
      <ExchageCard
        onClick={clickSwap}
        boxContent={<BoxArticle title1={'From'} title2={'To'} sign={'↑↓'} />}
        buttonContent={
          <ButtonArticle
            actionText={'Swap'}
            alertText={'토큰을 선택해주세요'}
            disabled={mutation.isLoading}
          />
        }
      />
    </>
  );
};

// try {
//   if (toAmount) {
//     swap(fromToken, toToken, toAmount);
//   } else if (fromAmount) {
//     swap(fromToken, toToken, fromAmount);
//   }
// } catch (e) {
//   console.log(e.message);
// }
