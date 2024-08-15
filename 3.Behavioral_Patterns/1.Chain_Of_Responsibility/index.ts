/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 3.Behavioral_Patterns/1.Chain_Of_Responsibility/index.ts
 */
import { Handler } from './types';
import { DogHandler, MonkeyHandler, SquirrelHandler } from './chain-of-responsibiity';


function clientCode(handler: Handler) {
  const foods = ['Nut', 'Banana', 'Cup of coffee'];

  for(const food of foods) {
    console.log(`Client: Who wants a ${food}?`);
    const result = handler.handle(food);
    result ? console.log(`${result}`) : console.log(`${food} was left untouched.`)
  }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);
console.log('Chain: Monkey > Squirrel > Dog');
clientCode(monkey);

console.log('Subchain: Squirrel > Dog');
clientCode(squirrel);
