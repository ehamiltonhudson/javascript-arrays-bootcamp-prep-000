var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

addElementToBeginningOfArray = function() {
  ["foo", ...chocolateBars]
}

destructivelyAddElementToBeginningOfArray = function() {
  chocolateBars.unshift("Twix")
}