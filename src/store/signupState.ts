import { atom } from 'recoil';

export const serviceSheetState = atom({
  key: 'serviceSheetState',
  default: false,
});

export const privacySheetState = atom({
  key: 'privacySheetState',
  default: false,
});