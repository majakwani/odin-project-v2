const Book = function(title, author, pages, bookRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookRead = bookRead === true ? "read" : "not read yet";
    this.bookInfo = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.bookRead}.`;
    }
}

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(book1.bookInfo());