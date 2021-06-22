const divMapping = Array.from(document.querySelectorAll('.key')).reduce(
  (running, current) => {
    // console.log(current);

    return {
      ...running,
      [current.getAttribute('data-key')]: current,
    };
  },
  {}
);
// console.log(divMapping);
// console.log(Object.keys(divMapping));

/* Map out key codes with corresponding elements */
const keyMapping = Array.from(document.querySelectorAll('audio')).reduce(
  (running, audioTag) => {
    let keyCode = audioTag.getAttribute('data-key');
    return {
      ...running,
      [keyCode]: [audioTag, divMapping[keyCode]],
    };
  },
  {}
);
console.log(keyMapping);
// console.log(keyMapping.length);
console.log(Object.keys(keyMapping));

/* Event listeners */
// TODO: Multiple keypresses? Callbacks?

// document.onkeydown = (keyEvent) => {
//   if (keyMapping.hasOwnProperty(keyEvent.keyCode)) {
//     // `keyCode` deprecated, but is the one used by the project
//     console.log(keyEvent);
//     keyMapping[keyEvent.keyCode].load();
//     keyMapping[keyEvent.keyCode].play();
//   }
// };

let alreadyHeld = false;
document.addEventListener('keydown', (keyEvent) => {
  // `keyCode` deprecated, but is the one used by the project
  if (!keyMapping.hasOwnProperty(keyEvent.keyCode) || alreadyHeld) return;

  alreadyHeld = true;

  let audioTag = keyMapping[keyEvent.keyCode][0];
  audioTag.load();
  // .catch((error) => {
  //   console.log('Load error', error);
  // });
  audioTag.play().catch((error) => {
    console.log('Play error', error);
  });

  let divTag = keyMapping[keyEvent.keyCode][1];
  divTag.className = 'key playing';
  // divTag.className = [divTag.className, 'playing'].join(' ');
});

document.addEventListener('keyup', (keyEvent) => {
  // `keyCode` deprecated, but is the one used by the project
  if (!keyMapping.hasOwnProperty(keyEvent.keyCode)) return;

  alreadyHeld = false;

  let divTag = keyMapping[keyEvent.keyCode][1];
  divTag.className = 'key';
});
