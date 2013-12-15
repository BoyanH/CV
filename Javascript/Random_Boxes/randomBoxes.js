	function onGenerateBoxesButtonClick() {
		var contentDiv = document.getElementById("content"),
			count,
			i,
			div,
			strong,
			content;

		
		function getRandomInt(min, max) {
			
			return Math.floor(Math.random() * (max - min + 1) + min);
		}

		function getRandomColor() {
        	var letters = '0123456789ABCDEF'.split('');
        	var color = '#';
        		for (var i = 0; i < 6; i++) {
            		color += letters[Math.round(Math.random() * 15)];
        		}
        		return color;
    	}

		while (contentDiv.firstChild) {
			contentDiv.removeChild(contentDiv.firstChild);
		}

		count = (document.getElementById("tb-box-count").value || 5) | 0;

		for (i = 0; i < count; i++) {
			div = document.createElement("div");
			div.style.width = getRandomInt(20, 100) + "px";
			div.style.height = getRandomInt(20, 100) + "px";
			div.style.color = getRandomColor();
			div.style.borderRadius = getRandomInt(1, 50) + "px";
			div.style.borderColor = getRandomColor();
			div.style.borderWidth = getRandomInt(1, 20) + "px";
			div.style.border = "solid";
			div.style.position= "absolute";
			div.style.top= getRandomInt(10, 80) + "%";
			div.style.left= getRandomInt(0, 80) + "%";

			strong = document.createElement("strong");
			content = document.createTextNode("div");
			strong.appendChild( content );
			div.appendChild( strong );
			
			contentDiv.appendChild( div );

		}

	}