import {Component} from "./types";

export class SimpleCar implements Component {
  private readonly cost: number;
  private readonly description: string;

  constructor() {
    this.cost = 10000;
    this.description = 'Car'
  }

  public getPrice(): number {
    return this.cost
  }

  public getDescription(): string {
    return `${this.description} cost ${this.getPrice()} $`
  }
}

class Decorator implements Component {
  protected car: Component;

  constructor(car: Component) {
    this.car = car;
  }

  public getPrice(): number {
    return this.car.getPrice()
  }

  public getDescription(): string {
    return this.car.getDescription()
  }
}

export class AutopilotDecorator extends Decorator {
  public getPrice(): number {
    return super.getPrice() + 5000
  }

  public getDescription(): string {
    return `${super.getDescription()} with autopilot cost ${this.getPrice()} $`;
  }
}

export class ParktronicDecorator extends Decorator {
  public getPrice(): number {
    return super.getPrice() + 2000
  }

  public getDescription(): string {
    return `${super.getDescription()} with parktronic cost ${this.getPrice()} $`;
  }
}
