import { DashboardARB } from './DashboardARB';
import { DashboardETH } from './DashboardETH';
import { DashboardUSDT } from './DashboardUSDT';
import { DashboardLayout } from './styled';
import { DashboardTrend } from './DashboardTrend';

export const DashboardTableTop = () => {
  return (
    <>
      <DashboardLayout>
        <DashboardUSDT />
      </DashboardLayout>
      <DashboardLayout>
        <DashboardARB />
      </DashboardLayout>
      <DashboardLayout>
        <DashboardETH />
      </DashboardLayout>
      <DashboardLayout>
        <DashboardTrend />
      </DashboardLayout>
    </>
  );
};
