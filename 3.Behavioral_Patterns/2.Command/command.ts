import { Command } from './types';


export class Calculator {
  private value: number;
  private history: Command[];

  constructor() {
    this.value = 0
    this.history = []
  }

  public executeCommand(command: Command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  public undo() {
    const command = this.history.pop();

    if(command) {
      this.value = command.undo(this.value);
    }
  }

  public getValue() {
    console.log(`Calculator value - ${this.value}`);
  }
}

export class AddCommand implements Command {
  private readonly valueToAdd:  number;

  constructor(valueToAdd: number) {
    this.valueToAdd = valueToAdd;
  }

  public execute(currentValue: number): number {
    return currentValue + this.valueToAdd;
  }

  public undo(currentValue: number) {
    return currentValue - this.valueToAdd
  }
}

export class MultiplyCommand implements Command {
  private readonly valueToMultiply:  number;

  constructor(valueToMultiply: number) {
    this.valueToMultiply = valueToMultiply
  }

  public execute(currentValue: number): number {
    return currentValue * this.valueToMultiply;
  }

  public undo(currentValue: number): number {
    return currentValue / this.valueToMultiply;
  }
}

export class AddThenMultiplyCommand implements Command {
  private readonly addCommand:  Command;
  private readonly multiplyCommand:  Command;

  constructor(valueToAdd: number, valueToMultiply: number) {
    this.addCommand = new AddCommand(valueToAdd);
    this.multiplyCommand = new MultiplyCommand(valueToMultiply);
  }

  public execute(currentValue: number): number {
    const newValue = this.addCommand.execute(currentValue);
    return this.multiplyCommand.execute(newValue);
  }

  public undo(currentValue: number): number {
    const newValue = this.multiplyCommand.undo(currentValue);
    return this.addCommand.undo(newValue);
  }
}




