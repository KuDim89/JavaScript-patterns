/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 2.Structural_Patterns/4.Decorator/index.ts
 */

import {Component} from "./types";
import {AutopilotDecorator, ParktronicDecorator, SimpleCar} from "./decorator";

function clientCode(component: Component) {
  console.log(`RESULT: ${component.getDescription()}`);
}

const simple = new SimpleCar();
const decorator1 = new AutopilotDecorator(simple);
const decorator2 = new ParktronicDecorator(decorator1);

console.log('Client: simple component:');
clientCode(simple);
console.log('Client: simple component with autopilot:');
clientCode(decorator1);
console.log('Client: simple component with autopilot and parktronic');
clientCode(decorator2);
