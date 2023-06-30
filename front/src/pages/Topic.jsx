import { useRecoilState } from "recoil";
import { loadingState } from "../organisms/store";
import {TopicWrap} from "../organisms/contents/TopicWrite";
import {Loader} from "../organisms/components"

export const Topic = () => {
    const [isLoading] = useRecoilState(loadingState);

    return (
        <>
            {isLoading ? (<Loader />) : (<TopicWrap />)}
        </>
    )
}