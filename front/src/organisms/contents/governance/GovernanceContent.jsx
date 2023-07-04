import { Button } from '../../components';
import {
  ListHeaderDiv,
  ListContentDiv,
  PageDiv,
  FlexDiv,
  ButtonSection,
  ListSection,
} from './styled';

export const GovernanceContent = ({ testArr }) => {
  const statusText = { exectued: '통과', progress: '진행중', canceled: '취소' };

  const listMap = testArr.map((v) => {
    return (
      <ListContentDiv className='ListContent' key={v.index}>
        <FlexDiv width='56%'>
          <div className='index' style={{ width: '30px' }}>
            {v.index}
          </div>
          <div className='subject' style={{ width: 'calc(100% - 100px)' }}>
            <strong>{v.subject}</strong>
          </div>
          <div className='status' style={{ width: '70px' }}>
            <Button colors={`${v.status}`} width='60px' height='30px'>
              {statusText[v.status]}
            </Button>
          </div>
        </FlexDiv>
        <FlexDiv width='42%'>
          <div className='period'>
            투표 기간 {v.period.start} ~ {v.period.end}
          </div>
          <div className='action'>{v.action ? '참여' : '미참여'}</div>
        </FlexDiv>
      </ListContentDiv>
    );
  });

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
          <div>전체</div>
        </ListHeaderDiv>
        <div>{listMap}</div>
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
