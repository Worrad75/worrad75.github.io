// import { Scene, WebGLRenderer, PerspectiveCamera, DirectionalLight } from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import {  } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene()
const loader = new THREE.GLTFLoader();
// const controls = new THREE.OrbitControls();
let mixer;
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Sets a 12 by 12 gird helper
// const gridHelper = new THREE.GridHelper(12, 12);
// scene.add(gridHelper);

// Sets the x, y, and z axes with each having a length of 4
// const axesHelper = new THREE.AxesHelper(4);
// scene.add(axesHelper);


loader.load('./public/assets/boat/boat.glb', function(glb){
    const model = glb.scene
    model.rotation.y = Math.PI / 2;
    model.scale.set(1,1,1)
    scene.add(model)
    mixer = new THREE.AnimationMixer(model)
    const clips = glb.animations
    const clip = THREE.AnimationClip.findByName(clips, "Sailing")
    const action = mixer.clipAction(clip)
    action.play()

    console.log(glb)

}, function(xhr){
    console.log(xhr.loaded/xhr.total * 100 + "% loaded")
}, function(error){
    console.log("an error occured: " + error)
})

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2,2,5)
scene.add(light)

const camera = new THREE.PerspectiveCamera(90, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0,1,3)
scene.add(camera)

const canvas = document.querySelector('#webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.gammaOutput = true   
const clock = new THREE.Clock()
renderer.setAnimationLoop(animate)

function animate() {
    mixer.update(clock.getDelta())
    renderer.render(scene, camera)
}

window.addEventListener('resize', function() {
    camera.aspect = sizes.width/sizes.height
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width/sizes.height)
})