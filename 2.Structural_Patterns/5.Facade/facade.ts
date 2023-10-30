import {IBank, ICredit, ICreditHistory, IPerson} from "./types";

class Bank implements IBank {
  verify(amount: number):boolean {
    return amount > 0 && amount < 999
  }
}

class Person implements IPerson{
  verify(year: number):number {
    return new Date().getFullYear() - year
  }
}

export class CreditHistory implements ICreditHistory {
 protected unreliablePersons: string[] = ['mark', 'emma', 'den'];

 check(name: string): boolean {
   return !this.unreliablePersons.includes(name.toLowerCase());
 }
}

export class Credit implements ICredit {
  protected name: string;
  protected birthYear: number;

  constructor(name: string, birthYear: number) {
    this.name = name;
    this.birthYear = birthYear;
  }

  public applyFor(amount:number): string {
    const isApprovedAmount = new Bank().verify(amount)
    const isGoodCreditHistory  = new CreditHistory().check(this.name)
    const checkPersonAge = new Person().verify(this.birthYear);
    const bankResult = isApprovedAmount &&  isGoodCreditHistory && checkPersonAge > 18 ? 'approved' : 'denied';
    const isApprovedPerson = checkPersonAge > 18 ? 'has reached' : 'has not reached';
    const creditHistory = isGoodCreditHistory  ? 'good' : 'poor'

    return `Bank ${isApprovedAmount ? bankResult : `find not correct amount, ${bankResult}`} request for the ${amount} $ of credit, ${this.name} ${isApprovedPerson} the age of majority and has ${checkPersonAge} y.o. ${this.name} has ${checkPersonAge < 18  ? 'not' : creditHistory} credit history too.`;
  }
}