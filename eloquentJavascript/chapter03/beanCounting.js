function countChar(string, character) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == character) {
      count++;
    }
  }
  return count;
}

function countBs(string) {
  return countChar(string, "B");
}

var testString = "Better call the BBB, also known as the Better Business Bureau";

console.log(countBs(testString));
console.log(countChar(testString, "a"));
