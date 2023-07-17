import axios from 'axios';
import { useRef } from 'react';
import {
  WriteFormWrap,
  WriteInputTitle,
  WriteInputBody,
  Button,
} from '../../components';
import { Content } from '../../components/popup/styled';
import { ethers } from 'ethers';
import { useRecoilState } from 'recoil';
import GovABI from "../../../ABI/contracts/governance.sol/Governance.json";
import { accountState, GovToken, selectedWallet } from '../../store';
export const TopicWrite = () => {
  const title = useRef()
  const content = useRef()
  const [wallet] = useRecoilState(selectedWallet);
  const [account, setAccount] = useRecoilState(accountState);
  const [gov] = useRecoilState(GovToken)

  // const [govBalance, setgovBalance] = useRecoilState(GovToken);
    const createProposal = async() => {
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
      const contract = new ethers.Contract(
          process.env.REACT_APP_GOVERNANCE_ADDRESS,
          GovABI.abi,
          signer
      );
      console.log(account, title.current.value)
      const proposal = await contract.propose(account, title.current.value, {
        gasLimit: 1000000,
            maxFeePerGas: ethers.utils.parseUnits('10', 'gwei'),
            maxPriorityFeePerGas: ethers.utils.parseUnits('1', 'gwei'),
      })
      console.log(proposal)
      const result = await proposal.wait()
      console.log(result)
      return proposal.hash
    }

  const submitHandle = async(e) => {
    e.preventDefault()
    if(parseInt(gov)===0) {
      alert("Not Enough vASD")
      return
    }
    const titleData = title.current.value
    const bodyData = content.current.value
    const data = {
      transaction: await createProposal(),
      title : titleData,
      body : bodyData
    }

    try{
    const response = await axios.post(`${process.env.REACT_APP_AXIOS_URL}/proposal/create`, data)
    console.log(response)
    // window.location.href = '/governance'; // 버튼 클릭 시 '/about' 경로로 이동
    }catch(e){
      console.log(e.message)
    }
    
  }
  return (
    <>
      <WriteFormWrap>
        <WriteInputTitle name='proposalTitle' ref={title} placeholder="제목" />
        <WriteInputBody name="proposalContent" ref={content} placeholder="내용을 입력하세요" />
        <Button width={'100%'} height={'40px'} colors={'blue'} onClick={submitHandle}>
          제출하기
        </Button>
      </WriteFormWrap>
    </>
  );
};
