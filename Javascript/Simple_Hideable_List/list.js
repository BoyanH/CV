(function (){

	//We create the main list
	var docFragment = document.createDocumentFragment();
	var list = document.createElement("ul");
	var listItem = document.createElement("li");
	listItem.textContent = "Item";
	list.appendChild(listItem);

	//With a for cicle we clone 4 more li items
	for(var i=1; i<5; i++) {
		
		var listItemN = "listItem" + i;
		var listItemN = listItem.cloneNode(true);
		list.appendChild(listItemN)
	//If we click on subSublist, we practically click on subList too, therefore
	//we put the third "Item" in a span, to make sure one clicked exactly on it
	//to prevent preclosing of the list
	//It is better to put all the text of the li items in such spans, but I am quite lazy today
		if(i === 2) {
			var listItem3 = listItemN;
			listItem3.textContent = "";
			var clickSpot = document.createElement("span");
			clickSpot.textContent = "Item";
			listItem3.appendChild(clickSpot);
		}
	}

	//We create the 1 Sublist
	var subList = document.createElement("ul");
	var subItem = document.createElement("li");
	subItem.textContent = "Sub Item";
	subList.appendChild(subItem);
	var subItem2 = subItem.cloneNode(true);
	subList.appendChild(subItem2);
	subList.style.position = "relative";
	subList.style.left = "20px"
	listItem3.appendChild(subList);
	subList.style.display = "none";

	//We just clone the 1 Sublist to make the second as they are same
	var subSublist = subList.cloneNode(true);
	subList.appendChild(subSublist);
	subSublist.style.display = "none";

	function reveal() {
		//We check if the sublist is hidden. If it is we reveal it
		if(subList.style.display == "none") {
			subList.style.display = "inline";
		}
		//If it isn't, we hide it
			else {
				subList.style.display = "none";
			}
	}

	function revealTwo() {
		//We check if the sublist is hidden. If it is we reveal it
		if(subSublist.style.display == "none") {
			subSublist.style.display = "inline";
		}
		//If it isn't, we hide it
			else {
				subSublist.style.display = "none";
			}
	}


	//We add our event listeners for click, so the sublist are shown on click
	clickSpot.addEventListener("click", reveal, false);
	subItem2.addEventListener("click", revealTwo, false);

	//We append our creation to the HTML document
	docFragment.appendChild(list);
	document.body.appendChild(docFragment);


}())