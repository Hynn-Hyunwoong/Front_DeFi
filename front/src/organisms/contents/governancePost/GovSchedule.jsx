import { useState } from "react";
import { useRecoilState } from "recoil";
import { proposalList } from "../../store";
import {Pdata, ProgressBox, ProgressDatas, ProgressIcon, ProgressInfo, ProgressList, ProgressTitle} from "./style";
import {balanceState, GovToken, selectedWallet} from "../../store"
import { ethers } from 'ethers';


export const GovSchedule = ({prop}) => {
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
        const tx = await provider.getTransaction(prop.transaction)
        const block = await provider.getBlock(tx.blockNumber)
        const timeStamp = block.timestamp
        setStart(new Date(timeStamp * 1000).toLocaleString())
        setEnd(new Date((timeStamp + 86400*3) * 1000).toLocaleString())
    })()
    return <>
        <ProgressInfo>
            <ProgressList>
                <ProgressBox>
                    <ProgressIcon></ProgressIcon>
                    <ProgressTitle>의제 등록 일시</ProgressTitle>
                </ProgressBox>
                <ProgressDatas>
                    <Pdata size="14px" color="#333">{start}</Pdata>
                    <Pdata size="12px" color="#333">{prop.transaction}</Pdata>
                </ProgressDatas>
            </ProgressList>

            <ProgressList>
                <ProgressBox>
                    <ProgressIcon></ProgressIcon>
                    <ProgressTitle>투표시작(3일)</ProgressTitle>
                </ProgressBox>
                <ProgressDatas>
                    <Pdata size="14px" color="#333">{start}</Pdata>
                    <Pdata size="12px" color="#333">-</Pdata>
                </ProgressDatas>
            </ProgressList>

            <ProgressList>
                <ProgressBox>
                    <ProgressIcon></ProgressIcon>
                    <ProgressTitle>1차 가결 판단</ProgressTitle>
                </ProgressBox>
                <ProgressDatas>
                    <Pdata size="14px" color="#333">-</Pdata>
                    <Pdata size="12px" color="#333">-</Pdata>
                </ProgressDatas>
            </ProgressList>

            <ProgressList>
                <ProgressBox>
                    <ProgressIcon></ProgressIcon>
                    <ProgressTitle>TimeLock</ProgressTitle>
                </ProgressBox>
                <ProgressDatas>
                    <Pdata size="14px" color="#333">-</Pdata>
                    <Pdata size="12px" color="#333">-</Pdata>
                </ProgressDatas>
            </ProgressList>

            <ProgressList>
                <ProgressBox>
                    <ProgressIcon></ProgressIcon>
                    <ProgressTitle>최종 반영</ProgressTitle>
                </ProgressBox>
                <ProgressDatas>
                    <Pdata size="14px" color="#333">-</Pdata>
                    <Pdata size="12px" color="#333">-</Pdata>
                </ProgressDatas>
            </ProgressList>

        </ProgressInfo>
    </>
}