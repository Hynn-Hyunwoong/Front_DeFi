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
