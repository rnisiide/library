console.log('I am sentient')

let myLibrary = [];
const modal = document.getElementById('myModal');
const modalSpan = document.getElementById('modalSpan');
const addAuthor = document.querySelector('#author');
const listAuthor = document.querySelector('.list_author');
const addTitle = document.querySelector('#title');
const listTitle = document.querySelector('.list_title');
const addPages = document.querySelector('#pages');
const listPages = document.querySelector('.list_pages');
const addHasread = document.querySelector('#hasread');
const listHasread = document.querySelector('.list_hasread');
const removeBook = document.querySelector('.remove');
const newBook = document.querySelector('#newbook');


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



newBook.addEventListener('click', () => {
  console.log(`New book works!!`)
  modal.style.display = 'block';
  modalSpan.onclick = function() {
    modal.style.display = "none";
  }
})

function addBookToLibrary() {
  // do stuff here
}
