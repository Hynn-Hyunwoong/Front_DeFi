import { InputBox, Popup, Xbutton } from '../../components';
import { StakingHeader, StakingContent } from './styled';

export const StakingPopup = () => {
  return (
    <Popup width="520px">
      <StakingHeader>
        <h3>스테이킹</h3>
        <Xbutton />
      </StakingHeader>
      <StakingContent>
        <InputBox placeholder={'정수 단위로만 입력이 가능합니다'} />
      </StakingContent>
    </Popup>
  );
};
