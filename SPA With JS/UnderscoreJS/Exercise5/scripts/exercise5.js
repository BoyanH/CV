var Animal = Class.create({
	init: function (nickName, age, species, numberOfFeet) {
		this.nickName = nickName;
		this.age = age;
		this.species = species;
		this.numberOfFeet = numberOfFeet;
	},
	toString: function () {
		return "I am the " + this.species + " '" + this.nickName + "' with " + this.numberOfFeet + " feet!";
	}
});

var animals = [
	new Animal("Penka", 9, "cow", 4),
	new Animal("Konya ot youtube", 4, "horse", 2),
	new Animal("Cherniya Vdovec", 55, "spider", 8),
	new Animal("Shestkrakiya Vdovec", 69, "spider", 6),
	new Animal("Bezkrakiq Vdovec", 65, "spider", 0),
	new Animal("Big Fat Berta", 6, "cat", 100),
	new Animal("Two legged magician", 2, "cat", 2),
	new Animal("Poor one", 1, "cat", 0),
	new Animal("Double Tynka", 3, "cow", 8)
];

function getTotalNumberOfFeet (animals) {

	var arrayOfFeet = _.pluck(animals, "numberOfFeet"),
		totalNumberOfFeet = 0;

	_.each(arrayOfFeet, function(item) {
		totalNumberOfFeet += item;

	});

	return totalNumberOfFeet
}

console.log("-----------------------------------------------------------------");
console.log("The animals: " + animals)
console.log("-----------------------------------------------------------------");
console.log("The total number of feet of all the animals is: " + getTotalNumberOfFeet(animals));