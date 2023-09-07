/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 1.Creational_Patterns/Factory_Method/factory-method.ts
 */
import {Currencies, Currency} from "./types";


export abstract class BaseWallet {
  private walletBalance: number;

  constructor(initialBalance: number = 0) {
    this.walletBalance = initialBalance;
  }

  public abstract currencyStateFactory(): Currency;

  private getCurrencyData(): Currency {
    return this.currencyStateFactory();
  }

  public getWalletBalance(): number {
    return this.walletBalance;
  }

  public currencyState(): string {
    return `You have a ${this.walletBalance} ${this.getCurrencyData().currencyName()} on your wallet balance`;
  }

  public sendMoney(amount: number):void {
    if (amount < 0 ) {
      throw new Error('Please use only positive value for your currency!')
    }

    this.walletBalance += amount;
    console.log(`Put ${amount} ${this.getCurrencyData().currencyName()} on the account. ${this.currencyState()}`);
  }

  public receiveMoney(amount: number):void {
    if (amount < 0 ) {
      throw new Error('Please use only positive value for your currency!')
    }
    this.walletBalance -= amount
    console.log(`Withdrawn ${amount} ${this.getCurrencyData().currencyName()} from the account. ${this.currencyState()}`);
  }

  public currencyInformation(): string {
    if (this.getWalletBalance() < 0) {
      return `
      You don't have enough money on your balance. Your current balance is ${this.walletBalance} ${this.getCurrencyData().currencyName()}.
      Please put some money in ${this.getCurrencyData().currencyName()} currency for continue working with your wallet.
      `
    } else if (this.getWalletBalance() < 10) {
      return `You have a very small account balance.
      Please put some money in ${this.getCurrencyData().currencyName()} currency for continue working with your wallet.
      `
    } else {
      return `You have enough money on your balance for continue working with your wallet. Your current balance is ${this.walletBalance} ${this.getCurrencyData().currencyName()}.`
    }
  }
}

export class USDWallet extends BaseWallet {
  public currencyStateFactory(): Currency {
    return new USDItem();
  }
}

export class UANWallet extends BaseWallet {
  public currencyStateFactory(): Currency {
    return new UANItem();
  }
}

class USDItem implements Currency {
  public currencyName(): string {
    return `United States Dollar`
  }
}

class UANItem implements Currency {
  public currencyName(): string {
    return `Ukrainian hryvnia`
  }
}

export function createWallet(type: Currencies, amount: number = 0) {

  if (!type) {
    throw new Error('You need to add type of currency as a parameter!');
  }

  switch (type) {
    case Currencies.uan:
      return new UANWallet(amount);
    case Currencies.usd:
      return new USDWallet(amount);
  }
}
