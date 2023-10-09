import {AbstractFactory, AbstractUANCurrency, AbstractUSDCurrency, Currencies} from "./types";


export class SimpleUserFactory implements AbstractFactory {

  public createUSDWallet(amount: number): AbstractUSDCurrency {
    return new SimpleUserUSDCurrency(amount);
  }

  public createUANWallet(amount: number): AbstractUANCurrency {
    return new SimpleUserUANCurrency(amount);
  }
}

export class PremiumUserFactory implements AbstractFactory {

  public createUSDWallet(amount: number): AbstractUSDCurrency {
    return new PremiumUserUSDCurrency(amount);
  }

  public createUANWallet(amount: number): AbstractUANCurrency {
    return new PremiumUserUANCurrency(amount);
  }
}

class SimpleUserUSDCurrency implements AbstractUSDCurrency {
  private amount: number;
  private bonusValue: number = 3;

  constructor(amount: number) {
    this.amount = amount;
  }

  public getBonus(): string {
    return `Currently you have bonus ${this.bonusValue} % USD as a simple user.`;
  }

  public getBalance(): string {
    return `Your deposited money without bonuses is ${this.amount} USD.`
  }

  public getBalanceWithBonus(): string {
    return `On your balance ${(this.bonusValue / 100 * this.amount) + this.amount} USD. This sum include bonus for you.`
  }

  public getBalanceInfo(): string {
    return `You have personally card in our bank. ${this.getBalanceWithBonus()} ${this.getBonus()} ${this.getBalance()}`
  }
}

class PremiumUserUSDCurrency implements AbstractUSDCurrency {
  private amount: number;
  private bonusValue: number = 5;

  constructor(amount: number) {
    this.amount = amount;
  }

  public getBonus(): string {
    return `Currently you have bonus ${this.bonusValue} % USD as a premium user`;
  }

  public getBalance(): string {
    return `Your deposited money without bonuses is ${this.amount} USD.`
  }

  public getBalanceWithBonus(): string {
    return `On your balance ${(this.bonusValue / 100 * this.amount) + this.amount} USD. This sum include bonus for you.`
  }

  public getBalanceInfo(): string {
    return `You have personally card in our bank. ${this.getBalanceWithBonus()} ${this.getBonus()} ${this.getBalance()}`
  }
}

class SimpleUserUANCurrency implements AbstractUANCurrency {
  private amount: number;
  private bonusValue: number = 8;

  constructor(amount: number) {
    this.amount = amount;
  }

  public getBonus(): string {
    return `Currently you have bonus ${this.bonusValue} % UAN as a simple user`;
  }

  public getBalance(): string {
    return `Your deposited money without bonuses is ${this.amount} UAN.`
  }

  public getBalanceWithBonus(): string {
    return `On your balance ${(this.bonusValue / 100 * this.amount) + this.amount} UAN. This sum include bonus for you.`
  }

  public getBalanceInfo(): string {
    return `You have personally card in our bank. ${this.getBalanceWithBonus()} ${this.getBonus()} ${this.getBalance()}`
  }
}

class PremiumUserUANCurrency implements AbstractUANCurrency {
  private amount: number;
  private bonusValue: number = 12;

  constructor(amount: number) {
    this.amount = amount;
  }

  public getBonus(): string {
    return `Currently you have bonus ${this.bonusValue} % UAN as a premium user`;
  }

  public getBalance(): string {
    return `Your deposited money without bonuses is ${this.amount} UAN.`
  }

  public getBalanceWithBonus(): string {
    return `On your balance ${(this.bonusValue / 100 * this.amount) + this.amount} UAN. This sum include bonus for you.`
  }

  public getBalanceInfo(): string {
    return `You have personally card in our bank. ${this.getBalanceWithBonus()} ${this.getBonus()} ${this.getBalance()}`
  }
}

export function clientCode(factory: AbstractFactory, type: Currencies, amount: number = 0) {
  if (!type) {
    throw new Error('You need to add type of currency as a parameter!');
  }

  switch (type) {
    case Currencies.uan:
      return factory.createUANWallet(amount);
    case Currencies.usd:
      return factory.createUSDWallet(amount);
  }
}
