import { App } from './App';
import { createPlantScene } from './PlantScene';

console.log(`main.ts starting ${App.name}`);
window.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
    let app = new App(canvas, createPlantScene);
    app.run();
});