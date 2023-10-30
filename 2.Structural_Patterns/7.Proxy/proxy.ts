import {IWebApp} from "./types";

export class WebApp implements IWebApp {
  request(): void {
    console.log('Handling request...');
  }
}

export class Security implements IWebApp{
  private webApp: WebApp;

  constructor(webApp: WebApp) {
    this.webApp = webApp;
  }

  request(password: string): void {
    console.log('Preparing a request!')

    if(this.authenticate(password)) {
      this.webApp.request();
    }

    this.accessInfo(password)
  }

  authenticate(password: string) {
    return password === 'qwerty123'
  }

  accessInfo (password: string) {
   this.authenticate(password)
     ? console.log('Access granted! You can work as a user.')
     : console.log('Access denied! If you want to work as a user, you need to enter correct password to your account. ' +
       'Currently you can work only as a guest.')
  }
}

