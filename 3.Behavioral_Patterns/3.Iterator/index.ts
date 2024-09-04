/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 3.Behavioral_Patterns/3.Iterator/index.ts
 */

import { Aggregate } from './types';
import { ConcreteAggregate } from './iterator';


(() => {
  const aggregator: Aggregate = new ConcreteAggregate([10, -9, 20, 17]);
  const iterator = aggregator.createIterator();

  while (iterator.hasNext()) {
    console.log(iterator.next())
  }
})()
