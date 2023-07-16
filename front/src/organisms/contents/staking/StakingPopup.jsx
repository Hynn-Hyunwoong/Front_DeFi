import { useRecoilState, useSetRecoilState } from 'recoil';
import { Popup } from '../../components';
import { stakingPopup, optionTermsState, stakingStep } from '../../store';
import { Reward, Step1, Step2, Unstaking } from '../popupStaking';
import useProvider from '../../hooks/ethersProvider';
import { useEffect } from 'react';

export const StakingPopup = ({ option, reward }) => {
  const [provider, contract] = useProvider();
  const [staking] = useRecoilState(stakingPopup);
  const [optionTerm] = useRecoilState(optionTermsState);
  const [step, setStep] = useRecoilState(stakingStep);
  const setStaking = useSetRecoilState(stakingPopup);

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

  const renderStep = () => {
    switch (step) {
      case 'step1':
        return (
          <Step1 //스테이킹
            option={option}
            reward={reward}
            setStep={setStep}
            date={formattedDate}
            closePopup={setStaking}
          />
        );
      case 'step2': // 스테이킹 approve, transfer => popup 꺼야 함
        return (
          <Step2
            date={formattedDate}
            closePopup={setStaking}
            provider={provider}
            contract={contract}
          />
        );
      case 'unstaking': // 언스테이킹 => popup 꺼야 함
        return (
          <Unstaking
            closePopup={setStaking}
            provider={provider}
            contract={contract}
          />
        );
      case 'reward': // 보상수령 => popup 꺼야 함
        return (
          <Reward
            closePopup={setStaking}
            provider={provider}
            contract={contract}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Popup width='520px' padding='0'>
      {staking && renderStep()}
    </Popup>
  );
};

// staking=>팝업 자체를 띄우는 상태
// step=> 어떤 종류의 팝업을 띄울 건지 결정해주는 상태
