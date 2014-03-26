(function () {
	
	function buildPerson(fname, lname, age) {
	  return {
	    fname : fname, 
	    lname : lname,
	    age : age,
	    toString:function (){return this.fname + " " + this.lname;}
	  }
	}

	var gosho = buildPerson("Gosho","Petrov", 32);
	var bay = buildPerson("Bay","Ivan", 81);
	var martin = buildPerson("Martin", "Soederstroem", 24)

	var persons = [bay, gosho, martin];

	function determinYoungestPerson(arrayOfPersons) {

		var youngestPerson = arrayOfPersons[0];
		for (var i=0; i<arrayOfPersons.length; i++) {

			if (arrayOfPersons[i].age < youngestPerson.age) {

				youngestPerson = arrayOfPersons[i];
			}	
		}

		return youngestPerson	}

	jsConsole.writeLine("The array of persons is:");
	jsConsole.writeLine(JSON.stringify(persons));
	jsConsole.writeLine("-------------------------")
	jsConsole.writeLine("The youngest person is: ")
	jsConsole.writeLine(determinYoungestPerson(persons).toString());

}());