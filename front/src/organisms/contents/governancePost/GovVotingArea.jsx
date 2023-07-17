import {VotingBox, VotingFooter, VotingHeadBox, VotingP, VotingPerBox, VotingPercentage, Span, VotingTopHead, VotingWrap} from "./style";
import { ethers } from 'ethers';
import { useRecoilState } from 'recoil';
import GovABI from "../../../ABI/contracts/governance.sol/Governance.json";
import { accountState, GovToken, selectedWallet } from '../../store';

export const GovVotingArea = ({prop}) => {
    const [wallet] = useRecoilState(selectedWallet);
    const [account, setAccount] = useRecoilState(accountState);
    const [gov] = useRecoilState(GovToken)

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
      
      
    //   const proposal = await contract.voting(account, prop.Index, {
    //     gasLimit: 1000000,
    //         maxFeePerGas: ethers.utils.parseUnits('10', 'gwei'),
    //         maxPriorityFeePerGas: ethers.utils.parseUnits('1', 'gwei'),
    //   })

    const getAmountVote = async () => {
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            process.env.REACT_APP_GOVERNANCE_ADDRESS,
            GovABI.abi,
            signer
        );
        const voting = await contract.getProposal(prop.Index)
        console.log('voteAmount:::',voting)
    }

    const agreeHandle = async() => {
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            process.env.REACT_APP_GOVERNANCE_ADDRESS,
            GovABI.abi,
            signer
        );
        const voting = await contract.voting(account, prop.Index, true)
        getAmountVote()
    }

    const oppositHandle = async() => {
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            process.env.REACT_APP_GOVERNANCE_ADDRESS,
            GovABI.abi,
            signer
        );
        const voting = await contract.voting(account, prop.Index, false)
        getAmountVote()
    }
    

    return <>
        <VotingWrap>

            {/* agree */}
            <VotingBox margin="40px 0 47px 1px" onClick={agreeHandle}>
                <VotingHeadBox>
                    <VotingP fontSize="20px" color="#333" fontWeight="700">찬성</VotingP>
                </VotingHeadBox>
                <VotingTopHead>
                    <Span fontSize="14px" fontWeight="400" color="#999">0 vASD</Span>
                    <VotingP fontSize="14px" fontWeight="700" color="#6ad0ba">1%</VotingP>
                </VotingTopHead>
                <VotingPerBox>
                    <VotingPercentage width={`1`} color="#6ad0ba"/>
                </VotingPerBox>
            </VotingBox>

            {/* opposition */}
            <VotingBox margin="40px 0 47px 29px" onClick={oppositHandle} >
                <VotingHeadBox>
                    <VotingP fontSize="20px" color="#333" fontWeight="700">반대</VotingP>
                </VotingHeadBox>
                <VotingTopHead>
                    <Span fontSize="14px" fontWeight="400" color="#999">0 vASD</Span>
                    <VotingP fontSize="14px" fontWeight="700" color="#e65c5c">10%</VotingP>
                </VotingTopHead>
                <VotingPerBox>
                    <VotingPercentage width={`10`} color="#e65c5c"/>
                </VotingPerBox>
            </VotingBox>

            
        </VotingWrap>
    </>
}