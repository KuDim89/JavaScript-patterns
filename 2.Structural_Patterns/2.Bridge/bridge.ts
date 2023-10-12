// Abstraction layer
export abstract class UI {
  protected backend: Backend;

  constructor(backend: Backend) {
    this.backend = backend;
  }

  abstract  render():string
}

// Realization layer
abstract class Backend {
  abstract getData():string;
}

// Concrete classes for abstract layer
export class IPhoneUI extends UI {
  render() {
    const data = this.backend.getData();
    return `IPhone rendering data from ${data}`
  }
}

export class AndroidUI extends UI {
  render() {
    const data = this.backend.getData();
    return `AndroidUI rendering data from ${data}`
  }
}

export class WebUI extends UI {
  render() {
    const data = this.backend.getData();
    return `WebUI rendering data from ${data}`
  }
}

//Concrete classes for realization layer
export class MobileBackend implements Backend {
  getData() {
    return "Mobile backend";
  }
}

export class WebBackend implements Backend {
  getData(){
    return "Web backend";
  }
}