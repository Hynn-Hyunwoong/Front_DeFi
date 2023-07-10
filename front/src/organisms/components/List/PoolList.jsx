import { ListContentDiv, FlexDiv, TokenInfo, EstimatieRate } from './styled';
import { Button } from '../button/Button';

export const PoolList = ({ tokenData }) => {
  const token = {
    ASD: { logo: 'solar', name: '솔라스왑' },
    USTD: { logo: 'tether', name: '테더' },
    ARB: { logo: 'arbitrum', name: '아비트럼' },
    ETH: { logo: 'ethereum', name: '이더리움' },
  };
  const tokenLogoRender = (item) => (
    <img src={`/images/logo-${token[item].logo}.png`} />
  );

  const listMap = tokenData.map((v, index) => (
    <ListContentDiv key={index} cursor='auto'>
      <FlexDiv width='70%'>
        <TokenInfo>
          <div className='logo'>
            {tokenLogoRender(v.token1)}
            {tokenLogoRender(v.token2)}
          </div>
          <div>
            <div className='name'>{`${token[v.token1].name} + ${
              token[v.token2].name
            }`}</div>
            <div className='symbol'>{`${v.token1} + ${v.token2}`}</div>
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
