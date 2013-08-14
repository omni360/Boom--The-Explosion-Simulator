/**
 * Alexander McCaleb & Jonah Nobleza
 * CMPS 179 - Summer 2013
 * Boom -- The Explosion Simulator
 *
 * Ceilingdroptum.js
 *
 * The fake chemical: Ceilingdroptum, in Boom!
 * 
 * Ceilingdroptum has the following properties:
 * Sensitivity: 	8
 * Stability: 		6
 * Visual Appeal: 	3
 * Performance:		5
 * Strength:		10
 * Velocity:		2
 *
 */

var CHCeilingdroptum = function() {
	
	// Set the stats for this chemical
	this.stats = {
		sensitivity : 8,
		stability : 6,
		visualAppeal : 3,
		perf : 5,
		strength : 10,
		velocity : 2
	};
	
	this.geometry = new THREE.TetrahedronGeometry(75, 1);
	
	var bVertexShaderText = loadFile('shaders/BumpMap/BumpMap.vert');
  	var bFragmentShaderText = loadFile('shaders/BumpMap/BumpMap.frag');
	var bumpTexture = THREE.ImageUtils.loadTexture('images/ceiling.png');
	
	this.material = new THREE.ShaderMaterial({
    	uniforms: {
    	  'tBumpTexture': { type: 't', value: bumpTexture },
   		 },
  	  vertexShader: bVertexShaderText,
   	  fragmentShader: bFragmentShaderText
  	});
	
	this.object = new THREE.Mesh(this.geometry, this.material);
}

CHCeilingdroptum.prototype.update = function(t){
	
};
