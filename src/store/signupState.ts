import { atom } from 'recoil';

export const serviceSheetState = atom({
  key: 'serviceSheetState',
  default: false,
});

export const privacySheetState = atom({
  key: 'privacySheetState',
  default: false,
});

export const nicknameState = atom({
  key: 'nicknameState',
  default: '',
});

export const selectedPetState = atom<PetType>({
  key: 'selectedPetState',
  default: '',
});

export const selectedMaleState = atom({
  key: 'selectedMaleState',
  default: '',
});

export const ageState = atom<number | null>({
  key: 'ageState',
  default: null,
});

export const petTypeState = atom({
  key: 'petTypeState',
  default: '',
});