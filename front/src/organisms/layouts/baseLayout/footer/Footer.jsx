import { useNavigate } from 'react-router-dom';
import {
  FooterWrap,
  ContentWrap,
  NameSection,
  CopyrightSection,
  MemberInfo,
} from './styled';

export const Footer = () => {
  const member = [
    { name: 'Choi HW', github: 'Hynn-Hyunwoong' },
    { name: 'Lee EJ', github: 'mooddddd' },
    { name: 'Lee SW', github: 'o-ogie' },
  ];

  const memberList = member.map((v) => {
    const clickHandler = (e) => {
      window.open(`https://github.com/${v.github}`);
    };

    return (
      <MemberInfo onClick={clickHandler}>
        <img src='/images/logo-github.png' />
        <span>{v.name}</span>
      </MemberInfo>
    );
  });

  return (
    <>
      <FooterWrap>
        <ContentWrap>
          <CopyrightSection>
            <span>
              <h1>SOLAR swap</h1>
            </span>
            <span className='copyright'>
              ⓒ2023 KIWeb-TEAM4 All Rights Reserved
            </span>
          </CopyrightSection>
          <NameSection>{memberList}</NameSection>
        </ContentWrap>
      </FooterWrap>
    </>
  );
};
