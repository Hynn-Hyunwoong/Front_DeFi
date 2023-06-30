import { useRecoilState } from "recoil";
import { loadingState } from "../organisms/store";
import { Loader } from "../organisms/components";
import { SwapTest } from "../organisms/contents/exchangeSwap";

export const Swap = () => {
  const [isLoading] = useRecoilState(loadingState);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SwapTest />
        </>
      )}
    </>
  );
};
