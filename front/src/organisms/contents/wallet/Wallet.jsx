import { useRecoilState } from "recoil";
import { popupState, loadingState } from "../../store";
import { Wrap, Top, Xbutton, Bottom, Notice } from "./styled";
import { Loader, Metamask, TrustWallet, WalletConnect } from "../../components";
import { useEffect } from "react";

export const Wallet = () => {
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const [popup, setPopup] = useRecoilState(popupState);
  const closePopup = () => {
    setPopup(false);
  };

  return (
    <Wrap>
      <Top>
        <h2>지갑 연결</h2>
        <Xbutton onClick={closePopup} />
      </Top>
      <Bottom>
        <Metamask />
        <TrustWallet />
        <WalletConnect />
        <Notice>
          ✩ 위 지갑 중 하나로 연결하여 시작하세요. 개인키 또는 시드 문구를
          안전하게 저장해야 합니다. 절대로 누구와도 공유하지 마세요.
        </Notice>
      </Bottom>
    </Wrap>
  );
};
