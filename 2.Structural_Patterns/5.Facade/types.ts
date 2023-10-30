export interface IBank {
  verify(amount: number): boolean;
}

export interface IPerson {
  verify(year: number): number;
}

export interface ICreditHistory {
  check(name: string): boolean;
}

export interface ICredit {
  applyFor(amount: number): string;
}