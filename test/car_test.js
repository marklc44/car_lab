

var car = require('../car.js'),
	expect = require('chai').expect;

describe('car', function() {

	beforeEach(function() {
		car.color = 'mustard';
		car.currentOwner = 'chevy';
		car.state = 'off';
		car.passengers = [];
	});

	describe('#Car', function() {
		it('should not set car.currentOwner to BMW', function() {
			car.make = 'bmw';
			expect(car.currentOwner).to.equal('chevy');
		});
		it('should set car.model to fairlane', function() {
			car.model = 'fairlane';
			expect(car.model).to.equal('fairlane');
		});
	});

	describe('#sale', function() {
		it('should set currentOwner to a new name', function() {
			car.sale('john');
			expect(car.currentOwner).to.equal('john');
			expect(car.previousOwners).to.deep.equal(['chevy']);
		});
	});

	describe('#paint', function() {
		it('should change car.paint color', function() {
			car.paint('midnight');
			expect(car.color).to.equal('midnight');
		})
	})

	describe('#start', function() {
		it('should change state to on', function() {
			car.start();
			expect(car.state).to.equal('on');
		})
	})

	describe('#off', function() {
		it('should change car.state to off', function() {
			car.off();
			expect(car.state).to.equal('off');
		})
	})

	describe('#driveTo', function() {
		it('should return "Driving to hawaii"', function() {
			car.start();
			expect(car.driveTo('hawaii')).to.equal("Driving to hawaii");
		})
	})

	describe('#park', function() {
		it('should return "Parked!"', function() {
			car.off();
			expect(car.park()).to.equal("Parked!");
		})
	})

	describe('#pickUp', function() {
		it('should add "bob" to the passengers array', function() {
			car.start();
			car.pickUp('bob');
			expect(car.passengers).to.deep.equal(['bob']);
		});
		it('should add "bob" to the passengers array', function() {
			expect(car.pickUp('bob')).to.equal('Turn the car on first!');
		});
	})

	describe('#dropOff', function() {
		it('should remove "bob" from car.passengers', function() {
			car.start();
			car.pickUp('bob');
			car.dropOff('bob');
			expect(car.passengers).to.deep.equal([]);
		});
		it('should return "Turn the car on first!"', function() {
			expect(car.dropOff('bob')).to.equal('Turn the car on first!');
		});
		it('should return "bob is not in the car!"', function() {
			car.start();
			expect(car.dropOff('bob')).to.equal('bob is not in the car!');
		});
	})

});


















