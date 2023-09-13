/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 1.Creational_Patterns/2.Abstract_Factory/index.ts
 */

import {Currencies} from "./types";
import {clientCode, PremiumUserFactory, SimpleUserFactory} from "./abstract-factory";

const simpleUserUSD = clientCode(new SimpleUserFactory(), Currencies.usd, 500);
const simpleUserUAN = clientCode(new SimpleUserFactory(), Currencies.uan, 500);
const premiumUserUSD = clientCode(new PremiumUserFactory(), Currencies.usd, 500);
const premiumUserUAN = clientCode(new PremiumUserFactory(), Currencies.uan, 500);

console.log(simpleUserUSD.getBalanceInfo());
console.log(simpleUserUAN.getBalanceInfo());
console.log(premiumUserUSD.getBalanceInfo());
console.log(premiumUserUAN.getBalanceInfo());