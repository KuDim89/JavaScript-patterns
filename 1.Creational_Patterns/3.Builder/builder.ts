import {
  AdditionalProductsType,
  Builder,
  BunTypes,
  CheeseTypes,
  CutletTypes,
  EggTypes,
  SeafoodsTypes,
  SpicesType,
  VegetablesTypes
} from "./types";

class Product {
  public ingredients: string[] = [];

  public ingredientsList(): void {
    const formattedList = this.ingredients.map((ingredient, index) => `${index + 1}-${ingredient}.`)
    console.log(`Burger ingredients:\n${formattedList.join('\n')}`);
    console.log('');
  }
}


export class  BurgerBuilder implements Builder {
  private product!: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  public addBun(bunVariant:BunTypes): void {
    this.product.ingredients.push(bunVariant);
  }

  public addCheese(cheeseVariant: CheeseTypes): void {
    this.product.ingredients.push(cheeseVariant);
  }

  addCutlet(cutletVariant: CutletTypes): void {
    this.product.ingredients.push(cutletVariant);
  }

  addEgg(eggVariant: EggTypes): void {
    this.product.ingredients.push(eggVariant);
  }

  addSeafoods(seafoodsVariants: SeafoodsTypes[]): void {
    seafoodsVariants.forEach(seafood => this.product.ingredients.push(seafood));
  }

  addVegetables(vegetablesVariants: VegetablesTypes[]): void {
    vegetablesVariants.forEach(vegetable => this.product.ingredients.push(vegetable));
  }

  addSpices(spicesVariants: SpicesType[]): void {
    spicesVariants.forEach(spice => this.product.ingredients.push(spice));
  }

  addBacon(): void {
    this.product.ingredients.push(AdditionalProductsType.bacon);
  }

  addButter():void {
    this.product.ingredients.push(AdditionalProductsType.butter);
  }

  addYogurt():void {
    this.product.ingredients.push(AdditionalProductsType.yogurt);
  }

  addMayonnaise(): void {
    this.product.ingredients.push(AdditionalProductsType.mayonnaise);
  }

  addKetchup(): void {
    this.product.ingredients.push(AdditionalProductsType.ketchup);
  }

  addMustard(): void {
    this.product.ingredients.push(AdditionalProductsType.mustard);
  }

  addDoubleCheese():void {
    const typesOfCheese: string[] = Object.keys(CheeseTypes).map(item => item.toUpperCase());
    const cheeseType = typesOfCheese.filter(item => this.product.ingredients.includes(item)).toString();

    if(cheeseType) {
      this.product.ingredients[this.product.ingredients.indexOf(cheeseType)] = `${cheeseType} * 2`
    } else {
      this.product.ingredients.push(`${CheeseTypes.cheddar} * 2`)
    }
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

export class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildBurgerMax(): void {
    this.builder.addBun(BunTypes.wheat);
    this.builder.addCutlet(CutletTypes.pork);
    this.builder.addCheese(CheeseTypes.gouda);
    this.builder.addEgg(EggTypes.fried);
    this.builder.addVegetables([
      VegetablesTypes.tomato,
      VegetablesTypes.lettuce,
      VegetablesTypes.pickles,
      VegetablesTypes.sauerkraut,
      VegetablesTypes.onion,
    ]);
    this.builder.addSpices([
      SpicesType.salt,
      SpicesType.paprika,
      SpicesType.rosemary,
      SpicesType.oregano
    ]);
    this.builder.addBacon();
    this.builder.addMayonnaise();
    this.builder.addMustard();
    this.builder.addKetchup();
    this.builder.addDoubleCheese();
  }

  public buildVeganBurger(): void {
    this.builder.addBun(BunTypes.rye);
    this.builder.addCheese(CheeseTypes.brie);
    this.builder.addCutlet(CutletTypes.soybeans);
    this.builder.addVegetables([
      VegetablesTypes.avocado,
      VegetablesTypes.tomato,
      VegetablesTypes.lettuce,
      VegetablesTypes.pepper,
      VegetablesTypes.olives,
      VegetablesTypes.pickles,
      VegetablesTypes.onion,
    ]);
    this.builder.addSpices([
      SpicesType.salt,
      SpicesType.paprika,
      SpicesType.oregano
    ]);
    this.builder.addYogurt();
    this.builder.addMustard();
  }
}