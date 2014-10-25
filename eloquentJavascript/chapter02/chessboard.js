var numRows = 40;
var numCols = 50;
var row = "";
var altrow = "";
var board = "";

for (var i = 0; i < numCols; i++) {
  row += "# ";
  altrow += " #";  
}

for (var i = 0; i < numRows; i++) {
  if (i % 2 == 0) {
    board += row + "\n";
  } else {
    board += altrow + "\n";
  }
}

console.log(board);
