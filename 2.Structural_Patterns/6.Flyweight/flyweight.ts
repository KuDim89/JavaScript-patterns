import {ILollipopFlyweight, ILollipopFactory} from "./types";

class Lollipop implements ILollipopFlyweight {
  public flavour: string;
  public price: number;

  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }
}

export class LollipopFactory implements ILollipopFactory{
  private lollipops: ILollipopFlyweight[];

  constructor() {
    this.lollipops = [];
  }

  createLollipop(flavour: string, price: number) {
    let lollipop = this.getLollipop(flavour.toLowerCase());
    if (lollipop) {
      return lollipop;
    } else {
      const newLollipop  = new Lollipop(flavour.toLowerCase(), price);
      this.lollipops.push(newLollipop);
      return newLollipop;
    }
  }

  getLollipop(flavour: string): ILollipopFlyweight | undefined {
    return this.lollipops.find(lollipop => lollipop.flavour === flavour.toLowerCase());
  }

  getAllLollipops() {
    return this.lollipops
  }
}
