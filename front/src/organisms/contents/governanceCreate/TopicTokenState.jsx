import { useRecoilState } from 'recoil';
import {
  TokenStateWrap,
  TokenLeftWrap,
  TokenRightWrap,
  TokenStateAlignLeft,
  TokenCurrentValue,
  TokenLine,
} from '../../components';
import { GovToken } from '../../store';

export const TopicTokenState = () => {
  const [govBalance] = useRecoilState(GovToken)

  return (
    <>
      <TokenStateWrap>
        <TokenLeftWrap>
          <TokenStateAlignLeft>보유 투표권</TokenStateAlignLeft>
          <TokenCurrentValue>{parseInt(govBalance)} vASD</TokenCurrentValue>
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
