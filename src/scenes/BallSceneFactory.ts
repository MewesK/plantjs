import * as BABYLON from 'babylonjs';
import { SceneFactory } from '../App';

export const createScene: SceneFactory = function (engine, canvas) {
  const scene = new BABYLON.Scene(engine);
  const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
  camera.setTarget(BABYLON.Vector3.Zero());
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky
  var light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = 0.7;

  // Sphere
  var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { diameter: 2, segments: 32 }, scene);

  // Sphere Material
  var redMaterial = new BABYLON.StandardMaterial('redMaterial', scene);
  redMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0); // RGB for red
  sphere.material = redMaterial;

  // Ground
  var ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene);

  // Ground Material
  var groundMaterial = new BABYLON.StandardMaterial('groundMaterial', scene);
  groundMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.8, 0.5); // RGB for a greenish color
  ground.material = groundMaterial;
  groundMaterial.bumpTexture = new BABYLON.Texture('./normal.jpg', scene);
  groundMaterial.bumpTexture.level = 0.5;

  // Physics

  // Move the sphere upward 1/2 its height (diameter = 2, so startPos = 1 equals floor)
  let startPos = 2;
  sphere.position.y = startPos;

  var sphereVelocity = 0;
  var gravity = 0.009;
  var reboundLoss = 0.1;

  scene.registerBeforeRender(() => {
    sphereVelocity += gravity;
    let newY = sphere.position.y - sphereVelocity;
    sphere.position.y -= sphereVelocity;
    if (newY < 1) {
      sphereVelocity = (reboundLoss - 1) * sphereVelocity;
      newY = 1;
    }
    sphere.position.y = newY;

    // Stopped bouncing?
    if (Math.abs(sphereVelocity) <= gravity && newY < 1 + gravity) {
      // Start from higher and higher up
      sphere.position.y = startPos++;
    }
  });

  return scene;
};
