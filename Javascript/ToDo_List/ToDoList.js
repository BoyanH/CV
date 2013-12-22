(function (){

	var input,
		addBtn = document.querySelector("#addBtn"),
		hideBtn = document.querySelector("#hideBtn"),
		deleteBtn = document.querySelector("#deleteBtn"),
		showBtn = document.querySelector("#showBtn"),
		list = document.createElement("ul"),
		liCount,
		selectAllCreated = false;
		i = 1;

	//We create the function for adding a TODO li Element
	//note that here we create all our elements (li, label, input) and append them
	//later we only change or remove this values
	function add() {
		
		countLi();
		input = document.getElementsByTagName("input")[0].value;
		
		var newListItem = document.createElement("li");

		//Create the checkbox for selecting all elements. We check if it is created, as we want to have it only
		//once at the beginning of the list. I don't really know why I prefered to add it dynamically, I just
		//thought it is going to be cool xD
		if(!selectAllCreated) {
			selectAllCreated = true;

			var selectAllLi = document.createElement("li");
			selectAllLi.id = "selectAll";
			var selectBox = document.createElement("input");
			selectBox.type = "checkbox";
			selectBox.id = "selectBox";
			var selectLabel = document.createElement("label");
			selectLabel.htmlFor = "selectBox";
			selectLabel.appendChild(document.createTextNode("Select All"));

			selectAllLi.appendChild(selectBox);
			selectAllLi.appendChild(selectLabel);
			list.appendChild(selectAllLi);

		}

		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "checkbox";
		checkbox.id = "checkbox" + liCount;
		
		var label = document.createElement("label");
		label.htmlFor = "checkbox";
		label.appendChild(document.createTextNode(input));
		
		newListItem.appendChild(checkbox);
		newListItem.appendChild(label);
		list.appendChild(newListItem);
		document.body.appendChild(list);
		document.getElementsByTagName("input")[0].value = " ";
		document.querySelector("#selectBox").addEventListener("click", selectAll, true);

		countLi();
	}

	//We check if the selectAll box is checked - if it is, all others should be
	function selectAll() {

		console.log("called");
		countLi();

		if (document.querySelector("#selectBox").checked) {
			console.log("yes");
				for(var s = 1; s < liCount; s++) {
					document.querySelector("#checkbox" + s).checked = true;
				}
			}
		if (!document.querySelector("#selectBox").checked) {
			for(var s = 1; s < liCount; s++) {
				console.log("no");
				document.querySelector("#checkbox" + s).checked = false;
			}
		} 
	}


	//It would be much easier to select and check each element with simple getElementsByTagName(...)[x] in a for cicle
	//but as had some spare time and wanted to make it with IDs i need this function to count all Elements
	//and give each an ID (for example listItem5 for the fifth item)
	
	function countLi() {
		//It's important to call this function again on every change (add, delete)

		liCount = document.getElementsByTagName("li").length;
		
		for (var j = 1; j < liCount; j++) {

			document.getElementsByTagName("li")[j].id = "listItem" + j;
			document.getElementsByTagName("input")[j + 1].id = "checkbox" + j;
		}
	}

	//for the hide function we simply chech if an element's checkbox is checked
	//if it is, we set the display to none (item is not displayed on the HTML page)
	function hide() {

		countLi();
		
		for(var k = 1; k <= liCount; k++) {
			if (document.querySelector("#checkbox" + k).checked) {
				document.querySelector("#listItem" + k).style.display = "none";
				document.querySelector("#checkbox" + k).checked = false; //! very important. Otherwise when we remove an item when others
																		//are hidden, we will remove the hidden as well
			}
		}

		countLi();
	}

	//to show all Elements we simply set display property to an empty string, removing the "none"
	function showAll() {

		countLi();

		for (var i = 1; i <= liCount; i++) {

			document.querySelector("#listItem" + i).style.display = "";
		}

		countLi();
	}

	//We check if an element's box is checked, if it is - we remove that Element from the HTML
	function deleteLi() {

		countLi();
		for(var z = 1; z <= liCount; z++) {
			if (document.querySelector("#checkbox" + z).checked) {
				document.querySelector("#listItem" + z).remove();

			}
		}
		countLi();
	}

	//!Note that we have different letters for all the for cicle's. It is so in order to
	//prevent any conflicts; it's not so important for them to be always different, but in the counLi
	//function where we set IDs we REALLY need another variable.


	//We add our eventListeners for all the buttons.

	addBtn.addEventListener("click", add, true);
	hideBtn.addEventListener("click", hide, true);
	showBtn.addEventListener("click", showAll, true);
	deleteBtn.addEventListener("click", deleteLi, true);

	//call add function when enter is pressedS
	document.addEventListener("keypress", function (event) {
	    if (event.keyCode == 13) {
	        add();
	    }
	});

}());