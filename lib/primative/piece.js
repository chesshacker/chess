const c = require('./enum');

const PIECE_TO_CHAR = [
  undefined, 'P', 'K', 'N', 'Q', 'R', 'B', undefined,
  undefined, 'p', 'k', 'n', 'q', 'r', 'b', undefined
];
const CHAR_TO_PIECE = PIECE_TO_CHAR
  .reduce((previous, current, index) => (previous[current] = index, previous), {});

function pieceColor(piece) {
  return piece & c.COLOR_BIT;
}

function charToPiece(pieceChar) {
  return CHAR_TO_PIECE[pieceChar];
}

function pieceToChar(piece) {
  return PIECE_TO_CHAR[piece];
}

function pieceToWhite(piece) {
  return piece & ~c.COLOR_BIT;
}

function pieceToBlack(piece) {
  return piece == c.EMPTY ? c.EMPTY : (piece | c.COLOR_BIT);
}

function pieceIsPawn(piece) {
  return (piece & c.PIECE_MASK_NON_COLOR_BITS) === c.WHITE_PAWN;
}

module.exports = {
  pieceColor,
  charToPiece,
  pieceToChar,
  pieceToWhite,
  pieceToBlack,
  pieceIsPawn
};
