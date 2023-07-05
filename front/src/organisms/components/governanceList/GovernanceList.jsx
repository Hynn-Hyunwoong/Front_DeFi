import { ListContentDiv, FlexDiv, ActionColor } from './styled';
import { Button } from '../button/Button';

export const GovernanceList = ({ testArr, statusText }) => {
  const listMap = testArr.map((v) => {
    return (
      <ListContentDiv className={`${v.status}`} key={v.index}>
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
          <div
            className='action'
            style={{ width: '40px', textAlign: 'center' }}
          >
            <ActionColor status={`${v.status}`}>
              {v.action ? '참여' : '미참여'}
            </ActionColor>
          </div>
        </FlexDiv>
      </ListContentDiv>
    );
  });

  return listMap;
};
