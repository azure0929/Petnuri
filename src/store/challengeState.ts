import { atom } from 'recoil';

export const bottomSheetState = atom({
  key: 'bottomSheetState',
  default: false,
});

export const loginModalState = atom({
  key: 'loginModalState',
  default: false,
});

export const kitModalState = atom({
  key: 'kitModalState',
  default: false,
});
