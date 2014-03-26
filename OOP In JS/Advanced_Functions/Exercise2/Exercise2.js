var header = document.createElement("h3");
header.appendChild(document.createTextNode("Обичам всичко да е дискотека, затова абсолютно всеки генериран елемент е на случайно място" +
" и със случайни цветове. Дори движенията са в различни посоки ^.^"));
header.style.width = "600px";
header.style.textAlign = "center";
header.style.color = "purple";
header.style.margin = "0 auto";
document.body.appendChild(header);
document.body.style.backgroundColor = "skyblue";


// ------------------------------------------MODULE------------------------------------//
var movingShapes = (function () {

	var spheres = [],
		rects = [];

	var sphereRadius = 4, // in %
		sphereAngle = 0,
		rectMaxDistance = 6, // in %
		rectangleSpeed = 0.3; // in %

    var sphereBeginningPosLeft = [],
    	sphereBeginningPosTop = [],
    	currentSphereAngle = [],
    	rectBeginningPosLeft = [],
    	rectBeginningPosTop = [];

    function startMoving() {
        attachEventHandler("#addSpheresBtn", "click", addMovingDiv("sphere"));
        attachEventHandler("#addRectsBtn", "click", addMovingDiv("rect"));
    }	

	function getRandomInt(min, max) {
		
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function getRandomColor() {
	    
	    return 'rgba(' + [
			getRandomInt(0, 255),
			getRandomInt(0, 255),
			getRandomInt(0, 255),
			getRandomInt(0, 255)
		].join(', ') + ')';
	}

	function pausecomp(millis) {

		var date = new Date();
		var curDate = null;

		do { curDate = new Date(); } 
		while(curDate-date < millis);
		}

	function addMovingDiv(typeOfMovement) {

		if (typeOfMovement == "sphere") {

			var newMovingSphereDiv = document.createElement("div");
			spheres.push(newMovingSphereDiv);
			newMovingSphereDiv.setAttribute("class", "sphere");
			newMovingSphereDiv.style.width = "100px";
			newMovingSphereDiv.style.height = "100px";
			newMovingSphereDiv.appendChild(document.createTextNode("Div moving in circular motion"));
			newMovingSphereDiv.style.position = "absolute";
			newMovingSphereDiv.style.top = (Math.random() * (75 - 0) + 0) + "%";
			newMovingSphereDiv.style.left = (Math.random() * (80 - 0) + 0) + "%";
			newMovingSphereDiv.style.color = getRandomColor();
			newMovingSphereDiv.style.backgroundColor = getRandomColor();
			newMovingSphereDiv.style.border = "3px " + "dotted " + getRandomColor();
			newMovingSphereDiv.style.borderRadius = "15px";
			newMovingSphereDiv.style.padding = "10px";
			document.getElementsByTagName("body")[0].appendChild(newMovingSphereDiv);

		};

		if (typeOfMovement == "rect") {

			var newMovingRectDiv = document.createElement("div");
			rects.push(newMovingRectDiv);
			newMovingRectDiv.setAttribute("class", "rect");
			newMovingRectDiv.style.width = "100px";
			newMovingRectDiv.style.height = "100px";
			newMovingRectDiv.appendChild(document.createTextNode("Div moving in rectangular motion"));
			newMovingRectDiv.style.position = "absolute";
			newMovingRectDiv.style.top = (Math.random() * (75 - 0) + 0) + "%";
			newMovingRectDiv.style.left = (Math.random() * (80 - 0) + 0) + "%";
			newMovingRectDiv.style.color = getRandomColor();
			newMovingRectDiv.style.backgroundColor = getRandomColor();
			newMovingRectDiv.style.border = "3px " + "dotted " + getRandomColor();
			newMovingRectDiv.style.borderRadius = "15px";
			newMovingRectDiv.style.padding = "10px";
			document.getElementsByTagName("body")[0].appendChild(newMovingRectDiv);

		};

		console.log("Number of DIVs: " + document.querySelectorAll("div").length);
	}

	function animateSpheres () {

	    var offsetAngle = 2 * Math.PI / spheres.length;

	    for (var i=0; i < spheres.length; i++) {
	        var sphere = spheres[i];

	        if(sphereBeginningPosLeft.length < i+1) {

		        var newPosLeft = sphere.style.left.slice(0, -1)*1;
		        sphereBeginningPosLeft.push(newPosLeft);
		        
		        var newPosTop = sphere.style.top.slice(0, -1)*1;
		        sphereBeginningPosTop.push(newPosTop);

		        var newSphereAngle = Math.random()*10;
		        currentSphereAngle.push(newSphereAngle);
		    }

	        sphere.style.left = sphereBeginningPosLeft[i] + ((Math.sin(currentSphereAngle[i]) * sphereRadius) + sphereRadius) + "%";
	        sphere.style.top = sphereBeginningPosTop[i] + ((Math.cos(currentSphereAngle[i]) * sphereRadius) + sphereRadius) + "%";
	        currentSphereAngle[i] = currentSphereAngle[i] + 0.1;
	    }

	    setTimeout(animateSpheres,50);
	}

	animateSpheres();

	function animateRects () {

		var directions = ['up', 'right', 'down', 'left'];
		var randomIndex = Math.floor(Math.random() * directions.length);
		var randomDirection = directions[randomIndex];

		for (var k = 0; k < rects.length; k++) {
			
			var randomIndex = Math.floor(Math.random() * directions.length);
			var randomDirection = directions[randomIndex];
			var rect = rects[k]

			if(rectBeginningPosTop.length < rects.length) {

				var newPosLeft = rect.style.left.slice(0, -1)*1;
				rectBeginningPosLeft.push(newPosLeft);
				
				var newPosTop = rect.style.top.slice(0, -1)*1;
				rectBeginningPosTop.push(newPosTop);

				rect.directions = randomDirection;
			}

			if(!rect.directions) {
				rect.directions = randomDirection;

				if(randomDirection == "down") {
					
					rectBeginningPosTop[k] = rect.style.top.slice(0, -1)*1 + 2*rectMaxDistance;
					rectBeginningPosLeft[k] = rect.style.left.slice(0, -1)*1 - rectMaxDistance;
				}


				if(randomDirection == "left") {
					
					rectBeginningPosLeft[k] = rect.style.left.slice(0, -1)*1 - rectMaxDistance;
				}

				if(randomDirection == "right") {

					rectBeginningPosTop[k] = rect.style.top.slice(0, -1)*1 + 2*rectMaxDistance;
				}
			}


			if(rect.directions == "up") {

				rect.style.top = rect.style.top.slice(0, -1)*1 - rectangleSpeed*2 + "%";

				if(rectBeginningPosTop[k] - rect.style.top.slice(0, -1)*1 >= rectMaxDistance*2) {
					rect.directions = "right";
				}
			}

			else if(rect.directions == "right") {

				rect.style.left = rect.style.left.slice(0, -1)*1 + rectangleSpeed + "%";

				if(rect.style.left.slice(0, -1)*1 - rectBeginningPosLeft[k] >= rectMaxDistance) {
					rect.directions = "down";
				}
			}

			else if(rect.directions == "down") {

				rect.style.top = rect.style.top.slice(0, -1)*1 + rectangleSpeed*2 + "%";

				if(rect.style.top.slice(0, -1)*1 - rectBeginningPosTop[k] >= rectMaxDistance*2) {
					rect.directions = "left";
				}
			}

			else if(rect.directions == "left") {

				rect.style.left = rect.style.left.slice(0, -1)*1 - rectangleSpeed + "%";

				if(rectBeginningPosLeft[k] - rect.style.left.slice(0, -1)*1 >= rectMaxDistance) {
					rect.directions = "up";
				}
			}

		}
		setTimeout(animateRects,50);
	}

	animateRects();

	return {

		addMovingDiv: addMovingDiv
	};

}());
// ------------------------------------------END OF MODULE------------------------------------//

movingShapes.addMovingDiv("sphere");
movingShapes.addMovingDiv("sphere");
movingShapes.addMovingDiv("rect");
movingShapes.addMovingDiv("rect");