var manageDOM = (function() {
    var bufferingElements = [];

    function addDOMElement(parent, element, id, content) {

        var newDOMElement = document.createElement(element);
        newDOMElement.id = id;
        newDOMElement.appendChild(document.createTextNode(content));
        document.getElementById(parent).appendChild(newDOMElement);

        console.log("Added element " + element + " to the DOM");
    }
    
    function removeFromDOM(parent, element) {
        
        var elementSelector = parent + " > " + element;
        document.querySelector(element).remove();

        console.log("Removed element " + element + " from the DOM");
    }
    
    function attachEventListener(element, eventType, eventHanlder) {
    
        document.querySelector(element).addEventListener(eventType, eventHanlder, false);
        document.querySelector(element).style.color = "green";


        console.log("Attached Event handler to: " + element);
    }
    
    function addToBuffer(parent, element, className, content) {

        var newBufferingElement = document.createElement(element);
        newBufferingElement.class = className;
        newBufferingElement.appendChild(document.createTextNode(content));
        newBufferingElement.parent = parent;
        bufferingElements.push(newBufferingElement);

        if (bufferingElements.length >= 100) {

            for (var i = 0; i < bufferingElements.length; i++) {
               var currentParent = bufferingElements[i].parent;
               document.querySelector(currentParent).appendChild(bufferingElements[i]);
            };
            
            bufferingElements.length = 0;
        }

    }
    
    function getElementByCSS(selectorCSS) {
        
        var selectedElement = document.querySelectorAll(selectorCSS);
        console.log("Selected element: " + selectedElement);
        return selectedElement
    }
    


    return {
        addDOMElement: addDOMElement,
        removeFromDOM: removeFromDOM,
        attachEventListener: attachEventListener,
        addToBuffer: addToBuffer,
        getElementByCSS: getElementByCSS
    };
})();

function getChildCount (containerElement) {
    var container = document.querySelector(containerElement);

    var childCount = 0;
    if ('childElementCount' in container) {
        childCount = container.childElementCount;
    }
    else {
        if (container.children) {
            childCount = container.children.length;
        }
        else {  // Firefox before version 3.5
            var child = container.firstChild;
            while (child) {
                if (child.nodeType == 1 /*Node.ELEMENT_NODE*/) {
                    childCount++;
                }
                child = child.nextSibling;
            }
        }
    }
    if ((document.getElementsByTagName("script").length >= 1) && (containerElement == "body")) { childCount = childCount - document.getElementsByTagName("script").length;}
    return ("The number of child elements in <" + containerElement + "> is: " + childCount);
}

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

alert("I wrote 70 lines in console, please check it!" + '\n' + "It is sorted in groups for easy reading ;)");

//----------------Testing manageDOM.addDOMElement(); ------------------------//

console.group("Adding elements to the DOM using manageDOM.addDOMElement();");

console.log(getChildCount("#parentDiv"));
console.log("Using manageDOM.addDOMElement('parentDiv', 'div', 'newDOMElement', 'Div added with function 'addDOMElement(parent, element, id, content)'');");
manageDOM.addDOMElement("parentDiv", "div", "newDOMElement", "Div added with function 'addDOMElement(parent, element, id, content)' <--CLICK ME!");
console.log(getChildCount("#parentDiv"));
console.groupEnd();
//----------------Testing manageDOM.addDOMElement(); ------------------------//



//----------------Testing manageDOM.removeFromDOM(); ------------------------//

console.group("Removing elements from the DOM usin manageDOM.removeFromDOM();");

manageDOM.addDOMElement("parentDiv", "div", "soonToBeRemoved", "This element will soon be removed with manageDOM.removeFromDOM();");
console.log("Added new DOM Element, which will now be removed using manageDOM.removeFromDOM();");
console.log(getChildCount("#parentDiv"));
manageDOM.removeFromDOM("#parentDiv", "#soonToBeRemoved");
console.log(getChildCount("#parentDiv"));
console.groupEnd();
//----------------Testing manageDOM.removeFromDOM(); ------------------------//



//----------------Testing manageDOM.attachEventListener(); ------------------------//

console.group("Attaching Event listeners to DOM elements using manageDOM.attachEventListener();");

console.log("I will now attach event listener to the first-dynamicly-added div, and will color it green at the same time, just to be easier to see");
console.log("You can click on this div and the color of the background will turn to a RANDOM color");
manageDOM.attachEventListener("#newDOMElement", "click",  function (event) { document.body.style.backgroundColor = get_random_color(); });
console.groupEnd();
//----------------Testing manageDOM.attachEventListener(); ------------------------//



//----------------Testing manageDOM.addToBuffer(); ------------------------//

console.group("Adding elements to buffer using manageDOM.addToBuffer(); and appending them to the DOM after their count is 100");
console.log(getChildCount("#parentDiv"));
console.log("After adding 99 divs to buffer using a for cicle: ");
for (var i = 0; i < 99; i++) {
    manageDOM.addToBuffer("#parentDiv", "div", "newDivToBuffer", "Div added with function 'addToBuffer(parent, element, className, content)'");
};
console.log(getChildCount("#parentDiv"));
console.log("After one more: ");
manageDOM.addToBuffer("#parentDiv", "div", "newDivToBuffer", "Div added with function 'addToBuffer(parent, element, className, content)'");
console.log(getChildCount("#parentDiv"));
console.groupEnd();
//----------------Testing manageDOM.addToBuffer(); ------------------------//



//----------------Testing manageDOM.getElementByCSS------------------------//

console.group("Selecting DOM Elements using manageDOM.getElementByCSS():");

console.log("Using:  var selectedByCSS = manageDOM.getElementByCSS('#newDOMElement'); and then logging selectedByCSS we get: ");
var selectedByCSS = manageDOM.getElementByCSS('#newDOMElement');
console.log(selectedByCSS);
console.log("Using:  var manySelectedByCSS = manageDOM.getElementByCSS('.newDivToBuffer'); and then logging manySelectedByCSS we get: ");
var manySelectedByCSS = manageDOM.getElementByCSS('.newDivToBuffer');
console.log(manySelectedByCSS);
console.groupEnd();
//----------------Testing manageDOM.getElementByCSS------------------------//