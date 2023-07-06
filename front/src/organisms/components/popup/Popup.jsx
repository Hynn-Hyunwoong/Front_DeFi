import { Wrap, ContentWrap, Content } from './styled';

export const Popup = ({ children, width, height }) => {
  return (
    <Wrap>
      <ContentWrap width={width} height={height}>
        <Content>{children}</Content>
      </ContentWrap>
    </Wrap>
  );
};
