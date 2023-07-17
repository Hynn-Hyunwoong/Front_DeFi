import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const loginState = atom({
  key: 'isLoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const accountState = atom({
  key: 'accountState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const networkState = atom({
  key: 'networkState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const loadingState = atom({
  key: 'loadingState',
  default: false,
});

export const popupState = atom({
  key: 'popupState',
  default: false,
});

export const providerState = atom({
  key: 'providerState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const selectedWallet = atom({
  key: 'selectedWalletState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const metamaskLoginState = atom({
  key: 'metamaskLoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const trustwalletLoginState = atom({
  key: 'trustwalletLoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const walletconnectLoginState = atom({
  key: 'walletconnectLoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// 스왑창
export const tokenFromListPopupState = atom({
  key: 'tokenFromListPopupState',
  default: false,
});
export const tokenToListPopupState = atom({
  key: 'tokenToListPopupState',
  default: false,
});
export const FromTokenState = atom({
  key: 'FromToken',
  default: 'init',
});
export const ToTokenState = atom({
  key: 'ToToken',
  default: 'init',
});

export const balanceState = atom({
  key: 'balanceState',
  default: { ETH: 0, USDT: 0, ARB: 0, ASD: 0, vASD: 0 },
});

export const LPbalanceState = atom({
  key: 'LPbalanceState',
  default: { LPETH: 0, LPUSDT: 0, LPARB: 0, VASD: 0 },
});

export const GovToken = atom({
  key: 'GovToken',
  default: { vASD: 0 },
});

export const listState = atom({
  key: 'listState',
  default: null,
});

export const proposalList = atom({
  key: "proposalList",
  default: []
})

export const dropboxState = atom({
  key: 'dropboxState',
  default: false,
});

export const optionTermsState = atom({
  key: 'stakingTerms',
  default: 4,
});
export const optionTimesState = atom({
  key: 'stakingTimes',
  default: 1,
});

export const stakingPopup = atom({
  key: 'stakingPopup',
  default: false,
});

export const stakingStep = atom({
  key: 'stakingStep',
  default: '',
});

export const searchKeyword = atom({
  key: 'searchKeyword',
  default: '',
});

export const stakingValueState = atom({
  key: 'stakingValueState',
  default: 0,
});

// 스왑 토큰 => 여기서 저장되면 예치 버튼 클릭시 자동으로 토큰 설정이 됨
export const poolToken1State = atom({
  key: 'poolToken1State',
  default: null,
});
export const poolToken2State = atom({
  key: 'poolToken2State',
  default: null,
});

// 스왑 어마운트
export const swapFromAmountState = atom({
  key: 'fromAmount',
  default: '0',
});
export const swapToAmountState = atom({
  key: 'toAmount',
  default: '0',
});

// 스왑 후 로그?
export const transactionState = atom({
  key: 'transaction',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 다른 토큰들 가격
export const tokenPricesState = atom({
  key: 'tokenPrices',
  default: {
    ETH: 0,
    USDT: 0,
    ARB: 0,
    ASD: 1,
    init: '토큰을 선택하세요',
  },
});
export const transactionMessageState = atom({
  key: 'transactionMessage',
  default: '',
});

// 엘피토큰 수량
export const LPtokenState = atom({
  key: 'LPtokenState',
  default: {},
});
// 스테이킹 팝업에서 선택한 엘피토큰 종류
export const selectedLPTokenState = atom({
  key: 'selectedLPTokenState',
  default: null,
});
// 언스테이킹 팝업에서 선택한 엘피토큰 종류
export const selectedUnstakingLPtokenState = atom({
  key: 'selectedUnstakingLPtokenState',
  default: null,
});

export const loginRequestPendingState = atom({
  key: 'loginRequestPendingState',
  default: false,
});
