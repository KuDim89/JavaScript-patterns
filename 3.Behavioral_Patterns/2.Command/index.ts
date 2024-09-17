/**
 * If you want to see result in console you will need to run this command in your terminal.
 * npx ts-node 3.Behavioral_Patterns/2.Command/index.ts
 */
import { AddCommand, AddThenMultiplyCommand, Calculator, MultiplyCommand } from './command';


const calculator = new Calculator();
// calculator.executeCommand(new AddCommand(10));
// calculator.executeCommand(new MultiplyCommand(2));

calculator.executeCommand(new AddThenMultiplyCommand(10, 2));
calculator.getValue();

calculator.undo();
calculator.getValue();

