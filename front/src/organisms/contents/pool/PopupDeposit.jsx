import { useRecoilState } from 'recoil';
import { Popup, PopupHeader, SelectTokenBox } from '../../components';
import { poolToken1State, poolToken2State } from '../../store';
import { PopupBoxWrap } from './styled';
import { NextButton } from '../popupStaking/styled';
import { Exchange } from '../../components/exchageCard/styled';

export const PopupDeposit = () => {
  const [token1] = useRecoilState(poolToken1State);
  const [token2] = useRecoilState(poolToken2State);

  return (
    <Popup width='520px' padding='0'>
      <PopupHeader>트랜잭션 요청</PopupHeader>
      <PopupBoxWrap>
        <SelectTokenBox token={token1} />
        <Exchange> ➕ </Exchange>
        <SelectTokenBox token={token2} />
      </PopupBoxWrap>
      <NextButton>예치하기</NextButton>
    </Popup>
  );
};
