// Add the following elements to the container using ONLY javascript and the DOM methods shown above.
//   a <p> with red text that says “Hey I’m red!”
//   an <h3> with blue text that says “I’m a blue h3!”
//   a <div> with a black border and pink background color with the following elements inside of it:
//       another <h1> that says “I’m in a div”
//       a <p> that says “ME TOO!”
//       Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.

const container = document.querySelector('#container');

/* a <p> with red text that says “Hey I’m red!” */
let element1p = document.createElement('p');
element1p.setAttribute('style', 'color: red');
element1p.textContent = "Hey I'm red!";

container.appendChild(element1p);

/* an <h3> with blue text that says “I’m a blue h3!” */
let element2h3 = document.createElement('h3');
element2h3.setAttribute('style', 'color: blue');
element2h3.textContent = "I'm a blue h3!";

container.appendChild(element2h3);

/*
  a <div> with a black border and pink background color with the following elements inside of it:
    another <h1> that says “I’m in a div”
    a <p> that says “ME TOO!”
    Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
*/
let element3div = document.createElement('div');
element3div.setAttribute(
  'style',
  `
  border-style: solid;
  background-color: pink;
  `
);

[
  ['h1', "I'm in a div"],
  ['p', 'ME TOO!'],
].forEach(([tag, content]) => {
  let child = document.createElement(tag);
  child.textContent = content;
  element3div.appendChild(child);
});

container.appendChild(element3div);
