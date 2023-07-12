import { ExchageCard, BoxArticle, ButtonArticle } from '../../components';

export const ExchangeBox = () => {
  return (
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
