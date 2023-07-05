import { useRecoilState } from 'recoil';
import { DropBoxWrap, ListStyled } from './styled';
import { listState } from '../../store';

export const DropBox = ({ statusText }) => {
  const [liseCate, setListCate] = useRecoilState(listState);

  const clickEvent = (state) => {
    setListCate(state);
  };

  console.log(listState);

  return (
    <DropBoxWrap>
      <ul>
        <ListStyled
          onClick={() => {
            clickEvent(null);
          }}
        >
          전체
        </ListStyled>
        <ListStyled
          onClick={() => {
            clickEvent('progress');
          }}
        >
          진행중
        </ListStyled>
        <ListStyled
          onClick={() => {
            clickEvent('exectued');
          }}
        >
          통과
        </ListStyled>
        <ListStyled
          onClick={() => {
            clickEvent('canceled');
          }}
        >
          취소
        </ListStyled>
      </ul>
    </DropBoxWrap>
  );
};
