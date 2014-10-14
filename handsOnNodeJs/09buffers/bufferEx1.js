var buffer = new Buffer(100);

for (var i = 0; i < 99; i++) {
  buffer[i] = i;
};

console.log(buffer);
