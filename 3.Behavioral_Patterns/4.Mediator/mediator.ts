import { Mediator, Role } from './types';


export class ManagerMediator implements Mediator {
  private customer: Customer;
  private programmer: Programmer;
  private tester: Tester;

  constructor(customer: Customer, programmer: Programmer, tester: Tester) {
    this.customer = customer;
    this.customer.setMediator(this);
    this.programmer = programmer;
    this.programmer.setMediator(this);
    this.tester = tester;
    this.tester.setMediator(this);
  }

  public notify(sender: Person, message: string): void {
    if (sender.role === Role.CUSTOMER) {
      console.log(`Customer says: ${message}`);
    } else if (sender.role === Role.PROGRAMMER) {
      console.log(`Programmer says: ${message}`);
    }else if (sender.role === Role.TESTER) {
      console.log(`Tester says: ${message}`);
    }
  }
}

export abstract class Person {
  protected mediator: Mediator;
  public role: string;

  protected constructor(role: string, mediator?: Mediator) {
    this.role = role;
    this.mediator = mediator!;
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}


export class Customer extends Person {
  constructor() {
    super(Role.CUSTOMER);
  }

  public send(message: string):void {
    this.mediator.notify(this, message)
  }
}

export class Programmer extends Person {
  constructor() {
    super(Role.PROGRAMMER);
  }

  public send(message: string):void {
    console.log(`Programmer says: ${message}`)
  }
}

export class Tester extends Person {
  constructor() {
    super(Role.TESTER);
  }

  public send(message: string):void {
    console.log(`Tester says: ${message}`)
  }
}



