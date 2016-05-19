const charCodeA = 'a'.charCodeAt(0);
const charCode1 = '1'.charCodeAt(0);

exports.make = (file, rank) => {
  return rank << 3 | file;
};

exports.file = (square) => {
  return square & 7;
};

exports.rank = (square) => {
  return square >> 3;
};

exports.fileFromChar = (c) => {
  return c.charCodeAt(0) - charCodeA;
};

exports.rankFromChar = (c) => {
  return c.charCodeAt(0) - charCode1;
};

exports.fileToChar = (file) => {
  return String.fromCharCode(charCodeA + file);
};

exports.rankToChar = (rank) => {
  return String.fromCharCode(charCode1 + rank);
};
