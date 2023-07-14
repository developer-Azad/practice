import { CurrencyDataModel, CurrencyType } from 'models';
import { nanoid } from 'nanoid';

export const currencyData: CurrencyDataModel[] = [
  {
    name: CurrencyType.NGN,
    desc: 'Naira',
    id: nanoid(12),
    balance: 0,
    isDefault: true,
  },
  {
    name: CurrencyType.EUR,
    desc: 'Euro',
    id: nanoid(12),
    balance: 0,
  },
  {
    name: CurrencyType.GBP,
    desc: 'Pound Sterling',
    id: nanoid(12),
    balance: 0,
  },
  {
    name: CurrencyType.USD,
    desc: 'US Dollar',
    id: nanoid(12),
    balance: 0,
  },
];
