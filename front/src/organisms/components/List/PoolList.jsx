import { ListContentDiv, FlexDiv, TokenInfo, EstimatieRate } from './styled';
import { Button } from '../button/Button';

export const PoolList = ({ tokenData }) => {
  const tokenLogoRender = (item) => <img src={`/images/logo-${item}.png`} />;

  const listMap = tokenData.map((v, index) => (
    <ListContentDiv key={index} cursor='auto'>
      <FlexDiv width='70%'>
        <TokenInfo>
          <div className='logo'>
            {tokenLogoRender(v.token1.logo)}
            {tokenLogoRender(v.token2.logo)}
          </div>
          <div>
            <div className='name'>{`${v.token1.name} + ${v.token2.name}`}</div>
            <div className='symbol'>{`${v.token1.symbol} + ${v.token2.symbol}`}</div>
          </div>
        </TokenInfo>
        <EstimatieRate>
          <p className='text'>Earn up to</p>
          <strong className='pointColor'>{v.estimateRate}</strong>
        </EstimatieRate>
      </FlexDiv>
      <FlexDiv width='30%' className='right'>
        <Button colors={`blue`} width='120px' height='30px'>
          투표하기
        </Button>
      </FlexDiv>
    </ListContentDiv>
  ));

  return listMap;
};
