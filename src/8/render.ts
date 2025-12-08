import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;

export function init() {
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    5000,
  );
  camera.position.set(1500, 1500, 1500);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x222222);

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.8));
  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(1000, 2000, 1000);
  scene.add(dirLight);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);
  document.body.appendChild(renderer.domElement);

  window.addEventListener("resize", onWindowResize);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(500, 500, 500);
  controls.update();

  // Add axes helper to see orientation
  const axesHelper = new THREE.AxesHelper(500);
  scene.add(axesHelper);

  // Add grid on XZ plane
  const gridHelper = new THREE.GridHelper(2000, 20);
  scene.add(gridHelper);

  // Add test cube at center to verify rendering
  addCube(500, 500, 500, 0xff0000, 50);
}

export function addCube(
  x: number,
  y: number,
  z: number,
  color: number = 0x00ff00,
  size: number = 10,
): THREE.Mesh {
  const geometry = new THREE.BoxGeometry(size, size, size);
  const material = new THREE.MeshStandardMaterial({ color });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(x, y, z);
  scene.add(cube);
  return cube;
}

export function addLine(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  color: number = 0xff0000,
): THREE.Line {
  const points = [new THREE.Vector3(x1, y1, z1), new THREE.Vector3(x2, y2, z2)];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color });
  const line = new THREE.Line(geometry, material);
  scene.add(line);
  return line;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  renderer.render(scene, camera);
}
