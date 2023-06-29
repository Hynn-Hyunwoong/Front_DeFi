import { Routes, Route } from "react-router-dom";
import { Main, Test, Topic, Assets, Swap } from "../pages";
import { Header, Footer } from "../organisms/layouts/baseLayout";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/topic" element={<Topic />} />
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/assets" element={<Assets />} />
        <Route path="/exchange" element={<Swap />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </>
  );
};
