require('locus');

// car.js
function Car(make, model, year, color) {

	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;

	this.state = 'off'; // on or off; off by default
	this.previousOwners = [];
	this.currentOwner = make; // should be manufacturer by default make

	this.passengers = [];
};

Car.prototype.sale = function(newOwner) {
	this.previousOwners.push(this.currentOwner);
	this.currentOwner = newOwner;
};

Car.prototype.paint = function(color) {
	this.color = color;
};


// Phase 2
Car.prototype.start = function() {
	// change state of car to on
	if (this.state === 'off') {
		this.state = 'on';
	}
};

Car.prototype.off = function() {
	// turn car off
	if (this.state === 'on') {
		this.state = 'off';
	}
};

Car.prototype.driveTo = function(destination) {
	if(this.state === 'on') {
		console.log("Driving to ", destination);
	} else {
		console.log("Turn the car on first!");
	}
};

Car.prototype.park = function() {
	if(this.state === 'off') {
		console.log("Parked!")
	}
};

// Phase 3
// add passengers array
// pickup and drop off
Car.prototype.pickUp = function(name) {
	if (this.state === 'on') {
		this.passengers.push(name);
		console.log('Picked up ', name);
	}
};

Car.prototype.dropOff = function(name) {
	this.passengers.splice(this.passengers.indexOf(name), 1);
};


var car = new Car('bmw', 'm3', 2006, 'silver');

eval(locus);

