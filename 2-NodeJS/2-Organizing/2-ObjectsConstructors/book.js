function Book(title, author, pageCount) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.haveRead = false;

  this.info = () =>
    `${this.title}, by ${this.author}, ${this.pageCount} pages, ${
      this.haveRead ? 'already read' : 'not read yet'
    }`;
}

// console.log(...'The Hobbit;J.R.R Tolkien;295'.split(';'));

let theHobbit = new Book(...'The Hobbit;J.R.R Tolkien;295'.split(';'));
console.log(theHobbit.info());
