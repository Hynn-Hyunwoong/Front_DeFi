import { HeaderDiv } from '../governance/styled';
import { Box } from '../../components';
import { PoolSection, PoolHeaderDiv, PoolHeaderBoxDiv } from './styled';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import FactoryABI from '../../../ABI/contracts/Factory_v1.sol/Factory_v1.json';
import TokenABI from '../../../ABI/contracts/SelfToken.sol/SelfToken.json';
import LiquidABI from '../../../ABI/contracts/Liquid.sol/Liquid.json';
import { LPbalanceState } from '../../store';
import { useRecoilState } from 'recoil';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const ASD = process.env.REACT_APP_ASD_TOKEN_ADDRESS;
const ETH = process.env.REACT_APP_ETH_TOKEN_ADDRESS;
const USDT = process.env.REACT_APP_USDT_TOKEN_ADDRESS;
const ARB = process.env.REACT_APP_ARB_TOKEN_ADDRESS;

const LPARB = process.env.REACT_APP_LP_ARB_ADDRESS;
const LPETH = process.env.REACT_APP_LP_ETH_ADDRESS;
const LPUSDT = process.env.REACT_APP_LP_USDT_ADDRESS;
const VASD = process.env.REACT_APP_VASD_ADDRESS;

const ASDContract = new ethers.Contract(ASD, TokenABI.abi, signer);
const ETHContract = new ethers.Contract(ETH, TokenABI.abi, signer);
const USDTContract = new ethers.Contract(USDT, TokenABI.abi, signer);
const ARBContract = new ethers.Contract(ARB, TokenABI.abi, signer);

const LPETHContract = new ethers.Contract(LPETH, TokenABI.abi, signer);
const LPUSDTContract = new ethers.Contract(LPUSDT, TokenABI.abi, signer);
const LPARBContract = new ethers.Contract(LPARB, TokenABI.abi, signer);
const VASDContract = new ethers.Contract(VASD, TokenABI.abi, signer);

export const PoolHeader = () => {
  const [LPbalance, setLPbalanceState] = useRecoilState(LPbalanceState);
  const [total, setTotal] = useState({ ASD: 0, LP: 0 });

  useEffect(() => {
    const fetchBalances = async () => {
      const Account = await signer.getAddress();

      const amountASD = await ASDContract.balanceOf(Account);
      const amountETH = await ETHContract.balanceOf(Account);
      const amountUSDT = await USDTContract.balanceOf(Account);
      const amountARB = await ARBContract.balanceOf(Account);

      const amountLPETH = await LPETHContract.balanceOf(Account);
      const amountLPUSDT = await LPUSDTContract.balanceOf(Account);
      const amountLPARB = await LPARBContract.balanceOf(Account);
      const amountVASD = await VASDContract.balanceOf(Account);

      const totalASD =
        parseFloat(ethers.utils.formatEther(amountASD)) +
        parseFloat(ethers.utils.formatEther(amountETH)) +
        parseFloat(ethers.utils.formatEther(amountUSDT)) +
        parseFloat(ethers.utils.formatEther(amountARB));

      const totalLP =
        parseFloat(ethers.utils.formatEther(amountLPETH)) +
        parseFloat(ethers.utils.formatEther(amountLPUSDT)) +
        parseFloat(ethers.utils.formatEther(amountLPARB));

      const lpForASD = (totalASD * 22) / 1000000;
      console.log(typeof totalASD);

      setLPbalanceState({
        LPETH: ethers.utils.formatEther(amountLPETH),
        LPUSDT: ethers.utils.formatEther(amountLPUSDT),
        LPARB: ethers.utils.formatEther(amountLPARB),
        VASD: ethers.utils.formatEther(amountVASD),
      });

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
