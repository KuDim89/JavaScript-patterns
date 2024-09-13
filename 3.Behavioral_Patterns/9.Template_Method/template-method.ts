abstract class Builder {
  abstract buildTemplate():void
  abstract addEngine():void;
  abstract installChassis():void;
  abstract addElectronic():void;
  abstract collectAccessories():void;
}

export class DefaultBuilder implements Builder {
  buildTemplate() {
    this.addEngine();
    this.installChassis();
    this.addElectronic();
    this.collectAccessories();
  }

  addEngine() {
    console.log('Added default FSI engine');
  }

  installChassis() {
    console.log('Added default chassis');
  }

  addElectronic() {
    console.log('Added default electronic');
  }

  collectAccessories() {
    this.constructor.name === 'DefaultBuilder'
      ? console.log('It\s default builder without accessories. If you need accessories please choose another builder.')
      : console.log('Need to add accessories. Default builder can\'t do this.')
  }
}

export class TeslaBuilder extends DefaultBuilder {
  addEngine() {
    console.log('Added electric engine');
  }

  installChassis() {
    console.log('Added Tesla chassis');
  }

  addElectronic():void {
    console.log('Added Tesla electronic');
  }

  collectAccessories():void {
    console.log('Add Tesla accessories');
  }
}

export class BMWBuilder extends DefaultBuilder {
  addEngine() {
    console.log('Added BMW TDI engine');
  }

  collectAccessories() {
    console.log('Added BMW accessories')
  }
}

