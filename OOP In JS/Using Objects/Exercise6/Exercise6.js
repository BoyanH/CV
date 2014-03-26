var gosho = buildPerson("Gosho","Cankov", 52),
	bay = buildPerson("Bay","Ivan", 81),
	martin = buildPerson("Stamat", "Soederstroem", 21),
	georgi = buildPerson ("Bay", "Ivanov", 21),
	stamat = buildPerson("Stamat", "Cankov", 52),
	nedelcho = buildPerson("Nedelcho", "Ivanov", 21);

var persons = [gosho, bay, martin, georgi, stamat, nedelcho];

function buildPerson(fname, lname, age) {
	return {
		fname : fname, 
		lname : lname,
	    age : age,
	    toString:function (){return this.fname + " " + this.lname;}
	}
}

function group(people, prop) {
    switch (prop) {
        case "fname":
        case "lname":
        case "age":
            {
                var groups = {};

                people.map(function (p) {
                    if (!groups[p[prop]])
                        groups[p[prop]] = new Array();
                    groups[p[prop]].push(p);
                });

                return groups;
            }
        default:
            throw new Error("There is no property " + prop + " in Person.");
    }
}

(function () {

	jsConsole.writeLine("----------------------------------------------------------------------------");
	jsConsole.writeLine("Array of persons: ");
	jsConsole.writeLine(" ");
	jsConsole.writeLine(JSON.stringify(persons));
	jsConsole.writeLine("----------------------------------------------------------------------------");

	jsConsole.writeLine("----------------------------------------------------------------------------");
	jsConsole.writeLine("Group by age: ");
	jsConsole.writeLine(" ");
	jsConsole.writeLine(JSON.stringify(group(persons, "age")));
	jsConsole.writeLine("----------------------------------------------------------------------------");

	jsConsole.writeLine("----------------------------------------------------------------------------");
	jsConsole.writeLine("Group by first name: ");
	jsConsole.writeLine(" ");
	jsConsole.writeLine(JSON.stringify(group(persons, "fname")));
	jsConsole.writeLine("----------------------------------------------------------------------------");

	jsConsole.writeLine("----------------------------------------------------------------------------");
	jsConsole.writeLine("Group by last name: ");
	jsConsole.writeLine(" ");
	jsConsole.writeLine(JSON.stringify(group(persons, "lname")));
	jsConsole.writeLine("----------------------------------------------------------------------------");

}());
