import { useState } from 'react';
import { DropsTableHeader, BorderBottom } from './styled';
import { ButtonStyle } from '../governance/styled';
import { SectionWrap } from '../exchangeSwap/styled';
import { DropBox, Search } from '../../components';

export const DropsContents = () => {
  const [dropbox, setDropbox] = useState(false);
  const list = null;
  const statusText = {
    exectued: '통과',
    progress: '진행중',
    canceled: '취소',
  };
  return (
    <SectionWrap>
      <DropsTableHeader>
        <BorderBottom>
          <Search placeholder={'토큰명, 심볼 검색'} />
          <ButtonStyle
            onClick={() => {
              setDropbox(!dropbox);
            }}
          >
            {list ? statusText[list] : '전체'} {dropbox ? '▲' : '▼'}
          </ButtonStyle>
        </BorderBottom>
        {dropbox && <DropBox statusText={statusText} />}

        {/* <ListHeaderDiv>
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
        {dropbox && <DropBox statusText={statusText} />} */}
      </DropsTableHeader>
    </SectionWrap>
  );
};
