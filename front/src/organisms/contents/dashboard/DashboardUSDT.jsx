import {
  TrendingBox,
  TrendingTitle,
  TrendingEmphasis,
  TrendingVariation,
  TrendingVariationIcon,
  TrendingTopic,
  TablesWrapper,
  DashboardContainer,
} from './styled';

export const DashboardUSDT = () => {
  return (
    <>
      <DashboardContainer>
        <TrendingTopic>ASD & USDT Dashboard</TrendingTopic>
        <TablesWrapper>
          <TrendingBox>
            <TrendingTitle>총 예치 규모 </TrendingTitle>
            <TrendingEmphasis>$ 2</TrendingEmphasis>
            <TrendingVariation>
              <TrendingVariationIcon></TrendingVariationIcon>
            </TrendingVariation>
          </TrendingBox>
          <TrendingBox>
            <TrendingTitle>1</TrendingTitle>
            <TrendingEmphasis>$ 2</TrendingEmphasis>
            <TrendingVariation>
              <TrendingVariationIcon>1</TrendingVariationIcon>3
            </TrendingVariation>
          </TrendingBox>
          <TrendingBox>
            <TrendingTitle>1</TrendingTitle>
            <TrendingEmphasis>$ 2</TrendingEmphasis>
            <TrendingVariation>
              <TrendingVariationIcon>1</TrendingVariationIcon>3
            </TrendingVariation>
          </TrendingBox>
          <TrendingBox>
            <TrendingTitle>1</TrendingTitle>
            <TrendingEmphasis>$ 2</TrendingEmphasis>
            <TrendingVariation>
              <TrendingVariationIcon>1</TrendingVariationIcon>3
            </TrendingVariation>
          </TrendingBox>
        </TablesWrapper>
      </DashboardContainer>
    </>
  );
};
