import {
  PoolList,
  PoolContentWrap,
  PoolTokenInfo,
  Liquidity,
  RewardToken,
  RewardRate,
  Estimated,
} from './styled';
import { Button } from '../button/Button';
import { useSetRecoilState } from 'recoil';
import { poolToken1State, poolToken2State } from '../../store';

export const ExchangePoolList = ({ tokenData, setPopup }) => {
  const setToken1 = useSetRecoilState(poolToken1State);
  const setToken2 = useSetRecoilState(poolToken2State);

  const tokenLogoRender = (item) => (
    <img src={`/images/logo-${item}.png`} alt={`${item}`} />
  );

  const listMap = tokenData.map((v, index) => (
    <PoolList key={index} cursor="auto">
      <PoolContentWrap width="86%">
        <PoolTokenInfo>
          <div className="logo">
            {tokenLogoRender(v.token1.logo)}
            {tokenLogoRender(v.token2.logo)}
          </div>
          <div>
            <div className="name">{`${v.token1.name} + ${v.token2.name}`}</div>
            <div className="symbol">{`${v.token1.symbol} + ${v.token2.symbol}`}</div>
          </div>
        </PoolTokenInfo>
        <Liquidity>
          <p className="mobile">유동성 규모</p>
          <strong className="pointColor">$ 1,235,892</strong>
        </Liquidity>
        <RewardToken>
          <div className="logo">{tokenLogoRender(v.token1.logo)}</div>
        </RewardToken>
        <RewardRate>
          <span>KSP 분배</span> <span>2.90%</span>
        </RewardRate>
        <Estimated>
          <p className="mobile">예상 수익률</p>
          <strong>123.90</strong> %
        </Estimated>
      </PoolContentWrap>
      <PoolContentWrap width="14%" className="right">
        <Button
          colors={`blue`}
          width="60px"
          height="30px"
          onClick={() => {
            setToken1(v.token1.symbol);
            setToken2(v.token2.symbol);
            setPopup(true);
          }}
        >
          예치
        </Button>
      </PoolContentWrap>
    </PoolList>
  ));

  return listMap;
};
