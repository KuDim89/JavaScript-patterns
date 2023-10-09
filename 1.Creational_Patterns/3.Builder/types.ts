export enum BunTypes {
  rye = 'RUE',
  wheat = 'WHEAT',
}

export enum CheeseTypes {
  cheddar = 'CHEDDAR',
  brie = 'BRIE',
  gouda = 'GOUDA',
}

export enum CutletTypes {
  beef = 'BEEF',
  chicken = 'CHICKEN',
  pork = 'PORK',
  lamb = 'LAMB',
  soybeans = 'SOYBEANS',
}

export enum EggTypes {
  fried = 'FRIED',
  boiled = 'BOILED',
}

export enum SeafoodsTypes {
  salmon = 'SALMON',
  tuna = 'TUNA',
  shrimp = 'SHRIMP',
  mussel = 'MUSSEL',
  lobster = 'LOBSTER',
  crab = 'CRAB',
}

export enum VegetablesTypes {
  pickles = 'PICKLES',
  sauerkraut = 'SAUERKRAUT',
  onion = 'ONION',
  lettuce = 'LETTUCE',
  tomato = 'TOMATO',
  pepper = 'PEPPER',
  avocado = 'AVOCADO',
  garlic = 'GARLIC',
  olives = 'OLIVES',
}

export enum SpicesType {
  salt = 'SALT',
  paprika = 'PAPRIKA',
  oregano = 'OREGANO',
  rosemary = 'ROSEMARY',
}

export enum AdditionalProductsType {
  bacon = 'BACON',
  butter = 'BUTTER',
  yogurt = 'YOGURT',
  mayonnaise = 'MAYONNAISE',
  ketchup = 'KETCHUP',
  mustard = 'MUSTARD',
}


export interface Builder {
  addBun(bunVariant: BunTypes): void;

  addCheese(cheeseVariant: CheeseTypes): void;

  addCutlet(cutletVariant: CutletTypes): void;

  addEgg(eggVariant: EggTypes): void;

  addSeafoods(seafoodsVariants: SeafoodsTypes[]): void;

  addVegetables(vegetablesVariants: VegetablesTypes[]): void;

  addSpices(spicesVariants: SpicesType[]):void;

  addBacon(): void;

  addButter():void;

  addYogurt():void;

  addMayonnaise(): void;

  addKetchup(): void;

  addMustard(): void;

  addDoubleCheese():void;
}