// All objects have a prototype

// The objects we create inherit and can use stuff from prototype object.

const Book = function(title, author, pages, bookRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookRead = bookRead === true ? "read" : "not read yet";
}

Book.prototype.bookInfo = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.bookRead}.`;
}

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
let book2 = new Book("The Dwarf", "R.J.J. Tolkien", 592, true);

console.log(book1.bookInfo());
console.log(book2.bookInfo());