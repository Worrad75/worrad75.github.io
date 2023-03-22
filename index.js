// import * as THREE from './three.js-master/build/three.module.js'
// import * as THREE from "../node_modules/three/build/three.module.js"
// import * as THREE from "../three.js-master/build/three.module.js"
import * as THREE from 'three';
import { GLTFLoader } from './three.js-master/examples/jsm/loaders/GLTFLoader.js'

const canvas = document.querySelector('#webgl')
const scene = new THREE.Scene()

const loader = new GLTFLoader()
loader.load('./assets/boat/boat.glb', function(glb){
    glb.scene.scale.set(0.05,0.05,0.05)
    console.log(glb)
}, function(xhr){
    console.log(xhr.loaded/xhr.total * 100 + "% loaded")
}, function(error){
    console.log("an error occured: " + error)
})

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2,2,5)
// light.position.set(0,1,0)
scene.add(light)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0,1,2)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.gammaOutput = true

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()