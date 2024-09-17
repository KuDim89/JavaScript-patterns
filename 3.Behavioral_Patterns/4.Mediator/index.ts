/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 3.Behavioral_Patterns/4.Mediator/index.ts
 */

import { Customer, ManagerMediator, Programmer, Tester } from './mediator';


const customer = new Customer();
const programmer = new Programmer();
const tester = new Tester();

const manager = new ManagerMediator(customer, programmer, tester);


customer.send('I need a feature!');
programmer.send('I can implemented this feature.');
tester.send('I can test everything!')