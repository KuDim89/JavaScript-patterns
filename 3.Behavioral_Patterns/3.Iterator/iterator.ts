import { Aggregate, Iterator } from './types';


class ConcreteIterator implements Iterator<number> {
  private index = 0;
  private readonly collection: number[] = [];

  public constructor(collection: number[]) {
    this.collection = collection;
  }

  next(): any {
      return this.collection[this.index++];
  }

  hasNext(): boolean {
    return this.index < this.collection.length
  }
}

export class ConcreteAggregate implements Aggregate {
  private readonly collection: number[] = [];

  public constructor(collection: number[]) {
    this.collection = collection;
  }

  createIterator(): Iterator<number> {
    return new ConcreteIterator(this.collection)
  }
}
