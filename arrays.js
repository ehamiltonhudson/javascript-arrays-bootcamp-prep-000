var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var myArray = ["fie", "fie", "foe", "fum"]

addElementToBeginningOfArray = function() {
  ["foo", ...chocolateBars]
}

destructivelyAddElementToBeginningOfArray = function() {
  chocolateBars.unshift("Twix")
}
