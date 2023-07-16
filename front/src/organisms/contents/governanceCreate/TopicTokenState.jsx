import {
  TokenStateWrap,
  TokenLeftWrap,
  TokenRightWrap,
  TokenStateAlignLeft,
  TokenCurrentValue,
  TokenLine,
} from '../../components';

export const TopicTokenState = () => {
  return (
    <>
      <TokenStateWrap>
        <TokenLeftWrap>
          <TokenStateAlignLeft>보유 투표권</TokenStateAlignLeft>
          <TokenCurrentValue>100 vASD</TokenCurrentValue>
        </TokenLeftWrap>
        <TokenLine />
        <TokenRightWrap>
          <TokenStateAlignLeft>소모 투표권</TokenStateAlignLeft>
          <TokenCurrentValue>1 vASD</TokenCurrentValue>
        </TokenRightWrap>
      </TokenStateWrap>
    </>
  );
};
