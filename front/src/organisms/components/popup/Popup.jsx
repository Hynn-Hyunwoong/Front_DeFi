import { Wrap, ContentWrap } from "./styled";

export const Popup = ({ children }) => {
  return (
    <>
      <Wrap>
        <ContentWrap>{children}</ContentWrap>
      </Wrap>
    </>
  );
};
