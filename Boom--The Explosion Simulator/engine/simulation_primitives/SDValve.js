/**
 * Alexander McCaleb
 * CMPS 179 - Summer 2013
 * Boom -- The Explosion Simulator
 *
 * SDValve.js
 *
 * Represents a Valve/Rate or Flow in a System Dynamics 
 * model as described by Jay Forrester
 *
 * Valves are tuned by factors 
 * They can be thought of as the derivative of a level.
 * 
 * Note: 
 * This is only a representation of inflows to levels;
 * outflows are not supported
 * 
 */

/**
 * Default Constructor
 * Takes in a name
 * Creates a list of factors attached to it
 * A parallel list of polarities is also maintained.
 * Polarities are either -1 or 1
 * as well as the sum of the attached factors
 */
var SDValve = function(name)
{
	this.name = name;
	this.factors = [];
	this.polarities = [];
	this.value = 0;
};

/**
 * Attaches a factor to this valve with the desired polarity 
 */
SDValve.prototype.attachFactor = function(factor, polarity)
{
	if(Math.abs(polarity) != 1)
	{
		console.error("SDValve.attacheFactor: You must pass a polarity of -1 or 1");
		return null;
	}
	else
	{
		this.factors.push(factor);
		this.polarities.push(polarity);
	}
};

/**
 * Updates the value of this valve by summing all attached factors 
 * Returns the updated value of the valve
 */
SDValve.prototype.update = function()
{
	var that = this;
	
	// Reset our value
	this.value = 0;
	
	// Now sum the influence of all factors
	_.each(this.factors, function(element, index) {
		that.value += that.polarities[index] * element.value;
	});
	
	return this.value;
};
