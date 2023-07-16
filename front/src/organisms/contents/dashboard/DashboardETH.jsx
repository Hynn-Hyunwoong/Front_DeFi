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

export const DashboardETH = () => {
  return (
    <>
      <DashboardContainer>
        <TrendingTopic>ASD & Ethereum Dashboard</TrendingTopic>
        <TablesWrapper>
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
