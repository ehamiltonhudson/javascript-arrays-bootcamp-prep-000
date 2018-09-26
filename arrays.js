var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

addElementToBeginningOfArray(array, element) = function() {
  [element, ...array];
}

destructivelyAddElementToBeginningOfArray = function() {
  chocolateBars.unshift("Twix")
}
