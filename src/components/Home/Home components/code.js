import React, {Component} from 'react'

import Scene from './code components/Scene.js'


class Code extends Component{
    render() {
        return (
            <a href='index.html'>
            <div className='shadow-lg m-[2%] w-auto h-screen bg-white flex rounded-3xl'>
                <Scene></Scene>
            </div>
            </a>
            )
    }

}

export default Code



/*

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});
  const fov = 70;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 4.5;

  const scene = new THREE.Scene();

  {
    const color = 0xFFFFFF;
    const intensity = 0.7;
    const light = new THREE.DirectionalLight(color, intensity);
    const moreLight = new THREE.AmbientLight( 0x404040 );
    light.position.set(-1, 2, 4);
    scene.add(light, moreLight);
    scene.background = new THREE.Color( 0xffffff );
  }

  const boxWidth = 1.3;
  const boxHeight = 1.3;
  const boxDepth = 1.3;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  function makeInstance(geometry, color, x) {
    const material = new THREE.MeshPhongMaterial({color});

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.x = x;

    return cube;
  }

  const cubes = [
    makeInstance(geometry, 0xdf689f,  -1),
    makeInstance(geometry, 0xa968df,  -0.9),
    makeInstance(geometry, 0xdf68da,  -0.8),
    makeInstance(geometry, 0xdf689f,  -0.7),
    makeInstance(geometry, 0xa968df,  -0.6),
    makeInstance(geometry, 0xdf68da,  -0.5),
    makeInstance(geometry, 0xdf689f,  -0.4),
    makeInstance(geometry, 0xa968df,  -0.3),
    makeInstance(geometry, 0xdf689f,  -0.2),
    makeInstance(geometry, 0xa968df,  -0.1),
    makeInstance(geometry, 0xdf68da,  0),
    makeInstance(geometry, 0xdf689f,  0.1),
    makeInstance(geometry, 0xa968df,  0.2),
    makeInstance(geometry, 0xdf68da,  0.3),
    makeInstance(geometry, 0xdf689f,  0.4),
    makeInstance(geometry, 0xa968df,  0.5),
    makeInstance(geometry, 0xdf68da,  0.6),
    makeInstance(geometry, 0xdf689f,  0.7),
    makeInstance(geometry, 0xa968df,  0.8),
    makeInstance(geometry, 0xdf68da,  0.9),
    makeInstance(geometry, 0xdf689f,  1),
  ];

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width  = canvas.clientWidth  * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * .002;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });
    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();


*/



/*

import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

class Simple extends React.Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    this.state = {
      cubeRotation: new THREE.Euler(),
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.1,
          this.state.cubeRotation.y + 0.1,
          0
        ),
      });
    };
  }

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height
    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}

      onAnimate={this._onAnimate}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}
          position={this.cameraPosition}
        />
        <mesh
          rotation={this.state.cubeRotation}
        >
          <boxGeometry
            width={1}
            height={1}
            depth={1}
          />
          <meshBasicMaterial
            color={0x00ff00}
          />
        </mesh>
      </scene>
    </React3>);
  }
}
ReactDOM.render(<Simple/>, document.body);

*/