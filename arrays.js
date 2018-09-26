var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, elenent) {
  ["element", ...array]
}

destructivelyAddElementToBeginningOfArray = function() {
  chocolateBars.unshift("Twix")
}
