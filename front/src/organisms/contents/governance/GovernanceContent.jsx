import { Button, DropBox, GovernanceList } from '../../components';
import {
  SectionStyled,
  ListHeaderDiv,
  ButtonSection,
  ListSection,
  ButtonStyle,
} from './styled';
import { useRecoilState } from 'recoil';
import {
  listState,
  dropboxState,
  selectedWallet,
  proposalList,
} from '../../store';
import govABI from '../../../ABI/contracts/governance.sol/Governance.json';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

export const GovernanceContent = ({ listArr }) => {
  const [list] = useRecoilState(listState);
  const [dropbox, setDropbox] = useRecoilState(dropboxState);
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  const [proposal, setProposal] = useRecoilState(proposalList);
  const [filteredArr, setFilteredArr] = useState('');
  const statusText = {
    exectued: '통과',
    progress: '진행중',
    canceled: '취소',
  };

  const getProposal = async (length) => {
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
      signer,
    );
    const result = [];
    for (let i = 1; i <= length; i++) {
      const proposal = await govContract.getProposalToFE(i);
      result.push({ ...proposal });
    }

    return result;
  };

  const filterList = async () => {
    const proposal = await getProposal(listArr.length);
    // console.log("proposal",proposal)
    const filtered = [];
    listArr.forEach((val) => {
      filtered.push({
        ...val,
        start: parseInt(proposal[val.Index - 1][1].toString()),
        end: parseInt(proposal[val.Index - 1][2].toString()),
        status: 'progress',
        action: proposal[val.Index - 1][6],
      }); // Edit this line
    });
    // console.log("filter:::",filtered)
    setProposal(filtered);
    setFilteredArr(filtered);
  };

  useEffect(() => {
    filterList();
  }, [listArr]);

  return (
    <SectionStyled>
      <ButtonSection>
        <Button
          colors="green"
          height="40px"
          width="100px"
          to="/governance/create"
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
          <GovernanceList proposal={proposal} statusText={statusText} />
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
