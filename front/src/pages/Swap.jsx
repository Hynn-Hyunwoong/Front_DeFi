import { useRecoilState } from "recoil";
import { loadingState } from "../organisms/store";
import { Loader } from "../organisms/components";

export const Swap = () => {
  const [isLoading] = useRecoilState(loadingState);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div> test 123</div>
        </>
      )}
    </>
  );
};
