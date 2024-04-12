console.log('I am sentient')

const container = document.getElementById('books-cards-container');
const newBook = document.querySelector('#newbook');

//modal selectors
const modal = document.getElementById('myModal');
const modalSpan = document.getElementById('modalSpan');
const addAuthor = document.querySelector('#author');
const addTitle = document.querySelector('#title');
const addPages = document.querySelector('#pages');
const addHasread = document.querySelector('#hasread');
const submit = document.querySelector('.submit');


let myLibrary = [
  {
    author: 'Douglas Adams',
    title: "The ULTIMATE Hitchhiker's Guide to the galaxy",
    pages: 815,
    read: false,
  },
  {
    author: 'Chibi Jäger',
    title: "Meu ossinho delicioso",
    pages: 222,
    read: true,
  }];

class Book {
  constructor(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
}

newBook.addEventListener('click', () => {
  modal.style.display = 'block';
  modalSpan.onclick = function () {
    modal.style.display = "none";
  }
})

function returnCards(arr) {
  container.innerHTML = '';

  for (let i = 0; i < arr.length; i++) {
    let name = arr[i].title
    const wrapperCard = document.createElement('div');
    wrapperCard.className = 'books-cards';
    const card = document.createElement('div');
    card.setAttribute('id', `card-${i}`)
    const bookTitle = document.createElement('div');
    bookTitle.className = 'book-title';
    const titleH4 = document.createElement('h4');
    const bookAuthor = document.createElement('div');
    bookAuthor.className = "book-author";
    const textP = document.createElement('p');
    const bookPages = document.createElement('div');
    bookPages.className = "book-pages";
    const textPages = document.createElement('p');
    const bookRead = document.createElement('div');
    bookRead.className = 'book-read';
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('name', `${arr[i].title}`);
    checkBox.setAttribute('onclick', "changeRead(this.name)");
    const checkBoxLabel = document.createElement('label');
    checkBoxLabel.className = 'check-box';
    checkBoxLabel.id = `check-box-${i}`;
    const removeButton = document.createElement('button')
    removeButton.className = "remove-button";
    removeButton.setAttribute('value', `${arr[i].title}`);
    removeButton.setAttribute('onclick', 'removeBook(this.value)');
    titleH4.innerText = `${arr[i].title}`;
    textP.innerText = `written by ${arr[i].author}`;
    removeButton.innerText = `Remove this book`;
    textPages.innerText = `${arr[i].pages} pages`

    container.appendChild(wrapperCard);
    wrapperCard.appendChild(card);
    card.appendChild(bookTitle);
    bookTitle.appendChild(titleH4);
    card.appendChild(bookAuthor);
    bookAuthor.appendChild(textP);
    card.appendChild(bookPages);
    bookPages.appendChild(textPages);
    card.appendChild(bookRead);
    bookRead.appendChild(checkBox);
    bookRead.appendChild(checkBoxLabel);
    if (arr[i].read == true) {
      checkBoxLabel.innerText = "I have read the book";
      checkBox.checked = true;

    } else {
      checkBoxLabel.innerText = "I haven't read the book";
    }

    card.appendChild(removeButton);

  }
}
returnCards(myLibrary);


submit.addEventListener('click', () => {
  myLibrary.push(new Book(addAuthor.value.toString(), addTitle.value.toString(), addPages.value, addHasread.checked));
  returnCards(myLibrary);
  console.table(myLibrary);
  modal.style.display = "none";
  addTitle.value = '';
  addAuthor.value = '';
  addPages.value = '';
  addHasread.checked = false;
})

function removeBook(i) {
  let index = myLibrary.findIndex(p => p.title == i);
  myLibrary.splice(index, 1)
  returnCards(myLibrary);
}


function changeRead(i) {
  let index = myLibrary.findIndex(p => p.title == i);
  let changeText = document.getElementById('check-box-' + index);
  if (myLibrary[index].read == true) {
    myLibrary[index].read = false;
    changeText.innerHTML = "I haven't read the book";
  } else {
    myLibrary[index].read = true;
    changeText.innerHTML = "I have read the book"
  }
}



