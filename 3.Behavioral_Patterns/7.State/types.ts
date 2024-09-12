import { MusicPlayer } from './state';


export interface State {
  handle(context: MusicPlayer):void;
}