import { Routes, Route } from 'react-router-dom';
import {
  Main,
  Governance,
  GovernanceCreate,
  Assets,
  Swap,
  DashboardPage,
  Staking,
  Pool,
  Drops,
  GovernancePost
} from '../pages';
import { Header, Footer } from '../organisms/layouts/baseLayout';

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/governance/:id" element={<GovernancePost />} />
        <Route path="/governance/create" element={<GovernanceCreate />} />
        <Route path="/exchange/swap" element={<Swap />} />
        <Route path="/exchange/pool" element={<Pool />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/drops" element={<Drops />} />
      </Routes>
      <Footer />
    </>
  );
}