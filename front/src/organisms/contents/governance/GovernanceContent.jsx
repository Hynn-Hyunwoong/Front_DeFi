import { Button } from '../../components';
import {
  SectionStyled,
  ListHeaderDiv,
  ListContentDiv,
  PageDiv,
  FlexDiv,
} from './styled';
export const GovernanceContent = ({ testArr }) => {
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
              {(v.status === 'exectued' && '통과') ||
                (v.status === 'progress' && '진행중') ||
                (v.status === 'canceled' && '취소')}
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
      <SectionStyled
        className='proposalButton'
        justifyContent='end'
        marginBottom='20px'
      >
        <Button colors='green' height='40px' width='100px'>
          <h3>투표 제안하기</h3>
        </Button>
      </SectionStyled>

      <SectionStyled
        className='proposalList'
        flexDirection='column'
        background='white'
      >
        <ListHeaderDiv className='ListHeader'>
          <h4>전체 목록</h4>
          <div>전체</div>
        </ListHeaderDiv>
        <div>{listMap}</div>

        <PageDiv className='pagenation'>
          <button>◀️</button>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <button>▶️</button>
        </PageDiv>
      </SectionStyled>
    </div>
  );
};
