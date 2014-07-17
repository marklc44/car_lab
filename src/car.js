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
		return "Driving to " + destination;
	} else {
		return "Turn the car on first!";
	}
};

Car.prototype.park = function() {
	if(this.state === 'off') {
		return "Parked!";
	}
};

Car.prototype.pickUp = function(name) {
	if (this.state === 'on') {
		this.passengers.push(name);
		return 'Picked up ' + name;
	} else {
		return 'Turn the car on first!';
	}
};

Car.prototype.dropOff = function(name) {
	if (this.passengers.indexOf(name) !== -1 && this.state === 'on') {
		this.passengers.splice(this.passengers.indexOf(name), 1);
	} else if (this.state === 'off') {
		return "Turn the car on first!";
	} else {
		return name + " is not in the car!";
	}
	
};

// var newCar = new Car('chevy', 'camaro', '1979', 'mustard');

module.exports = Car;

//eval(locus);

