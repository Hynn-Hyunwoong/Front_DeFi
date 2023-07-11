import { DashboardWrap, DashboardTrendingWrap } from './styled';
import { DashboardTopLeft } from './DashboardTopLeft';
import { DashboardTopRight } from './dashboardTopRight';
import { DashboardTrend } from './DashboardTrend';
import { DashboardTable } from './DashboardTable';

export const Dashboard = () => {
  return (
    <>
      <DashboardWrap>
        <DashboardTopLeft />
        <DashboardTopRight />
      </DashboardWrap>
      <DashboardTrendingWrap>
        <DashboardTrend />
      </DashboardTrendingWrap>
      <DashboardTable />
    </>
  );
};
