import { useRecoilState } from 'recoil';
import { FromTokenState, ToTokenState } from '../../store';
import { LightP } from '../../contents/main/styled';

export const ButtonArticle = ({ alertText, actionText }) => {
  const [fromToken] = useRecoilState(FromTokenState);
  const [toToken] = useRecoilState(ToTokenState);
  return (
    <>
      {fromToken === 'init' || toToken === 'init' || fromToken === toToken ? (
        <div className='errorAlert'>
          <div>❗️❗️❗️</div>
          <div>
            <LightP size='14px'>{alertText}</LightP>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className='swapButton'>
        <h2>{actionText}</h2>
      </div>
    </>
  );
};
