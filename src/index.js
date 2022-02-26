import * as THREE from 'three';

// Setup Renderer 
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('.webGLContainer').appendChild(renderer.domElement);

const scene = new THREE.Scene();

// Setup Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 10);
camera.lookAt(0, 0, 0);

// Add Sample Geometry
const boxGeometry = new THREE.BoxGeometry();
const normalMaterial = new THREE.MeshNormalMaterial;
const boxMesh = new THREE.Mesh(boxGeometry, normalMaterial);
scene.add(boxMesh);

// Render & Animation
function render() {
    boxMesh.rotation.x += 0.01;
    boxMesh.rotation.y += 0.01;
    boxMesh.rotation.z += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

render();
