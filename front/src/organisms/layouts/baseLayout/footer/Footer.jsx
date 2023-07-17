import { useNavigate } from 'react-router-dom';
import {
  FooterWrap,
  ContentWrap,
  NameSection,
  CopyrightSection,
  MemberInfo,
} from './styled';

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <FooterWrap>
        <ContentWrap>
          <CopyrightSection>
            <span>ⓒKIWeb-TEAM4. All Rights Reserved</span>
          </CopyrightSection>
          <NameSection>
            <MemberInfo>
              <img src='/images/logo-github.png' />
              <span>최현웅</span>
            </MemberInfo>
            <MemberInfo>
              <img src='/images/logo-github.png' />
              <span>이은지 </span>
            </MemberInfo>
            <MemberInfo>
              <img src='/images/logo-github.png' />
              <span>이세욱</span>
            </MemberInfo>
          </NameSection>
        </ContentWrap>
      </FooterWrap>
    </>
  );
};
