/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 1.Creational_Patterns/5.Singleton/index.ts
 */

import {Singleton} from "./singleton";

function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }
}

clientCode();