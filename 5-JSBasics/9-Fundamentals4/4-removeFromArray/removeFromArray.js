const removeFromArray = function () {
  let [givenArray, ...elementsToRemove] = arguments;
  return givenArray.filter(
    (element, ___, ____) => !elementsToRemove.includes(element)
  );

  // return array.filter((element, ___, ____) => element !== toRemove);
};

module.exports = removeFromArray;
