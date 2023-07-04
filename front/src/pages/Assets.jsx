import { useRecoilState } from 'recoil';
import { loadingState } from '../organisms/store';
import { MypageTitle, MypageTable } from '../organisms/contents/assert';
import { Loader } from '../organisms/components';

export const Assets = () => {
  const [isLoading] = useRecoilState(loadingState);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MypageTitle />
          <MypageTable />
        </>
      )}
    </>
  );
};
