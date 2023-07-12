import { BoxWrap, BoxArticleStyled, ButtonArticleStyled } from './styled';

export const ExchageCard = ({ boxContent, buttonContent, onClick }) => {
  return (
    <BoxWrap className='swapBox'>
      <BoxArticleStyled>{boxContent}</BoxArticleStyled>
      <ButtonArticleStyled onClick={onClick}>
        {buttonContent}
      </ButtonArticleStyled>
    </BoxWrap>
  );
};
