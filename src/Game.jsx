import * as THREE from 'three';
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Interaction } from '../three.interaction.js/src/index.js';

import { Color } from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.CubeTextureLoader()
	.setPath( './assets/cubemap/' )
	.load( [
		'px.png',
		'nx.png',
		'py.png',
		'ny.png',
		'pz.png',
		'nz.png'
	] );

// const light = new THREE.PointLight( 0xff0000, 1, 100 );
// light.position.set( 10, 10, 100 );
// scene.add( light );


// scene.background = new Color("purple");
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 20;

// const light = new THREE.AmbientLight( 0x404040 ); // soft white light

// var light = new THREE.DirectionalLight(0x404040, 1);
// scene.add(light);

// const light2 = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
// scene.add( light2 );

// var light2 = new THREE.SpotLight({ position: [10, 10 ,10], angle: 0, penumbra: 1 });
// scene.add( light2 );
// var light3 = new THREE.PointLight({ postition: [-10, -10, -10] });
// scene.add( light3 );

// var plight = new THREE.PointLight( 0xffe673, 60 );
// plight.position.set(0,50,0 );
// scene.add( plight );

// Lighting
var light1 = new THREE.AmbientLight({ intensity: 0.5 })
scene.add( light1 );

var light2 = new THREE.SpotLight({ position: [10, 10, 10], angle: 0.15, penumbra: 1 });
scene.add( light2 );

var light3 = new THREE.PointLight({ position: [-10, -10, -10] });
scene.add(light3);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.setClearColor( 0xffffff, 0);
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

// var textureLoader = new THREE.CubeTextureLoader();
// textureLoader.setPath('./assets/');
// var textureCube = textureLoader.load([
//   'px.png', 'nx.png',
//   'py.png', 'ny.png',
//   'pz.png', 'nz.png'
// ]);
// var material9 = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );
// scene.background = new THREE.CubeTextureLoader()
//   .setPath('./assets/');
//   .load(['px.png',
//   'nx.png',
//   'py.png',
//   'ny.png',
//   'pz.png',
//   'nz.png']);

const geometry4 = new THREE.BoxGeometry( 4, 4, 4 );
const material4 = new THREE.MeshStandardMaterial( { color: '#ffd700' } );
const box = new THREE.Mesh( geometry4, material4 );
scene.add( box );
box.position.set(-2, -2, -20);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshStandardMaterial( { color: '#ffd700' } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.set(10, 5, 0);
cube.cursor = 'crosshair';
cube.cursor = 'crosshair';
// cube.on('click', (e) => {cube.material.color.set( 'red' )});
cube.on('mouseover', (e) => {cube.material.color.set( 'red' )});
cube.on('mouseout', (e) => {cube.material.color.set( '#ffd700' )});


// const geometry2 = new THREE.SphereGeometry(15, 32, 16);
// const material2 = new THREE.MeshBasicMaterial( { color: '#fff' } );
// const sphere = new THREE.Mesh(geometry2, material2);
// scene.add( sphere );

// camera.position.z = 25;



// const geometry3 = new THREE.SphereGeometry( 15, 32, 16 );
// const material3 = new THREE.MeshBasicMaterial( { color: '#eee' } );
// const sphere = new THREE.Mesh( geometry3, material3 );
// scene.add( sphere );

// Interaction
const interaction = new Interaction(renderer, scene, camera);


function animate() {
  requestAnimationFrame( animate );

  // cube.rotation.x += 0.02;
  // cube.position += 0.00001
  // cube.rotation.y += 0.01;
  // sphere.rotation.x += 0.01;
  // sphere.rotation.y += 0.01;
  // ring.rotation.y += 0.01;
  // ring.rotation.x += 0.01;
  // ring.rotation.z += 0.01;
  // ring1.rotation.z -= 0.01;
  box.rotation.y += 0.005;
  cube.rotation.x += 0.005;
  renderer.render( scene, camera );
};

animate();

// ============================================================================
// import React from 'react';
// import { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'

// function Box(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += 0.01))
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 0 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'green' : 'orange'} />
//     </mesh>
//   )
// }

// function Box1(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += 0.01))
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[2, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'purple' : 'orange'} />
//     </mesh>
//   )
// }

// function Box2(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   // useFrame((state, delta) => (ref.current.rotation.x += 0.01))
//   useFrame((state, delta) => (ref.current.rotation.y += 0.01))
//   useFrame((state, delta) => (ref.current.rotation.z += -0.03))
//   useFrame((state, delta) => (ref.current.rotation.x += -0.05))
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 0 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[2, 2, 2]} />
//       <meshStandardMaterial color={hovered ? 'cyan' : 'silver'} />
//     </mesh>
//   )
// }

// export default function Game() {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0} penumbra={1} />
//       <pointLight position={[-10, -10, -10]} />
//       {/* surface layer */}
//       <Box1 position={[-2.2, 2, 0]} />
//       <Box1 position={[0, 2, 0]} />
//       <Box1 position={[2.2, 2, 0]} />
//       <Box1 position={[-2.2, 0, 0]} />
//       <Box2 position={[0, 0, 0]} />
//       <Box1 position={[2.2, 0, 0]} />
//       <Box1 position={[-2.2, -2, 0]} />
//       <Box1 position={[0, -2, 0]} />
//       <Box1 position={[2.2, -2, 0]} />

//       {/* background layer 1 */}
//       {/* next layer center*/}
//       <Box position={[-2.2, 2, -10]} />
//       <Box position={[0, 2, -10]} />
//       <Box position={[2.2, 2, -10]} />
//       <Box position={[-2.2, 0, -10]} />
//       <Box position={[0, 0, -10]} />
//       <Box position={[2.2, 0, -10]} />
//       <Box position={[-2.2, -2, -10]} />
//       <Box position={[0, -2, -10]} />
//       <Box position={[2.2, -2, -10]} />

//       {/* next layer left */}
//       <Box position={[-4.4, 2, -10]} />
//       <Box position={[-4.4, 0, -10]} />
//       <Box position={[-4.4, -2, -10]} />
//       <Box position={[-6.6, 2, -10]} />
//       <Box position={[-6.6, 0, -10]} />
//       <Box position={[-6.6, -2, -10]} />
//       <Box position={[-8.8, -2, -10]} />
//       <Box position={[-8.8, 2, -10]} />
//       <Box position={[-8.8, 0, -10]} />

//       {/* next layer C2 middle right */}
//       <Box position={[4.4, 2, -10]} />
//       <Box position={[4.4, -2, -10]} />
//       <Box position={[4.4, 0, -10]} />
//       <Box position={[6.6, 2, -10]} />
//       <Box position={[6.6, 0, -10]} />
//       <Box position={[6.6, -2, -10]} />
//       <Box position={[8.8, -2, -10]} />
//       <Box position={[8.8, 2, -10]} />
//       <Box position={[8.8, 0, -10]} />

//       {/* next layer C1 top right */}
//       <Box position={[4.4, 8, -10]} />
//       <Box position={[4.4, 6, -10]} />
//       <Box position={[4.4, 4, -10]} />
//       <Box position={[6.6, 8, -10]} />
//       <Box position={[6.6, 6, -10]} />
//       <Box position={[6.6, 4, -10]} />
//       <Box position={[8.8, 8, -10]} />
//       <Box position={[8.8, 6, -10]} />
//       <Box position={[8.8, 4, -10]} />

//       {/* next layer B1 top right */}
//       <Box position={[2.2, 8, -10]} />
//       <Box position={[2.2, 6, -10]} />
//       <Box position={[2.2, 4, -10]} />
//       <Box position={[0, 8, -10]} />
//       <Box position={[0, 6, -10]} />
//       <Box position={[0, 4, -10]} />
//       <Box position={[-2.2, 8, -10]} />
//       <Box position={[-2.2, 6, -10]} />
//       <Box position={[-2.2, 4, -10]} />

//       {/* next layer A1 top right */}
//       <Box position={[-4.4, 8, -10]} />
//       <Box position={[-4.4, 6, -10]} />
//       <Box position={[-4.4, 4, -10]} />
//       <Box position={[-6.6, 8, -10]} />
//       <Box position={[-6.6, 6, -10]} />
//       <Box position={[-6.6, 4, -10]} />
//       <Box position={[-8.8, 8, -10]} />
//       <Box position={[-8.8, 6, -10]} />
//       <Box position={[-8.8, 4, -10]} />

//       {/* next layer C3 middle right */}
//       <Box position={[4.4, -4, -10]} />
//       <Box position={[4.4, -6, -10]} />
//       <Box position={[4.4, -8, -10]} />
//       <Box position={[6.6, -4, -10]} />
//       <Box position={[6.6, -6, -10]} />
//       <Box position={[6.6, -8, -10]} />
//       <Box position={[8.8, -4, -10]} />
//       <Box position={[8.8, -6, -10]} />
//       <Box position={[8.8, -8, -10]} />

//       {/* next layer B3 middle right */}
//       <Box position={[2.2, -4, -10]} />
//       <Box position={[2.2, -6, -10]} />
//       <Box position={[2.2, -8, -10]} />
//       <Box position={[0, -4, -10]} />
//       <Box position={[0, -6, -10]} />
//       <Box position={[0, -8, -10]} />
//       <Box position={[-2.2, -4, -10]} />
//       <Box position={[-2.2, -6, -10]} />
//       <Box position={[-2.2, -8, -10]} />

//       {/* next layer A3 middle right */}
//       <Box position={[-4.4, -4, -10]} />
//       <Box position={[-4.4, -6, -10]} />
//       <Box position={[-4.4, -8, -10]} />
//       <Box position={[-6.6, -4, -10]} />
//       <Box position={[-6.6, -6, -10]} />
//       <Box position={[-6.6, -8, -10]} />
//       <Box position={[-8.8, -4, -10]} />
//       <Box position={[-8.8, -6, -10]} />
//       <Box position={[-8.8, -8, -10]} />

//       <Box2 position={[-2.2, 0, -5]} />
//       <Box2 position={[0, 0, -5]} />
//       <Box2 position={[2.2, 0, -5]} />
//       <Box2 position={[-2.2, -2, -5]} />
//       <Box2 position={[0, -2, -5]} />
//       <Box2 position={[2.2, -2, -5]} />
//     </Canvas>
//   )
// }
