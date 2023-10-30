export interface ILollipopFlyweight {
  flavour: string;
  price: number;
}

export interface ILollipopFactory {
  createLollipop(flavour: string, price: number): ILollipopFlyweight;
  getLollipop(flavour: string): ILollipopFlyweight | undefined;
  getAllLollipops(): ILollipopFlyweight[];
}