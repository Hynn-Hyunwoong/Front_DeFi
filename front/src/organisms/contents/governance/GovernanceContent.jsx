import { Button, DropBox, GovernanceList } from '../../components';
import {
  ListHeaderDiv,
  ButtonSection,
  ListSection,
  ButtonStyle,
  PageDiv,
} from './styled';
import { useRecoilState } from 'recoil';
import { listState, dropboxState } from '../../store';

export const GovernanceContent = ({ testArr }) => {
  const [list] = useRecoilState(listState);
  const [dropbox, setDropbox] = useRecoilState(dropboxState);

  const statusText = {
    exectued: '통과',
    progress: '진행중',
    canceled: '취소',
  };

  const filteredArr = list ? testArr.filter((v) => v.status === list) : testArr;

  return (
    <div>
      <ButtonSection>
        <Button
          colors='green'
          height='40px'
          width='100px'
          to='/governance/create'
        >
          <h3>투표 제안하기</h3>
        </Button>
      </ButtonSection>
      <ListSection>
        <ListHeaderDiv>
          <h4>전체 목록</h4>
          <div>
            <ButtonStyle
              onClick={() => {
                setDropbox(!dropbox);
              }}
            >
              {list ? statusText[list] : '전체'} {dropbox ? '▲' : '▼'}
            </ButtonStyle>
          </div>
        </ListHeaderDiv>
        {dropbox && <DropBox statusText={statusText} />}
        <div>
          <GovernanceList testArr={filteredArr} statusText={statusText} />
        </div>
      </ListSection>
    </div>
  );
};

/*
        <PageDiv className='pagenation'>
          <button>◀️</button>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <button>▶️</button>
        </PageDiv>
*/
