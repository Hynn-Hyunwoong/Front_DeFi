import {DetailBlock, DetailTitle, DetailWrapper, Span} from "./style";




export const GovDetailArea = ({prop}) => {

    const statusMap = {
        "canceled" : "취소",
        "progress" : "진행중",
        "execute" : "통과"
    }

    return <>
        <DetailWrapper>
            <DetailTitle>상세정보</DetailTitle>
            <DetailBlock>
                <Span fontSize="14px" color="#666">투표 시작 블럭</Span>
                <div>
                    <Span fontSize="14px" color="#333">{prop.start}</Span>
                </div>
            </DetailBlock>
            <DetailBlock>
                <Span fontSize="14px" color="#666">투표 종료 블럭</Span>
                <div>
                    <Span fontSize="14px" color="#333">{prop.end}</Span>
                </div>
            </DetailBlock>
            <DetailBlock>
                <Span fontSize="14px" color="#666">글 번호</Span>
                <div>
                    <Span fontSize="14px" color="#333">{prop.Index}</Span>
                </div>
            </DetailBlock>
            <DetailBlock>
                <Span fontSize="14px" color="#666">상태</Span>
                <div>
                    <Span fontSize="14px" color="#333">{statusMap[prop.status]}</Span>
                </div>
            </DetailBlock>
        </DetailWrapper>
    </>
}