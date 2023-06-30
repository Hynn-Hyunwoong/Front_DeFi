import { TokenStateWrap, TokenLeftWrap, TokenRightWrap, TokenStateAlignLeft, TokenCurrentValue, TokenLine } from "../../components"

export const TopicTokenState = () => {

    return (
        <>
        <TokenStateWrap>
                    <TokenLeftWrap>
                        <TokenStateAlignLeft>
                            보유 Governance
                        </TokenStateAlignLeft>
                        <TokenCurrentValue>100 Token</TokenCurrentValue>
                    </TokenLeftWrap>
                    <TokenLine />
                    <TokenRightWrap>
                        <TokenStateAlignLeft>
                            보유 투표권
                        </TokenStateAlignLeft>
                        <TokenCurrentValue>100 Token</TokenCurrentValue>
                    </TokenRightWrap>
                </TokenStateWrap>
                </>
    )
}