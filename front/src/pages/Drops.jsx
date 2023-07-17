import { DropsContents, DropsHeader } from '../organisms/contents/drops';

export const Drops = () => {
  return (
    <div style={{ minHeight: 'calc(100vh - 276px)' }}>
      <DropsHeader />
      <DropsContents />
    </div>
  );
};
