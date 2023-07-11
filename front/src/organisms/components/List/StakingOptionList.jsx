import { Button } from '../button/Button';
import { Size18 } from './styled';
import { useRecoilState } from 'recoil';
import { optionTermsState, optionTimesState } from '../../store';

export const StakingOptionList = ({ optionList }) => {
  const [optionTerms, setOption] = useRecoilState(optionTermsState);
  // eslint-disable-next-line no-unused-vars
  const [optionTimes, setTimes] = useRecoilState(optionTimesState);

  const optionListMap = optionList.map((v, index) => {
    const selectOption = () => {
      setOption(v.term);
      setTimes(v.times);
    };
    return (
      <Button
        key={index}
        colors={optionTerms === v.term ? 'blueBox' : 'greyBox'}
        borderRadius="0"
        width="25%"
        height="60px"
        onClick={selectOption}
      >
        <Size18>{v.times}배</Size18>
        <p>{v.term}개월</p>
      </Button>
    );
  });

  return optionListMap;
};
