import styled from 'styled-components';

export const DashboardWrap = styled.div`
  width: 100%;
`;

export const DashboarSection = styled.section`
  max-width: 80%;

  width: 80%;

  margin: 10px auto;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

export const TrendingBox = styled.div`
  background: transparent;
  border-bottom: 1px solid #d2edff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 100%;
  padding: 10px 10px 20px;
  width: 70%;
  margin-bottom: 20px;

  &:nth-last-child(1) {
    margin-bottom: 0;
    border: none;
  }
`;

export const TrendingTitle = styled.dt`
  font-size: 20px;
  font-weight: 500;
  color: #0194ff;
`;

export const TrendingContent = styled.dt`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
export const TrendingEmphasis = styled.dd`
  font-size: 20px;
  letter-spacing: -1px;
  font-weight: 700;
  color: #111827;
  text-align: center;
  margin-bottom: 3px;
`;

export const TrendingVariation = styled.dd`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => (props.isPositive ? '#10B981' : '#EF4444')};
  display: flex;
  align-items: center;
`;

export const TrendingVariationIcon = styled.span`
  /* margin-right: 0.5rem; */
  font-size: 12px;
`;

export const HeaderItem = styled.p`
  /* font-size: 1rem;
  font-weight: 500;
  color: #6b7280;
  margin-left: 6rem;
  text-align: center; */
`;

export const AvatarCard = styled.div`
  /* background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  max-width: 80%;
  margin: auto; */
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  text-align: center;
`;

export const AvatarContent = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center; */
`;

export const AvatarName = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

export const AvatarDescription = styled.p`
  /* font-size: 0.875rem;
  font-weight: 400;
  color: #6b7280;
  margin-left: 6rem; */
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

export const TableRow = styled.tr`
  @media (max-width: 768px) {
    & > .liquidityPoolToken {
      display: none;
    }
    & > .fee {
      display: none;
    }
  }
`;

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
  /* display: block;
  width: 80%;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  color: #6b7280; */
`;

export const TrendingTopic2 = styled.h2`
  display: block;
  width: 80%;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin: auto;
  margin-bottom: 3rem;
  color: #caccd2;
  letter-spacing: -0.5px;
`;

export const TablesWrapperB = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10%;
  width: 100%;

  margin: auto; */

  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
export const TablesWrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1%;
  width: 100%; */

  margin: 0 auto;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2%;
`;

export const DashboardLayout = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* gap: 20px; */
  background: white;
  box-shadow: 1px 1px 6px 0px #d6d8dd;
  margin: 2rem auto;
  padding: 50px 0;
  border-radius: 5px;
`;
