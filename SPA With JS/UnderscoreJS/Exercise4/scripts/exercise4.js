var Animal = Class.create({
	init: function (nickName, age, species, numberOfFeet) {
		this.nickName = nickName;
		this.age = age;
		this.species = species;
		this.numberOfFeet = numberOfFeet;
	},
	toString: function () {
		return "I am the " + this.species + " '" + this.nickname + "' !";
	}
});

var animals = [
	new Animal("Penka", 9, "cow", 4),
	new Animal("Konya ot youtube", 4, "horse", 2),
	new Animal("Cherniya Vdovec", 55, "spider", 8),
	new Animal("Sedmokrakiya Vdovec", 69, "spider", 7),
	new Animal("Bezkrakiq Vdovec", 65, "spider", 0),
	new Animal("Big Fat Berta", 6, "cat", 4),
	new Animal("Two legged magician", 2, "cat", 2),
	new Animal("Poor one", 1, "cat", 0),
	new Animal("Tynka", 3, "cow", 5)
];

function sortAndGroup (animals) {

	var sortedAnimals = _.sortBy(animals, "numberOfFeet");
	var groupedAndSortedAnimals = _.groupBy(sortedAnimals, "species");

	return groupedAndSortedAnimals
}

console.log("-----------------------------------------------------------------");
console.log("The animals grouped by species and sorted by number of feet: ");
console.log(sortAndGroup(animals));