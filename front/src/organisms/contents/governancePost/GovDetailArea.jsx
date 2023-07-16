import {DetailBlock, DetailTitle, DetailWrapper, Span} from "./style";




export const GovDetailArea = () => {

    return <>
        <DetailWrapper>
            <DetailTitle>상세정보</DetailTitle>
            <DetailBlock>
                <Span fontSize="14px" color="#666">투표 시작 블럭</Span>
                <div>
                    <Span fontSize="14px" color="#333">127111534436</Span>
                </div>
            </DetailBlock>
            <DetailBlock>
                <Span fontSize="14px" color="#666">투표 종료 블럭</Span>
                <div>
                    <Span fontSize="14px" color="#333">127534436</Span>
                </div>
            </DetailBlock>
            <DetailBlock>
                <Span fontSize="14px" color="#666">글 번호</Span>
                <div>
                    <Span fontSize="14px" color="#333">127534436</Span>
                </div>
            </DetailBlock>
            <DetailBlock>
                <Span fontSize="14px" color="#666">상태</Span>
                <div>
                    <Span fontSize="14px" color="#333">127534436</Span>
                </div>
            </DetailBlock>
        </DetailWrapper>
    </>
}