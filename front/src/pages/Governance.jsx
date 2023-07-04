import {
  GovernanceContent,
  GovernanceHeader,
} from '../organisms/contents/governance';
export const Governance = () => {
  const testArr = [
    {
      index: '1',
      subject: 'AWM 토큰 레벨 변경 C -> B',
      status: 'canceled',
      period: { start: '23.07.02', end: '23.07.05' },
      action: false,
    },
    {
      index: '2',
      subject: 'SIG 토큰 레벨 (B) 유지',
      status: 'exectued',
      period: { start: '23.05.02', end: '23.05.05' },
      action: true,
    },
    {
      index: '3',
      subject: 'KAI 토큰 레벨 (B) 유지',
      status: 'progress',
      period: { start: '23.05.02', end: '23.05.05' },
      action: true,
    },
  ];

  return (
    <div style={{ padding: '60px 0' }}>
      <div style={{ width: '800px', margin: '0 auto' }}>
        <GovernanceHeader />
        <GovernanceContent testArr={testArr} />
      </div>
    </div>
  );
};
