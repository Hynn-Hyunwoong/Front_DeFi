import { Button, DropBox, GovernanceList } from '../../components';
import {
  SectionStyled,
  ListHeaderDiv,
  ButtonSection,
  ListSection,
  ButtonStyle,
} from './styled';
import { useRecoilState } from 'recoil';
import { listState, dropboxState, selectedWallet } from '../../store';
import govABI from "../../../ABI/contracts/governance.sol/Governance.json"
import { ethers } from "ethers";
import { useEffect } from 'react';

export const GovernanceContent = ({ listArr }) => {
  const [list] = useRecoilState(listState);
  const [dropbox, setDropbox] = useRecoilState(dropboxState)
  const [wallet, setWallet] = useRecoilState(selectedWallet);;

  const statusText = {
    exectued: '통과',
    progress: '진행중',
    canceled: '취소',
  };

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

  const govContract = new ethers.Contract(
    process.env.REACT_APP_GOVERNANCE_ADDRESS,
    govABI.abi,
    signer
  )

  const getProposal = async(index) => {
    const result = await govContract.getProposalToFE(index)
    console.log("test",result)
    return (result)
  }


  const filterList = () => {
    const filtered = listArr.reduce((acc, val)=>{
      getProposal(val.Index)
      return acc
    },[])
  }

  filterList()



  return (
    <SectionStyled>
      <ButtonSection>
        <Button
          colors='green'
          height='40px'
          width='100px'
          to='/governance/create'
        >
          <h3>투표 제안하기</h3>
        </Button>
      </ButtonSection>
      <ListSection>
        <ListHeaderDiv>
          <h4>전체 목록</h4>
          <div>
            <ButtonStyle
              onClick={() => {
                setDropbox(!dropbox);
              }}
            >
              {list ? statusText[list] : '전체'} {dropbox ? '▲' : '▼'}
            </ButtonStyle>
          </div>
        </ListHeaderDiv>
        {dropbox && <DropBox statusText={statusText} />}
        <div>
          {/* <GovernanceList testArr={filteredArr} statusText={statusText} /> */}
        </div>
      </ListSection>
    </SectionStyled>
  );
};

/*
        <PageDiv className='pagenation'>
          <button>◀️</button>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <button>▶️</button>
        </PageDiv>
*/
