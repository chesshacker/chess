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

module.exports = {
  makeSquare,
  squareFile,
  squareRank,
  charToFile,
  charToRank,
  fileToChar,
  rankToChar
};
