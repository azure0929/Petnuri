import { atom } from 'recoil';

export const bottomSheetState = atom({
  key: 'bottomSheetState',
  default: false,
});

export const BSTypeState = atom({
  key: 'bottomSheetTypeState',
  default: 'DeliveryBS', 
});

export const deliveryDataState = atom({
  key: 'deliveryDataState',
  default: {
    name: '',
    phone: '',
    roadAddress: '',
    address: '',
    zipCode: '',
    isSelected: false,
  },
});

export const deliveryListState = atom<DeliveryAddress[]>({
  key: 'deliveryListState',
  default: [],
});

export const loginModalState = atom({
  key: 'loginModalState',
  default: false,
});

export const kitModalState = atom({
  key: 'kitModalState',
  default: false,
});
