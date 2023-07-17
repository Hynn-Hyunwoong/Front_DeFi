import { useState } from 'react';
import { PoolSection, PoolTableHeader } from './styled';
import { Search, ExchangePoolList, Button } from '../../components';
import { MyVoteSection, PoolListHeaderDiv, FlexDiv } from '../staking/styled';
import { PopupDeposit } from './PopupDeposit';
import { useRecoilState } from 'recoil';
import { stakingPopup, searchKeyword } from '../../store';
import { ethers } from 'ethers';
import TokenABI from '../../../ABI/contracts/SelfToken.sol/SelfToken.json';

if (window.ethereum) {
  window.ethereum
    .enable()
    .then(() => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const LPARB = process.env.REACT_APP_LP_ARB_ADDRESS;
      const LPETH = process.env.REACT_APP_LP_ETH_ADDRESS;
      const LPUSDT = process.env.REACT_APP_LP_USDT_ADDRESS;
      const ASD = process.env.REACT_APP_ASD_TOKEN_ADDRESS;

      const tokens = [
        {
          name: 'Usdt',
          symbol: 'USDT',
          address: LPUSDT,
        },
        {
          name: 'Eth',
          symbol: 'ETH',
          address: LPETH,
        },
        {
          name: 'Arb',
          symbol: 'ARB',
          address: LPARB,
        },
        {
          name: 'ASD',
          symbol: 'ASD',
          address: ASD,
        },
      ];

      const tokenContracts = tokens.map((token) => {
        return new ethers.Contract(token.address, TokenABI.abi, signer);
      });

      tokens.map(async (token, index) => {
        try {
          const totalSupply = await tokenContracts[index].totalSupply();
          return totalSupply;
        } catch (error) {
          console.error(`Error fetching total supply of ${token.name}:`, error);
        }
      });
    })
    .catch((error) => {
      console.error('User rejected request:', error);
    });
} else {
  console.error(
    'Non-Ethereum browser detected. Consider trying Metamask or another Ethereum browser.',
  );
}

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
