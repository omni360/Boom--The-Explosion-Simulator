/**
 * Alexander McCaleb & Jonah Nobleza
 * CMPS 179 - Summer 2013
 * Boom -- The Explosion Simulator
 *
 * Bathtubic.js
 *
 * The fake chemical: Bathtubic, in Boom!
 * 
 * Bathtubic has the following properties:
 * Sensitivity: 	4
 * Stability: 		8
 * Visual Appeal: 	6
 * Performance:		9
 * Strength:		7
 * Velocity:		4
 *
 */

/**
 * Default Constructor 
 */
var Bathtubic = function()
{
	var noiseTexture = new THREE.ImageUtils.loadTexture('images/cloud.png');
	noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;

	var waterTexture = new THREE.ImageUtils.loadTexture('images/dirtywater.jpg');
	waterTexture.wrapS = waterTexture.wrapT = THREE.RepeatWrapping;
	customUniforms3 = {
		baseTexture : {
			type : "t",
			value : waterTexture
		},
		baseSpeed : {
			type : "f",
			value : 0.1
		},
		noiseTexture : {
			type : "t",
			value : noiseTexture
		},
		noiseScale : {
			type : "f",
			value : 0.4
		},
		alpha : {
			type : "f",
			value : 1.0
		},
		time : {
			type : "f",
			value : 1.0
		}
	};

	var waterMaterial = new THREE.ShaderMaterial({
		uniforms : customUniforms3,
		vertexShader : loadFile('WaterVertex.shader'),
		fragmentShader : loadFile('WaterFrag.shader'),
	});
	waterMaterial.side = THREE.DoubleSide;

	var bathtubic = new THREE.Mesh(
	// radiusAtTop, radiusAtBottom, height, segmentsAroundRadius, segmentsAlongHeight,
	new THREE.CylinderGeometry(50, 100, 100, 20, 4), waterMaterial);
	bathtubic.position.set(0, -140, 0);
	scene.add(bathtubic);
};