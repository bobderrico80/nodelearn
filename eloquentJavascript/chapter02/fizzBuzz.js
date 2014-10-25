var result = "";
for (var i=1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    result = "fizzbuzz";
  } else if (i % 3 == 0) {
    result = "fizz";
  } else if (i % 5 == 0) {
    result = "buzz";
  } else {
    result = String(i);
  }
  console.log(result);
}
