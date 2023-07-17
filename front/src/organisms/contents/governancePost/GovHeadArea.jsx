import {PostHeadArea, HeadArea, HeadTitle, Span, HeadAsdArea, HeadVotingDate} from "./style";
import { ethers } from 'ethers';
import { useRecoilState } from "recoil";
import {balanceState, GovToken, selectedWallet} from "../../store"
import { useState } from "react";

export const GovHeadArea = ({title, transaction}) => {
    const [govBalance] = useRecoilState(GovToken)
    const [wallet, setWallet] = useRecoilState(selectedWallet);
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
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
    ;(async ()=>{
        const tx = await provider.getTransaction(transaction)
        const block = await provider.getBlock(tx.blockNumber)
        const timeStamp = block.timestamp
        setStart(new Date(timeStamp * 1000).toLocaleDateString())
        setEnd(new Date((timeStamp + 86400*3) * 1000).toLocaleDateString())
    })()

    return <>
        <PostHeadArea>
            <HeadArea>
                <HeadTitle>
                    <Span lineHeight="30px" fontSize="22px" fontWeight="700" color="#333" vertical="bottom">
                    {title}
                    </Span>
                    <Span color="#f5c600" borderColor="#f5c600" lineHeight="30px" padding="3px 12px 3px 13px" height="28px" radius="3px"
                    border="1px solid #f5c600" margin="0 0 0 10px" fontSize="12px">
                        예정
                    </Span>
                </HeadTitle>
                <HeadVotingDate>투표 기간 | <Span margin="5px">{start} ~ {end}</Span></HeadVotingDate>
            </HeadArea>
            <HeadAsdArea>
                <Span display="block" fontSize="12px" color="#999" margin="0 0 5px 0">내가 보유한 vASD</Span>
                <Span display="block" fontSize="16px" fontWeight="700" color="#e66d16">{parseInt(govBalance)} vASD</Span>    
            </HeadAsdArea>
        </PostHeadArea>        
    </>
}