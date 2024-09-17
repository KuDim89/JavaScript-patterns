export interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

export interface Aggregate {
  createIterator(): Iterator<number>
}