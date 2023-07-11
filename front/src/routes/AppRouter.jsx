import { Routes, Route } from 'react-router-dom';
import {
  Main,
  Governance,
  GovernanceCreate,
  Assets,
  Swap,
  DashboardPage,
  Staking,
} from '../pages';
import { Header, Footer } from '../organisms/layouts/baseLayout';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/governance/create" element={<GovernanceCreate />} />
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/assets" element={<Assets />} />
        <Route path="/exchange/swap" element={<Swap />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/exchange/swap" element={<Swap />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </>
  );
};
