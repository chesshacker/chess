const charCodeA = 'a'.charCodeAt(0);
const charCode1 = '1'.charCodeAt(0);

exports.makeSquare = (file, rank) => {
  return rank << 3 | file;
};

exports.squareFile = (square) => {
  return square & 7;
};

exports.squareRank = (square) => {
  return square >> 3;
};

exports.charToFile = (c) => {
  return c.charCodeAt(0) - charCodeA;
};

exports.charToRank = (c) => {
  return c.charCodeAt(0) - charCode1;
};

exports.fileToChar = (file) => {
  return String.fromCharCode(charCodeA + file);
};

exports.rankToChar = (rank) => {
  return String.fromCharCode(charCode1 + rank);
};
