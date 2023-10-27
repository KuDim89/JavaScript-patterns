/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 2.Structural_Patterns/6.Flyweight/index.ts
 */

import {LollipopFactory} from "./flyweight";

function clientCode(factory: LollipopFactory) {
  const Orange = factory.createLollipop('Orange', 15);
  const Choco = factory.createLollipop('Chocolate', 12);
  const Strawberry = factory.createLollipop('Strawberry', 10);
  const Chocolate = factory.createLollipop('chocolate', 12);

  console.log('Choco and Chocolate object are the same?', Choco === Chocolate);
  console.log('Orange and Strawberry object are the same?', Orange === Strawberry);
  console.table(factory.getAllLollipops());
}

const factory = new LollipopFactory();
clientCode(factory);


