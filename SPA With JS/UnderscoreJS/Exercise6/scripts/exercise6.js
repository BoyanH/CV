var Book = Class.create({
	init: function (bookTitel, author) {
		this.bookTitle = bookTitel;
		this.author = author;
	},
	toString: function () {
		return this.bookTitle + " from " + this.author;
	}
});

var books = [
	new Book("Harry Potter and the Philosopher's stone", "J.K.Rowling"),
	new Book("Harry Potter and the chamber of secrets", "J.K.Rowling"),
	new Book("Harry Potter and the prisoner of Askaban", "J.K.Rowling"),
	new Book("The hobbit", "J. R. R. Tolkien"),
	new Book("The count of Monte Cristo", "Alexandre Dumas"),
	new Book("Drei Kameraden", "Erich Maria Remarque")
];

function getMostPopularAuthor (books) {

	var authors = _.pluck(books, "author"),
		mostPopAuthor,
		arrayOfNonReapeatingAuthors = [],
		arrayOfRepetitions = [],
		prevAuthor;

	_.each(books, function(book){

		if(book.author !== prevAuthor) {
			arrayOfNonReapeatingAuthors.push(book.author);
			arrayOfRepetitions.push(1);
		}
			else {
				arrayOfRepetitions[arrayOfRepetitions.length - 1] += 1;
			}

		prevAuthor = book.author;
	})

	mostPopAuthor = arrayOfNonReapeatingAuthors[arrayOfRepetitions.indexOf(_.max(arrayOfRepetitions))];

	return mostPopAuthor + "(" + _.max(arrayOfRepetitions) + " books)"
}

console.log("-----------------------------------------------------------------");
console.log("The books: " + books);
console.log("-----------------------------------------------------------------");
console.log("The most popular author is " + getMostPopularAuthor(books));