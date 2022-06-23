console.log('I am sentient')


let myLibrary = [
  {author: 'Douglas Adams',
  title: "The ULTIMATE Hitchhiker's Guide to the galaxy",
  pages: 815,
  read: true,
  remove: 0,  
}];

let headers = [
  'Author', 'Title', 'Number of pages', 'Have you read it?', 'Remove'
]

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
const submit = document.querySelector('.submit');


function Book (author, title, pages, read, remove) {
  this.author = author;
  this.title = title;    
  this.pages = pages;
  this.read = read;
  this.remove = ` Remove ${myLibrary.length}`;
}


newBook.addEventListener('click', () => {
  console.log(`New book works!!`)
  modal.style.display = 'block';
  modalSpan.onclick = function() {
    modal.style.display = "none";
  }
})

submit.addEventListener('click', () => {
  myLibrary.push(new Book(addAuthor.value, addTitle.value, addPages.value, addHasread.checked));
  
  updateList();
  
  console.table(myLibrary);
  modal.style.display = "none";
  addTitle.value = '';
  addAuthor.value = '';
  addPages.value = '';
  addHasread.checked = false;
})

const bookTable = document.querySelector('#table')

function updateList() {
  while (bookTable.firstChild) {
  bookTable.removeChild(bookTable.firstChild);
  }

  let headerRow = document.createElement('tr');

  headers.forEach (headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  })
  
  bookTable.appendChild(headerRow);


  myLibrary.forEach(book => {
    let row = document.createElement('tr');
    Object.values(book).forEach(text => {
      let cell = document.createElement('td');
      let cellText = document.createTextNode(text);
      cell.classList.add(myLibrary.length - 1);
      cell.appendChild(cellText);
      row.appendChild(cell);
    })
    
    bookTable.appendChild(row);

  })
}
