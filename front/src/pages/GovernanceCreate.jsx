import { useRecoilState } from 'recoil';
import { loadingState } from '../organisms/store';
import { Loader } from '../organisms/components';
import { WritePreviewWrap, BackspaceWrap } from '../organisms/components';
import {
  TopicDefine,
  TopicTokenState,
  TopicWrite,
} from '../organisms/contents/governanceCreate';
import { Link } from 'react-router-dom';

export const GovernanceCreate = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsloading] = useRecoilState(loadingState);

  return (
    <div style={{ minHeight: 'calc(100vh - 276px)' }}>
      {isLoading ? (
        <Loader />
      ) : (
        <WritePreviewWrap>
          <Link to='/governance'>👈Back</Link>
          <BackspaceWrap />
          <TopicDefine />
          <TopicTokenState />
          <TopicWrite />
        </WritePreviewWrap>
      )}
    </div>
  );
};
