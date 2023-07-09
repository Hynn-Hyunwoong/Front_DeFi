import { Popup } from '../../components';
import { stakingPopup, optionTermsState } from '../../store';
import { useRecoilState } from 'recoil';
import { Step1, Step2 } from '../popupStaking';
import { useState } from 'react';

export const StakingPopup = ({ option, reward }) => {
  const [staking, setStaking] = useRecoilState(stakingPopup);
  const [optionTerm] = useRecoilState(optionTermsState);
  const [step2, setStep2] = useState(false);

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
      {step2 ? (
        <Step2 closePopup={closePopup} date={formattedDate} />
      ) : (
        <Step1
          option={option}
          reward={reward}
          closePopup={closePopup}
          setStep2={setStep2}
          date={formattedDate}
        />
      )}
    </Popup>
  );
};
