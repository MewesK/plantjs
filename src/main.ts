import { App } from './App';
import { createScene } from './scenes/PlantSceneFactory';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
  const app = new App(canvas, createScene);
  app.debug(import.meta.env.DEV);
  app.run();
});
