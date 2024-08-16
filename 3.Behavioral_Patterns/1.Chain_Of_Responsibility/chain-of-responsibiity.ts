import { Account } from './types';


abstract class AbstractAccount implements Account {
  protected name!: string;
  protected balance!: number;
  private incomer?: Account;

  pay(orderPrice: number): void {
    if(this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice}$ using ${this.name}`)
    } else if (this.incomer) {
      console.log(`Cannot pay using ${this.name}`);
      this.incomer.pay(orderPrice)
    } else {
      console.log(`Cannot pay using ${this.name}`);
      console.log('Unfortunately, not enough money on the cards')
    }
  }

  canPay(amount: number): boolean {
    return this.balance >= amount
  }

  setNext(account: Account): Account  {
    this.incomer = account
    return account
  }

  show():void {
    console.log(this)
  }
}

export class Master extends AbstractAccount {
  constructor(balance: number) {
    super();
    this.name = 'Master Card';
    this.balance = balance;
  }
}

export class Visa extends AbstractAccount {
  constructor(balance: number) {
    super();
    this.name = 'Visa';
    this.balance = balance;
  }
}

export class Paypal extends AbstractAccount {
  constructor(balance: number) {
    super();
    this.name = 'Paypal';
    this.balance = balance;
  }
}



