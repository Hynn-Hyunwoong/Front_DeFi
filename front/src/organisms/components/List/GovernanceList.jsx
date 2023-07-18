import { ListContentDiv, FlexDiv, ActionColor } from './styled';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ethers } from 'ethers';
import { selectedWallet, proposalList } from '../../store';
import { useState } from 'react';

export const GovernanceList = ({ statusText }) => {
  const [proposal, setProposal] = useRecoilState(proposalList);
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  // let start, end;
  // console.log('prop', proposal);
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
      // console.log('Unknown wallet type');
      return;
  }
  const listMap = proposal.map((v) => {
    (async () => {
      const tx = await provider.getTransaction(v.transaction);
      const block = await provider.getBlock(tx.blockNumber);
      const timeStamp = block.timestamp;
      // setStart(new Date(timeStamp * 1000).toLocaleDateString());
      // setEnd(new Date((timeStamp + 86400 * 3) * 1000).toLocaleDateString());
      // end = start + 86400*3
      // console.log(start, end)
    })();

    return (
      <ListContentDiv className={`${v.status}`} key={v.Index}>
        <FlexDiv width="56%">
          <div className="index" style={{ width: '30px' }}>
            {v.index}
          </div>

          <div className="subject" style={{ width: 'calc(100% - 100px)' }}>
            <Link to={`/governance/${v.Index}`}>
              <strong>{v.title}</strong>
            </Link>
          </div>

          <div className="status" style={{ width: '70px' }}>
            <Button colors={`${v.status}`} width="60px" height="30px">
              {statusText[v.status]}
            </Button>
          </div>
        </FlexDiv>
        <FlexDiv width="42%">
          <div className="period">투표 기간 2023.07.18 ~ 2023.07.21</div>
          <div
            className="action"
            style={{ width: '40px', textAlign: 'center' }}
          >
            <ActionColor status={`${v.status}`}>
              {v.action ? '참여' : '미참여'}
            </ActionColor>
          </div>
        </FlexDiv>
      </ListContentDiv>
    );
  });

  return listMap;
};
