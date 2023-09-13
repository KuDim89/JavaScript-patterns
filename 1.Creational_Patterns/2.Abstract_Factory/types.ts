export enum Currencies {
  usd = "USD",
  uan = "UAN",
}

export interface AbstractUSDCurrency {
  getBonus(): string;
  getBalance(): string;
  getBalanceWithBonus(): string;
  getBalanceInfo():string;
}

export interface AbstractUANCurrency {
  getBonus(): string;
  getBalance(): string;
  getBalanceWithBonus(): string;
  getBalanceInfo():string;
}

export interface AbstractFactory {
  createUSDWallet(amount: number): AbstractUSDCurrency;
  createUANWallet(amount: number): AbstractUANCurrency;
}