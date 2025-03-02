const myLibrary = [];
const bookForm = document.querySelector("#book-form");

bookForm.addEventListener("submit", function(event){
    event.preventDefault();
    let bookTitle = document.querySelector("#book-title").value;
    let bookAuthor = document.querySelector("#book-author").value;
    let bookPages = document.querySelector("#book-pages").value;
    let bookRead = document.querySelector("input[name='book-read']:checked")?.value === "true";

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);

    closeModal();
    bookForm.reset();
})

const Book = function (title, author, pages, bookRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookRead = bookRead === true ? "Completed" : "Not Completed";
}

function addBookToLibrary (title, author, pages, bookRead) {
    let newBook = new Book(title, author, pages, bookRead);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks(){
    let tableBody = document.querySelector(".book-table-body");
    tableBody.innerHTML = "";
    myLibrary.forEach((book, index) => {
        tableBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.bookRead}</td>
            <td><button class="delete-btn" onclick="deleteBook(${index})" type="button">❌</button></td>
            <td><button class="edit-btn" onclick="changeStatus(${index})" type="button">Change Status</button></td>
        </tr>`        
    });
}

addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 432, true);

function openModal(){
    let modal = document.querySelector(".form-modal");
    modal.style.display = "block"
}

function closeModal(){
    let modal = document.querySelector(".form-modal");
    modal.style.display = "none"
}

function deleteBook(bookIndex){
    myLibrary.splice(bookIndex, 1);
    displayBooks();
}

function changeStatus(index){
    myLibrary[index].bookRead = myLibrary[index].bookRead == "Completed" ? "Not Completed" : "Completed";
    displayBooks();
}