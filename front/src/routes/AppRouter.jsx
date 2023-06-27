import { Routes, Route } from "react-router-dom";
import { Main, Test } from "../pages";
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
        {/* <Route path="/" element={<MainPage />} /> */}
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </>
  );
};
