import { HeaderDiv } from '../governance/styled';
import { Box } from '../../components';
import { PoolSection, PoolHeaderDiv, PoolHeaderBoxDiv } from './styled';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import TokenABI from '../../../ABI/contracts/SelfToken.sol/SelfToken.json';
import { LPbalanceState } from '../../store';
import { useRecoilState } from 'recoil';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const tokenAddresses = {
  ASD: process.env.REACT_APP_ASD_TOKEN_ADDRESS,
  ETH: process.env.REACT_APP_ETH_TOKEN_ADDRESS,
  USDT: process.env.REACT_APP_USDT_TOKEN_ADDRESS,
  ARB: process.env.REACT_APP_ARB_TOKEN_ADDRESS,
  LPARB: process.env.REACT_APP_LP_ARB_ADDRESS,
  LPETH: process.env.REACT_APP_LP_ETH_ADDRESS,
  LPUSDT: process.env.REACT_APP_LP_USDT_ADDRESS,
  VASD: process.env.REACT_APP_VASD_ADDRESS,
};

const tokenContracts = {};

for (const token in tokenAddresses) {
  tokenContracts[token] = new ethers.Contract(
    tokenAddresses[token],
    TokenABI.abi,
    signer,
  );
}

export const PoolHeader = () => {
  const [LPbalance, setLPbalanceState] = useRecoilState(LPbalanceState);
  const [total, setTotal] = useState({ ASD: 0, LP: 0 });

  useEffect(() => {
    const fetchBalances = async () => {
      const Account = await signer.getAddress();

      const balances = await Promise.all(
        Object.values(tokenContracts).map((contract) =>
          contract.balanceOf(Account).then(ethers.utils.formatEther),
        ),
      );

      let totalASD = 0;
      let totalLP = 0;

      for (let i = 0; i < balances.length; i++) {
        const balance = parseFloat(balances[i]);

        if (i < 4) {
          totalASD += balance;
        } else if (i < 7) {
          totalLP += balance;
        }
        if (i === 7) {
          setLPbalanceState((prevLPbalance) => ({
            ...prevLPbalance,
            VASD: balance,
          }));
        }
      }

      const lpForASD = (totalASD * 22) / 1000000;

      setLPbalanceState((prevLPbalance) => ({
        ...prevLPbalance,
        LPETH: balances[4],
        LPUSDT: balances[5],
        LPARB: balances[6],
      }));

      setTotal({ ASD: lpForASD, LP: totalLP });
    };

    fetchBalances();
  }, []);

  return (
    <PoolSection>
      <PoolHeaderDiv>
        <HeaderDiv>
          <h1>
            보유한 자산을 손쉽게 <strong className="pointColor">예치</strong>
            하세요
          </h1>
        </HeaderDiv>
        <PoolHeaderBoxDiv>
          <Box colors="green" width="450px">
            <PoolHeaderBoxDiv className="header">
              <h3>You Earned</h3>
              <span className="light">매 블록당 보상 분배</span>
            </PoolHeaderBoxDiv>
            <PoolHeaderBoxDiv className="poolStatus">
              <h4>최대 수령 가능</h4>
              <div className="light">
                <span>
                  <strong className="point">{total.ASD} </strong>
                  ASD
                </span>
                <br />
                <p className="right">~ $ 1</p>
              </div>
            </PoolHeaderBoxDiv>
            <PoolHeaderBoxDiv>
              <span>현재 누적 보상</span>
              <span>{total.LP} ASD</span>
            </PoolHeaderBoxDiv>
          </Box>
        </PoolHeaderBoxDiv>
      </PoolHeaderDiv>
    </PoolSection>
  );
};
