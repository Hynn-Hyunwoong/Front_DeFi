import { useState, useRef, useEffect } from 'react';
import { Button, DropBox, GovernanceList } from '../../components';
import {
  ListHeaderDiv,
  ButtonSection,
  ListSection,
  ButtonStyle,
  PageDiv,
} from './styled';
import { useRecoilState } from 'recoil';
import { listState } from '../../store';

export const GovernanceContent = ({ testArr }) => {
  const [list] = useRecoilState(listState);
  console.log(list);
  const statusText = {
    exectued: '통과',
    progress: '진행중',
    canceled: '취소',
    null: '전체',
  };

  const listFilter = testArr.filter((v) => v.status === list);

  const [dropbox, setDropbox] = useState(false);

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
              {statusText[list]} {dropbox ? '▲' : '▼'}
            </ButtonStyle>
          </div>
        </ListHeaderDiv>
        {dropbox && <DropBox statusText={statusText} />}
        <div>
          {list ? (
            <>
              <GovernanceList testArr={listFilter} statusText={statusText} />
            </>
          ) : (
            <>
              <GovernanceList testArr={testArr} statusText={statusText} />
            </>
          )}
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
