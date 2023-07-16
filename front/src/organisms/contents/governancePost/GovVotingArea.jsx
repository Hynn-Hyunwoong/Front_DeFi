import {VotingBox, VotingFooter, VotingHeadBox, VotingP, VotingPerBox, VotingPercentage, Span, VotingTopHead, VotingWrap} from "./style";


export const GovVotingArea = () => {

    return <>
        <VotingWrap>

            {/* agree */}
            <VotingBox margin="40px 0 47px 1px">
                <VotingHeadBox>
                    <VotingP fontSize="20px" color="#333" fontWeight="700">찬성</VotingP>
                </VotingHeadBox>
                <VotingTopHead>
                    <Span fontSize="14px" fontWeight="400" color="#999">0 vASD</Span>
                    <VotingP fontSize="14px" fontWeight="700" color="#6ad0ba">90%</VotingP>
                </VotingTopHead>
                <VotingPerBox>
                    <VotingPercentage width={`90`} color="#6ad0ba"/>
                </VotingPerBox>
            </VotingBox>

            {/* opposition */}
            <VotingBox margin="40px 0 47px 29px">
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