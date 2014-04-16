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

function AllWithAgeBetweenEighteenAndTwentyFour (people) {

	this.people = people;
	var arrayOfMatchingPeople = _.filter(this.people, function (person) { return (person.age >= 18) && (person.age <= 24)}),
		stringifiedPeople = [];

	for (var person in arrayOfMatchingPeople) {

		stringifiedPeople.push("First Name: " + arrayOfMatchingPeople[person].fname + ", Last Name: " + arrayOfMatchingPeople[person].lname);
	}

	return stringifiedPeople
}

console.log("-----------------------------------------------------------------");
console.log("People with age between 18 and 24: ");
console.log(AllWithAgeBetweenEighteenAndTwentyFour(students));