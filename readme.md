# Project_Solar_Front

This repository Frontend for Last-Project with Solar Design

## issue

6/21 -은지-

- styled components install 시 에러 발생

```sh
npm ERR! Cannot read properties of null (reading 'edgesOut')
```

=> styled-components ver6 에서 발생하는 이슈로, npm install styled-components@5.3.10으로 다운받음

```sh
npx create-react-app front
npm install styled-components@5.3.10
npm install react-router-dom axios
npm install web3
```

react-app-rewired : Eject 사용 안할 수 있도록 도와줌?

```
solarswap.com
             / (메인) - 그리기 완료
             /assets (내자산) - 그리기 완료
             /exchange/swap (스왑) - 그리기 진행중 (오류 수정해야 함)
                      /pool (일반페어예치)
             /staking (스테이킹)
             /governance/ (의제투표)
                        /create (투표제안) - 그리기 완료
             /dashboard (대쉬보드)
```

6/23 -은지-

**기본 디렉터리 구조**

```
- /src

-- /routes
---- index.tsx


-- /pages (섹션 별로 나눈 애들이 모으는 곳 => 한 페이지에 표현될 큰 요소들을 묶어놓음)
----- index.tsx [main]


-- /organisms (섹션을 구성할 단위들)
---- /components (반복적으로 쓰이는 부분들만 정리)
-------/button

---- /contexts or /store (전역 상태 관리)

---- /layouts (차후 수정할지도 모를 상황을 대비하여 상황에 맞는 레이아웃에 대한 디렉터리를 구성)
-------/baseLayout
---------/header
---------/footer

---- /contents
------- /main (메인에 필요한 섹션들을 묶는 파일, 차후 얘네들을 pages 디렉터리 안에 올바른 파일에 쑤셔넣으면 됨)
---------/SectionFirst (로테이트, 버튼 모아놓은 첫번째 섹션)
---------/MainArticleFirst (두번째 섹션)
---------/MainArticleSecond (세번째 섹션)

---- /hooks


-- app.tsx


-- index.tsx
```

전역상태 관리 툴 -> 리액트 쿼리 + 리코일
리액트 쿼리는 통신에 대한 전역상태를 관리해주고
리코일은 클라이언트의 전역상태를 관리해줌???

```sh
npm install @tanstack/react-query @tanstack/react-query-devtools
npm install recoil
```

- De-fi 서비스가 실시간 데이터를 중요시 하는 만큼 리액트 쿼리의 컨셉에 따라 최신 정보를 빠르게 불러올 수 있는 것이 장점이라고 생각
- 블록체인 네트워크와 통신을 하는 만큼 클라이언트에서의 상태는 서버와 통신할 필요가 없기 때문에 통신에 대한 상태와 구별해야 할 필요성이 있다고 판단
  => 상태에 따라 content 변화 등을 관리할 때에/// 까먹음...

```jsx
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
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  poolToken1State,
  poolToken2State,
  transactionState,
} from '../../store';
import { useEffect, useRef, useState } from 'react';
import { ethers } from 'ethers';
import FactoryABI from '../../../ABI/contracts/Factory_v1.sol/Factory_v1.json';
import SwapABI from '../../../ABI/contracts/Swap.sol/Swap.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const tokens = [
  {
    name: 'Usdt',
    symbol: 'USDT',
    address: process.env.REACT_APP_LP_USDT_ADDRESS,
  },
  {
    name: 'Eth',
    symbol: 'ETH',
    address: process.env.REACT_APP_LP_ETH_ADDRESS,
  },

  {
    name: 'Arb',
    symbol: 'ARB',
    address: process.env.REACT_APP_LP_ARB_ADDRESS,
  },
];

let SwapContract = new ethers.Contract(
  process.env.REACT_APP_SWAP_ADDRESS,
  SwapABI.abi,
  signer
);

let FacContract = new ethers.Contract(
  process.env.REACT_APP_FACTORY_ADDRESS,
  FactoryABI.abi,
  signer
);

export const ExchangePoolList = ({ tokenData, setPopup }) => {
  const setToken1 = useSetRecoilState(poolToken1State);
  const setToken2 = useSetRecoilState(poolToken2State);
  const transaction = useRecoilValue(transactionState);
  const previousTransactionTimestampRef = useRef();
  const [monthlyReturnRate, setMonthlyReturnRate] = useState(0);
  const [annualReturnRate, setAnnualReturnRate] = useState(0);

  const [prices, setPrices] = useState([]);
  const [totalPoolAmounts, setTotalPoolAmounts] = useState([]);

  useEffect(() => {
    const dailyReturnRate = 0.22;

    const monthlyReturnRate = ((1 + dailyReturnRate / 100) ** 30 - 1) * 100;
    const annualReturnRate = ((1 + dailyReturnRate / 100) ** 365 - 1) * 100;

    setMonthlyReturnRate(monthlyReturnRate.toFixed(2));
    setAnnualReturnRate(annualReturnRate.toFixed(2));
  }, []);

  const fetchData = async () => {
    try {
      const fetchedPrices = await Promise.all(
        tokens.map(async (token) => {
          const price = await SwapContract.tokenInfo(token.symbol);
          const formattedPrice = ethers.utils.formatUnits(price, 8);
          return formattedPrice;
        })
      );

      const fetchedTotalPoolAmounts = await Promise.all(
        tokens.map(async (token) => {
          const totalSupply = await FacContract[
            'lqAmount' + token.name.toUpperCase()
          ]();
          const formattedSupply = ethers.utils.formatUnits(totalSupply, 0);
          return formattedSupply;
        })
      );

      setPrices(fetchedPrices);
      setTotalPoolAmounts(fetchedTotalPoolAmounts);
    } catch (error) {
      console.error('Error while fetching data: ', error);
    }
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (
      transaction &&
      transaction.timestamp !== previousTransactionTimestampRef.current
    ) {
      if (transaction.status === 1) {
        setPopup(false);
      } else if (transaction.status === 0) {
      }
      setPopup(false);
      previousTransactionTimestampRef.current = transaction.timestamp;
    }
  }, [transaction, setPopup]);

  const tokenLogoRender = (item) => (
    <img src={`/images/logo-${item}.png`} alt={`${item}`} />
  );

  const listMap = tokenData.map((v, index) => (
    <PoolList key={index} cursor='auto'>
      <PoolContentWrap width='86%'>
        <PoolTokenInfo>
          <div className='logo'>
            {tokenLogoRender(v.token1.logo)}
            {tokenLogoRender(v.token2.logo)}
          </div>
          <div>
            <div className='name'>{`${v.token1.name} + ${v.token2.name}`}</div>
            <div className='symbol'>{`${v.token1.symbol} + ${v.token2.symbol}`}</div>
          </div>
        </PoolTokenInfo>
        <Liquidity>
          <p className='mobile'>유동성 규모</p>
          <strong className='pointColor'>
            ${''}
            {totalPoolAmounts[index] && prices[index]
              ? numberWithCommas(
                  (totalPoolAmounts[index] * prices[index]).toFixed(2)
                )
              : 0}
          </strong>
        </Liquidity>
        <RewardToken>
          <div className='logo'>{tokenLogoRender(v.token1.logo)}</div>
        </RewardToken>
        <RewardRate>
          <span>ASD 분배</span> <span>{monthlyReturnRate}%</span>
        </RewardRate>
        <Estimated>
          <p className='mobile'>예상 수익률</p>
          <strong>{annualReturnRate}</strong> %
        </Estimated>
      </PoolContentWrap>
      <PoolContentWrap width='14%' className='right'>
        <Button
          colors={`blue`}
          width='60px'
          height='30px'
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
```
