var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var myArray = ["fie", "fie", "foe", "fum"]

addElementToBeginningOfArray = function() {
  ["1", ...myArray]
}

destructivelyAddElementToBeginningOfArray = function() {
  myArray.unshift("1")
}
