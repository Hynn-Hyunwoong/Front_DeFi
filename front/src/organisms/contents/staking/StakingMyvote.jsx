import { SectionStyled } from '../governance/styled';
import { MyVoteSection, FlexDiv, VoteInfoDiv, PoolVote } from './styled';

export const StakingMyVote = ({ voteAmount }) => {
  return (
    <SectionStyled>
      <MyVoteSection colors='blue'>
        <div style={{ padding: '0 30px' }}>
          <VoteInfoDiv>
            <FlexDiv>
              <h3>보유 투표권</h3>
              <span className='option'>투표권 획득 방법 📣</span>
            </FlexDiv>
            <span>
              <strong>{voteAmount.myVote}</strong> vASD
            </span>
          </VoteInfoDiv>
          <PoolVote>
            <span>풀 투표 참여 가능</span>
            <span>
              <strong>{voteAmount.participate_amount}</strong> vASD
            </span>
          </PoolVote>
        </div>
      </MyVoteSection>
    </SectionStyled>
  );
};
