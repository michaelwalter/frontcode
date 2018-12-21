import {Component} from "../../component";
import * as THREE from 'three';

export class Animation extends Component {
    private container: HTMLElement;
    private camera;
    private scene;
    private renderer;
    private geometry;
    private material;
    private mesh;

    private geometries: Array<any>;

    constructor (element) {
        super(element);
    }

    onMounted () {
        this.initializeElements();
        this.initializeValues();
        this.animate();
    }

    onUnmounted () {

    }

    private initializeElements(): void {
        this.geometries = [];
        this.container = this.config.element;
        this.camera = new THREE.PerspectiveCamera( 70, this.container.clientWidth / 500, 1, 1000 );
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );


        const geometry = new THREE.PlaneGeometry( .20, .20, .0 );
        const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        const mesh = new THREE.Mesh( geometry, material );
        mesh.position.set(-1.50, .0, .0);

        this.geometries.push( mesh );







        const group = new THREE.Group();
        group.position.y = 1;
        this.scene.add( group );

        function addLineShape( shape, color, x, y, z, rx, ry, rz, s ) {
            // lines
            shape.autoClose = true;
            var points = shape.getPoints();
            var spacedPoints = shape.getSpacedPoints( 50 );
            var geometryPoints = new THREE.BufferGeometry().setFromPoints( points );
            var geometrySpacedPoints = new THREE.BufferGeometry().setFromPoints( spacedPoints );
            // solid line
            var line = new THREE.Line( geometryPoints, new THREE.LineBasicMaterial( { color: color } ) );
            line.position.set( x, y, z );
            line.rotation.set( rx, ry, rz );
            line.scale.set( s, s, s );
            group.add( line );
            // line from equidistance sampled points
            var line = new THREE.Line( geometrySpacedPoints, new THREE.LineBasicMaterial( { color: color } ) );
            line.position.set( x, y, z + 25 );
            line.rotation.set( rx, ry, rz );
            line.scale.set( s, s, s );
            group.add( line );
            // vertices from real points
            var particles = new THREE.Points( geometryPoints, new THREE.PointsMaterial( { color: color, size: 4 } ) );
            particles.position.set( x, y, z + 75 );
            particles.rotation.set( rx, ry, rz );
            particles.scale.set( s, s, s );
            group.add( particles );
            // equidistance sampled points
            var particles = new THREE.Points( geometrySpacedPoints, new THREE.PointsMaterial( { color: color, size: 4 } ) );
            particles.position.set( x, y, z + 125 );
            particles.rotation.set( rx, ry, rz );
            particles.scale.set( s, s, s );
            group.add( particles );
        }


        var circleRadius = .5;
        var circleShape = new THREE.Shape();
        circleShape.moveTo( 0, 0
        );
        circleShape.quadraticCurveTo( circleRadius, circleRadius, circleRadius, 0 );
        circleShape.quadraticCurveTo( circleRadius, - circleRadius, 0, - circleRadius );
        circleShape.quadraticCurveTo( - circleRadius, - circleRadius, - circleRadius, 0 );
        circleShape.quadraticCurveTo( - circleRadius, circleRadius, 0, circleRadius );

        addLineShape( circleShape,0x00f000, 0, 0, 0, 0, 0, 0, 1 );


    }

    private initializeValues(): void {
        this.camera.position.z = 1;
        this.renderer.setSize( this.container.clientWidth, 500 );

        for (let i = 0; i < this.geometries.length; i++) {
            const geometry = this.geometries[i];
            this.scene.add( geometry );
        }

        this.config.element.appendChild( this.renderer.domElement );
    }

    public animate(): void {
        const animate = () => {
            // requestAnimationFrame( animate );
            // this.mesh.rotation.x += 0.01;
            // this.mesh.rotation.y += 0.02;
            this.renderer.render( this.scene, this.camera );
        };

        animate();
    }
}