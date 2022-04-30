import * as THREE from 'three';

export default class ViewGL{
    constructor(canvasRef) {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef,
            antialias: false,
        });
        this.fov = 70;
        this.aspect = 2;  // the canvas default
        this.near = 0.1;
        this.far = 5;
        this.camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
        this.camera.position.z = 4.5;

        this.color = 0xFFFFFF;
        this.intensity = 0.7;
        this.light = new THREE.DirectionalLight(this.color, this.intensity);
        this.moreLight = new THREE.AmbientLight( 0x404040 );
        this.light.position.set(-1, 2, 4);
        this.scene.add(this.light, this.moreLight);
        this.scene.background = new THREE.Color( 0xffff00 )
        
        this.scene.add();

        this.update();
    }

    // ******************* PUBLIC EVENTS ******************* //
    updateValue(value) {
      // Whatever you need to do with React props
    }

    onMouseMove() {
      // Mouse moves
    }

    onWindowResize(vpW, vpH) {
        this.renderer.setSize(vpW, vpH);
    }

    // ******************* RENDER LOOP ******************* //
    update(t) {
        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(this.update.bind(this));
    }
}
