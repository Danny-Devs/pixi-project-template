import { App } from '../system/App';
import { Background } from './Background';
import { Platform } from './Platform';
import { Scene } from '../system/Scene';
import { Hero } from './Hero';

export class Game extends Scene {
  create() {
    this.createBackground();
    this.createPlatform({
        rows: 4,
        cols: 6,
        x: 200
    });
    this.createHero();
  }
  createPlatform(data) {
    const platform = new Platform(data.rows, data.cols, data.x);
    this.container.addChild(platform.container);
  }
  createBackground() {
    this.bg = new Background();
    this.container.addChild(this.bg.container);
  }
  createHero() {
    this.hero = new Hero();
    this.container.addChild(this.hero.sprite);
  }
  update(dt) {
    this.bg.update(dt);
  }
}
