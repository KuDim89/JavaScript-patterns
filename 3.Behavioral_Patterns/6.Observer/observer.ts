import { Observer, Subject } from './types';


export class User implements Observer {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(subject: Subject):void {
    console.log(`${this.name}, we have new article for you!`)
  }
}

export class Blog implements Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer):void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer):void {
    const removeIndex = this.observers.findIndex(obs => observer === obs);

    if(removeIndex) {
      this.observers.splice(removeIndex, 1)
    }
  }

  notifyObservers() {
    this.observers.forEach(obs => obs.update(this))
  }
}