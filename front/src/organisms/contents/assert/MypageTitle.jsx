import { MyPageWrapper, TextBold } from './styled';

export const MypageTitle = () => {
  return (
    <>
      <MyPageWrapper>
        <h1>
          나의 자산현황,
          <TextBold color={'#0194FF'}>손쉽게, </TextBold>
          <TextBold color={'#94CA0D'}>한눈에</TextBold>
          관리하세요
        </h1>
      </MyPageWrapper>
    </>
  );
};
