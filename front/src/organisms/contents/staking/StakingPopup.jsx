import { Popup } from '../../components';
import { stakingPopup, optionTermsState, stakingStep } from '../../store';
import { useRecoilState } from 'recoil';
import { Reward, Step1, Step2, Unstaking } from '../popupStaking';

export const StakingPopup = ({ option, reward }) => {
  const [staking, setStaking] = useRecoilState(stakingPopup);
  const [optionTerm] = useRecoilState(optionTermsState);
  const [step, setStep] = useRecoilState(stakingStep);

  const closePopup = () => {
    setStaking(false);
  };

  const afterDate = typeof optionTerm === 'number' ? optionTerm * 30 : null;
  const optionDate = new Date();
  optionDate.setDate(optionDate.getDate() + afterDate);

  const formattedDate =
    afterDate === null
      ? '12+a개월'
      : optionDate.toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });

  return (
    <Popup width='520px' padding={'0'}>
      {(staking && step === 'step1' && (
        <Step1
          option={option}
          reward={reward}
          closePopup={closePopup}
          setStep={setStep}
          date={formattedDate}
        />
      )) ||
        (step === 'step2' && (
          <Step2 closePopup={closePopup} date={formattedDate} />
        ))}
      {staking && step === 'unstaking' && <Unstaking closePopup={closePopup} />}
      {staking && step === 'reward' && <Reward closePopup={closePopup} />}
    </Popup>
  );
};

// staking=>팝업 자체를 띄우는 상태
// step=> 어떤 종류의 팝업을 띄울 건지 결정해주는 상태
