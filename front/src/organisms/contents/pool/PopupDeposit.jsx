import { useRecoilState } from 'recoil';
import { Popup } from '../../components';
import { poolToken1State, poolToken2State } from '../../store';

export const PopupDeposit = () => {
  const [token1] = useRecoilState(poolToken1State);
  const [token2] = useRecoilState(poolToken2State);

  return (
    <Popup>
      {token1}
      {token2}
    </Popup>
  );
};
