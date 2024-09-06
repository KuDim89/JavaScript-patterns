import { Person } from './mediator';


export enum Role {
  CUSTOMER = 'customer',
  PROGRAMMER = 'programmer',
  TESTER = 'tester',
}

export interface Mediator {
  notify(sender: Person, message: string):void;
}