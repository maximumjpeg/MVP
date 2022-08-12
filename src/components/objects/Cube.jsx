import React from 'react';
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import * as THREE from 'three';

function Box(props) {
	// console.log('test', score)
	// const tester = () => {
	// 	var count = 9
	//   scene.traverse((obj) => {
	// 		if (obj) {
	// 			count--;
	// 		}
	// 	});
	// 	return count;
	// }

  const tester = () => {
    // console.log(props.score);
    var neu = props.score + 1;
    props.setScore(neu);

  }
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
      scale={clicked ? 2 : 1}
      onClick={(event) => {click(!clicked); tester()}}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'green' : 'orange'} />
    </mesh>
  )
}

export default Box;