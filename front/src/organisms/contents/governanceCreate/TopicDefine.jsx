import { TopicH1, Topicspan } from '../../components';

export const TopicDefine = () => {
  return (
    <>
      <TopicH1>투표 제안하기</TopicH1>
      <TopicH1>유의사항</TopicH1>
      <Topicspan>
        - 제출된 제안은 수정 또는 취소할 수 업습니다. 최종 제출 전 신중하게
        제출해주세요.
      </Topicspan>
      <Topicspan>
        - 제안 등록 시점 기준 Protocol 에서 발행된 토큰을 소유한 사용자만 제출을
        완료할 수 있습니다.
      </Topicspan>
      <Topicspan>- 투표기간은 2일간 진행됩니다.</Topicspan>
      <Topicspan>- 투표 진행 절차는 다음과 같습니다.</Topicspan>
      <Topicspan> 1. 투표 제안</Topicspan>
      <Topicspan> 2. 투표 시작</Topicspan>
      <Topicspan> 3. 투표 종료 후 결과 집계</Topicspan>
      <Topicspan> 4. TimeLock 동작</Topicspan>
      <Topicspan> 5. 결과에 따라 반영</Topicspan>
      <Topicspan>- 투표 시 가결과 부결의 기준은 아래와 같습니다.</Topicspan>
      <Topicspan>- A. 가결 기준</Topicspan>
      <Topicspan>
        {' '}
        1. 총 투표자가 최소 참여 기준 이상인 경우 ** 투표 참여기준은 투표
        시작시점에 총 GovToken의 51% 이상
      </Topicspan>
      <Topicspan> 2. 총 투표자의 과반수 이상이 찬성하는 경우</Topicspan>
      <Topicspan>- B. 부결 기준</Topicspan>
      <Topicspan>
        {' '}
        1. 투표기간(2일) 종료까지 최소 참여 투표미만으로 참여된 경우{' '}
      </Topicspan>
      <Topicspan> 2. 과반수가 찬성하지 않은 경우</Topicspan>
    </>
  );
};
