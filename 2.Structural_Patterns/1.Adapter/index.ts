/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 2.Structural_Patterns/1.Adapter/index.ts
 */

import {Electric} from "./types";
import {DieselCar, ElectricCar, ServiceAdapter} from "./adapter";

/**
 * The client code supports all classes that follow the Target interface.
 */
function clientCode(target:Electric) {
  console.log(target.useElectricEngine());
}

console.log('These races are only for cars with an electric engine that do not have a negative impact on the environment.');
const target = new ElectricCar();
clientCode(target);

console.log('');

const adaptee = new DieselCar();
console.log('Cars with diesel engines are not suitable for this rally. Change your car or modify it.');
console.log(`Adaptee: ${adaptee.useDieselEngine()}`);

console.log('');

console.log('You can work with it via the Adapter:');
const adapter = new ServiceAdapter(adaptee);
clientCode(adapter);