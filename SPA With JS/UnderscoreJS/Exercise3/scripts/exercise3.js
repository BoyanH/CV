var Student = Class.create({
	init: function (fname, lname, age, marks) {
		this.fname = fname;
		this.lname = lname;
		this.age = age;
		this.marks = marks;
	},
	toString: function () {
		return this.fname + " " + this.lname + ", Marks: " + JSON.stringify(this.marks);
	}
});

var students = [
	new Student("Pesho", "Slepiya", 23, {bulgarian: 5, maths: 4, astronomy: 2}),
	new Student("Bulgar", "Vechen", 48, {bulgarian: 3, maths: 4, astronomy: 2}),
	new Student("Kazan", "Rakiev", 21, {bulgarian: 6, maths: 6, astronomy: 6}),
	new Student("Jordan", "Genkov", 16, {bulgarian: 3, maths: 3, astronomy: 2}),
	new Student("Stamat", "Armagedonov", 87, {bulgarian: 2, maths: 2, astronomy: 2})
];

function PersonWithGreatestMarks (people) {

	this.people = people;

	//first I calculate the sum of all marks
	function SumOfMarks(person) {

		var sumOfMarks = 0;
		var index = students.indexOf(person);

		for (var key in students[index].marks) {

			sumOfMarks += students[index].marks[key];
		}

		return sumOfMarks
	}

	//then I sort the in decending order (the person with greatest marks is first)
	var SortedByMarks = _.sortBy(this.people, function(p) { return -SumOfMarks(p); });
	
	//then I return the first member of the array (the one with greatest marks)

	return SortedByMarks[0]
}

console.log("-----------------------------------------------------------------");
console.log("Person with the greatest marks: ");
console.log(PersonWithGreatestMarks(students).toString());