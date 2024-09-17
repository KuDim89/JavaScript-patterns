import { State } from './types';


export class PlayingState implements State {
  handle(context: MusicPlayer): void {
    console.log('Player is in playing state');
  }
}

export class PausedState implements State {
  handle(context: MusicPlayer): void {
    console.log('Player is in paused state')
  }
}

export class StoppedState implements State {
  handle(context: MusicPlayer): void {
    console.log('Player is in stopped state')
  }
}

export class MusicPlayer {
  private state!: State;

  constructor(state: State) {
    this.transitionTo(state);
  }

  public transitionTo(state: State): void {
    console.log(`MusicPayer: Transition to ${state.constructor.name}.`);
    this.state = state;
  }

  public request():void {
    this.state.handle(this);
  }
}