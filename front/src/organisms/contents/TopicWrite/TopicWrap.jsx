import { TopicDefine,TopicTokenState,TopicWrite } from "./index"
import {WritePreviewWrap} from "../../components/WriteTopic/Writepreview"

export const TopicWrap = () => {
    return (
        <>
        <WritePreviewWrap>
            <TopicDefine /> 
            <TopicTokenState />
            <TopicWrite />
            </WritePreviewWrap>
        </>
    )
}