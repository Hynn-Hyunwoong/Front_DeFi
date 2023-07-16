import axios from 'axios';
import { useRef } from 'react';
import {
  WriteFormWrap,
  WriteInputTitle,
  WriteInputBody,
  Button,
} from '../../components';
import { Content } from '../../components/popup/styled';

export const TopicWrite = () => {
  const title = useRef();
  const content = useRef();

  const submitHandle = async (e) => {
    e.preventDefault();

    const data = {
      transaction: '0x222222000',
      title: title.current.value,
      body: content.current.value,
    };
    console.log(`${process.env.REACT_APP_AXIOS_URL}/proposal/create`);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_AXIOS_URL}/proposal/create`,
        { transaction: data.transaction, title: data.title, body: data.body },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
    // console.log(response)
  };

  return (
    <>
      <WriteFormWrap>
        <WriteInputTitle name="proposalTitle" ref={title} placeholder="제목" />
        <WriteInputBody
          name="proposalContent"
          ref={content}
          placeholder="내용을 입력하세요"
        />
        <Button
          width={'100%'}
          height={'40px'}
          colors={'blue'}
          onClick={submitHandle}
        >
          제출하기
        </Button>
      </WriteFormWrap>
    </>
  );
};
