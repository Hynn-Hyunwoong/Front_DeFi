import { TopicDefine,TopicTokenState,TopicWrite } from "./index"
import {WritePreviewWrap, BackspaceWrap} from "../../components"

export const TopicWrap = () => {
    return (
    <>
        <WritePreviewWrap>
            <div>👈Back</div>
            <BackspaceWrap />
            <TopicDefine /> 
            <TopicTokenState />
            <TopicWrite />
        </WritePreviewWrap>
    </>
    )
}