(function () {

	var boyan = {name: "Boyan", grade: 11};
	var ady = {};

	function makeDeepCopyOf(obj, result){
	    if(obj==null || typeof obj != 'object'){
	        //nothing really to do here - you're going to lose the reference to result if you try an assignment
	    }
	    if(obj instanceof Array) {
	        for(var i=0; i<obj.length; i++){
	            result.push();
	            processObjWithRef(obj[i], result[i]);
	        }
	    }    
	    if(obj instanceof Object){
	        for(var k in obj){
	            var count=0;
	            if(obj[k]==null || typeof obj[k] != 'object'){
	                result[k] = obj[k];
	            }else if(obj[k] instanceof Array) {
	                result[k] = [];
	                processObjWithRef(obj[k], result[k]);
	            }else if(obj[k] instanceof Object){
	                result[k] = {};
	                for( var attr in obj[k]){
	                    processObjWithRef(obj[k], result[k]);
	                }
	            }
	        }
	    }
	}

	makeDeepCopyOf(boyan, ady);	

	jsConsole.writeLine("--------------------------");
	jsConsole.writeLine("Main object (boyan)");
	jsConsole.writeLine(JSON.stringify(boyan));
	jsConsole.writeLine("--------------------------");

	jsConsole.writeLine("copied object (ady) ");
	jsConsole.writeLine(JSON.stringify(ady));
	jsConsole.writeLine("--------------------------");

	ady.name = "Adelina";

	jsConsole.writeLine("!!!!!!!!!!!!!!!!!!!!!!!!!!");
	jsConsole.writeLine("After: ady.name = 'Adelina'; ");
	jsConsole.writeLine("!!!!!!!!!!!!!!!!!!!!!!!!!!");

	jsConsole.writeLine("--------------------------");
	jsConsole.writeLine("Main object (boyan)");
	jsConsole.writeLine(JSON.stringify(boyan)); // Logs "Boyan", object boyan's property name was asigned to object ady by value, not by reference (deep copy)
	jsConsole.writeLine("--------------------------");

	jsConsole.writeLine("copied object (ady) ");
	jsConsole.writeLine(JSON.stringify(ady));
	jsConsole.writeLine("--------------------------");

	jsConsole.writeLine("Changing the property name of Object ady didn't affect object boyan, because ady is a deep copy of boyan, not just a reference");

}())