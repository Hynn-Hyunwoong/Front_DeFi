import {
  GovernanceContent,
  GovernanceHeader,
} from '../organisms/contents/governance';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import factotyABI from '../ABI/contracts/Factory_v1.sol/Factory_v1.json';
import { GovToken, selectedWallet } from '../organisms/store';
import axios from 'axios';

export const Governance = () => {
  const [list, setList] = useState([]);
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  const [govBalance, setgovBalance] = useRecoilState(GovToken);
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
    const factoryContract = new ethers.Contract(
      process.env.REACT_APP_FACTORY_ADDRESS,
      factotyABI.abi,
      signer
    );
    const checkToken = await factoryContract.checkToken(
      process.env.REACT_APP_VASD_ADDRESS
    );
    const result = ethers.utils.formatEther(checkToken);
    setgovBalance(result);
  };

  const getProposalList = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_AXIOS_URL}/proposal/getlist`
    );
    // console.log("res:::",typeof data)
    await setList([...data]);
    await console.log('backList:::', list);
  };

  useEffect(() => {
    setGov();
    (async () => {
      await getProposalList();
    })();
  }, []);

  return (
    <div style={{ minHeight: 'calc(100vh - 276px)' }}>
      <GovernanceHeader />
      <GovernanceContent listArr={list} />
    </div>
  );
};
