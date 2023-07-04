import {
  WriteFormWrap,
  WriteInputTitle,
  WriteInputBody,
  Button,
} from '../../components';

export const TopicWrite = () => {
  return (
    <>
      <WriteFormWrap>
        <WriteInputTitle placeholder="제목" />
        <WriteInputBody placeholder="내용을 입력하세요" />
        <Button width={'100%'} height={'40px'} colors={'blue'}>
          제출하기
        </Button>
      </WriteFormWrap>
    </>
  );
};
