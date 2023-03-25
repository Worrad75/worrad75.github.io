// import { Scene, WebGLRenderer, PerspectiveCamera, DirectionalLight } from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import {  } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene()
const loader = new THREE.GLTFLoader();
// const controls = new THREE.OrbitControls();
let mixer;
const clock = new THREE.Clock()
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}



loader.load('./public/assets/boat/boat.glb', function(glb){
    const model = glb.scene
    model.rotation.y = 145;
    model.rotation.z = .25;
    model.scale.set(2.2,2.2,2.2)
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

const light = new THREE.DirectionalLight(0xffffff, 2)
light.position.set(3,3,5)
scene.add(light)

const camera = new THREE.PerspectiveCamera(90, sizes.width/sizes.height, 0.1, 100)
camera.position.set(-3,2,5)
scene.add(camera)

const canvas = document.querySelector('#webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setAnimationLoop(animate)

function animate() {
    console.log("animate ran")
    camera.aspect = window.innerWidth / window.innerHeight;
    mixer.update(clock.getDelta())
    renderer.render(scene, camera)
}