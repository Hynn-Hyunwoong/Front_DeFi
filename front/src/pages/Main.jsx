import {
  SectionFirst,
  SectionFourth,
  SectionSecond,
  SectionThird,
} from '../organisms/contents/main';

export const Main = () => {
  return (
    <div className="mainContent">
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
      <SectionFourth />
    </div>
  );
};
