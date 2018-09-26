var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var myArray = ["fie", "fie", "foe", "fum"]

addElementToBeginningOfArray = function() {
  ["foo", ...myArray]
}

destructivelyAddElementToBeginningOfArray = function() {
  myArray.unshift("Twix")
}
