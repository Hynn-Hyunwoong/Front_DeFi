import styled from "styled-components"

export const PostHeadArea = styled.div`
    border-bottom: 1px solid #dee3eb;
    width: 720px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    height: 100%;
`

export const HeadTitle = styled.div`
    margin: 0 0 30px 0;
`

export const HeadVotingDate = styled.div`
    color:#666;
    padding: 0 0 11px 0;
`

export const HeadArea = styled.div`
    display: inline-block;
    width: 504px;
`

export const HeadAsdArea = styled.div`
    display: inline-block;
    max-height: 60px;
    padding: 13px 12px;
    border-radius: 4px;
    background-color: rgba(255, 150, 50, .1);
    text-align: right;
    margin: 0 0 41px 0;
`

export const Span = styled.span`
    margin: ${({margin})=>margin};
    line-height: ${({lineHeight})=>lineHeight};
    font-size: ${({fontSize})=>fontSize};
    color: ${({color})=>color};
    font-weight: ${({fontWeight})=>fontWeight};
    vertical-align: ${({vertical})=>vertical};
    border-color: ${({borderColor})=>borderColor};
    padding: ${({padding})=>padding};
    height: ${({height})=>height};
    border-radius: ${({radius})=>radius};
    border: ${({border})=>border};
    display: ${({display})=>display};
    letter-spacing: normal;
`