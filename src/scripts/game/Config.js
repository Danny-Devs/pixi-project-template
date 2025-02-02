import { Game } from './Game';
import { Tools } from '../system/Tools';

export const Config = {
  loader: Tools.massiveRequire(
    require['context']('./../../sprites/', true, /\.(mp3|png|jpe?g)$/)
  ),
  scenes: {
    Game: Game
  },
  bgSpeed: 2,
  hero: {
    position: {
      x: 350,
      y: 545
    }
  }
};
