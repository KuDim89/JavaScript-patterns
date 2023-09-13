/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 1.Creational_Patterns/1.Factory_Method/index.ts
 */

import {Currencies} from "./types";
import {createWallet} from "./factory-method";

const UANWallet = createWallet(Currencies.uan);
console.log(UANWallet.currencyState());
UANWallet.sendMoney(100);
UANWallet.receiveMoney(100);
console.log(UANWallet.currencyInformation())

console.log('-------------Space divider------------------')

const USDWallet = createWallet(Currencies.usd, 200);
console.log(USDWallet.currencyState());
USDWallet.sendMoney(100);
USDWallet.receiveMoney(100);
console.log(USDWallet.currencyInformation())



