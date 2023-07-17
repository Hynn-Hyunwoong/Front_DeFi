import { ListContentDiv, FlexDiv, ActionColor } from './styled';
import { Button } from '../button/Button';
import {Link} from "react-router-dom";
import { useRecoilState } from 'recoil';
import { proposalList } from '../../store';

export const GovernanceList = ({ statusText }) => {
  const [proposal] = useRecoilState(proposalList);
  console.log('prop',proposal)
  const listMap = proposal.map((v) => (
      <ListContentDiv className={`${v.status}`} key={v.Index}>
        <FlexDiv width='56%'>
          <div className='index' style={{ width: '30px' }}>
            {v.index}
          </div>
          
            <div className='subject' style={{ width: 'calc(100% - 100px)' }}>
            <Link to={`/governance/${v.Index}`}>
              <strong>{v.title}</strong>
            </Link>
            </div>
          
          <div className='status' style={{ width: '70px' }}>
            <Button colors={`${v.status}`} width='60px' height='30px'>
              {statusText[v.status]}
            </Button>
          </div>
        </FlexDiv>
        <FlexDiv width='42%'>
          <div className='period'>
            투표 기간 {v.start} ~ {v.end}
          </div>
          <div className='action' style={{ width: '40px', textAlign: 'center' }}>
            <ActionColor status={`${v.status}`}>
              {v.action ? '참여' : '미참여'}
            </ActionColor>
          </div>
        </FlexDiv>
      </ListContentDiv>
    
  ));

  return listMap;
};
