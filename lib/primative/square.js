const charCodeA = 'a'.charCodeAt(0);
const charCode1 = '1'.charCodeAt(0);

function makeSquare(file, rank) {
  return rank << 3 | file;
}

function squareFile(square) {
  return square & 7;
}

function squareRank(square) {
  return square >> 3;
}

function charToFile(c) {
  return c.charCodeAt(0) - charCodeA;
}

function charToRank(c) {
  return c.charCodeAt(0) - charCode1;
}

function fileToChar(file) {
  return String.fromCharCode(charCodeA + file);
}

function rankToChar(rank) {
  return String.fromCharCode(charCode1 + rank);
}

function* allSquares() {
  var square = 0;
  while (square < 64) {
    yield square++;
  }
}

const SQUARE_TO_STRING = Array.from(allSquares())
  .map((s) => fileToChar(squareFile(s)) + rankToChar(squareRank(s)));
const STRING_TO_SQUARE = SQUARE_TO_STRING
  .reduce((previous, current, index) => (previous[current] = index, previous), {});

function squareToString(square) {
  return SQUARE_TO_STRING[square];
}

function stringToSquare(string) {
  return STRING_TO_SQUARE[string];
}

module.exports = {
  makeSquare,
  squareFile,
  squareRank,
  charToFile,
  charToRank,
  fileToChar,
  rankToChar,
  allSquares,
  squareToString,
  stringToSquare
};
