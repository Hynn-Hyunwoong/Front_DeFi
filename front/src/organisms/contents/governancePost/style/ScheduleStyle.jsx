import styled from "styled-components";

export const ProgressInfo = styled.div``
export const ProgressList = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    text-align: right;
`
export const ProgressBox = styled.div``
export const ProgressTitle = styled.div`
    display: inline-block;
    vertical-align: top;
    /* margin-left: 10px; */
    font-size: 14px;
    color: #333;
`
export const ProgressIcon = styled.div``
export const ProgressDatas = styled.div`

`
export const Pdata = styled.p`
    font-size: ${({size})=>size};
    color: ${({color})=>color};
`