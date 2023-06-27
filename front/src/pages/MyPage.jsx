// import { useRecoilState } from "recoil";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { loginState, accountState, loadingState } from "../organisms/store";
import { MypageTitle, MypageTable} from "../organisms/contents/MyPage";

export const MyPage = () => {
    // const [isLogin, setIsLogin] = useRecoilState(loginState);
    // const [account, setAccount] = useRecoilState(accountState);
    // const [isLoading, setIsloading] = useRecoilState(loadingState);
    // const queryClient = useQueryClient();

    return (
        <>
            <MypageTitle />
            <MypageTable />
        </>
    )
}