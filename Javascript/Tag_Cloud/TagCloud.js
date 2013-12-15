function execute() {

    //Here I check if the div later to be created is already there
    //(the function has been called before)
    //and I remove it to make place for the new div 
    if(document.getElementById("theContainer")) {
        document.getElementById("theContainer").remove();
    }

    function generateTagCloud(stings, minSize, maxSize) {
        var i = 0, j = 0, k = 0;
        var docFragment = document.createDocumentFragment();
        var addedNamesArray = [];


        for (i = 0; i < tags.length; i++) {
            var string = document.createElement("div");
            string.textContent = tags[i] + " ";
            string.style.display = "inline";

            var isAdded = false;

            //If it isn't already added (counted) we add it, but don't change its font
            for (var k = 0; k < addedNamesArray.length; k++) {
                if (tags[i].toLowerCase() === addedNamesArray[k].toLowerCase()) {
                    isAdded = true;
                    break;
                }
            }
            //We change each strings font with +10 for each time it is repeated
            if (!isAdded) {
                var bigger = parseInt(minSize) - 1;

                for (j = 0; j < tags.length; j++) {
                    if (tags[i].toLowerCase() === tags[j].toLowerCase()) {
                        bigger += 10;
                    }
                }

                if (bigger > maxSize) {
                    bigger = maxSize;
                }
                string.style.fontSize = bigger + "px";
                addedNamesArray.push(tags[i]);
                docFragment.appendChild(string);
            }
        }

        return docFragment;
    }

    //I wanted to make it a little bit better so I simply made it to read
    //min and max font as well as a given set of tags to make it more useful
    //although it wasn't required in our task
    var minFont = document.getElementById("minFont").value;
    var maxFont = document.getElementById("maxFont").value;
    var tags = document.getElementById("textarea").value.split(" ");
    
    //Here we simply call the function and print it in a javascript-created DIV        
    var tagCloud = generateTagCloud(tags, minFont, maxFont);

    var container = document.createElement("div");
    container.style.width = 800 + "px";
    container.style.height = 300 + "px";
    container.style.border = "3px solid gray";
    container.style.borderRadius = "10px"
    container.id = "theContainer";

    container.appendChild(tagCloud);
    document.body.appendChild(container);
    console.log(tags);
}