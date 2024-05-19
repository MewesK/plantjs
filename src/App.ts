import * as BABYLON from "babylonjs";

export class App {
  engine: BABYLON.Engine;
  scene: BABYLON.Scene;

  constructor(
    readonly canvas: HTMLCanvasElement,
    sceneFactory: (
      engine: BABYLON.Engine,
      canvas: HTMLCanvasElement
    ) => BABYLON.Scene
  ) {
    this.engine = new BABYLON.Engine(canvas);
    this.scene = sceneFactory(this.engine, canvas);
    window.addEventListener("resize", () => {
      this.engine.resize();
    });
  }

  debug(enabled: boolean = true) {
    if (enabled) {
      this.scene.debugLayer.show({ overlay: true });
    } else {
      this.scene.debugLayer.hide();
    }
  }

  run() {
    this.debug(true);
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }
}

