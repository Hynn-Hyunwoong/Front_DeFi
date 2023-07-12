import { ExchageCard, BoxArticle, ButtonArticle } from '../../components';

export const ExchangeBox = () => {
  return (
    // 데이터는 BoxArticle, ButtonArticle에 있습니다!
    <>
      <ExchageCard
        onClick={() => {
          console.log(`swap`);
        }}
        boxContent={<BoxArticle title1={'from'} title2={'to'} sign={'↑↓'} />}
        buttonContent={
          <ButtonArticle
            actionText={'Swap'}
            alertText={'토큰을 선택해주세요'}
          />
        }
      />
    </>
  );
};
