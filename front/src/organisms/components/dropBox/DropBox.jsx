import { useSetRecoilState } from 'recoil';
import { DropBoxWrap, ListStyled } from './styled';
import { listState, dropboxState } from '../../store';

export const DropBox = ({ statusText }) => {
  const setListCate = useSetRecoilState(listState);
  const setDropbox = useSetRecoilState(dropboxState);

  const handleClick = (state) => {
    setListCate(state);
    setDropbox(false);
  };

  return (
    <DropBoxWrap>
      <ul>
        <ListStyled onClick={() => handleClick(null)}>전체</ListStyled>
        {Object.entries(statusText).map(([status, text]) => (
          <ListStyled key={status} onClick={() => handleClick(status)}>
            {text}
          </ListStyled>
        ))}
      </ul>
    </DropBoxWrap>
  );
};
