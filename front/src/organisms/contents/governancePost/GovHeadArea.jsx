import {PostHeadArea, HeadArea, HeadTitle, Span, HeadAsdArea, HeadVotingDate} from "./style";
import { ethers } from 'ethers';
import { useRecoilState } from "recoil";
import {balanceState} from "../../store"

export const GovHeadArea = () => {


    return <>
        <PostHeadArea>
            <HeadArea>
                <HeadTitle>
                    <Span lineHeight="30px" fontSize="22px" fontWeight="700" color="#333" vertical="bottom">
                    KAI 토큰 레벨 (B) 유지
                    </Span>
                    <Span color="#f5c600" borderColor="#f5c600" lineHeight="30px" padding="3px 12px 3px 13px" height="28px" radius="3px"
                    border="1px solid #f5c600" margin="0 0 0 10px" fontSize="12px">
                        예정
                    </Span>
                </HeadTitle>
                <HeadVotingDate>투표 기간 | <Span margin="5px">1997.05.26</Span></HeadVotingDate>
            </HeadArea>
            <HeadAsdArea>
                <Span display="block" fontSize="12px" color="#999" margin="0 0 5px 0">내가 보유한 vASD</Span>
                <Span display="block" fontSize="16px" fontWeight="700" color="#e66d16">0 vASD</Span>    
            </HeadAsdArea>
        </PostHeadArea>        
    </>
}