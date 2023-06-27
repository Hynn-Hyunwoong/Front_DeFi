import { useRecoilState } from "recoil";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { loginState, accountState, loadingState } from "../organisms/store";
import {TopicWrap} from "../organisms/contents/TopicWrite";
import {Button, Loader} from "../organisms/components"

export const Topic = () => {
    const [isLogin, setIsLogin] = useRecoilState(loginState);
    const [account, setAccount] = useRecoilState(accountState);
    const [isLoading, setIsloading] = useRecoilState(loadingState);
    const queryClient = useQueryClient();


    return (
        <>
            {isLoading ? (<Loader />) : (<TopicWrap />)}
        </>
    )
}