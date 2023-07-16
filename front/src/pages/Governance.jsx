import {
  GovernanceContent,
  GovernanceHeader,
} from '../organisms/contents/governance';
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import factotyABI from "../ABI/contracts/Factory_v1.sol/Factory_v1.json";
import govABI from "../ABI/contracts/governance.sol/Governance.json"
import {GovToken, selectedWallet} from "../organisms/store";
import axios from 'axios';

export const Governance = () => {
  const testArr = [
    {
      index: '4',
      subject: 'KAI 토큰 레벨 (B) 유지',
      status: 'progress',
      period: { start: '23.05.02', end: '23.05.05' },
      action: false,
    },
    {
      index: '3',
      subject: 'KAI 토큰 레벨 (B) 유지',
      status: 'exectued',
      period: { start: '23.05.02', end: '23.05.05' },
      action: false,
    },
    {
      index: '2',
      subject: 'SIG 토큰 레벨 (B) 유지',
      status: 'exectued',
      period: { start: '23.05.02', end: '23.05.05' },
      action: true,
    },
    {
      index: '1',
      subject: 'AWM 토큰 레벨 변경 C -> B',
      status: 'canceled',
      period: { start: '23.07.02', end: '23.07.05' },
      action: false,
    },
    {
      index: '1',
      subject: 'AWM 토큰 레벨 변경 C -> B',
      status: 'canceled',
      period: { start: '23.07.02', end: '23.07.05' },
      action: false,
    },
    {
      index: '1',
      subject: 'AWM 토큰 레벨 변경 C -> B',
      status: 'canceled',
      period: { start: '23.07.02', end: '23.07.05' },
      action: false,
    },
    {
      index: '1',
      subject: 'AWM 토큰 레벨 변경 C -> B',
      status: 'canceled',
      period: { start: '23.07.02', end: '23.07.05' },
      action: false,
    },
    {
      index: '1',
      subject: 'AWM 토큰 레벨 변경 C -> B',
      status: 'canceled',
      period: { start: '23.07.02', end: '23.07.05' },
      action: false,
    },
    {
      index: '1',
      subject: 'AWM 토큰 레벨 변경 C -> B',
      status: 'canceled',
      period: { start: '23.07.02', end: '23.07.05' },
      action: false,
    },
    {
      index: '1',
      subject: 'AWM 토큰 레벨 변경 C -> B',
      status: 'canceled',
      period: { start: '23.07.02', end: '23.07.05' },
      action: false,
    },
    {
      index: '1',
      subject: 'AWM 토큰 레벨 변경 C -> B',
      status: 'canceled',
      period: { start: '23.07.02', end: '23.07.05' },
      action: false,
    },
  ];
  const [list, setList] = useState([]);
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  const [govBalance, setgovBalance] = useRecoilState(GovToken);
  const govToken = process.env.REACT_APP_VASD_ADDRESS
  const setGov = async() => {
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
            window.walletConnectProvider,
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
    const checkToken = await factoryContract.checkToken(process.env.REACT_APP_VASD_ADDRESS)
    const result = ethers.utils.formatEther(checkToken)
    setgovBalance(result)

    const govContract = new ethers.Contract(
      process.env.REACT_APP_GOVERNANCE_ADDRESS,
      govABI.abi,
      signer
    )

    // await govContract.getProposal()
  }

  const getProposalList = async() => {
    const {data} = await axios.get(`${process.env.REACT_APP_AXIOS_URL}/proposal/getlist`)
    console.log("res:::",data)
    await setList([...data])
  }

  useEffect(()=>{
      setGov()
      ;(async()=>{await getProposalList()})()
  },[])

  return (
    <div>
      <GovernanceHeader />
      <GovernanceContent testArr={list} />
    </div>
  );
};
