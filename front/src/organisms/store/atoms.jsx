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

export const tokenListPopupState = atom({
  key: 'tokenListPopupState',
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
  default: { ETH: '0', USDT: '0', ARB: '0', ASD: '0' },
});

export const listState = atom({
  key: 'listState',
  default: null,
});

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
