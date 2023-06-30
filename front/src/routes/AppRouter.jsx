import { Routes, Route } from "react-router-dom";
import { Main, Test, GovernanceCreate, Assets, Swap } from "../pages";
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
        <Route path="/governance/create" element={<GovernanceCreate />} />
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/assets" element={<Assets />} />
        <Route path="/exchange/swap" element={<Swap />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </>
  );
};
