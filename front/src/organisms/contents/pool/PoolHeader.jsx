import { HeaderDiv } from '../governance/styled';
import { Box } from '../../components';
import { PoolSection, PoolHeaderDiv, PoolHeaderBoxDiv } from './styled';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import FactoryABI from '../../../ABI/contracts/Factory_v1.sol/Factory_v1.json';
import TokenABI from '../../../ABI/contracts/SelfToken.sol/SelfToken.json';
import LiquidABI from '../../../ABI/contracts/Liquid.sol/Liquid.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const FacContract = new ethers.Contract(
  process.env.REACT_APP_FACTORY_ADDRESS,
  FactoryABI.abi,
  signer,
);

export const PoolHeader = ({ balance }) => {
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
              <h4>수령 가능</h4>
              <div className="light">
                <span>
                  <strong className="point">{balance.ASD} </strong>
                  ASD
                </span>
                <br />
                <p className="right">~ $ 1</p>
              </div>
            </PoolHeaderBoxDiv>
            <PoolHeaderBoxDiv>
              <span>누적 보상</span>
              <span>1234 ASD</span>
            </PoolHeaderBoxDiv>
          </Box>
        </PoolHeaderBoxDiv>
      </PoolHeaderDiv>
    </PoolSection>
  );
};
