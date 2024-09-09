import { Memento } from './types';


export class TextArea {
  private state: string;

  constructor(state?: string) {
    this.state = state || 'Initial value';
    console.log(`Originator: My initial state - ${state}`)
  }

  public addText(value: string) {
    console.log(`Originator: Changing state value...`);
    this.state = value;
    console.log(`Originator: state has changed to - ${this.state}`)
  }

  public save(): Memento {
    return new ConcreteMemento(this.state);
  }

  public restore(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Originator: My state has changed to - ${this.state}`)
  }
}

class ConcreteMemento implements Memento {
  private readonly state: string;
  private readonly date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace('T', '');
  }

  public getState(): string {
    return this.state;
  }

  public getName(): string {
    return `${this.date} : ${this.state.substring(0, 9)}...`;
  }

  public getDate(): string {
    return this.date;
  }
}

export class Editor {
  private  mementos: Memento[] = [];
  private originator: TextArea;

  constructor(originator: TextArea) {
    this.originator = originator;
  }

  public backup():void {
    console.log('Caretaker: Saving Originator\'s state...');
    this.mementos.push(this.originator.save())
  }

  public undo():void {
    if(!this.mementos.length) {
      return;
    }

    const memento = this.mementos.pop()!;
    console.log(`Caretaker: Restoring state to: ${memento.getName()}`)
    this.originator.restore(memento)
  }

  public showHistory():void {
    console.log('Caretaker: Here\'s the list of mementos:');

    for(const memento of this.mementos) {
      console.log(memento.getName())
    }
  }
}

