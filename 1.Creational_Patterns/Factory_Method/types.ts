export type CurrenciesType = 'usd' | 'uan';

export enum Currencies {
  usd = "USD",
  uan = "UAN",
}

export interface Currency {
  currencyName(): string;
}