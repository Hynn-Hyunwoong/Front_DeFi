import styled from 'styled-components';

export const DashboardWrap = styled.div`
  max-width: 80%;
  max-height: 80rem;
  margin: 10px auto;
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
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
  color: #ffffff;
`;

export const TrendingEmphasis = styled.dd`
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
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

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  max-width: 80%;
  margin: auto;
`;

export const HeaderItem = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #6b7280;
`;

export const AvatarCard = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: auto;
  margin-bottom: 1rem;
  max-width: 80%;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

export const AvatarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AvatarName = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

export const AvatarDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: #6b7280;
`;

export const AvatarTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

export const AvatarStatus = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: #6b7280;
`;

export const AvatarRole = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: #6b7280;
`;
