var Student = Class.create({
	init: function (fname, lname, age) {
		this.fname = fname;
		this.lname = lname;
		this.age = age;
	},
	toString: function () {
		return this.fname + " " + this.lname;
	}
});

var students = [
	new Student("Pesho", "Slepiya", 23),
	new Student("Bulgar", "Vechen", 48),
	new Student("Kazan", "Rakiev", 21),
	new Student("Jordan", "Genkov", 16),
	new Student("Stamat", "Armagedonov", 87)
];

function checkIfFirstNameBeforeLastName (people) {

	this.people = people;
	var arrayOfMatchingPeople = _.filter(this.people, function (person) { return person.fname < person.lname }),
		stringifiedPeople = [];

	for (var person in arrayOfMatchingPeople) {

		stringifiedPeople.push(arrayOfMatchingPeople[person].toString());
	}

	return stringifiedPeople
}

console.log("-----------------------------------------------------------------");
console.log("People, whose first name is before its last name alphabetically: ");
console.log(checkIfFirstNameBeforeLastName(students));