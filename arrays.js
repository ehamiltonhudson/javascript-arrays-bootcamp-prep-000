var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];	  return [element, ...array]
}

destructivelyAddElementToBeginningOfArray = function() {
  chocolateBars.unshift("Twix")
}
