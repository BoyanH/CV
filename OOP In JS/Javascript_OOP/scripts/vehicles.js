var Vehicle = (function() {

	function Car(wheelRadius) {

		var carWheel = new PropulsionUnits.Wheel(wheelRadius);
		this.speed = 0;

		this.accelerate = function () {

			this.speed += 4*carWheel.acceleration;
		}

		this.brake = function() {

			if (this.speed > 0){
				this.speed -= 4*carWheel.acceleration;
			}
		}

		return {

			speed: this.speed,
			brake: this.brake,
			accelerate: this.accelerate
		}
	}

	function Aircraft(power, isAfterburnerOnOrOf) {

		var propellingNozzle = new PropulsionUnits.PropellingNozzle(power, isAfterburnerOnOrOf);
		this.speed = 0;

		this.accelerate = function() {

			this.speed += propellingNozzle.acceleration;
		}

		this.brake = function() {

			if (this.speed > 0){
				this.speed -= propellingNozzle.acceleration;
			}
		}

		this.switchAfterburner = function() {

			propellingNozzle.switchAfterburner();
		}

		return {

			speed: this.speed,
			brake: this.brake,
			accelerate: this.accelerate,
			switchAfterburner: this.switchAfterburner
		}
	}

	function Boat(numberOfPropellers, finsPerPropeller, propellersSpinDirection) {

		this.numberOfPropellers = numberOfPropellers;
		var propeller = new PropulsionUnits.Propeller(finsPerPropeller, propellersSpinDirection);
		this.speed = 0;

		this.accelerate = function() {
			this.speed += propeller.acceleration*numberOfPropellers;
		}

		this.brake = function() {

			if (this.speed > 0){
				this.speed -= propeller.acceleration*numberOfPropellers;
			}
		}

		this.changePropellerSpinDirection = function() {

			propeller.changeSpinDirection();
		}

		return {

			speed: this.speed,
			brake: this.brake,
			accelerate: this.accelerate,
			changePropellerSpinDirection: this.changePropellerSpinDirection
		}
	}

	function Amphibia(wheelRadius, finsPerPropeller, propellersSpinDirection, mode) {

		this.speed = 0;
		var self = this;
		self.mode = mode;

		var amphibiaWheel = new PropulsionUnits.Wheel(wheelRadius);
		var amphibiaPropeller = new PropulsionUnits.Propeller(finsPerPropeller, propellersSpinDirection);

		this.changeMode = function () {
			

			if (self.mode == "land") {

				self.mode = "water";
			}

			else if(self.mode == "water") {

				self.mode = "land";
			}

		}

		this.accelerate = function() {
			if(self.mode == "water"){
				this.speed += amphibiaPropeller.acceleration;
			}
			else if(self.mode == "land"){
				this.speed += 4*amphibiaWheel.acceleration;
			}
		}

		this.brake = function() {

			if (this.speed > 0){
				if(self.mode == "water"){
				this.speed -= amphibiaPropeller.acceleration;
			}
			else if(self.mode == "land"){
				this.speed -= 4*amphibiaWheel.acceleration;
			}
			}
		}

		this.changePropellerSpinDirection = function() {

			amphibiaPropeller.changeSpinDirection();
		}

		return {

			speed: this.speed,
			mode: this.mode,
			changeMode: self.changeMode,
			accelerate: this.accelerate,
			brake: this.brake,
			changePropellerSpinDirection: this.changePropellerSpinDirection
		}

	}

	return {

		Car: Car,
		Aircraft: Aircraft,
		Boat: Boat,
		Amphibia: Amphibia
	}

}());