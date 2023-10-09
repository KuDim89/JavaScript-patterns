/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 1.Creational_Patterns/4.Prototype/index.ts
 */

import {CarPrototype} from "./prototype";

function clientCode() {
  console.log('Prototype')
  const prototype = new CarPrototype("Model X", 'Red', true, 75000);
  prototype.describe();

  console.log('Clone prototype')
  const clonePrototype = prototype.clone();
  clonePrototype.describe();

  console.log('Modified clonePrototype object')
  clonePrototype.color = "White";
  clonePrototype.autopilot = false;
  clonePrototype.price = 72000;
  clonePrototype.describe()
}

clientCode()