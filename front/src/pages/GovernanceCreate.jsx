import { useRecoilState } from 'recoil';
import { loadingState } from '../organisms/store';
import { Loader } from '../organisms/components';
import { WritePreviewWrap, BackspaceWrap } from '../organisms/components';
import {
  TopicDefine,
  TopicTokenState,
  TopicWrite,
} from '../organisms/contents/governanceCreate';

export const GovernanceCreate = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsloading] = useRecoilState(loadingState);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <WritePreviewWrap>
          <div>👈Back</div>
          <BackspaceWrap />
          <TopicDefine />
          <TopicTokenState />
          <TopicWrite />
        </WritePreviewWrap>
      )}
    </>
  );
};
