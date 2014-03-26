(function (){
	
	var	answerDistance = document.getElementById("answerDistance"),
		answerTriangle = document.getElementById("answerTriangle"),
		distanceButton = document.getElementsByTagName("button")[0],
		triangleButton = document.getElementsByTagName("button")[1],
		linesDivExists = false,

		XValueOne = function() { var xValueOne = parseInt(document.getElementById("xCoordinatOne").value, 10);  return xValueOne; },
		XValueTwo = function() { var xValueTwo = parseInt(document.getElementById("xCoordinatTwo").value, 10); return xValueTwo; },
		YValueOne = function() { var yValueOne = parseInt(document.getElementById("yCoordinatOne").value, 10); return yValueOne; },
		YValueTwo = function() { var yValueTwo = parseInt(document.getElementById("yCoordinatTwo").value, 10); return yValueTwo; };

	
	var XOne = function() { var xOne = parseInt(document.getElementById("xOne").value, 10); return xOne;},
		YOne = function() { var yOne = parseInt(document.getElementById("yOne").value, 10); return yOne;},

		XTwo = function() { var xTwo = parseInt(document.getElementById("xTwo").value, 10); return xTwo;},
		YTwo = function() { var yTwo = parseInt(document.getElementById("yTwo").value, 10); return yTwo;},

		XThree = function() { var xThree = parseInt(document.getElementById("xThree").value, 10); return xThree;},
		YThree = function() { var yThree = parseInt(document.getElementById("yThree").value, 10); return yThree;},

		XFour = function() { var xFour = parseInt(document.getElementById("xFour").value, 10); return xFour;},
		YFour = function() { var yFour = parseInt(document.getElementById("yFour").value, 10); return yFour;},

		XFive = function() { var xFive = parseInt(document.getElementById("xFive").value, 10); return xFive;},
		YFive = function() { var yFive = parseInt(document.getElementById("yFive").value, 10); return yFive;},

		XSix = function() { var xSix = parseInt(document.getElementById("xSix").value, 10); return xSix;},
		YSix = function() { var ySix = parseInt(document.getElementById("ySix").value, 10); return ySix;};

	function calculateDistance(xOne, xTwo, yOne, yTwo) {

		var distanceX = Math.abs(xOne - xTwo),
			distanceY = Math.abs(yOne - yTwo),
			distance = Math.sqrt(distanceX*distanceX + distanceY*distanceY);

		return distance;
	}



	function canFormTriangle() {

		var xOne = XOne(),
			yOne = YOne(),
			xTwo = XTwo(),
			yTwo = YTwo(),
			xThree = XThree(),
			yThree = YThree(),
			xFour = XFour(),
			yFour = YFour(),
			xFive = XFive(),
			yFive = YFive(),
			xSix = XSix(),
			ySix = YSix();

		var lineOne = calculateDistance(xOne, xTwo, yOne, yTwo),
			lineTwo = calculateDistance(xThree, xFour, yThree, yFour),
			lineThree = calculateDistance(xFive, xSix, yFive, ySix),
			longestLine = Math.max(lineOne, lineTwo, lineThree);

		answerTriangle.style.display = "block";

		if (!isNaN(longestLine)) {
			
					if ((lineOne==0 || lineTwo==0) || lineThree==0) {
					answerTriangle.innerHTML = "Lines are equal or less than zero, no triangle can be formed."
					}
						else if (longestLine > lineOne + lineTwo + lineThree - longestLine) {
							answerTriangle.innerHTML = "Triangle can not be formed. One of the lines is bigger than the sum of the other two.";
						}
							else {
								answerTriangle.innerHTML = "Yes, a triangle can be formed with the given three lines.";
							}
		}
			else {
				answerTriangle.innerHTML = "Please enter all coordinats in numbers!";
			}

		

		if (isNaN(lineOne)) { lineOne = "Line one does not exist!"}
		if (isNaN(lineTwo)) { lineTwo = "Line two does not exist!"}
		if (isNaN(lineThree)) { lineThree = "Line three does not exist!"}

		if (linesDivExists) {
			console.log("ima, da xD");
			document.getElementById("linesDiv").remove();
			linesDivExists = false;
		}

		linesDivExists = true;
		var linesDiv = document.createElement("div"),
			linesDivNode = document.createTextNode("The length of the three lines is as follows: ");
		linesDiv.appendChild(linesDivNode);

		var list = document.createElement("ul"),
			liLineOne = document.createElement("li"),
			liOneNode = document.createTextNode("Line 1: " + lineOne);
		liLineOne.appendChild(liOneNode);

		var liLineTwo = document.createElement("li"),
			liTwoNode = document.createTextNode("Line 2: " + lineTwo);
		liLineTwo.appendChild(liTwoNode);

		var liLineThree = document.createElement("li"),
			liThreeNode = document.createTextNode("Line 3 " + lineThree);
		liLineThree.appendChild(liThreeNode);
		
		list.appendChild(liLineOne);
		list.appendChild(liLineTwo);
		list.appendChild(liLineThree);
		linesDiv.appendChild(list);
		linesDiv.id = "linesDiv";
		linesDiv.style.border = "1px dotted gray";
		linesDiv.style.width = "400px";
		linesDiv.style.marginTop = "7px";
		document.body.appendChild(linesDiv);

	}

	function printDistance() {

		var xValueOne = XValueOne(),
			xValueTwo = XValueTwo(),
			yValueOne = YValueOne(),
			yValueTwo = YValueTwo(),
			result = calculateDistance(xValueOne, xValueTwo, yValueOne, yValueTwo);
		
		answerDistance.style.display = "block";

		if (isNaN(result)) {

			answerDistance.innerHTML = "Please enter all coordinats in numbers!";
		}
			else {
				answerDistance.innerHTML = "The distance between the given two points is: " + result;
			}
	}


	distanceButton.addEventListener("click", printDistance);
	triangleButton.addEventListener("click", canFormTriangle);
}());