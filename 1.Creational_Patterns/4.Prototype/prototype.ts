import {Cloneable} from "./types";

export class CarPrototype implements Cloneable {
  constructor( public model: string, public color: string, public autopilot: boolean, public price: number) {}

  clone() {
    return new CarPrototype(this.model, this.color, this.autopilot, this.price)
  }

  describe() {
    console.log(`Нou have chosen a car with the following characteristics:
      1.Model: ${this.model},
      2.Color: ${this.color},
      3.Availability of autopilot: ${this.autopilot},
      PRICE: ${this.price}
    `);
  }
}

