import { useParams } from "react-router-dom"
import { useRecoilState } from "recoil";
import {listState} from "../organisms/store";
import styled from "styled-components";
import {GovHeadArea, GovVotingArea, GovTransactionBox, GovTextArea, GovDetailArea, GovSchedule} from "../organisms/contents/governancePost";

export const GovPostWrapper = styled.div`
    width: 720px;
    margin: 0 auto;
    background: #fff;
    padding: 30px 40px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05), 0 40px 20px -30px rgba(102,111,128,.1);
`

export const Wrapper = styled.div`
    width: 1200px;
    margin : 0 auto;
    padding: 40px 0;
`

export const GovernancePost = () => {
    const {id} = useParams();
    const [list] = useRecoilState(listState);
    console.log("list::",list);
    return <>
    <Wrapper>
        <GovPostWrapper>
            <GovHeadArea/>
            <GovVotingArea/>
            <GovTransactionBox/>
            <GovTextArea/>
            <GovDetailArea/>
            <GovSchedule/>
        </GovPostWrapper>
    </Wrapper>
    </>
}