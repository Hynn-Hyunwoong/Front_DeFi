import { Wrap } from '../governance/styled';
import { MyVoteSection, FlexDiv, VoteInfoDiv, PoolVote } from './styled';

export const StakingMyVote = () => {
  return (
    <Wrap>
      <MyVoteSection>
        <VoteInfoDiv>
          <FlexDiv>
            <h3>보유 투표권</h3>
            <span className='option'>투표권 획득 방법 📣</span>
          </FlexDiv>
          <span>
            <strong>124</strong> vASD
          </span>
        </VoteInfoDiv>
        <PoolVote>
          <span>풀 투표 참여 가능</span>
          <span>
            <strong>2</strong> vASD
          </span>
        </PoolVote>
      </MyVoteSection>
    </Wrap>
  );
};
