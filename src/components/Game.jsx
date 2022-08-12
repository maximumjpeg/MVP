// import * as THREE from 'three';
// import { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { Interaction } from '../../three.interaction.js/src/index.js';
// import { Color } from 'three';


// const scene = new THREE.Scene();
// scene.background = new THREE.CubeTextureLoader()
// 	.setPath( './assets/cubemap/' )
// 	.load( [
// 		'px.png',
// 		'nx.png',
// 		'py.png',
// 		'ny.png',
// 		'pz.png',
// 		'nz.png'
// 	] );




// // scene.background = new Color("purple");
// const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
// camera.position.z = 20;

// // audio listener to add to the camera
// const listener = new THREE.AudioListener();
// camera.add(listener);

// // create AudioLoader
// const audioLoader = new THREE.AudioLoader();


// // BGM
// const bgm = new THREE.Audio( listener );
// audioLoader.load('./assets/bgm/deepDiver.mp3', ( buffer ) => {
//   bgm.setBuffer( buffer ); // set source to sound object's buffer
//   bgm.setLoop( true );
//   bgm.setVolume( 0.4 ); // volume 0-1
//   bgm.play();
// });



// // Lighting
// var light1 = new THREE.AmbientLight({ intensity: 0.5 })
// scene.add( light1 );

// var light2 = new THREE.SpotLight({ position: [10, 10, 10], angle: 0.15, penumbra: 1 });
// scene.add( light2 );

// var light3 = new THREE.PointLight({ position: [-10, -10, -10] });
// scene.add(light3);

// // const light = new THREE.AmbientLight( 0x404040 ); // soft white light

// // var light = new THREE.DirectionalLight(0x404040, 1);
// // scene.add(light);

// // const light2 = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
// // scene.add( light2 );

// // var light2 = new THREE.SpotLight({ position: [10, 10 ,10], angle: 0, penumbra: 1 });
// // scene.add( light2 );
// // var light3 = new THREE.PointLight({ postition: [-10, -10, -10] });
// // scene.add( light3 );

// // var plight = new THREE.PointLight( 0xffe673, 60 );
// // plight.position.set(0,50,0 );
// // scene.add( plight );

// // const light = new THREE.PointLight( 0xff0000, 1, 100 );
// // light.position.set( 10, 10, 100 );
// // scene.add( light );


// // renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth * 0.75, window.innerHeight * 0.75 );
// // renderer.setClearColor( 0xffffff, 0);
// document.body.appendChild( renderer.domElement );


// // orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);


// // objects
// // const geometry4 = new THREE.BoxGeometry( 4, 4, 4 );
// // const material4 = new THREE.MeshStandardMaterial( { color: '#ffd700' } );
// // const box = new THREE.Mesh( geometry4, material4 );
// // scene.add( box );
// // box.position.set(-2, -2, -20);

// // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// // const material = new THREE.MeshStandardMaterial( { color: '#ffd700' } );
// // const cube = new THREE.Mesh( geometry, material );
// // scene.add( cube );
// // cube.position.set(10, 5, 0);
// // cube.cursor = 'crosshair';
// // cube.on('mouseover', (e) => {cube.material.color.set( 'red' )});
// // cube.on('mouseout', (e) => {cube.material.color.set( '#ffd700' )});
// // cube.on('click', (e) => {
// // 	console.log('target', e.target);
// // 	if (e.target.material.color.r === 1) {
// // 		var i = e.target.uuid;
// // 		scene.remove( scene.getObjectByProperty( 'uuid', i ) );
// // 	} else {
// // 		// slowDown(e);
// // 	}
// // })

// // generator
// function createCubes() {
// 	var g = new THREE.BoxGeometry( 1, 1, 1 );
// 	var m = new THREE.MeshStandardMaterial( { color: '#ffd700' } );
// 	var mesh = new THREE.Mesh( g, m );
// 	mesh.on('click', (e) => {
// 		if (mesh.material.color.g === 0.8431372549019608) {
// 			mesh.material.color.set( 'red' );
// 			console.log(e.target.id);
// 		} else {
// 			mesh.material.color.set( '#ffd700' );
// 		}
// 	});
// 	return mesh;
// };

// //

// var startX = -16;
// var startY = 0;
// var startZ = 0;

// for (var j = 0; j < 16; j++) {
// 	var plop = createCubes();

// 	plop.position.x = startX + (j * 2);
// 	plop.position.y = startY;
// 	plop.position.z = startZ;

// 	scene.add( plop );
// }

// startY = 2;

// for (var j = 0; j < 16; j++) {
// 	var plop = createCubes();

// 	plop.position.x = startX + (j * 2);
// 	plop.position.y = startY;
// 	plop.position.z = startZ;

// 	scene.add( plop );
// }

// startY = 4;

// for (var j = 0; j < 16; j++) {
// 	var plop = createCubes();

// 	plop.position.x = startX + (j * 2);
// 	plop.position.y = startY;
// 	plop.position.z = startZ;

// 	scene.add( plop );
// }

// startY = 6;

// for (var j = 0; j < 16; j++) {
// 	var plop = createCubes();

// 	plop.position.x = startX + (j * 2);
// 	plop.position.y = startY;
// 	plop.position.z = startZ;

// 	scene.add( plop );
// }



// // Interaction
// const interaction = new Interaction(renderer, scene, camera);

// // resize canvas



// function animate() {
// 	var timer = Date.now() * 0.0001;

//   requestAnimationFrame( animate );
//   // box.rotation.y += 0.005;
//   // cube.rotation.x += 0.005;
// 	// plop.rotation.x += 0.005;
// 	// plop.rotation.x += 0.005;

// 	scene.traverse( function( object ) {
// 		if ( object.isMesh ) {
// 			// object.rotation.x += 0.01;
// 			// object.rotation.y += 0.01;
// 			object.rotation.x = timer * 10;
// 			// object.rotation.y = timer * 2.5;
// 		}
// 	} );

//   renderer.render( scene, camera );
// };

// const speedUp = (e) => {
// 	requestAnimationFrame( speedUp );
// 	e.target.rotation.x += 0.05;
// };

// const slowDown = (e) => {
// 	requestAnimationFrame( speedUp );
// 	e.target.rotation.x -= 0.05;
// };

// animate();

// export default Score;

// ============================================================================
import React from 'react';
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import Box from './objects/Cube.jsx';

// Extend will make OrbitControls available as a JSX element called orbitControls
extend({ OrbitControls });
const CameraControls = () => {
	// Need reference to 3JS camera and the canvas
	// useThree is a hook that gives you access to the state model containing:
	// default renderer, scene, camera.

  const {
    camera,
    gl: { domElement },
  } = useThree();

	// Ref to the controls, we have to update them on every frame (with useFrame)
	const controls = useRef();
	useFrame(() => controls.current.update());
	return (
		<orbitControls
			ref={controls}
			args={[camera, domElement]}
			// autoRotate={false}
			// enableZoom={false}

		/>
	);
}






// function Box(props, { score, setScore }) {
// 	// console.log('test', score)
// 	const tester = () => {
// 		var count = 9
// 	  scene.traverse((obj) => {
// 			if (obj) {
// 				count--;
// 			}
// 		});
// 		return count;
// 	}
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
//       scale={clicked ? 2 : 1}
//       onClick={(event) => {click(!clicked); }}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'green' : 'orange'} />
//     </mesh>
//   )
// }



// Load the skybox texture and apply it to the scene
function SkyBox() {
	const { scene } = useThree();
	const loader = new THREE.CubeTextureLoader();
	const texture = loader.load([
		'./assets/cubemap/px.png',
		'./assets/cubemap/nx.png',
		'./assets/cubemap/py.png',
		'./assets/cubemap/ny.png',
		'./assets/cubemap/pz.png',
		'./assets/cubemap/nz.png'
	]);
	scene.background = texture;
	return null;
}

function Box1(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[2, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'purple' : 'orange'} />
    </mesh>
  )
}

function Box2(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  useFrame((state, delta) => (ref.current.rotation.y += 0.01))
  useFrame((state, delta) => (ref.current.rotation.z += -0.03))
  useFrame((state, delta) => (ref.current.rotation.x += -0.05))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 0 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? 'cyan' : 'silver'} />
    </mesh>
  )
}

export default function Game({ score, setScore }) {
	// experiment to track score and adjust it actively
	console.log('score', score);

  return (
    <Canvas>
			<CameraControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {/* surface layer */}
      {/* <Box1 position={[-2.2, 2, 0]} />
      <Box1 position={[0, 2, 0]} />
      <Box1 position={[2.2, 2, 0]} />
      <Box1 position={[-2.2, 0, 0]} />
      <Box2 position={[0, 0, 0]} />
      <Box1 position={[2.2, 0, 0]} />
      <Box1 position={[-2.2, -2, 0]} />
      <Box1 position={[0, -2, 0]} />
      <Box1 position={[2.2, -2, 0]} /> */}

      {/* background layer 1 */}
      {/* next layer center*/}
      {/* <Box position={[-2.2, 2, -10]} onClick={clickHandler} />
      <Box position={[0, 2, -10]} onClick={clickHandler}/>
      <Box position={[2.2, 2, -10]} onClick={clickHandler}/>
      <Box position={[-2.2, 0, -10]} onClick={clickHandler}/>
      <Box position={[0, 0, -10]} onClick={clickHandler}/>
      <Box position={[2.2, 0, -10]} onClick={clickHandler}/>
      <Box position={[-2.2, -2, -10]} onClick={clickHandler}/>
      <Box position={[0, -2, -10]} onClick={clickHandler}/>
      <Box position={[2.2, -2, -10]} onClick={clickHandler}/> */}

      {/* next layer left */}
      <Box position={[-4.4, 2, -10]} score={score} setScore={setScore} />
      <Box position={[-4.4, 0, -10]} score={score} setScore={setScore} />
      <Box position={[-4.4, -2, -10]} score={score} setScore={setScore} />
      <Box position={[-6.6, 2, -10]} score={score} setScore={setScore} />
      <Box position={[-6.6, 0, -10]} score={score} setScore={setScore} />
      <Box position={[-6.6, -2, -10]} score={score} setScore={setScore} />
      <Box position={[-8.8, -2, -10]} score={score} setScore={setScore} />
      <Box position={[-8.8, 2, -10]} score={score} setScore={setScore} />
      <Box position={[-8.8, 0, -10]} score={score} setScore={setScore} />

      {/* next layer C2 middle right */}
      {/* <Box position={[4.4, 2, -10]} />
      <Box position={[4.4, -2, -10]} />
      <Box position={[4.4, 0, -10]} />
      <Box position={[6.6, 2, -10]} />
      <Box position={[6.6, 0, -10]} />
      <Box position={[6.6, -2, -10]} />
      <Box position={[8.8, -2, -10]} />
      <Box position={[8.8, 2, -10]} />
      <Box position={[8.8, 0, -10]} /> */}

      {/* next layer C1 top right */}
      {/* <Box position={[4.4, 8, -10]} />
      <Box position={[4.4, 6, -10]} />
      <Box position={[4.4, 4, -10]} />
      <Box position={[6.6, 8, -10]} />
      <Box position={[6.6, 6, -10]} />
      <Box position={[6.6, 4, -10]} />
      <Box position={[8.8, 8, -10]} />
      <Box position={[8.8, 6, -10]} />
      <Box position={[8.8, 4, -10]} /> */}

      {/* next layer B1 top right */}
      {/* <Box position={[2.2, 8, -10]} />
      <Box position={[2.2, 6, -10]} />
      <Box position={[2.2, 4, -10]} />
      <Box position={[0, 8, -10]} />
      <Box position={[0, 6, -10]} />
      <Box position={[0, 4, -10]} />
      <Box position={[-2.2, 8, -10]} />
      <Box position={[-2.2, 6, -10]} />
      <Box position={[-2.2, 4, -10]} /> */}

      {/* next layer A1 top right */}
      {/* <Box position={[-4.4, 8, -10]} />
      <Box position={[-4.4, 6, -10]} />
      <Box position={[-4.4, 4, -10]} />
      <Box position={[-6.6, 8, -10]} />
      <Box position={[-6.6, 6, -10]} />
      <Box position={[-6.6, 4, -10]} />
      <Box position={[-8.8, 8, -10]} />
      <Box position={[-8.8, 6, -10]} />
      <Box position={[-8.8, 4, -10]} /> */}

      {/* next layer C3 middle right */}
      {/* <Box position={[4.4, -4, -10]} />
      <Box position={[4.4, -6, -10]} />
      <Box position={[4.4, -8, -10]} />
      <Box position={[6.6, -4, -10]} />
      <Box position={[6.6, -6, -10]} />
      <Box position={[6.6, -8, -10]} />
      <Box position={[8.8, -4, -10]} />
      <Box position={[8.8, -6, -10]} />
      <Box position={[8.8, -8, -10]} /> */}

      {/* next layer B3 middle right */}
      {/* <Box position={[2.2, -4, -10]} />
      <Box position={[2.2, -6, -10]} />
      <Box position={[2.2, -8, -10]} />
      <Box position={[0, -4, -10]} />
      <Box position={[0, -6, -10]} />
      <Box position={[0, -8, -10]} />
      <Box position={[-2.2, -4, -10]} />
      <Box position={[-2.2, -6, -10]} />
      <Box position={[-2.2, -8, -10]} /> */}

      {/* next layer A3 middle right */}
      {/* <Box position={[-4.4, -4, -10]} />
      <Box position={[-4.4, -6, -10]} />
      <Box position={[-4.4, -8, -10]} />
      <Box position={[-6.6, -4, -10]} />
      <Box position={[-6.6, -6, -10]} />
      <Box position={[-6.6, -8, -10]} />
      <Box position={[-8.8, -4, -10]} />
      <Box position={[-8.8, -6, -10]} />
      <Box position={[-8.8, -8, -10]} /> */}

      {/* <Box position={[-2.2, 0, -8]} />
      <Box position={[0, 0, -8]} />
      <Box position={[2.2, 0, -8]} />
      <Box position={[-2.2, -2, -8]} />
      <Box position={[0, -2, -8]} />
      <Box position={[2.2, -2, -8]} />

			<Box position={[-2.2, 0, -6]} />
      <Box position={[0, 0, -6]} />
      <Box position={[2.2, 0, -6]} />
      <Box position={[-2.2, -2, -6]} />
      <Box position={[0, -2, -6]} />
      <Box position={[2.2, -2, -6]} /> */}
			<SkyBox />
    </Canvas>
  )
}
