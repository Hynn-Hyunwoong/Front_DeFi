import {
  AvatarImage,
  AvatarName,
  AvatarTitle,
  AvatarStatus,
  AvatarRole,
  TableHeader,
  Table,
  TableRow,
  TableData,
} from './styled';

const avatarData = [
  {
    avatar: '/images/logo-ethereum.png',
    name: 'Ethereum',
    title: 'Main Title',
    status: 'Active',
    role: 'Member',
  },
  {
    avatar: '/images/logo-arbitrum.png',
    name: 'Arbitrum',
    title: 'Main Title',
    status: 'Active',
    role: 'Member',
  },
  {
    avatar: '/images/logo-tether.png',
    name: 'Tether',
    title: 'Main Title',
    status: 'Active',
    role: 'Member',
  },
  {
    avatar: '/images/logo-solar.png',
    name: 'Solar ASD',
    title: 'Main Title',
    status: 'Active',
    role: 'Member',
  },
];

export const DashboardTable = () => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Logo</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>총 예치코인</TableHeader>
          <TableHeader>유동성 풀 토큰</TableHeader>
          <TableHeader>거래량</TableHeader>
          <TableHeader>수수료(1day)</TableHeader>
          <TableHeader>예상 수익률</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {avatarData.map((data, index) => (
          <TableRow key={index}>
            <TableData>
              <AvatarImage src={data.avatar} />
            </TableData>
            <TableData>
              <AvatarName>{data.name}</AvatarName>
            </TableData>
            <TableData>
              <AvatarTitle>{data.title}</AvatarTitle>
            </TableData>
            <TableData>
              <AvatarStatus>{data.status}</AvatarStatus>
            </TableData>
            <TableData>
              <AvatarRole>{data.role}</AvatarRole>
            </TableData>
            <TableData>
              <AvatarRole>{data.role}</AvatarRole>
            </TableData>
            <TableData>
              <AvatarRole>{data.role}</AvatarRole>
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
