console.log('I am sentient')

let myLibrary = [];


function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    console.log(title, author, pages, read)
    this.info = function () {
        console.log(`${title}, by ${author}, has ${pages} pages. Read: ${read}.`)
       if (read == true || read == 'yes') {
        return `${title}, by ${author}, has ${pages} pages. I have read the book.`; 
        } 
    if (read == false || read == 'no') {return `${title}, by ${author}, has ${pages} pages. I haven't read the book yet.`;}
}
}


/* const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 420, false);
*/


function addBookToLibrary() {
  // do stuff here
}
