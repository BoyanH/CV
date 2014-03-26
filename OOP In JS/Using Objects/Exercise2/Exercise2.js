(function () {
	
	var arr = [1,2,1,4,1,3,4,1,111,3,2,1,"1"];
	
	//dynamicly creating elements for cleaner HTML and styling them
	var beforeRemove = document.createElement("div");
	var beforeNode = document.createTextNode("Before remove: " + arr);
	beforeRemove.appendChild(beforeNode);
	document.body.appendChild(beforeRemove);

	var button = document.createElement("button");
	var buttonNode = document.createTextNode("arr.remove(removeInputNumber);");
	button.appendChild(buttonNode);
	document.body.appendChild(button);
	
	var input = document.createElement("input");
	input.type = "number";
	document.body.appendChild(input);

	var noteThatDiv = document.createElement("div");
	var noteThatNode = document.createTextNode("Note that I save the changes (splice) to the array, so if you first remove all number 1s and then later 2s, they will BOTH be removed ");
	noteThatDiv.appendChild(noteThatNode);

	var br = document.createElement("br");
	noteThatDiv.appendChild(br);

	var lastIsStringNode = document.createTextNode("Last number 1 is actually a string, therefore it doesn't get removed with our method, which removes numbers only (So is it in our task as well)")
	noteThatDiv.appendChild(lastIsStringNode);
	noteThatDiv.style.float = "right";
	noteThatDiv.style.marginRight = "20%";
	noteThatDiv.style.width = "400px";
	noteThatDiv.style.color = "red";
	noteThatDiv.style.border = "1px dashed yellow";
	document.body.appendChild(noteThatDiv);

	document.body.getElementsByTagName("button")[0].style.float = "left";

	
	//The prototype adding the method "remove()" to Arrays
	Array.prototype.remove = function(item) {
	    for (var i = 0; i < this.length; i++) {
	    	
	    	if(this[i] === item){
	    		this.splice(i, 1);
	    		i--;
	    	}

	    }
	    return this;
	};


	//using the already added .remove() method and printing the result on the html page
	function printResult() {

		var removeInputNumber = parseInt(document.getElementsByTagName("input")[0].value);
		var slicedArr = arr.remove(removeInputNumber);

		if(document.getElementById("answerDiv")) {

			document.getElementById("answerDiv").remove();
		}

		var answerDiv = document.createElement("div");
		answerDiv.id = "answerDiv";
		var textNode = document.createTextNode("Result: " + slicedArr);
		answerDiv.appendChild(textNode);
		document.body.appendChild(answerDiv);

	}

	//Adding Event listener for the button to activate the printResult function after choosing which number to remove from the array
	document.getElementsByTagName("button")[0].addEventListener("click", printResult);

}());