import { useState } from 'react';
import { PoolSection, PoolTableHeader } from './styled';
import { Search, ExchangePoolList, Button } from '../../components';
import { MyVoteSection, PoolListHeaderDiv, FlexDiv } from '../staking/styled';
import { PopupDeposit } from './PopupDeposit';
import { useRecoilState } from 'recoil';
import { stakingPopup, searchKeyword } from '../../store';
import { ethers } from 'ethers';
import TokenABI from '../../../ABI/contracts/SelfToken.sol/SelfToken.json';
import FacABI from '../../../ABI/contracts/Factory_v1.sol/Factory_v1.json';
import PoolABI from '../../../ABI/contracts/Pool.sol/Pool.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const LPARB = process.env.REACT_APP_LP_ARB_ADDRESS;
const LPETH = process.env.REACT_APP_LP_ETH_ADDRESS;
const LPUSDT = process.env.REACT_APP_LP_USDT_ADDRESS;
const ARB = process.env.REACT_APP_ARB_TOKEN_ADDRESS;
const ETH = process.env.REACT_APP_ETH_TOKEN_ADDRESS;
const USDT = process.env.REACT_APP_USDT_TOKEN_ADDRESS;
const FACTORY = process.env.REACT_APP_FACTORY_ADDRESS;
const ASD = process.env.REACT_APP_ASD_TOKEN_ADDRESS;
const VASD = process.env.REACT_APP_VASD_ADDRESS;
const Pool = process.env.REACT_APP_POOL_ADDRESS;

const FacCon = new ethers.Contract(FACTORY, FacABI.abi, signer);
const LPARBCon = new ethers.Contract(LPARB, TokenABI.abi, signer);
const PoolCon = new ethers.Contract(Pool, PoolABI.abi, signer);

const tokens = [
  {
    name: 'Usdt',
    symbol: 'USDT',
    address: USDT,
  },
  {
    name: 'Eth',
    symbol: 'ETH',
    address: ETH,
  },
  {
    name: 'Arb',
    symbol: 'ARB',
    address: ARB,
  },
  {
    name: 'ASD',
    symbol: 'ASD',
    address: VASD,
  },
];

const tokenContracts = tokens.map((token) => {
  return new ethers.Contract(token.address, TokenABI.abi, signer);
});

tokens.map(async (token, index) => {
  try {
    const totalSupply = await tokenContracts[index].totalSupply();
    console.log(
      `Total supply of ${token.name}:`,
      ethers.utils.formatEther(totalSupply),
    );
  } catch (error) {
    console.error(`Error fetching total supply of ${token.name}:`, error);
  }
});

export const PoolList = ({ tokenData }) => {
  const [staking, setStaking] = useRecoilState(stakingPopup);
  const [keyword] = useRecoilState(searchKeyword);

  const filteredData = tokenData.filter(
    (item) =>
      item.token1.symbol.toLowerCase().includes(keyword.toLowerCase()) ||
      item.token2.symbol.toLowerCase().includes(keyword.toLowerCase()) ||
      item.token1.name.includes(keyword) ||
      item.token2.name.includes(keyword),
  );
  return (
    <>
      <PoolSection>
        <MyVoteSection
          height="100%"
          colors="white"
          style={{ marginBottom: '30px' }}
        >
          <PoolListHeaderDiv>
            <FlexDiv>
              <h3>전체 목록</h3>
            </FlexDiv>
            <Search placeholder="토큰명, 심볼 검색" />
          </PoolListHeaderDiv>
          <PoolListHeaderDiv height="30px" className="poolList">
            <PoolTableHeader>
              <div className="pair">페어명</div>
              <div className="liquidity">유동성 규모</div>
              <div className="rewardToken">분배 토큰</div>
              <div className="rewardRate">수익률 상세</div>
              <div className="estimated">예상 수익률</div>
            </PoolTableHeader>
          </PoolListHeaderDiv>
          <div>
            <ExchangePoolList
              tokenData={keyword ? filteredData : tokenData}
              setPopup={setStaking}
            />
          </div>
        </MyVoteSection>
      </PoolSection>
      {staking && <PopupDeposit />}
    </>
  );
};
