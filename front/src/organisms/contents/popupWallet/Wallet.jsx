import { useRecoilState } from 'recoil';
import {
  popupState,
  loadingState,
  loginState,
  trustwalletLoginState,
  walletconnectLoginState,
  metamaskLoginState,
  selectedWallet,
} from '../../store';
import { Wrap, Top, Xbutton, Bottom, Notice } from './styled';
import { Button, Metamask, TrustWallet, WalletConnect } from '../../components';

export const Wallet = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsloading] = useRecoilState(loadingState);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  // eslint-disable-next-line no-unused-vars
  const [popup, setPopup] = useRecoilState(popupState);
  // eslint-disable-next-line no-unused-vars
  const [wallet, setWallet] = useRecoilState(selectedWallet);
  // eslint-disable-next-line no-unused-vars
  const [isTrustwalletLogin, setIsTrustwalletLogin] = useRecoilState(
    trustwalletLoginState,
  );
  // eslint-disable-next-line no-unused-vars
  const [isWalletconnectLogin, setIsWalletconnectLogin] = useRecoilState(
    walletconnectLoginState,
  );
  // eslint-disable-next-line no-unused-vars
  const [isMetamaskLogin, setIsMetamaskLogin] =
    useRecoilState(metamaskLoginState);

  const closePopup = () => {
    setPopup(false);
  };

  const disconnectWallet = () => {
    setIsLogin(false);
    setPopup(false);
    setIsloading(false);
    setWallet(null);
    setIsTrustwalletLogin(false);
    setIsMetamaskLogin(false);
    setIsWalletconnectLogin(false);
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
        {isLogin && (
          <Button
            width={'100%'}
            height={'50px'}
            colors={'blue'}
            onClick={disconnectWallet}
          >
            연결해제
          </Button>
        )}
      </Bottom>
    </Wrap>
  );
};
