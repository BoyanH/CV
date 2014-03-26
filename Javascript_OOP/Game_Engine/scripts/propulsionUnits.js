var PropulsionUnits = (function () {

	function Wheel(radius) {

		this.radius = radius;
		this.acceleratingPerimeter = 2*Math.PI*this.radius;
		this.acceleration = this.acceleratingPerimeter;
		
		return {
			acceleration: this.acceleration,
			radius: this.radius,
			acceleratingPerimeter: this.acceleratingPerimeter
		};
	}

	function PropellingNozzle(power, afterburner) {

		this.power = power;
		this.afterburner = afterburner;

		if(this.afterburner == "on") {
				this.acceleration = this.power*2;
			} 
			else if(this.afterburner == "off") {
				this.acceleration = this.power;
			}
		

		function switchAfterburner() {
			if(this.afterburner == "off") {
					this.afterburner = "on";
				}
				
			else if(this.afterburner == "on") {
				this.afterburner = "off";
			}
			

			if(this.afterburner == "on") {
				this.acceleration = this.power*2;
			} 
			else if(this.afterburner == "off") {
				this.acceleration = this.power;
			}
			
			return this.acceleration
		}

		return {
			
			power: this.power,
			afterburner: this.afterburner,
			switchAfterburner: switchAfterburner,
			acceleration: this.acceleration
		};
	}

	function Propeller(fins, spinDirection) {

		this.spinDirection = spinDirection;
		this.fins = fins;

		if(this.spinDirection == "clockwise") {

				this.acceleration = this.fins;
			}
			
			else if(this.spinDirection == "counterClockwise") {

				this.acceleration = this.fins*-1;
			}

		this.changeSpinDirection = function() {

			if(this.spinDirection == "clockwise") {

				this.spinDirection = "counterClockwise";
			}
			
			else if(this.spinDirection == "counterClockwise") {

				this.spinDirection = "clockwise";
			}

			if(this.spinDirection == "clockwise") {

				this.acceleration = this.fins;
			}
			
			else if(this.spinDirection == "counterClockwise") {

				this.acceleration = this.fins*-1;
			}
		};

		return{

			spinDirection: this.spinDirection,
			acceleration: this.acceleration,
			fins: this.fins,
			changeSpinDirection: this.changeSpinDirection

		};
	}

	return {

		Wheel: Wheel,
		PropellingNozzle: PropellingNozzle,
		Propeller: Propeller
		
	};

}());