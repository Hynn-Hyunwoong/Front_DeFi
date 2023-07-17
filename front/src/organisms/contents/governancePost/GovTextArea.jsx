import {TextAreaWrapper, TextContent, TextTitle} from "./style";


export const GovTextArea = ({title, body}) => {

    return <>
        <TextAreaWrapper>
            <TextTitle>{title}</TextTitle>
            <TextContent>
            {/* Context and suggestions
            <br></br>
            <br></br>
            To build the sustainable ecosystem of KLAYswap and BLUEWHALE, we suggest the token level upgrade of CLAM token from level C to level B. By acquiring higher level, CLAM holders will be rewarded with KSP and can contribute to revitalize the ecosystem of both KLAYswap and BLUEWHALE. We also believe that upgrade of token level can promote the inflow of new users to KLAYswap and BLUEWHALE.
            <br></br>
            <br></br>
            About BLUEWHALE
            <br></br>
            <br></br>
            BLUEWHALE is one of the protocols with the strongest community in the Klaytn ecosystem, and provides a variety of services that make the investment activities of cryptocurrency owners easier and more efficient. Currently, BLUEWHALE provides decentralized finance-related services such as holding asset and DeFi investment status dashboard, smart swap, etc.
            <br></br>
            <br></br>
            <br></br>
            Conclusion
            <br></br>
            <br></br>
            Currently, CLAM tokens have a significant trading volume in the Klaytn ecosystem, and raising the token level to B will attract more users to the Klayswap ecosystem due to the additional benefits of KSP. In addition, BLUEWHALE's buyback fund provides concentrated liquidity and asset classes such as owBTC, oETH, oXRP, Klay, and oUSDT, creating an efficient path in the Klaytn ecosystem, which leads to more transactions and contributes to the incineration of ksp.
            <br></br>
            <br></br>
            <br></br>
            Resources */}
            {body}
            </TextContent>
        </TextAreaWrapper>
    </>
}