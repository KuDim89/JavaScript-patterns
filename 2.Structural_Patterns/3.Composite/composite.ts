export abstract class Component {
  protected parent!: Component | null;

  public setParent(parent: Component | null) {
    this.parent = parent;
  }

  public getParent(): Component | null {
    return this.parent;
  }

  public add(component: Component):void {}

  public remove(component: Component):void {}

  public isComposite():boolean {
    return false;
  }

  public abstract getPrice():number;

  public abstract getAllComponents():string;
}

export class Detail extends Component {
  private readonly name: string;
  private readonly cost: number;
  private readonly quantity: number;

  constructor(name: string, cost: number, quantity: number = 1) {
    super();
    this.name = name;
    this.cost = cost;
    this.quantity = quantity;
  }

  public getPrice(): number {
    return this.cost * this.quantity;
  }

  public getAllComponents():string {
    return `${this.name} * ${this.quantity}`
  }
}

export class Group extends Component {
  protected children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Component) {
    const componentIndex = this.children.indexOf(component);
    this.children.slice(componentIndex, 1);

    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  getPrice(): number {
    return this.children.map(child => child.getPrice()).reduce((a,b) => a + b);
  }

  public getAllComponents():string {
    return this.children.map((child) => `${child.getAllComponents()}`).join(',\n')
  }
}



