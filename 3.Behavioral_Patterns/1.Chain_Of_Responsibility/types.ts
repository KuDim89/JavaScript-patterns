export interface Account {
  pay(orderPrice: number): void;
  canPay(amount: number): boolean;
  setNext(account: Account): Account;
  show():void;
}