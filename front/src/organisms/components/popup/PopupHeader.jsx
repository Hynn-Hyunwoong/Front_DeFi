import { useRecoilState } from 'recoil';
import { stakingPopup } from '../../store';
import { StakingHeader } from '../../contents/popupStaking/styled';
import { Xbutton } from '../button/Xbutton';

export const PopupHeader = ({ children }) => {
  const [staking, setStaking] = useRecoilState(stakingPopup);
  // const closePopup = () => setStaking(false);
  return (
    <StakingHeader>
      <h3>{children}</h3>
      <Xbutton
        onClick={() => {
          setStaking(false);
        }}
      />
    </StakingHeader>
  );
};
