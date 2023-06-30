import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const loginState = atom({
  key: "isLoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const accountState = atom({
  key: "accountState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const networkState = atom({
  key: "networkState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const loadingState = atom({
  key: "loadingState",
  default: false,
});

export const popupState = atom({
  key: "popupState",
  default: false,
});

export const providerState = atom({
  key: "providerState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const selectedWallet = atom({
  key: "selectedWalletState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const metamaskLoginState = atom({
  key: "metamaskLoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const trustwalletLoginState = atom({
  key: "trustwalletLoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const walletconnectLoginState = atom({
  key: "walletconnectLoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
})