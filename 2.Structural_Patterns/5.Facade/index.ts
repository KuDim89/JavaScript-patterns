/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 2.Structural_Patterns/5.Facade/index.ts
 */

import {Credit} from "./facade";

function clientCode(credit: Credit) {
  console.log(credit.applyFor(99));
}

const credit = new Credit('John', 1997);
clientCode(credit);