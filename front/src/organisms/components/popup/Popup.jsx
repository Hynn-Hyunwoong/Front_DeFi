import { Wrap, ContentWrap, Content } from './styled';

export const Popup = ({ children, width }) => {
  return (
    <>
      <Wrap>
        <ContentWrap width={width}>
          <Content>{children}</Content>
        </ContentWrap>
      </Wrap>
    </>
  );
};
