import styled from 'styled-components';

export const DashboardWrap = styled.div`
  width: 80%;
  margin: 10px auto;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2%;
`;

export const DashboardLeftWrap = styled.div`
  width: 49%;
  overflow: auto;
`;

export const DashboardRightWrap = styled.div`
  width: 49%;
  overflow: auto;
`;

export const DashboardTrendingWrap = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0px;
  height: 8rem;
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

export const DashboardTrendingAll = styled.div`
  max-width: 80%;
  height: 20rem;
  margin: 0 auto;
`;

export const TrendingBox = styled.div`
  background: transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  margin: 0;
  width: 21rem;
`;

export const TrendingTitleVariation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TrendingEmphasisWrap = styled.div`
  width: 100%;
  text-align: center;
`;

export const TrendingTitle = styled.dt`
  font-size: 1.25rem;
  font-weight: 500;
  color: #6b7280;
`;

export const TrendingEmphasis = styled.dd`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  text-align: center;
`;

export const TrendingVariation = styled.dd`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => (props.isPositive ? '#10B981' : '#EF4444')};
  display: flex;
  align-items: center;
`;

export const TrendingVariationIcon = styled.span`
  margin-right: 0.5rem;
`;

export const HeaderItem = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #6b7280;
  margin-left: 6rem;
  text-align: center;
`;

export const AvatarCard = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  max-width: 80%;
  margin: auto;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  text-align: center;
`;

export const AvatarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const AvatarName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

export const AvatarDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: #6b7280;
  margin-left: 6rem;
`;

export const AvatarTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

export const AvatarStatus = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: #6b7280;
  text-align: center;
`;

export const AvatarRole = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: #6b7280;
  text-align: center;
`;

export const Table = styled.table`
  width: 70%;
  border-spacing: 0;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: #6b7280;
  padding: 1rem;
  background-color: #f3f4f6;
`;

export const TableData = styled.td`
  text-align: center;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
`;

export const TrendingTopic = styled.h2`
  display: block;
  width: 80%;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  color: #6b7280;
`;

export const TrendingTopic2 = styled.h2`
  display: block;
  width: 80%;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  color: #0000ff;
`;

export const TablesWrapperB = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10%;
  width: 100%;
  margin: 0 auto;
`;
export const TablesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 15%;
  width: 100%;
  margin: 0 auto;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2%;
`;

export const DashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
