(function (){

	var car = new Vehicle.Car(15),
		aircraft = new Vehicle.Aircraft(50, "off"),
		boat = new Vehicle.Boat(2, 10, "clockwise"),
		amphibia = new Vehicle.Amphibia(6, 1, "clockwise", "water"),
		
		supra = document.querySelectorAll("img")[0],
		fishingBoat = document.querySelectorAll("img")[1],
		hely = document.querySelectorAll("img")[2],
		seaWays = document.querySelectorAll("img")[3];

		supra.style.left = "80%";
		fishingBoat.style.left = "80%";


	var input = document.getElementsByName("focus");
	for(var i = 0; i<input.length; i++) {

		input[i].addEventListener("change", function(){
    		getCheckedRadioValue("focus");
		}, false);	
	}

	function getCheckedRadioValue(radioGroupName) {
	    var rads = document.getElementsByName(radioGroupName),  i;
	    this.value = 0;

	    for (i = 0; i < rads.length; i++) {
	        if (rads[i].checked) {
	            this.value = rads[i].value;
	            return rads[i].value
	        }
	    }
	    return {
	        value: this.value
	    }
	}

	document.addEventListener('keydown', function (event) {

            if (event.keyCode == 38) {
            	switch (value) {

            		case "car": car.accelerate(); break;
            		case "boat": boat.accelerate(); break;
            		case "aircraft": aircraft.accelerate(); break;
            		case "amphibia": amphibia.accelerate(); break;
            		default: console.log("Nothing is checked!"); break;
            	}
        }
     });

	document.addEventListener('keydown', function (event) {

            if (event.keyCode == 40) {
            	switch (value) {

            		case "car": car.brake(); break;
            		case "boat": boat.brake(); break;
            		case "aircraft": aircraft.brake(); break;
            		case "amphibia": amphibia.brake(); break;
            		default: console.log("Nothing is checked!"); break;
            	}
        }
     });

	document.getElementById("changeSpin").addEventListener("click", boat.changePropellerSpinDirection, false);
	document.getElementById("switchAfterburner").addEventListener("click", aircraft.switchAfterburner, false);
	document.getElementById("changeMode").addEventListener("click", amphibia.changeMode, false);

	function animationFrame(){

		supra.style.left = supra.style.left.slice(0, -1)*1 - car.speed/10000 + "%";
		fishingBoat.style.left = fishingBoat.style.left.slice(0, -1)*1 - boat.speed/10000 + "%";
		hely.style.left = hely.style.left.slice(0, -1)*1 + aircraft.speed/10000 + "%";
		seaWays.style.left = seaWays.style.left.slice(0, -1)*1 + amphibia.speed/10000 + "%";

		if(supra.style.left.slice(0, -1)*1 <= 0) {

			supra.style.left = "80%";
		}

		if(fishingBoat.style.left.slice(0, -1)*1 <= 0) {

			fishingBoat.style.left = "80%";
		}

		if(fishingBoat.style.left.slice(0, -1)*1 >= 81) {

			fishingBoat.style.left = "0%";
		}

		if(hely.style.left.slice(0, -1)*1 >= 80) {

			hely.style.left = "0%";
		}

		if(seaWays.style.left.slice(0, -1)*1 >= 80) {

			seaWays.style.left = "0%";
		}
		
		requestAnimationFrame(animationFrame);
	}
	requestAnimationFrame(animationFrame);

}())