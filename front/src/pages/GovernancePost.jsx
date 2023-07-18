import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { GovToken, selectedWallet, proposalList } from '../organisms/store';
import styled from 'styled-components';
import {
  GovHeadArea,
  GovVotingArea,
  GovTransactionBox,
  GovTextArea,
  GovDetailArea,
  GovSchedule,
} from '../organisms/contents/governancePost';
import { useEffect } from 'react';
import { ethers } from 'ethers';
import factotyABI from '../ABI/contracts/Factory_v1.sol/Factory_v1.json';

export const GovPostWrapper = styled.div`
  width: 720px;
  margin: 0 auto;
  background: #fff;
  padding: 30px 40px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05),
    0 40px 20px -30px rgba(102, 111, 128, 0.1);
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
`;

export const GovernancePost = () => {
  const { id } = useParams();
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  const [govBalance, setgovBalance] = useRecoilState(GovToken);
  const [proposal] = useRecoilState(proposalList);
  const prop = proposal[id - 1];
  const setGov = async () => {
    let provider;
    switch (wallet) {
      case 'metamask':
        provider = new ethers.providers.Web3Provider(window.ethereum);
        break;
      case 'trustwallet':
        provider = new ethers.providers.Web3Provider(window.trustwallet);
        break;
      case 'walletConnect':
        provider = new ethers.providers.Web3Provider(
          window.walletConnectProvider
        );
        break;
      default:
        console.log('Unknown wallet type');
        return;
    }
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      process.env.REACT_APP_FACTORY_ADDRESS,
      factotyABI.abi,
      signer
    );
    const checkToken = await contract.checkToken(
      process.env.REACT_APP_VASD_ADDRESS
    );
    const result = ethers.utils.formatEther(checkToken);
    setgovBalance(result);
  };

  useEffect(() => {
    setGov();
  }, []);
  return (
    <div style={{ minHeight: 'calc(100vh - 276px)' }}>
      <Wrapper>
        <GovPostWrapper>
          <GovHeadArea title={prop.title} transaction={prop.transaction} />
          <GovVotingArea prop={prop} />
          <GovTransactionBox tx={prop.transaction} />
          <GovTextArea title={prop.title} body={prop.body} />
          <GovDetailArea prop={prop} />
          <GovSchedule prop={prop} />
        </GovPostWrapper>
      </Wrapper>
    </div>
  );
};
