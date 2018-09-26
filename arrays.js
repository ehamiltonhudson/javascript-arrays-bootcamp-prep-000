var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

addElementToBeginningOfArray(array, element) = {
  [element, ...array];
}

destructivelyAddElementToBeginningOfArray = function() {
  chocolateBars.unshift("Twix")
}
