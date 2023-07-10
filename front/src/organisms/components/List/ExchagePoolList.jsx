import {
  ListContentDiv,
  PoolContentWrap,
  TokenInfo,
  Liquidity,
  RewardToken,
  RewardRate,
  Estimated,
} from './styled';
import { Button } from '../button/Button';

export const ExchangePoolList = ({ tokenData }) => {
  const tokenLogoRender = (item) => <img src={`/images/logo-${item}.png`} />;

  const listMap = tokenData.map((v, index) => (
    <ListContentDiv key={index} cursor='auto'>
      <PoolContentWrap width='86%'>
        <TokenInfo className='exchangePool' style={{ width: '34%' }}>
          <div className='logo'>
            {tokenLogoRender(v.token1.logo)}
            {tokenLogoRender(v.token2.logo)}
          </div>
          <div>
            <div className='name'>{`${v.token1.name} + ${v.token2.name}`}</div>
            <div className='symbol'>{`${v.token1.symbol} + ${v.token2.symbol}`}</div>
          </div>
        </TokenInfo>
        <Liquidity>
          <strong className='pointColor'>$ 35,892</strong>
        </Liquidity>
        <RewardToken>
          <div className='logo'>{tokenLogoRender(v.token1.logo)}</div>
        </RewardToken>
        <RewardRate>
          <span>KSP 분배</span> <span>2.90%</span>
        </RewardRate>
        <Estimated>
          <strong>123.90</strong> %
        </Estimated>
      </PoolContentWrap>
      <PoolContentWrap width='14%' className='right'>
        <Button colors={`blue`} width='60px' height='30px'>
          예치
        </Button>
      </PoolContentWrap>
    </ListContentDiv>
  ));

  return listMap;
};
