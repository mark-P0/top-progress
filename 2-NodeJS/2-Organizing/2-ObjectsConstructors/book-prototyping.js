function Book(title, author, pageCount) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.haveRead = false;

  // this.info = () =>
  //   `${this.title}, by ${this.author}, ${this.pageCount} pages, ${
  //     this.haveRead ? 'already read' : 'not read yet'
  //   }`;
}

Object.entries({
  info: function () {
    return `${this.title}, by ${this.author}, ${this.pageCount} pages, ${
      this.haveRead ? 'already read' : 'not read yet'
    }`;
  },
}).forEach(([methodName, method]) => (Book.prototype[methodName] = method));

let theHobbit = new Book(...'The Hobbit;J.R.R Tolkien;295'.split(';'));
console.log(theHobbit.info());
