import styled from "styled-components"

export const VotingWrap = styled.div`
display: flex;
border-bottom: 1px solid #dee3eb;
`

export const VotingBox = styled.div`
width: 340px;
margin: ${({margin})=>margin};
padding: 28px 30px 30px;
border-radius: 3px;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
cursor: pointer;
`

export const VotingSpan = styled.span``

export const VotingP = styled.p`
font-size: ${({fontSize})=>fontSize};
color: ${({color})=>color};
font-weight: ${({fontWeight})=>fontWeight};
`

export const VotingHeadBox = styled.div`
/* display: flex;
justify-content: space-between; */
margin-bottom: 37px;
`

export const VotingFooter = styled.div``

export const VotingTopHead = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
/* -webkit-box-pack: justify; */
`

export const VotingPerBox = styled.div`
width:100%;
height:10px;
background-color: #dee3eb;
`
export const VotingPercentage = styled.div`
width: ${({width})=>width}%;
height:10px;
background-color: ${({color})=>color};
`