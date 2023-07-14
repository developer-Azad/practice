export enum CurrencyType {
  NGN = 'NGN',
  EUR = 'EUR',
  USD = 'USD',
  GBP = 'GBP',
}

export interface CurrencyDataModel {
  name: CurrencyType;
  isDefault?: boolean;
  desc: string;
  id: string;
  balance: number;
}
