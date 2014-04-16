var Person = Class.create({
	init: function (fname, lname, age) {
		this.fname = fname;
		this.lname = lname;
		this.age = age;
	},
	toString: function () {
		return this.fname + " " + this.lname + ", " + this.age + " years old";
	}
});

var people = [
	new Person("Pesho", "Slepiya", 23),
	new Person("Bulgar", "Vechen", 48),
	new Person("Kazan", "Rakiev", 21),
	new Person("Jordan", "Genkov", 16),
	new Person("Gosho", "Genkov", 19),
	new Person("Tynko", "Genkov", 32),
	new Person("Stamat", "Genkov", 71),
	new Person("Pesho", "Armagedonov", 87)
];

function seperateArray(array, nonRepArray, repsArray) {

	var prevName;

	_.each(array, function(crntName){

		if(crntName !== prevName) {
			nonRepArray.push(crntName);
			repsArray.push(1);
		}
			else {
				repsArray[repsArray.length - 1] += 1;
			}

		prevName = crntName;
	})
}

function getMostCommonName (people, name) {

	var fNames = _.pluck(people, name),
		arrayOfNonReapeatingNames = [],
		arrayOfRepetitions = [],
		indexOfMostPop;

	seperateArray(fNames, arrayOfNonReapeatingNames, arrayOfRepetitions);
	indexOfMostPop = arrayOfRepetitions.indexOf(_.max(arrayOfRepetitions));

	return arrayOfNonReapeatingNames[indexOfMostPop]

}

console.log("-----------------------------------------------------------------");
console.log("The people: " + people.join("; "));

console.log("-----------------------------------------------------------------");
console.log("The most popular first name is " + getMostCommonName(people, "fname"));

console.log("-----------------------------------------------------------------");
console.log("The most popular last name is " + getMostCommonName(people, "lname"));