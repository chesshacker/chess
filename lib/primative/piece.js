const c = require('./enum');

// TODO: experiment with more JavaScripty ways of doing this... maps and objects

const _charToPiece = new Array(256).fill(null);
const _pieceToChar = new Array(c.PIECE_MAX_VALUE + 1).fill(null);

_charToPiece['K'.charCodeAt(0)] = c.WHITE_KING;
_charToPiece['Q'.charCodeAt(0)] = c.WHITE_QUEEN;
_charToPiece['R'.charCodeAt(0)] = c.WHITE_ROOK;
_charToPiece['B'.charCodeAt(0)] = c.WHITE_BISHOP;
_charToPiece['N'.charCodeAt(0)] = c.WHITE_KNIGHT;
_charToPiece['P'.charCodeAt(0)] = c.WHITE_PAWN;
_charToPiece['k'.charCodeAt(0)] = c.BLACK_KING;
_charToPiece['q'.charCodeAt(0)] = c.BLACK_QUEEN;
_charToPiece['r'.charCodeAt(0)] = c.BLACK_ROOK;
_charToPiece['b'.charCodeAt(0)] = c.BLACK_BISHOP;
_charToPiece['n'.charCodeAt(0)] = c.BLACK_KNIGHT;
_charToPiece['p'.charCodeAt(0)] = c.BLACK_PAWN;

_pieceToChar[c.EMPTY] = '-';
_pieceToChar[c.WHITE_KING] = 'K';
_pieceToChar[c.WHITE_QUEEN] = 'Q';
_pieceToChar[c.WHITE_ROOK] = 'R';
_pieceToChar[c.WHITE_BISHOP] = 'B';
_pieceToChar[c.WHITE_KNIGHT] = 'N';
_pieceToChar[c.WHITE_PAWN] = 'P';
_pieceToChar[c.BLACK_KING] = 'k';
_pieceToChar[c.BLACK_QUEEN] = 'q';
_pieceToChar[c.BLACK_ROOK] = 'r';
_pieceToChar[c.BLACK_BISHOP] = 'b';
_pieceToChar[c.BLACK_KNIGHT] = 'n';
_pieceToChar[c.BLACK_PAWN] = 'p';

function pieceColor(piece) {
  return piece & c.COLOR_BIT;
}

function charToPiece(pieceChar) {
  return _charToPiece[pieceChar.charCodeAt(0)];
}

function pieceToChar(piece) {
  if (piece & ~c.PIECE_MASK_VALID_BITS) {
    return null;
  }
  return _pieceToChar[piece];
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
