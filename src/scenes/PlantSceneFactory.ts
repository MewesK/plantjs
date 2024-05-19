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

  // Sphere Material
  var redMaterial = new BABYLON.StandardMaterial('redMaterial', scene);
  redMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0); // RGB for red

  // Sphere
  var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { diameter: 2, segments: 32 }, scene);
  sphere.material = redMaterial;

  // Ground Material
  var groundMaterial = new BABYLON.StandardMaterial('groundMaterial', scene);
  groundMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.8, 0.5); // RGB for a greenish color
  groundMaterial.bumpTexture = new BABYLON.Texture('./normal.jpg', scene);
  groundMaterial.bumpTexture.level = 0.5;

  // Ground
  var ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene);
  ground.material = groundMaterial;

  return scene;
};
