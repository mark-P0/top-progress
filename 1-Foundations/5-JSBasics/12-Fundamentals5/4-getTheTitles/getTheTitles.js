const getTheTitles = function (booksList) {
  /* book = {title: string, author: string} */

  // return booksList.reduce(
  //   (runningList, book) => (runningList = [...runningList, book.title]),
  //   []
  // );

  return booksList.reduce((list, { title }) => (list = [...list, title]), []);
};
// console.log(
//   getTheTitles([
//     {
//       title: 'Book',
//       author: 'Name',
//     },
//     {
//       title: 'Book2',
//       author: 'Name2',
//     },
//   ])
// );

const getTheTitlesMap = function (booksList) {
  return booksList.map(({ title }) => title);
};
// console.log(
//   getTheTitlesMap([
//     {
//       title: 'Book',
//       author: 'Name',
//     },
//     {
//       title: 'Book2',
//       author: 'Name2',
//     },
//   ])
// );

module.exports = getTheTitles;
