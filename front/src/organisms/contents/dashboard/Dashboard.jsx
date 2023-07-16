import { DashboardWrap, DashboardTrendingWrap } from './styled';
import { DashboardTableTop } from './DashboardTopTable';
import { DashboardTrend } from './DashboardTrend';
import { DashboardTable } from './DashboardTable';

export const Dashboard = () => {
  return (
    <>
      <DashboardWrap>
        <DashboardTableTop />
      </DashboardWrap>
      <DashboardTable />
    </>
  );
};
