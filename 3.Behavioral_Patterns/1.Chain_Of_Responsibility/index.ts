/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 3.Behavioral_Patterns/1.Chain_Of_Responsibility/index.ts
 */
import { Master, Paypal, Visa } from './chain-of-responsibiity';


const master = new Master(100);
const visa = new Visa(200);
const paypal = new Paypal(300);

master.setNext(visa).setNext(paypal);

master.pay(250);
master.show();



