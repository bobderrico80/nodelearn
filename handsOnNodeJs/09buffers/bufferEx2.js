var buffer = new Buffer(100);

for (var i = 0; i < 99; i++) {
  buffer[i] = i;
};

var slice = buffer.slice(40,60);

console.log(buffer);
console.log(slice);
