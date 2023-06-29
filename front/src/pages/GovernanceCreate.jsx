import { useRecoilState } from "recoil";
import { useQueryClient } from "@tanstack/react-query";
import { loginState, accountState, loadingState } from "../organisms/store";
import { Loader } from "../organisms/components";
import { WritePreviewWrap, BackspaceWrap } from "../organisms/components";
import {
  TopicDefine,
  TopicTokenState,
  TopicWrite,
} from "../organisms/contents/topicWrite";

export const GovernanceCreate = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(accountState);
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const queryClient = useQueryClient();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <WritePreviewWrap>
          <div>👈Back</div>
          <BackspaceWrap />
          <TopicDefine />
          <TopicTokenState />
          <TopicWrite />
        </WritePreviewWrap>
      )}
    </>
  );
};
