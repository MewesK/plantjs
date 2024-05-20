import HavokPhysics from '@babylonjs/havok';

import { App } from './App';
import { createScene } from './scenes/PlantSceneFactory';

window.addEventListener('DOMContentLoaded', async () => {
  const havokInstance = await HavokPhysics();
  const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
  const app = new App(canvas, (engine, canvas) => createScene(engine, canvas, havokInstance));
  app.debug(import.meta.env.DEV);
  app.run();
});
